import { Trophy } from 'lucide-react';
import { achievements } from '../data';
import { useScrollReveal } from '../useScrollReveal';

export default function Achievements() {
  const ref = useScrollReveal();

  return (
    <section id="achievements" ref={ref} className="py-24 px-4 sm:px-6 bg-bg-secondary">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-12">
          <span className="font-mono text-xs text-accent-red tracking-widest uppercase">06</span>
          <h2 className="text-3xl sm:text-4xl font-bold">Achievements</h2>
          <div className="flex-1 h-px bg-white/10" />
        </div>

        {achievements.map((ach, idx) => (
          <div key={idx} className="p-6 sm:p-8 bg-bg-card rounded-lg border border-white/5 relative overflow-hidden">
            {/* Accent */}
            <div className="absolute top-0 left-0 w-1 h-full bg-accent-red" />

            <div className="flex items-start gap-4">
              <div className="p-3 bg-accent-red/10 rounded-lg shrink-0">
                <Trophy size={24} className="text-accent-red" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-text-primary mb-1">{ach.title}</h3>
                <p className="text-accent-cyan font-mono text-sm mb-4">{ach.position}</p>
                <ul className="space-y-2">
                  {ach.description.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-text-secondary">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent-red/60 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
