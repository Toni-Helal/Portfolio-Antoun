import { useLang } from "../i18n/LangContext";

export default function Education() {
  const { t } = useLang();

  const education = [
    {
      degree: t("edu.1.degree"),
      school: "Wild Code School",
      period: "2024 – 2026",
      description: t("edu.1.description"),
      icon: "🎓",
    },
    {
      degree: t("edu.2.degree"),
      school: "Apple",
      period: "2024",
      description: t("edu.2.description"),
      icon: "🍎",
    },
    {
      degree: t("edu.3.degree"),
      school: "OpenClassrooms",
      period: "2024",
      description: t("edu.3.description"),
      icon: "📚",
    },
  ];

  return (
    <section id="education" className="py-24 px-6 bg-[#0d1526]">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-16">
          <div className="flex flex-col">
            <span className="text-cyan-400 text-sm font-semibold tracking-widest uppercase mb-2">
              {t("education.label")}
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white font-space">
              {t("education.title")}
            </h2>
          </div>
          <div className="flex-1 h-px bg-gradient-to-r from-cyan-500/40 to-transparent ml-6 mt-6" />
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {education.map((edu, i) => (
            <div
              key={i}
              className="group relative p-6 rounded-2xl bg-[#0a0f1e] border border-white/8 hover:border-cyan-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/5 hover:-translate-y-0.5"
            >
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-2xl mb-5 group-hover:bg-cyan-500/15 transition-colors duration-200">
                {edu.icon}
              </div>

              <div className="mb-3">
                <h3 className="text-white font-bold text-base leading-snug mb-1">
                  {edu.degree}
                </h3>
                <p className="text-cyan-400 font-semibold text-sm">{edu.school}</p>
              </div>

              <span className="inline-block px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-slate-400 text-xs font-medium mb-4">
                {edu.period}
              </span>

              <p className="text-slate-400 text-sm leading-relaxed">{edu.description}</p>
            </div>
          ))}
        </div>

        {/* Philosophy quote */}
        <div className="mt-14 p-8 rounded-2xl bg-gradient-to-br from-cyan-500/8 to-blue-600/5 border border-cyan-500/20 text-center">
          <p className="text-slate-300 text-lg leading-relaxed italic max-w-2xl mx-auto">
            {t("education.quote")}
          </p>
          <p className="mt-4 text-cyan-400 font-semibold text-sm">— Antoun Helal</p>
        </div>
      </div>
    </section>
  );
}
