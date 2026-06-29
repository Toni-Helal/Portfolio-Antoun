import { personalInfo } from "../data/portfolio";
import { Code2, Smartphone, BarChart3, Layers } from "lucide-react";
import { useLang } from "../i18n/LangContext";
import antounPhoto from "../assets/antounphoto.png";

export default function About() {
  const { t } = useLang();

  const pillars = [
    { icon: <Code2 size={20} />, title: t("about.pillar.web.title"), desc: t("about.pillar.web.desc") },
    { icon: <Smartphone size={20} />, title: t("about.pillar.mobile.title"), desc: t("about.pillar.mobile.desc") },
    { icon: <BarChart3 size={20} />, title: t("about.pillar.data.title"), desc: t("about.pillar.data.desc") },
    { icon: <Layers size={20} />, title: t("about.pillar.product.title"), desc: t("about.pillar.product.desc") },
  ];

  const paragraphs = [t("about.bio.1"), t("about.bio.2"), t("about.bio.3")];

  return (
    <section id="about" className="py-24 px-6 bg-[#0d1526]">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-16">
          <div className="flex flex-col">
            <span className="text-cyan-400 text-sm font-semibold tracking-widest uppercase mb-2">
              {t("about.label")}
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white font-space">
              {t("about.title")}
            </h2>
          </div>
          <div className="flex-1 h-px bg-gradient-to-r from-cyan-500/40 to-transparent ml-6 mt-6" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Avatar + decoration */}
          <div className="relative flex justify-center md:justify-start">
            <div className="relative">
              <div className="absolute -inset-3 rounded-2xl bg-gradient-to-br from-cyan-500/30 to-blue-600/20 blur-xl" />
              <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-br from-cyan-500/50 to-blue-600/30" />
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-2xl overflow-hidden border border-cyan-500/20">
                <img
                  src={antounPhoto}
                  alt="Antoun Helal"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1e]/60 to-transparent" />
              </div>

              <div className="absolute -bottom-4 -right-4 bg-[#0d1526] border border-cyan-500/30 rounded-xl px-4 py-2.5 shadow-xl">
                <p className="text-cyan-400 font-bold text-xl">3+</p>
                <p className="text-slate-400 text-xs">{t("about.yearsLearning")}</p>
              </div>

              <div className="absolute -top-4 -left-4 bg-[#0d1526] border border-blue-500/30 rounded-xl px-4 py-2.5 shadow-xl">
                <p className="text-blue-400 font-bold text-xl">6+</p>
                <p className="text-slate-400 text-xs">{t("about.projectsBuilt")}</p>
              </div>
            </div>
          </div>

          {/* Text content */}
          <div className="space-y-6">
            {paragraphs.map((para, i) => (
              <p key={i} className="text-slate-300 leading-relaxed text-base">
                {para}
              </p>
            ))}

            <div className="grid grid-cols-2 gap-3 pt-4">
              {pillars.map((p, i) => (
                <div
                  key={i}
                  className="p-3.5 rounded-xl bg-white/3 border border-white/8 hover:border-cyan-500/30 hover:bg-cyan-500/5 transition-all duration-200 group"
                >
                  <div className="text-cyan-400 mb-2 group-hover:scale-110 transition-transform duration-200">
                    {p.icon}
                  </div>
                  <p className="text-white text-sm font-semibold mb-0.5">{p.title}</p>
                  <p className="text-slate-500 text-xs leading-snug">{p.desc}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <button
                onClick={() =>
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                }
                className="px-5 py-2.5 rounded-lg bg-cyan-500 text-[#0a0f1e] font-semibold text-sm hover:bg-cyan-400 transition-all duration-200 shadow-lg shadow-cyan-500/20 cursor-pointer"
              >
                {t("hero.letsTalk")}
              </button>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-lg border border-slate-700 text-slate-300 font-semibold text-sm hover:border-cyan-500/50 hover:text-white transition-all duration-200"
              >
                {t("about.viewGithub")}
              </a>
              <a
                href="/cv-antoun-helal.pdf"
                download
                className="px-5 py-2.5 rounded-lg border border-cyan-500/40 text-cyan-400 font-semibold text-sm hover:bg-cyan-500/10 hover:border-cyan-400 transition-all duration-200 flex items-center gap-2"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                {t("hero.downloadCV")}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
