import { ChevronDown } from "lucide-react";
import { hero } from "@/data/site";

export const Hero = () => {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-navy"
      style={{
        backgroundImage:
          "radial-gradient(ellipse 80% 60% at 30% 0%, rgba(193,14,18,0.12), transparent), radial-gradient(ellipse 60% 50% at 90% 100%, rgba(11,37,96,0.6), transparent)",
      }}
    >
      <div className="pointer-events-none absolute inset-0 opacity-[0.04]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      <div className="home-container relative py-20 sm:py-28 md:py-32">
        <h1 className="max-w-4xl text-5xl font-extrabold leading-[1.05] text-white sm:text-6xl md:text-7xl">
          {hero.headlineLine1}
        </h1>
        <h1 className="max-w-4xl font-light italic leading-[1.05] text-red-300/90 text-5xl sm:text-6xl md:text-7xl">
          {hero.headlineLine2}
        </h1>

        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/65 sm:text-xl">
          {hero.tagline}
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a href="#projects" className="btn-solid-white">
            Explore Projects
            <ChevronDown size={16} />
          </a>
          <a href="#contact" className="btn-outline-light">
            Contact Us
          </a>
        </div>

        <a
          href="#services"
          aria-label="Scroll to services"
          className="mt-16 flex justify-center text-white/50 transition-colors hover:text-white/80 sm:mt-24"
        >
          <ChevronDown size={28} className="animate-bounce" />
        </a>
      </div>
    </section>
  );
};
