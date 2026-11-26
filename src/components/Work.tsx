import { ArrowDown, ExternalLink, Clock } from "lucide-react";
import { useLang } from "../i18n/LangContext";
import type { CaseStudy } from "../content";
import { Reveal, SectionHeader } from "./ui";

function AutomationDiagram() {
  const { c } = useLang();
  const d = c.work.diagram;
  return (
    <div className="h-full min-h-[260px] rounded-xl bg-[#0a0f1e] border border-white/10 p-5 sm:p-6 flex flex-col justify-center">
      <p className="inline-flex items-center gap-2 text-sm text-cyan-300 mb-5">
        <Clock size={16} />
        {d.every}
      </p>
      <ol className="flex flex-col gap-2">
        {d.steps.map((step, i) => (
          <li key={step} className="flex flex-col items-center gap-2">
            <div className="w-full rounded-lg border border-cyan-400/25 bg-cyan-400/[0.06] px-4 py-2.5 flex items-center justify-between gap-3">
              <p className="text-sm font-medium text-white">{step}</p>
              <p className="text-xs uppercase tracking-wider text-cyan-300/80">{d.tools[i]}</p>
            </div>
            {i < d.steps.length - 1 && (
              <span className="text-slate-500" aria-hidden="true">
                <ArrowDown size={16} />
              </span>
            )}
          </li>
        ))}
      </ol>
    </div>
  );
}

function CaseCard({ item, index }: { item: CaseStudy; index: number }) {
  const { c } = useLang();
  const flip = index % 2 === 1;

  return (
    <Reveal>
      <article className="grid lg:grid-cols-2 gap-6 lg:gap-10 items-center p-4 sm:p-6 rounded-3xl bg-white/[0.03] border border-white/10">
        <div className={flip ? "lg:order-2" : ""}>
          {item.image ? (
            <div className="rounded-xl overflow-hidden border border-white/10 bg-[#0a0f1e]">
              <div className="flex gap-1.5 px-3 py-2 border-b border-white/10" aria-hidden="true">
                <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
                <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
                <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
              </div>
              <img
                src={item.image.src}
                alt={item.image.alt}
                loading="lazy"
                width={1200}
                height={item.id === "blazepod" ? 811 : 570}
                className="w-full h-auto block"
              />
            </div>
          ) : item.diagram ? (
            <AutomationDiagram />
          ) : null}
        </div>

        <div className={`px-1 sm:px-2 ${flip ? "lg:order-1" : ""}`}>
          <p className="inline-block px-2.5 py-1 rounded-full text-xs font-semibold bg-cyan-400/10 text-cyan-300 border border-cyan-400/25">
            {item.tag}
          </p>
          <h3 className="mt-3 font-space text-2xl sm:text-3xl font-bold text-white">{item.title}</h3>
          <p className="mt-1 text-slate-400">{item.subtitle}</p>

          <dl className="mt-5 space-y-4">
            <div>
              <dt className="text-sm font-semibold text-slate-200">{c.work.needLabel}</dt>
              <dd className="mt-1 text-slate-400 leading-relaxed">{item.need}</dd>
            </div>
            <div>
              <dt className="text-sm font-semibold text-slate-200">{c.work.doneLabel}</dt>
              <dd className="mt-1 text-slate-400 leading-relaxed">{item.done}</dd>
            </div>
          </dl>

          <ul className="mt-5 flex flex-wrap gap-2" aria-label="Outils">
            {item.stack.map((s) => (
              <li key={s} className="px-2.5 py-1 rounded-md text-xs text-slate-300 bg-white/5 border border-white/10">
                {s}
              </li>
            ))}
          </ul>

          {item.link && (
            <a
              href={item.link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 font-semibold text-cyan-300 hover:text-cyan-200"
            >
              {item.link.label}
              <ExternalLink size={16} />
            </a>
          )}
        </div>
      </article>
    </Reveal>
  );
}

export default function Work() {
  const { c } = useLang();
  return (
    <section id="realisations" className="py-20 sm:py-28 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader label={c.work.label} title={c.work.title} />
        <div className="space-y-6 sm:space-y-8">
          {c.work.cases.map((item, i) => (
            <CaseCard key={item.id} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
