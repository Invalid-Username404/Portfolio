"use client";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-gray-800 text-white p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link
          href="/"
          className="text-2xl font-bold hover:text-gray-300 transition-colors"
        >
          <span className="font-caveat">Mohamed Ibrahim</span>
        </Link>
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            <NavItem href="/" text="Home" currentPath={pathname} />
            <NavItem href="/projects" text="Projects" currentPath={pathname} />
            <NavItem
              href="/experience"
              text="Experience"
              currentPath={pathname}
            />
            <NavItem
              href="/certifications"
              text="Certifications"
              currentPath={pathname}
            />
          </ul>
        </nav>
        <button
          className="md:hidden p-2"
          onClick={toggleMenu}
          aria-expanded={isMenuOpen}
          aria-label="Toggle menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={
                isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </button>
      </div>
      {isMenuOpen && (
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="md:hidden mt-4"
        >
          <ul className="flex flex-col space-y-2">
            <NavItem
              href="/"
              text="Home"
              onClick={toggleMenu}
              currentPath={pathname}
            />
            <NavItem
              href="/projects"
              text="Projects"
              onClick={toggleMenu}
              currentPath={pathname}
            />
            <NavItem
              href="/experience"
              text="Experience"
              onClick={toggleMenu}
              currentPath={pathname}
            />
            <NavItem
              href="/certifications"
              text="Certifications"
              onClick={toggleMenu}
              currentPath={pathname}
            />
          </ul>
        </motion.nav>
      )}
    </header>
  );
}

interface NavItemProps {
  href: string;
  text: string;
  onClick?: () => void;
  currentPath: string;
}

function NavItem({ href, text, onClick, currentPath }: NavItemProps) {
  const isActive = currentPath === href;
  return (
    <li>
      <Link
        href={href}
        className={`transition-colors ${
          isActive
            ? "text-yellow-300 font-semibold"
            : "text-white hover:text-yellow-100  "
        }`}
        onClick={onClick}
      >
        {text}
      </Link>
    </li>
  );
}
