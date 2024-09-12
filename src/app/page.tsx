import { portfolioData } from "@/utils/data";
import { SkillBadge } from "@/components/SkillBadge";
import { TechnologyComparison } from "@/components/TechnologyComparison";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `${portfolioData.name} - Web Developer Portfolio`,
  description: portfolioData.description,
};

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <main className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <section className="bg-white shadow-md rounded-lg p-6 sm:p-8 mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">
            {portfolioData.name}
          </h1>
          <h2 className="text-xl sm:text-2xl text-gray-600 mb-4">
            {portfolioData.title}
          </h2>
          <p className="text-base sm:text-lg mb-6">
            {portfolioData.description}
          </p>
          <div className="flex flex-wrap gap-2 mb-8" aria-label="Skills">
            {portfolioData.skills.map((skill) => (
              <SkillBadge key={skill} skill={skill} />
            ))}
          </div>
        </section>

        <div className="h-px bg-gray-300 my-8" aria-hidden="true"></div>

        <section className="bg-white shadow-md rounded-lg p-6 sm:p-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">
            Technology Comparisons
            <span className="text-sm text-gray-500 block sm:inline sm:ml-2">
              (Based on adoption in the industry)
            </span>
          </h2>
          <div className="space-y-8">
            {comparedTechnologies.map((skill) => (
              <TechnologyComparison key={skill} technology={skill} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

const comparedTechnologies = [
  "JavaScript",
  "React",
  "Next",
  "Node",
  "Express",
  "MongoDB",
  "Cypress",
];
