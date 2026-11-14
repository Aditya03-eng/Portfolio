import { Briefcase } from 'lucide-react';
import { experience } from '../data';
import { useScrollReveal } from '../useScrollReveal';

export default function Experience() {
  const ref = useScrollReveal();

  return (
    <section id="experience" ref={ref} className="py-24 px-4 sm:px-6 bg-bg-secondary">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-12">
          <span className="font-mono text-xs text-accent-red tracking-widest uppercase">02</span>
          <h2 className="text-3xl sm:text-4xl font-bold">Experience</h2>
          <div className="flex-1 h-px bg-white/10" />
        </div>

        {experience.map((exp, idx) => (
          <div key={idx} className="relative pl-8 border-l-2 border-accent-red/30">
            {/* Dot */}
            <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full border-2 border-accent-red bg-bg-secondary" />

            <div className="p-6 bg-bg-card rounded-lg border border-white/5">
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <Briefcase size={18} className="text-accent-red" />
                <h3 className="text-xl font-bold text-text-primary">{exp.company}</h3>
                <span className="px-2 py-0.5 text-xs font-mono text-accent-cyan bg-accent-cyan/10 rounded">{exp.type}</span>
              </div>
              <p className="text-text-secondary font-medium mb-4">{exp.role}</p>
              <ul className="space-y-2">
                {exp.description.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-text-secondary">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent-red/60 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
