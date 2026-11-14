import { Github, Linkedin } from 'lucide-react';
import { personalInfo, navLinks } from '../data';

export default function Footer() {
  return (
    <footer className="py-12 px-4 sm:px-6 border-t border-white/5">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Name */}
          <div className="flex items-center gap-4">
            <a href="#home" className="font-mono font-bold text-lg tracking-wider">
              <span className="text-accent-red">ADITYA</span>
              <span className="text-text-primary ml-1.5">KUMAR</span>
            </a>
          </div>

          {/* Nav links */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            {navLinks.slice(0, 5).map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs text-text-secondary hover:text-text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Social */}
          <div className="flex items-center gap-3">
            <a
              href={personalInfo.profiles.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github size={16} />
            </a>
            <a
              href={personalInfo.profiles.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={16} />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/5 text-center">
          <p className="text-xs text-text-secondary font-mono">
            © {new Date().getFullYear()} {personalInfo.name}. Built with React, TypeScript & Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
}
