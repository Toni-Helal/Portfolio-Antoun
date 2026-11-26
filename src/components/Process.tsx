import { useLang } from "../i18n/LangContext";
import { Reveal, SectionHeader } from "./ui";

export default function Process() {
  const { c } = useLang();
  return (
    <section id="methode" className="py-20 sm:py-28 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader label={c.process.label} title={c.process.title} />
        <ol className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {c.process.steps.map((s, i) => (
            <li key={s.title}>
              <Reveal delay={i * 0.06} className="h-full">
                <div className="h-full p-6 rounded-2xl border border-white/10 bg-white/[0.03]">
                  <span className="font-space text-4xl font-bold text-cyan-400/80">{i + 1}</span>
                  <h3 className="mt-3 font-semibold text-white text-lg">{s.title}</h3>
                  <p className="mt-2 text-slate-400 leading-relaxed">{s.text}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
