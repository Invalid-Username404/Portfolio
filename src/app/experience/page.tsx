"use client";
import { portfolioData } from "@/utils/data";
import { motion } from "framer-motion";

export default function Experience() {
  return (
    <div className="min-h-screen bg-gray-100">
      <main className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <motion.h1
          className="text-3xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Work Experience
        </motion.h1>
        <div className="space-y-8">
          {portfolioData.experience.map((job, index) => (
            <motion.div
              key={job.company}
              className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h2 className="text-xl font-semibold mb-2">{job.title}</h2>
              <h3 className="text-lg text-gray-600 mb-2">{job.company}</h3>
              <p className="text-gray-700 mb-4">{job.period}</p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                {job.responsibilities.map((responsibility, idx) => (
                  <li key={idx}>{responsibility}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
}
