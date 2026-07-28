import { ShieldCheck, Cpu, HardHat, BadgeCheck } from "lucide-react";
import { about } from "@/data/site";

const BADGE_ICONS = [ShieldCheck, Cpu, HardHat, BadgeCheck];

export const About = () => {
  return (
    <section id="about" className="home-section-y bg-navy/[0.02]">
      <div className="home-container grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="order-2 lg:order-1">
          <span className="pill-badge">{about.eyebrow}</span>
          <h2 className="mt-6 text-4xl font-extrabold leading-tight text-navy sm:text-5xl">
            {about.heading1}
            <br />
            <span className="font-light italic">{about.heading2}</span>
          </h2>

          <div className="mt-6 space-y-4 text-navy/65">
            {about.paragraphs.map((p, i) => (
              <p key={i} className={i === 0 ? "text-lg text-navy/75" : ""}>
                {p}
              </p>
            ))}
          </div>

          <div className="mt-10">
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-red-600">
              Certified Excellence
            </span>
            <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {about.badges.map((badge, i) => {
                const Icon = BADGE_ICONS[i % BADGE_ICONS.length];
                return (
                  <div
                    key={badge.title}
                    className="flex flex-col items-start gap-2 border border-navy/10 bg-white p-4"
                  >
                    <Icon size={20} className="text-red-600" />
                    <p className="text-sm font-semibold text-navy">{badge.title}</p>
                    <p className="text-xs text-navy/50">{badge.subtitle}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="order-1 flex justify-center lg:order-2">
          <HexGraphic />
        </div>
      </div>
    </section>
  );
};

const HexGraphic = () => (
  <div className="relative flex h-[340px] w-full max-w-md items-center justify-center sm:h-[420px]">
    <div
      className="absolute inset-0"
      style={{
        clipPath:
          "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
        background:
          "linear-gradient(135deg, #0B2560 0%, #143a8c 45%, #C10E12 130%)",
      }}
    />
    <div
      className="absolute inset-[10%] opacity-40"
      style={{
        clipPath:
          "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
        background:
          "linear-gradient(315deg, rgba(255,255,255,0.4), transparent 60%)",
      }}
    />
    <div className="relative z-10 flex flex-col items-center gap-2 text-center text-white">
      <span className="text-5xl font-extrabold">7</span>
      <span className="max-w-[14ch] text-sm font-semibold uppercase tracking-wide text-white/80">
        Refinery Projects Under Execution &amp; Development
      </span>
    </div>
  </div>
);
