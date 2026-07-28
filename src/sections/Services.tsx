import { Layers, Settings, Zap, Shield, ArrowUpRight } from "lucide-react";
import { services } from "@/data/site";

const ICONS: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  layers: Layers,
  settings: Settings,
  zap: Zap,
  shield: Shield,
};

export const Services = () => {
  return (
    <section id="services" className="home-section-y bg-white">
      <div className="home-container">
        <span className="pill-badge">OUR EXPERTISE</span>
        <h2 className="mt-6 max-w-2xl text-4xl font-extrabold leading-tight text-navy sm:text-5xl">
          Comprehensive <span className="font-light italic">EPCC</span>
          <br />
          <span className="font-light italic">Services</span>
        </h2>
        <p className="mt-5 max-w-xl text-lg text-navy/60">
          End-to-end solutions that transform vision into operational reality
        </p>

        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2">
          {services.map((service) => {
            const Icon = ICONS[service.icon] ?? Layers;
            return (
              <div
                key={service.title}
                className="group overflow-hidden border border-navy/10 bg-white transition-shadow duration-300 hover:shadow-xl"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/20 to-transparent" />
                  <div className="absolute left-6 top-6 flex h-11 w-11 items-center justify-center bg-white/15 backdrop-blur-sm">
                    <Icon size={20} className="text-white" />
                  </div>
                  <h3 className="absolute bottom-5 left-6 text-2xl font-semibold text-white">
                    {service.title}
                  </h3>
                </div>

                <div className="p-6 sm:p-8">
                  <p className="text-navy/65">{service.description}</p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {service.tags.map((tag) => (
                      <span key={tag} className="tag-pill">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex items-baseline gap-3">
                    <a href="#contact" className="learn-more-link">
                      Learn More
                      <ArrowUpRight size={15} />
                    </a>
                    <span className="text-xs text-navy/35">Coming Soon</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
