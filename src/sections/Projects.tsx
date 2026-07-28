import { MapPin, ArrowUpRight, Award } from "lucide-react";
import { projects } from "@/data/site";

export const Projects = () => {
  return (
    <section id="projects" className="home-section-y bg-navy text-white">
      <div className="home-container">
        <div className="flex items-center gap-3">
          <span className="h-px w-10 bg-red-500/60" />
          <span className="pill-badge-dark">
            <Award size={14} className="text-red-400" />
            FLAGSHIP PROJECTS
          </span>
        </div>

        <h2 className="mt-6 max-w-3xl text-4xl font-extrabold leading-tight sm:text-5xl">
          Landmark Achievements in{" "}
          <span className="font-light italic text-red-300">Iraqi Infrastructure</span>
        </h2>

        <p className="mt-5 max-w-2xl text-lg text-white/60">
          Delivering multi-billion dollar projects that drive economic growth and
          sustainable development across Iraq. We have several additional projects
          currently under execution and multiple opportunities in our pipeline, which
          remain confidential due to NDA agreements.
        </p>

        <div className="mt-14 space-y-10">
          {projects.map((project) => (
            <div
              key={project.title}
              className="grid grid-cols-1 gap-0 overflow-hidden border border-white/10 bg-white/[0.02] lg:grid-cols-2"
            >
              <div className="relative h-72 lg:h-auto">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-x-0 top-0 flex flex-wrap gap-3 p-5">
                  <span className="bg-red-600 px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-white">
                    {project.tag1}
                  </span>
                  <span className="bg-white px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-navy">
                    {project.tag2}
                  </span>
                </div>
                <div className="absolute inset-x-5 bottom-5 bg-black/40 p-4 backdrop-blur-sm">
                  <p className="text-xs uppercase tracking-wide text-white/60">Client</p>
                  <p className="font-semibold text-white">{project.client}</p>
                </div>
              </div>

              <div className="flex flex-col justify-center p-8 sm:p-10">
                <h3 className="text-3xl font-semibold leading-tight text-white">
                  {project.title}
                </h3>
                <p className="mt-4 leading-relaxed text-white/60">{project.description}</p>

                <div className="mt-6 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center bg-white/10">
                    <MapPin size={18} className="text-red-400" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wide text-white/40">Location</p>
                    <p className="font-medium text-white">{project.location}</p>
                  </div>
                </div>

                <div className="mt-8">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 bg-red-600 px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-red-700"
                  >
                    View Full Report
                    <ArrowUpRight size={15} />
                  </a>
                  <p className="mt-2 text-xs text-white/35">
                    Comprehensive Report Available Soon
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
