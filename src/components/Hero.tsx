import { ArrowDown, Github, Linkedin } from 'lucide-react';
import { personalInfo } from '../data';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 grid-bg" />

      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-accent-red/5 blur-3xl float-animation" />
      <div className="absolute bottom-20 left-10 w-96 h-96 rounded-full bg-accent-cyan/3 blur-3xl" />

      {/* Corner decorations */}
      <div className="absolute top-24 left-8 hidden lg:block">
        <svg width="40" height="40" viewBox="0 0 40 40" className="text-accent-red/20">
          <line x1="0" y1="0" x2="40" y2="0" stroke="currentColor" strokeWidth="1" />
          <line x1="0" y1="0" x2="0" y2="40" stroke="currentColor" strokeWidth="1" />
        </svg>
      </div>
      <div className="absolute bottom-24 right-8 hidden lg:block">
        <svg width="40" height="40" viewBox="0 0 40 40" className="text-accent-red/20">
          <line x1="0" y1="40" x2="40" y2="40" stroke="currentColor" strokeWidth="1" />
          <line x1="40" y1="0" x2="40" y2="40" stroke="currentColor" strokeWidth="1" />
        </svg>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
        {/* Status line */}
        <div className="hero-reveal flex items-center justify-center gap-2 mb-8">
          <span className="w-2 h-2 rounded-full bg-accent-red animate-pulse" />
          <span className="font-mono text-xs text-text-secondary tracking-widest uppercase">
            B.Tech CSE • {personalInfo.education.university}
          </span>
        </div>

        {/* Main heading */}
        <h1 className="hero-reveal-delay-1 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[1.1] tracking-tight mb-6">
          <span className="text-text-primary">BUILDING IDEAS.</span>
          <br />
          <span className="text-text-primary">ENGINEERING </span>
          <span className="text-accent-red">WHAT'S NEXT.</span>
        </h1>

        {/* Subtitle */}
        <p className="hero-reveal-delay-2 max-w-2xl mx-auto text-base sm:text-lg text-text-secondary leading-relaxed mb-10">
          {personalInfo.subtitle}
        </p>

        {/* Buttons */}
        <div className="hero-reveal-delay-3 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#projects" className="btn-primary">
            View Projects
            <ArrowDown size={16} />
          </a>
          <div className="flex items-center gap-3">
            <a
              href={personalInfo.profiles.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline !px-4"
              aria-label="GitHub"
            >
              <Github size={18} />
              GitHub
            </a>
            <a
              href={personalInfo.profiles.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline !px-4"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
              LinkedIn
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="font-mono text-[10px] text-text-secondary/50 tracking-widest uppercase">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-text-secondary/30 to-transparent" />
        </div>
      </div>
    </section>
  );
}
