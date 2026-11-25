import { PORTFOLIO_DATA } from "@/data/data";
import { SITE_URL } from "@/lib/site";

export const dynamic = "force-static";

function buildLlmsTxt(): string {
  const baseUrl = SITE_URL.replace(/\/$/, "");

  const projectsSection = PORTFOLIO_DATA.projects
    .map((project) => {
      const links: string[] = [];
      if (project.liveUrl && project.liveUrl !== "#") {
        links.push(`Live: ${project.liveUrl}`);
      }
      if (project.githubUrl) {
        links.push(`GitHub: ${project.githubUrl}`);
      }
      const linkLine = links.length > 0 ? ` (${links.join(" | ")})` : "";
      return `- **${project.title}** — ${project.subtitle}: ${project.description} [${project.tags.join(", ")}]${linkLine}`;
    })
    .join("\n");

  const experienceSection = PORTFOLIO_DATA.experiences
    .map((exp) => {
      const tags = exp.tags && exp.tags.length > 0 ? ` [${exp.tags.join(", ")}]` : "";
      return `- **${exp.role}** at ${exp.company} (${exp.period}): ${exp.description}${tags}`;
    })
    .join("\n");

  const blogsSection = PORTFOLIO_DATA.blogs
    .map(
      (post) =>
        `- [${post.title}](${post.url}) (${post.date}, ${post.platform}): ${post.description}`
    )
    .join("\n");

  const skillCategories = Array.from(
    new Set(PORTFOLIO_DATA.skills.map((s) => s.category))
  );
  const skillsSection = skillCategories
    .map((category) => {
      const names = PORTFOLIO_DATA.skills
        .filter((s) => s.category === category)
        .map((s) => s.name)
        .join(", ");
      return `- **${category}**: ${names}`;
    })
    .join("\n");

  return `# ${PORTFOLIO_DATA.name}

> ${PORTFOLIO_DATA.title} based in ${PORTFOLIO_DATA.location}. ${PORTFOLIO_DATA.bio[0]}

## About

${PORTFOLIO_DATA.bio.join("\n\n")}

Status: ${PORTFOLIO_DATA.status}

## Site Pages

- [Home](${baseUrl}/): Portfolio overview, selected projects, technical stack, work experience, and writing.
- [Projects](${baseUrl}/projects): Detailed project gallery.
- [Experience](${baseUrl}/experience): Detailed work experience timeline.
- [Blog](${baseUrl}/blog): Writing and technical articles.

## Selected Projects

${projectsSection}

## Work Experience

${experienceSection}

## Writing & Notes

${blogsSection}

## Technical Stack

${skillsSection}

## Contact & Profiles

- Email: ${PORTFOLIO_DATA.socials.email} (mailto:${PORTFOLIO_DATA.socials.email})
- Website: ${baseUrl}/
- GitHub: ${PORTFOLIO_DATA.socials.github}
- LinkedIn: ${PORTFOLIO_DATA.socials.linkedin}
- X (Twitter): ${PORTFOLIO_DATA.socials.twitter}
- LeetCode: ${PORTFOLIO_DATA.socials.leetcode}
- Codeforces: ${PORTFOLIO_DATA.socials.codeforces}
- Dev.to: ${PORTFOLIO_DATA.socials.devto}
- Medium: ${PORTFOLIO_DATA.socials.medium}
`;
}

export function GET() {
  return new Response(buildLlmsTxt(), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
