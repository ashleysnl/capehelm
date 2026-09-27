import { FounderStory } from "../../components/FounderStory";
import { PageShell } from "../../components/SiteShell";
import { createPageMetadata } from "../../config/pageMetadata";

export const metadata = createPageMetadata({
  title: "Why I Built Capehelm | Founder Story",
  description:
    "Ashley Skinner, founder of Capehelm and a project engineer, shares the story behind Capehelm, a private personal finance app for Mac.",
  path: "/why-capehelm",
  socialTitle: "Why I Built Capehelm",
  socialDescription:
    "The personal story behind Capehelm: understand what happened, make a plan, look ahead and keep track of the bigger picture.",
});

export const dynamic = "force-static";

export default function WhyCapehelmPage() {
  return (
    <PageShell>
      <FounderStory />
    </PageShell>
  );
}
