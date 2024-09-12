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
            className="bg-blue-500 hover:bg-blue-700 p-2 text-white rounded-md transition-colors duration-300 flex items-center"
            aria-label={`View ${name} project`}
          >
            <span className="mr-2">View Project</span>
            <Image
              src="/external-link.svg"
              alt="external-link"
              width={20}
              height={20}
              aria-hidden="true"
            />
          </Link>
          <Link
            href={source}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${name} source code`}
            className="bg-purple-500 hover:bg-purple-700 p-2 text-white rounded-md transition-colors duration-300 flex items-center"
          >
            <span className="mr-2">Source Code</span>
            <Image
              src="/code.svg"
              alt="Code"
              width={24}
              height={24}
              aria-hidden="true"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
