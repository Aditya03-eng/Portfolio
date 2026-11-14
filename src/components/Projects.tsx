import { ExternalLink, Github, Star } from 'lucide-react';
import { projects } from '../data';
import { useScrollReveal } from '../useScrollReveal';

export default function Projects() {
  const ref = useScrollReveal();
  const featured = projects.find((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <section id="projects" ref={ref} className="py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-12">
          <span className="font-mono text-xs text-accent-red tracking-widest uppercase">03</span>
          <h2 className="text-3xl sm:text-4xl font-bold">Projects</h2>
          <div className="flex-1 h-px bg-white/10" />
        </div>

        {/* Featured project */}
        {featured && (
          <div className="mb-16 p-6 sm:p-8 bg-bg-card rounded-xl border border-accent-red/20 relative overflow-hidden">
            {/* Accent gradient */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent-red to-accent-cyan" />

            <div className="flex items-center gap-2 mb-4">
              <Star size={16} className="text-accent-red" fill="#FF3030" />
              <span className="font-mono text-xs text-accent-red tracking-widest uppercase">Featured Project</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold mb-2">{featured.title}</h3>
            <p className="text-sm font-mono text-accent-cyan mb-4">Student Success Intelligence Platform</p>
            <p className="text-text-secondary leading-relaxed mb-6 max-w-3xl">{featured.description}</p>

            {/* Highlights */}
            {featured.highlights && (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-6">
                {featured.highlights.map((h) => (
                  <div key={h} className="flex items-center gap-2 text-sm text-text-secondary">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-red shrink-0" />
                    {h}
                  </div>
                ))}
              </div>
            )}

            {/* Tech tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {featured.technologies.map((tech) => (
                <span key={tech} className="px-3 py-1 text-xs font-mono text-text-secondary bg-white/5 rounded-full border border-white/10">
                  {tech}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="flex items-center gap-4">
              <a href={featured.github} target="_blank" rel="noopener noreferrer" className="btn-outline text-sm">
                <Github size={16} />
                Source Code
              </a>
              {featured.live && (
                <a href={featured.live} target="_blank" rel="noopener noreferrer" className="btn-primary text-sm">
                  <ExternalLink size={16} />
                  Live Demo
                </a>
              )}
            </div>
          </div>
        )}

        {/* Other projects grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {others.map((project) => (
            <div key={project.title} className="project-card p-5 bg-bg-card rounded-lg border border-white/5 flex flex-col">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-bold text-text-primary">{project.title}</h3>
                <div className="flex items-center gap-2">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-text-primary transition-colors" aria-label={`${project.title} GitHub`}>
                    <Github size={16} />
                  </a>
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-accent-cyan transition-colors" aria-label={`${project.title} Live Demo`}>
                      <ExternalLink size={16} />
                    </a>
                  )}
                </div>
              </div>
              <p className="text-sm text-text-secondary leading-relaxed mb-4 flex-1">{project.description}</p>
              <div className="flex flex-wrap gap-1.5">
                {project.technologies.map((tech) => (
                  <span key={tech} className="px-2 py-0.5 text-[10px] font-mono text-text-secondary bg-white/5 rounded">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
