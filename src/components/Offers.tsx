import { FileText, Layers, RefreshCw, Workflow } from "lucide-react";
import { useLang } from "../i18n/LangContext";
import { Reveal, SectionHeader } from "./ui";

const icons = [FileText, Layers, RefreshCw, Workflow];

export default function Offers() {
  const { c } = useLang();
  return (
    <section id="offres" className="py-20 sm:py-28 px-4 sm:px-6 bg-[#0c1224]">
      <div className="max-w-6xl mx-auto">
        <SectionHeader label={c.offers.label} title={c.offers.title} intro={c.offers.intro} />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {c.offers.items.map((o, i) => {
            const Icon = icons[i % icons.length];
            return (
              <Reveal key={o.title} delay={i * 0.06} className="h-full">
                <div className="h-full flex flex-col p-6 rounded-2xl bg-white/[0.03] border border-white/10">
                  <div className="w-11 h-11 rounded-xl bg-cyan-400/10 text-cyan-300 flex items-center justify-center">
                    <Icon size={20} />
                  </div>
                  <h3 className="mt-4 font-semibold text-white text-lg">{o.title}</h3>
                  <p className="mt-2 text-slate-400 leading-relaxed flex-1">{o.text}</p>
                  <p className="mt-5 pt-4 border-t border-white/10 text-sm font-medium text-cyan-300">
                    {o.quote ? c.offers.priceQuote : c.offers.priceFixed}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
