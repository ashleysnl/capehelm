import { execFileSync } from 'node:child_process';
import { mkdir,readFile,writeFile } from 'node:fs/promises';
const targets={home:'/',features:'/features',guide:'/guides/budget-vs-cash-flow-forecast',support:'/support/getting-started/create-finance-document'};
const name=process.env.AUDIT_PAGE??'home';const url='https://capehelm.com'+targets[name];
await mkdir('performance-reports',{recursive:true});
let release;
for(let attempt=0;attempt<18;attempt++){
 release=JSON.parse(execFileSync('curl',['-fsS','--max-time','20','https://capehelm.com/seo-release.json?revision='+process.env.GITHUB_SHA+'&attempt='+attempt],{encoding:'utf8'}));
 if(!process.env.GITHUB_SHA||release.revision===process.env.GITHUB_SHA)break;
 if(attempt===17)throw new Error('Expected deployment is not live');
 await new Promise(resolve=>setTimeout(resolve,10000));
}
const results=[];
for(const device of ['mobile','desktop'])for(let run=1;run<=3;run++){
 const file=`performance-reports/${name}-${device}-${run}.json`;
 const args=['exec','--yes','--package=lighthouse@13.5.0','--','lighthouse',url,'--chrome-flags=--headless --no-sandbox','--only-categories=performance','--output=json',`--output-path=${file}`,'--quiet'];
 if(device==='desktop')args.push('--preset=desktop');
 execFileSync('npm',args,{stdio:'inherit',timeout:180000});
 const r=JSON.parse(await readFile(file,'utf8'));if(r.runtimeError)throw new Error(JSON.stringify(r.runtimeError));
 const value=id=>r.audits[id]?.numericValue;
 const diagnostics=Object.entries(r.audits).filter(([,a])=>a.details?.items?.length&&a.score!==1&&a.score!==null).map(([id,a])=>({id,title:a.title,displayValue:a.displayValue,items:a.details.items.slice(0,5)}));
 results.push({name,url,device,run,measuredAt:r.fetchTime,version:r.lighthouseVersion,browser:r.environment.hostUserAgent,settings:r.configSettings,score:r.categories.performance.score,lcp:value('largest-contentful-paint'),cls:value('cumulative-layout-shift'),tbt:value('total-blocking-time'),fcp:value('first-contentful-paint'),transferBytes:value('total-byte-weight'),mainThreadMs:value('mainthread-work-breakdown'),network:r.audits['network-requests']?.details?.items,diagnostics});
}
const median=values=>values.sort((a,b)=>a-b)[Math.floor(values.length/2)];
const summaries=['mobile','desktop'].map(device=>{const rows=results.filter(r=>r.device===device);return {name,url,device,release:release.revision,lighthouse:'13.5.0',runs:3,browser:rows[0].browser,settings:rows[0].settings,measuredAt:rows.map(r=>r.measuredAt),individualRuns:rows.map(({diagnostics,network,settings,...r})=>r),medians:Object.fromEntries(['score','lcp','cls','tbt','fcp','transferBytes','mainThreadMs'].map(k=>[k,median(rows.map(r=>r[k]))])),diagnostics:rows[1].diagnostics};});
await writeFile(`performance-reports/${name}-summary.json`,JSON.stringify({release,results,summaries},null,2));
console.log('PERFORMANCE_SUMMARY '+JSON.stringify(summaries));
// Public field-data query. Failure/insufficient data must remain explicit.
try {const field=execFileSync('curl',['-sS','--max-time','90','https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url='+encodeURIComponent(url)+'&strategy=mobile'],{encoding:'utf8'});await writeFile(`performance-reports/${name}-field.json`,field);const r=JSON.parse(field);console.log('FIELD_DATA '+JSON.stringify({name,loadingExperience:r.loadingExperience,originLoadingExperience:r.originLoadingExperience,error:r.error}));}catch(e){console.log('FIELD_DATA_UNAVAILABLE '+e.message);}
