import { useState } from "react";
import { skills, skillCategories } from "../data/portfolio";
import { useLang } from "../i18n/LangContext";

const categoryColors: Record<string, string> = {
  Frontend: "from-blue-500 to-cyan-400",
  Mobile: "from-violet-500 to-purple-400",
  "Data & Backend": "from-emerald-500 to-teal-400",
  CMS: "from-orange-500 to-amber-400",
  Design: "from-pink-500 to-rose-400",
  Tools: "from-sky-500 to-blue-400",
  Product: "from-indigo-500 to-blue-400",
};

const categoryBg: Record<string, string> = {
  Frontend: "bg-blue-500/10 border-blue-500/20 text-blue-300 hover:border-blue-400/50 hover:bg-blue-500/15",
  Mobile: "bg-violet-500/10 border-violet-500/20 text-violet-300 hover:border-violet-400/50 hover:bg-violet-500/15",
  "Data & Backend": "bg-emerald-500/10 border-emerald-500/20 text-emerald-300 hover:border-emerald-400/50 hover:bg-emerald-500/15",
  CMS: "bg-orange-500/10 border-orange-500/20 text-orange-300 hover:border-orange-400/50 hover:bg-orange-500/15",
  Design: "bg-pink-500/10 border-pink-500/20 text-pink-300 hover:border-pink-400/50 hover:bg-pink-500/15",
  Tools: "bg-sky-500/10 border-sky-500/20 text-sky-300 hover:border-sky-400/50 hover:bg-sky-500/15",
  Product: "bg-indigo-500/10 border-indigo-500/20 text-indigo-300 hover:border-indigo-400/50 hover:bg-indigo-500/15",
};

export default function Skills() {
  const { t } = useLang();
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? skills
      : skills.filter((s) => s.category === activeCategory);

  // Translate "All" label for the filter
  const getCategoryLabel = (cat: string) => {
    if (cat === "All") return t("skills.all");
    return cat;
  };

  return (
    <section id="skills" className="py-24 px-6 bg-[#0a0f1e]">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-16">
          <div className="flex flex-col">
            <span className="text-cyan-400 text-sm font-semibold tracking-widest uppercase mb-2">
              {t("skills.label")}
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white font-space">
              {t("skills.title")}
            </h2>
          </div>
          <div className="flex-1 h-px bg-gradient-to-r from-cyan-500/40 to-transparent ml-6 mt-6" />
        </div>

        {/* Category filter */}
        <div className="flex flex-wrap gap-2 mb-10">
          {skillCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer ${
                activeCategory === cat
                  ? "bg-cyan-500 text-[#0a0f1e] shadow-lg shadow-cyan-500/20"
                  : "bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10"
              }`}
            >
              {getCategoryLabel(cat)}
            </button>
          ))}
        </div>

        {/* Skills grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
          {filtered.map((skill) => {
            const bgStyle = categoryBg[skill.category] ?? "bg-slate-800/50 border-slate-700/50 text-slate-300 hover:border-cyan-500/50";
            return (
              <div
                key={skill.name}
                className={`group relative px-4 py-3.5 rounded-xl border transition-all duration-200 cursor-default ${bgStyle}`}
              >
                <div className="flex flex-col gap-1">
                  <span className="font-semibold text-sm leading-tight">{skill.name}</span>
                  <span className="text-xs opacity-60 font-medium">{skill.category}</span>
                </div>
                <div className={`absolute top-3 right-3 w-1.5 h-1.5 rounded-full bg-gradient-to-br ${categoryColors[skill.category] ?? "from-cyan-400 to-blue-400"}`} />
              </div>
            );
          })}
        </div>

        {/* Stats row */}
        <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { value: "18+", label: t("skills.stat.tech") },
            { value: "6+", label: t("skills.stat.projects") },
            { value: "4", label: t("skills.stat.domains") },
            { value: "2026", label: t("skills.stat.join") },
          ].map((stat) => (
            <div
              key={stat.label}
              className="p-5 rounded-xl bg-gradient-to-br from-white/3 to-transparent border border-white/8 text-center group hover:border-cyan-500/30 transition-all duration-300"
            >
              <p className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 mb-1">
                {stat.value}
              </p>
              <p className="text-slate-500 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
