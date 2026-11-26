import { ExternalLink } from "lucide-react";
import { useLang } from "../i18n/LangContext";
import { config } from "../content";
import { SectionHeader } from "./ui";

export default function TechProjects() {
  const { c } = useLang();
  return (
    <section id="projets-techniques" className="py-20 sm:py-24 px-4 sm:px-6 bg-[#0c1224]">
      <div className="max-w-6xl mx-auto">
        <SectionHeader label={c.tech.label} title={c.tech.title} />
        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {c.tech.items.map((p) => (
            <li key={p.name} className="p-5 rounded-xl border border-white/10 bg-white/[0.02]">
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-semibold text-white">{p.name}</h3>
                {p.link && (
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 inline-flex items-center gap-1 text-sm text-cyan-300 hover:text-cyan-200"
                    aria-label={`${c.tech.codeLabel} : ${p.name}`}
                  >
                    {c.tech.codeLabel}
                    <ExternalLink size={14} />
                  </a>
                )}
              </div>
              <p className="mt-2 text-sm text-slate-400 leading-relaxed">{p.desc}</p>
            </li>
          ))}
        </ul>
        <a
          href={config.github}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-slate-300 hover:text-white"
        >
          {c.tech.github}
          <ExternalLink size={14} />
        </a>
      </div>
    </section>
  );
}
