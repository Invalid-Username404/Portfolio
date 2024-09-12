import { portfolioData } from "@/utils/data";
import { CertificationCard } from "@/components/CertificationCard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Certifications | Mohamed Ibrahim - Web Developer Portfolio",
  description:
    "View Mohamed Ibrahim's professional certifications and achievements in web development.",
};

export default function Certifications() {
  return (
    <div className="min-h-screen bg-gray-100">
      <main className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold mb-6 text-center sm:text-left">
          Certifications
        </h1>
        <p className="mb-8 text-gray-600 text-center sm:text-left">
          Here are my professional certifications and achievements in web
          development.
        </p>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioData.certifications.map((cert, index) => (
            <li key={cert.name}>
              <CertificationCard {...cert} index={index} />
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
