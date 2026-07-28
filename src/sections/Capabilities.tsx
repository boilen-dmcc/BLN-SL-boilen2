import { Cpu, Link2, Lock, Layers2, Check } from "lucide-react";
import { capabilities } from "@/data/site";

const ICONS: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  cpu: Cpu,
  link: Link2,
  lock: Lock,
  layers2: Layers2,
};

export const Capabilities = () => {
  return (
    <section id="capabilities" className="home-section-y bg-white">
      <div className="home-container">
        <span className="pill-badge">CORE CAPABILITIES</span>
        <h2 className="mt-6 max-w-2xl text-4xl font-extrabold leading-tight text-navy sm:text-5xl">
          World-Class Expertise
          <br />
          <span className="font-light italic">Across Every Discipline</span>
        </h2>
        <p className="mt-5 max-w-2xl text-lg text-navy/60">
          Integrated capabilities that deliver complex infrastructure projects on time, on
          budget, and to the highest standards of quality and safety.
        </p>

        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2">
          {capabilities.map((cap) => {
            const Icon = ICONS[cap.icon] ?? Cpu;
            return (
              <div key={cap.title} className="border border-navy/10 p-8">
                <div className="flex h-12 w-12 items-center justify-center bg-red-50">
                  <Icon size={22} className="text-red-600" />
                </div>
                <span className="mt-6 block text-xs font-bold uppercase tracking-[0.14em] text-red-600">
                  {cap.eyebrow}
                </span>
                <h3 className="mt-2 text-2xl font-semibold text-navy">{cap.title}</h3>

                <ul className="mt-5 space-y-3">
                  {cap.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-navy/65">
                      <Check size={16} className="mt-1 flex-shrink-0 text-red-600" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex items-baseline gap-3">
                  <a href="#contact" className="learn-more-link">
                    Learn More →
                  </a>
                  <span className="text-xs text-navy/35">Coming Soon</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="home-container mt-16">
        <div className="bg-navy px-8 py-16 text-center sm:px-16">
          <h3 className="text-2xl font-semibold text-white sm:text-3xl">
            Ready to discuss your project requirements?
          </h3>
          <p className="mx-auto mt-3 max-w-xl text-white/60">
            Our technical teams are ready to support your next infrastructure project with
            proven EPCC capabilities.
          </p>
          <a href="#contact" className="btn-primary mt-8 inline-flex">
            Schedule a Consultation
          </a>
        </div>
      </div>
    </section>
  );
};
