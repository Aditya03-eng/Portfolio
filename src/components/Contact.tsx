import { Github, Linkedin, Mail, ArrowUpRight } from 'lucide-react';
import { personalInfo } from '../data';
import { useScrollReveal } from '../useScrollReveal';

export default function Contact() {
  const ref = useScrollReveal();

  return (
    <section id="contact" ref={ref} className="py-24 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto text-center">
        {/* Section header */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <span className="font-mono text-xs text-accent-red tracking-widest uppercase">07</span>
          <h2 className="text-3xl sm:text-4xl font-bold">Get In Touch</h2>
        </div>

        <p className="text-text-secondary leading-relaxed mb-10 max-w-xl mx-auto">
          Have a question or want to collaborate with <span className="text-text-primary font-medium">Aditya Kumar</span>? Feel free to reach out through any of the channels below.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={`mailto:${personalInfo.email}`}
            className="btn-primary"
          >
            <Mail size={18} />
            Send Email
            <ArrowUpRight size={14} />
          </a>
          <a
            href={personalInfo.profiles.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            <Github size={18} />
            GitHub
          </a>
          <a
            href={personalInfo.profiles.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            <Linkedin size={18} />
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
