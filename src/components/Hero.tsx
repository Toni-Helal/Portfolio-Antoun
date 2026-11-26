import { ArrowDown, Gift } from "lucide-react";
import { useLang } from "../i18n/LangContext";
import { waExternal, waHref, WhatsAppIcon } from "./ui";

export default function Hero() {
  const { c } = useLang();
  const waProps = waExternal ? { target: "_blank", rel: "noopener noreferrer" } : {};

  return (
    <section
      id="top"
      className="relative overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28"
      style={{ background: "radial-gradient(ellipse at 50% 30%, #0e2a4a 0%, #0a0f1e 65%)" }}
    >
      <div
        className="absolute inset-0 opacity-15 bg-cover bg-center"
        style={{ backgroundImage: "url(images/hero-bg.webp)" }}
        aria-hidden="true"
      />
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl">
          <p className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-400/10 border border-cyan-400/30 text-cyan-300 text-sm font-medium mb-6">
            {c.hero.badge}
          </p>
          <h1 className="font-space text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-[1.1]">
            {c.hero.title}
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-slate-300 leading-relaxed">{c.hero.subtitle}</p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href={waHref(c.contact.whatsappMessage)}
              {...waProps}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold bg-cyan-400 text-[#0a0f1e] hover:bg-cyan-300 transition-colors shadow-lg shadow-cyan-500/20"
            >
              <WhatsAppIcon />
              {c.hero.ctaWhatsapp}
            </a>
            <a
              href="#realisations"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-white border border-white/15 hover:border-cyan-400/60 hover:bg-white/5 transition-colors"
            >
              {c.hero.ctaWork}
              <ArrowDown size={18} />
            </a>
          </div>

          <p className="mt-5 inline-flex items-center gap-2 text-sm text-slate-400">
            <Gift size={16} className="text-cyan-400" />
            {c.hero.note}
          </p>
        </div>
      </div>
    </section>
  );
}
