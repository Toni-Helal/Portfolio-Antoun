import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { useLang } from "../i18n/LangContext";
import { waExternal, waHref, WhatsAppIcon } from "./ui";

export default function Navbar() {
  const { lang, setLang, c } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { label: c.nav.work, href: "#realisations" },
    { label: c.nav.offers, href: "#offres" },
    { label: c.nav.process, href: "#methode" },
    { label: c.nav.contact, href: "#contact" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const otherLang = lang === "fr" ? "en" : "fr";
  const langButton = (
    <button
      type="button"
      onClick={() => setLang(otherLang)}
      className="px-3 py-2 rounded-lg text-xs font-bold uppercase text-slate-300 border border-white/10 hover:border-cyan-400/50 hover:text-white transition-colors cursor-pointer"
      aria-label={c.nav.switchLang}
      title={c.nav.switchLang}
    >
      {otherLang}
    </button>
  );

  const waProps = waExternal ? { target: "_blank", rel: "noopener noreferrer" } : {};

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled || menuOpen ? "bg-[#0a0f1e]/95 backdrop-blur-xl border-b border-white/5" : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16" aria-label="Navigation">
        <a href="#top" className="text-white font-bold text-lg tracking-tight font-space">
          <span className="text-cyan-400">A</span>ntoun <span className="text-cyan-400">H</span>elal
        </a>

        <div className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="px-3 py-2 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 transition-colors"
            >
              {l.label}
            </a>
          ))}
          <div className="ml-2">{langButton}</div>
          <a
            href={waHref(c.contact.whatsappMessage)}
            {...waProps}
            className="ml-2 inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold bg-cyan-400 text-[#0a0f1e] hover:bg-cyan-300 transition-colors"
          >
            <WhatsAppIcon size={16} />
            {c.nav.whatsapp}
          </a>
        </div>

        <div className="md:hidden flex items-center gap-2">
          {langButton}
          <button
            type="button"
            className="text-slate-200 p-2 cursor-pointer"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="md:hidden px-4 pb-4 flex flex-col gap-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="px-4 py-3 rounded-lg text-base font-medium text-slate-200 hover:bg-white/5"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
