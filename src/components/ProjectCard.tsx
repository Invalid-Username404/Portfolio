import Image from "next/image";
import Link from "next/link";
import { SvgIcons } from "./SvgIcons";

interface ProjectCardProps {
  name: string;
  description: string;
  image: string;
  link: string;
  source: string;
  category: string;
  index: number;
}

export function ProjectCard({
  name,
  description,
  image,
  link,
  source,
  category,
  index,
}: ProjectCardProps) {
  return (
    <div
      className="bg-white shadow-lg rounded-lg overflow-hidden transition-all duration-300 flex flex-col h-[400px] "
      style={{
        opacity: 0,
        transform: "translateY(50px)",
        animation: `fadeInUp 0.5s ease-out ${index * 0.1}s forwards`,
      }}
    >
      <div className="relative h-48 overflow-hidden">
        <Image
          src={image}
          alt={name}
          layout="fill"
          objectFit="cover"
          priority={index < 3}
          className="transition-transform duration-300 "
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60 transition-opacity duration-300 "></div>
        <div className="absolute bottom-0 left-0 p-4 text-white transform transition-transform duration-300 ">
          <h3 className="text-xl font-semibold mb-1">{name}</h3>
          <span className="inline-block bg-blue-500 rounded-full px-3 py-1 text-sm font-semibold">
            {category}
          </span>
        </div>
      </div>
      <div className="p-4 flex-grow flex flex-col justify-between">
        <p className="text-gray-600 mb-4 line-clamp-3">{description}</p>
        <div className="flex justify-between items-center">
          <Link
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-700 transition-colors duration-300 flex items-center"
          >
            <SvgIcons name="ExternalLink" />
            <span className="ml-2">View Project</span>
          </Link>
          <Link
            href={source}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-gray-700 transition-colors duration-300 flex items-center"
          >
            <SvgIcons name="SourceCode" />
            <span className="ml-2">Source Code</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
