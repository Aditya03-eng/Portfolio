import { Award, BadgeCheck } from 'lucide-react';
import { certifications } from '../data';
import { useScrollReveal } from '../useScrollReveal';

export default function Certifications() {
  const ref = useScrollReveal();

  return (
    <section id="certifications" ref={ref} className="py-24 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-12">
          <span className="font-mono text-xs text-accent-red tracking-widest uppercase">05</span>
          <h2 className="text-3xl sm:text-4xl font-bold">Certifications</h2>
          <div className="flex-1 h-px bg-white/10" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, idx) => (
            <div key={idx} className="project-card p-5 bg-bg-card rounded-lg border border-white/5 relative overflow-hidden">
              {/* Microsoft accent bar */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#00A4EF] via-[#7FBA00] to-[#FFB900]" />

              <div className="flex items-start gap-3 mb-4">
                {cert.type === 'certification' ? (
                  <BadgeCheck size={24} className="text-[#00A4EF] shrink-0 mt-0.5" />
                ) : (
                  <Award size={24} className="text-[#FFB900] shrink-0 mt-0.5" />
                )}
                <div>
                  <h3 className="font-semibold text-text-primary leading-tight mb-1">{cert.title}</h3>
                  <p className="text-sm text-text-secondary">{cert.issuer}</p>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-text-secondary">{cert.date}</span>
                <span className={`px-2 py-0.5 text-[10px] font-mono rounded uppercase tracking-wider ${
                  cert.type === 'certification'
                    ? 'text-[#00A4EF] bg-[#00A4EF]/10'
                    : 'text-[#FFB900] bg-[#FFB900]/10'
                }`}>
                  {cert.type === 'certification' ? 'Certified' : 'Achievement'}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
