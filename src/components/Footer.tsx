import { portfolioData } from "@/utils/data";
import Link from "next/link";
import { SvgIcons } from "./SvgIcons";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white py-8 mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-center md:text-left mb-4 md:mb-0">
            &copy; {currentYear} {portfolioData.name}. All rights reserved, I
            guess
          </p>
          <nav aria-label="Social media links">
            <ul className="flex justify-center space-x-4">
              {portfolioData.onLinePresence.map((presence) => (
                <li key={presence.name}>
                  <SocialLink {...presence} />
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}

interface SocialLinkProps {
  name: string;
  link: string;
  ariaLabel: string;
}

function SocialLink({ name, link, ariaLabel }: SocialLinkProps) {
  return (
    <Link
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      className="text-white hover:text-gray-300 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white 
      "
    >
      <span className="sr-only">{name}</span>
      <SvgIcons name={name} />
    </Link>
  );
}
