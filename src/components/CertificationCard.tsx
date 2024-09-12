"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

interface CertificationCardProps {
  name: string;
  organization: string;
  logo: string;
  issueDate: string;
  credentialUrl: string;
  index: number;
}

export function CertificationCard({
  name,
  organization,
  logo,
  issueDate,
  credentialUrl,
  index,
}: CertificationCardProps) {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  return (
    <motion.div
      className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow duration-300 flex flex-col h-full"
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      custom={index}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="relative h-48 mb-4 flex-shrink-0">
        <Image
          src={logo}
          alt={`${organization} logo`}
          layout="fill"
          objectFit="contain"
          loading="lazy"
        />
      </div>
      <div className="flex-grow flex flex-col justify-between">
        <div>
          <h3 className="text-lg font-semibold mb-2">{name}</h3>
          <p className="text-gray-600 mb-2">{organization}</p>
          <p className="text-sm text-gray-500">{issueDate}</p>
        </div>
        {credentialUrl && (
          <Link
            href={credentialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 mt-4 text-center"
            aria-label={`View ${name} certificate from ${organization}`}
          >
            View Certificate
          </Link>
        )}
      </div>
    </motion.div>
  );
}
