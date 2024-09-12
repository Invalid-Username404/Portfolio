"use client";
import { portfolioData } from "@/utils/data";
import { ProjectCard } from "@/components/ProjectCard";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Projects() {
  const [filter, setFilter] = useState("All");

  const filteredProjects =
    filter === "All"
      ? portfolioData.projects
      : portfolioData.projects.filter((project) => project.category === filter);

  const categories = [
    "All",
    ...Array.from(
      new Set(portfolioData.projects.map((project) => project.category))
    ),
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <main className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <motion.h1
          className="text-3xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          My Projects
        </motion.h1>

        <div className="mb-8 flex justify-center space-x-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 rounded-full ${
                filter === category
                  ? "bg-blue-500 text-white"
                  : "bg-white text-gray-700 hover:bg-gray-200"
              } transition-colors duration-300`}
            >
              {category}
            </button>
          ))}
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.name}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <ProjectCard {...project} index={index} />
            </motion.div>
          ))}
        </motion.div>
      </main>
    </div>
  );
}
