import { useState } from "react";
import { ExternalLink, GitBranch, ChevronRight } from "lucide-react";
import { projects } from "../data/portfolio";
import { useLang } from "../i18n/LangContext";

const projectCategories = ["All", "Web", "Mobile", "Data", "Product"];

export default function Projects() {
  const { t } = useLang();
  const [activeFilter, setActiveFilter] = useState("All");
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const filtered =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  const getCategoryLabel = (cat: string) => {
    if (cat === "All") return t("skills.all");
    return cat;
  };

  return (
    <section id="projects" className="py-24 px-6 bg-[#0d1526]">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-16">
          <div className="flex flex-col">
            <span className="text-cyan-400 text-sm font-semibold tracking-widest uppercase mb-2">
              {t("projects.label")}
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white font-space">
              {t("projects.title")}
            </h2>
          </div>
          <div className="flex-1 h-px bg-gradient-to-r from-cyan-500/40 to-transparent ml-6 mt-6" />
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2 mb-10">
          {projectCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer ${
                activeFilter === cat
                  ? "bg-cyan-500 text-[#0a0f1e] shadow-lg shadow-cyan-500/20"
                  : "bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10"
              }`}
            >
              {getCategoryLabel(cat)}
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((project) => (
            <div
              key={project.id}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
              className={`group relative flex flex-col rounded-2xl border bg-[#0a0f1e] overflow-hidden transition-all duration-300 ${
                hoveredId === project.id
                  ? "border-cyan-500/40 shadow-2xl shadow-cyan-500/10 -translate-y-1"
                  : "border-white/8 hover:border-white/15"
              }`}
            >
              {/* Top gradient bar */}
              <div className={`h-1 w-full bg-gradient-to-r ${project.gradient}`} />

              {/* Card header */}
              <div className="p-5 pb-4">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-10 h-10 rounded-xl bg-gradient-to-br ${project.gradient} flex items-center justify-center text-lg shadow-lg`}
                    >
                      {project.icon}
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-base leading-tight">
                        {project.title}
                      </h3>
                      <span className="text-slate-500 text-xs">
                        {t(`project.${project.id}.subtitle`)}
                      </span>
                    </div>
                  </div>

                  {/* Links */}
                  <div className="flex gap-1.5">
                    {project.githubLink ? (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded-lg text-slate-500 hover:text-white hover:bg-white/10 transition-all"
                        aria-label="GitHub"
                      >
                        <GitBranch size={14} />
                      </a>
                    ) : (
                      <span className="p-1.5 rounded-lg text-slate-700 cursor-not-allowed">
                        <GitBranch size={14} />
                      </span>
                    )}
                    {project.liveLink ? (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded-lg text-slate-500 hover:text-white hover:bg-white/10 transition-all"
                        aria-label="Live"
                      >
                        <ExternalLink size={14} />
                      </a>
                    ) : (
                      <span className="p-1.5 rounded-lg text-slate-700 cursor-not-allowed">
                        <ExternalLink size={14} />
                      </span>
                    )}
                  </div>
                </div>

                {/* Description */}
                <p className="text-slate-400 text-sm leading-relaxed">
                  {t(`project.${project.id}.description`)}
                </p>
              </div>

              {/* Highlight */}
              <div className="mx-5 mb-4 p-3 rounded-xl bg-cyan-500/5 border border-cyan-500/15">
                <div className="flex items-start gap-2">
                  <ChevronRight size={14} className="text-cyan-400 mt-0.5 flex-shrink-0" />
                  <p className="text-cyan-300/80 text-xs leading-relaxed">
                    {t(`project.${project.id}.highlight`)}
                  </p>
                </div>
              </div>

              {/* Tech stack */}
              <div className="px-5 pb-5 mt-auto">
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((techItem) => (
                    <span
                      key={techItem}
                      className="px-2.5 py-1 rounded-md bg-white/5 border border-white/8 text-slate-400 text-xs font-medium"
                    >
                      {techItem}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hover glow */}
              <div
                className={`absolute inset-0 pointer-events-none bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-3 transition-opacity duration-300 rounded-2xl`}
              />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/Toni-Helal"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-slate-700 text-slate-300 text-sm font-semibold hover:border-cyan-500/50 hover:text-white hover:bg-white/5 transition-all duration-200"
          >
            <GitBranch size={16} />
            {t("projects.viewGithub")}
          </a>
        </div>
      </div>
    </section>
  );
}
