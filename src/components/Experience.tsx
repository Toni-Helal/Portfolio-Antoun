import { Briefcase, CheckCircle2 } from "lucide-react";
import { useLang } from "../i18n/LangContext";

export default function Experience() {
  const { t } = useLang();

  const experience = [
    {
      role: t("exp.1.role"),
      company: t("exp.1.company"),
      period: t("exp.1.period"),
      bullets: [t("exp.1.bullet.1"), t("exp.1.bullet.2")],
    },
    {
      role: t("exp.2.role"),
      company: t("exp.2.company"),
      period: t("exp.2.period"),
      bullets: [t("exp.2.bullet.1"), t("exp.2.bullet.2")],
    },
    {
      role: t("exp.3.role"),
      company: t("exp.3.company"),
      period: t("exp.3.period"),
      bullets: [t("exp.3.bullet.1"), t("exp.3.bullet.2")],
    },
  ];

  return (
    <section id="experience" className="py-24 px-6 bg-[#0a0f1e]">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-16">
          <div className="flex flex-col">
            <span className="text-cyan-400 text-sm font-semibold tracking-widest uppercase mb-2">
              {t("experience.label")}
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white font-space">
              {t("experience.title")}
            </h2>
          </div>
          <div className="flex-1 h-px bg-gradient-to-r from-cyan-500/40 to-transparent ml-6 mt-6" />
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500/60 via-cyan-500/20 to-transparent hidden sm:block" />

          <div className="space-y-8">
            {experience.map((exp, i) => (
              <div key={i} className="relative sm:pl-16">
                <div className="absolute left-0 top-5 sm:top-6 hidden sm:flex items-center justify-center w-10 h-10 rounded-full bg-[#0d1526] border-2 border-cyan-500/40 shadow-lg shadow-cyan-500/10">
                  <Briefcase size={16} className="text-cyan-400" />
                </div>

                <div className="group p-6 rounded-2xl bg-[#0d1526] border border-white/8 hover:border-cyan-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/5">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div>
                      <h3 className="text-white font-bold text-lg leading-tight">
                        {exp.role}
                      </h3>
                      <p className="text-cyan-400 font-medium text-sm mt-0.5">
                        {exp.company}
                      </p>
                    </div>
                    <span className="px-3 py-1.5 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold whitespace-nowrap">
                      {exp.period}
                    </span>
                  </div>

                  <ul className="space-y-2.5">
                    {exp.bullets.map((bullet, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <CheckCircle2
                          size={15}
                          className="text-cyan-500 mt-0.5 flex-shrink-0"
                        />
                        <span className="text-slate-300 text-sm leading-relaxed">
                          {bullet}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
