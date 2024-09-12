import { portfolioData } from "@/utils/data";
import Link from "next/link";
import Image from "next/image";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white py-8 mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-center md:text-left mb-4 md:mb-0">
            &copy; {currentYear} {portfolioData.name}. All rights reserved.
          </p>
          <nav aria-label="Social media links">
            <ul className="flex justify-center space-x-4">
              {portfolioData.onLinePresence.map((presence) => (
                <li key={presence.name}>
                  <Link
                    href={presence.link}
                    aria-label={presence.ariaLabel}
                    target="_blank"
                  >
                    <Image
                      src={presence.icon}
                      alt={presence.alt}
                      width={30}
                      height={30}
                      className="hover:scale-110 transition-transform duration-300"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
