import { Dumbbell, Languages, Zap } from "lucide-react";
import { useLang } from "../i18n/LangContext";
import { Reveal, SectionHeader } from "./ui";

const icons = [Dumbbell, Languages, Zap];

export default function Why() {
  const { c } = useLang();

  return (
    <section id="pourquoi" className="py-20 sm:py-28 px-4 sm:px-6 bg-[#0c1224]">
      <div className="max-w-6xl mx-auto grid md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] gap-10 md:gap-14 items-start">
        <Reveal className="max-w-[240px] sm:max-w-xs md:max-w-sm mx-auto md:mx-0 w-full">
          <img
            src="images/antoun.webp"
            alt={c.why.photoAlt}
            width={540}
            height={720}
            loading="lazy"
            className="w-full rounded-2xl border border-white/10 object-cover aspect-[3/4]"
          />
        </Reveal>

        <div>
          <SectionHeader label={c.why.label} title={c.why.title} intro={c.why.intro} />
          <div className="grid gap-4">
            {c.why.cards.map((card, i) => {
              const Icon = icons[i % icons.length];
              return (
                <Reveal key={card.title} delay={i * 0.08}>
                  <div className="flex gap-4 p-5 rounded-2xl bg-white/[0.03] border border-white/10">
                    <div className="shrink-0 w-11 h-11 rounded-xl bg-cyan-400/10 text-cyan-300 flex items-center justify-center">
                      <Icon size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white text-lg">{card.title}</h3>
                      <p className="mt-1 text-slate-400 leading-relaxed">{card.text}</p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
