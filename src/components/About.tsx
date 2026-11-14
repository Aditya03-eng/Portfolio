import { GraduationCap, MapPin, Lightbulb } from 'lucide-react';
import { personalInfo, interests } from '../data';
import { useScrollReveal } from '../useScrollReveal';

export default function About() {
  const ref = useScrollReveal();

  return (
    <section id="about" ref={ref} className="py-24 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-12">
          <span className="font-mono text-xs text-accent-red tracking-widest uppercase">01</span>
          <h2 className="text-3xl sm:text-4xl font-bold">About</h2>
          <div className="flex-1 h-px bg-white/10" />
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left */}
          <div>
            <p className="text-text-secondary leading-relaxed mb-6">
              I'm a Computer Science Engineering student at {personalInfo.education.university}, passionate about using technology to solve real-world problems. My interests span across software development, artificial intelligence, data analytics, and web development.
            </p>
            <p className="text-text-secondary leading-relaxed">
              I enjoy building practical projects that combine clean engineering with intelligent systems — from full-stack platforms to machine learning applications.
            </p>
          </div>

          {/* Right - Info cards */}
          <div className="space-y-4">
            {/* Education */}
            <div className="p-4 bg-bg-card rounded-lg border border-white/5">
              <div className="flex items-center gap-3 mb-2">
                <GraduationCap size={18} className="text-accent-red" />
                <span className="font-mono text-xs text-text-secondary tracking-wider uppercase">Education</span>
              </div>
              <p className="text-text-primary font-medium">{personalInfo.education.degree}</p>
              <p className="text-text-secondary text-sm">{personalInfo.education.university}</p>
              <p className="text-text-secondary text-sm">{personalInfo.education.period}</p>
            </div>

            {/* Location */}
            <div className="p-4 bg-bg-card rounded-lg border border-white/5">
              <div className="flex items-center gap-3 mb-2">
                <MapPin size={18} className="text-accent-cyan" />
                <span className="font-mono text-xs text-text-secondary tracking-wider uppercase">Location</span>
              </div>
              <p className="text-text-primary font-medium">{personalInfo.location}</p>
            </div>

            {/* Interests */}
            <div className="p-4 bg-bg-card rounded-lg border border-white/5">
              <div className="flex items-center gap-3 mb-3">
                <Lightbulb size={18} className="text-accent-red" />
                <span className="font-mono text-xs text-text-secondary tracking-wider uppercase">Interests</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {interests.map((interest) => (
                  <span
                    key={interest}
                    className="px-3 py-1 text-xs font-mono text-text-secondary bg-white/5 rounded-full border border-white/5"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
