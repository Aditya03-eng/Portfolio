import { Code, Layout, Server, Database, Brain, BarChart3, Wrench } from 'lucide-react';
import { skills } from '../data';
import { useScrollReveal } from '../useScrollReveal';

const iconMap: Record<string, React.ReactNode> = {
  'Programming': <Code size={18} />,
  'Frontend': <Layout size={18} />,
  'Backend': <Server size={18} />,
  'Databases': <Database size={18} />,
  'AI / ML': <Brain size={18} />,
  'Data Analytics': <BarChart3 size={18} />,
  'Developer Tools': <Wrench size={18} />,
};

export default function Skills() {
  const ref = useScrollReveal();

  return (
    <section id="skills" ref={ref} className="py-24 px-4 sm:px-6 bg-bg-secondary">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-12">
          <span className="font-mono text-xs text-accent-red tracking-widest uppercase">04</span>
          <h2 className="text-3xl sm:text-4xl font-bold">Skills</h2>
          <div className="flex-1 h-px bg-white/10" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="p-5 bg-bg-card rounded-lg border border-white/5">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-accent-red">{iconMap[category]}</span>
                <h3 className="font-mono text-sm font-semibold tracking-wider uppercase text-text-primary">{category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-xs font-mono text-text-secondary bg-white/5 rounded-md border border-white/5 hover:border-accent-red/30 hover:text-text-primary transition-all duration-200"
                  >
                    {skill}
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
