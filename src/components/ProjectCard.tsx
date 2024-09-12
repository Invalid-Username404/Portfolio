import Image from "next/image";
import Link from "next/link";

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
      className=" p-1 bg-white shadow-lg rounded-lg overflow-hidden transition-all duration-300 flex flex-col h-[400px] hover:scale-105 hover:shadow-xl"
      style={{
        opacity: 0,
        transform: "translateY(50px)",
        animation: `fadeInUp 0.5s ease-out ${index * 0.1}s forwards`,
      }}
    >
      <div className="relative h-48 overflow-hidden group">
        <Image
          src={image}
          alt={name}
          layout="fill"
          objectFit="cover"
          priority={index < 3}
          className="transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-80"></div>
        <div className="absolute bottom-0 left-0 p-4 text-white transform transition-transform duration-300 group-hover:translate-y-[-8px]">
          <h3 className="text-xl font-bold mb-1 font-sans">{name}</h3>
          <span className="inline-block bg-blue-500 text-white text-xs font-semibold px-2 py-1 rounded-full uppercase tracking-wide">
            {category}
          </span>
        </div>
      </div>
      <div className="p-4 flex-grow flex flex-col justify-between">
        <p className="text-gray-600 mb-4 line-clamp-3 font-sans">
          {description}
        </p>
        <div className="flex justify-between items-center">
          <Link
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition-colors duration-300 flex items-center group"
            aria-label={`View ${name} project`}
          >
            <span className="mr-2">View Project</span>
            <Image
              src="/external-link.svg"
              alt="external-link"
              width={16}
              height={16}
              className="transition-transform duration-300 group-hover:translate-x-1"
              aria-hidden="true"
            />
          </Link>
          <Link
            href={source}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${name} source code`}
            className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full transition-colors duration-300 flex items-center group"
          >
            <span className="mr-2">Source Code</span>
            <Image
              src="/code.svg"
              alt="Code"
              width={16}
              height={16}
              className="transition-transform duration-300 group-hover:translate-x-1"
              aria-hidden="true"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
