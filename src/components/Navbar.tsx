import { useState, useEffect } from "react";
import { Menu, X, Globe } from "lucide-react";
import { useLang } from "../i18n/LangContext";
import { personalInfo } from "../data/portfolio";

export default function Navbar() {
  const { lang, setLang, t } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const navLinks = [
    { label: t("nav.about"), href: "#about" },
    { label: t("nav.skills"), href: "#skills" },
    { label: t("nav.projects"), href: "#projects" },
    { label: t("nav.experience"), href: "#experience" },
    { label: t("nav.education"), href: "#education" },
    { label: t("nav.contact"), href: "#contact" },
  ];

  useEffect(() => {
    const sectionIds = ["about", "skills", "projects", "experience", "education", "contact"];
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      for (const section of [...sectionIds].reverse()) {
        const el = document.getElementById(section);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(section);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const toggleLang = () => setLang(lang === "en" ? "fr" : "en");

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#0a0f1e]/90 backdrop-blur-xl border-b border-white/5 shadow-xl shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="text-white font-bold text-lg tracking-tight font-space cursor-pointer"
        >
          <span className="text-cyan-400">A</span>ntoun{" "}
          <span className="text-cyan-400">H</span>elal
        </button>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const section = link.href.replace("#", "");
            const isActive = activeSection === section;
            return (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "text-cyan-400 bg-cyan-400/10"
                    : "text-slate-400 hover:text-white hover:bg-white/5"
                }`}
              >
                {link.label}
              </button>
            );
          })}

          {/* Language toggle */}
          <button
            onClick={toggleLang}
            className="ml-2 flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium text-slate-400 hover:text-white hover:bg-white/5 transition-all duration-200 cursor-pointer border border-white/10 hover:border-cyan-500/40"
            aria-label="Switch language"
          >
            <Globe size={14} />
            <span className="uppercase font-bold text-xs">{lang === "en" ? "FR" : "EN"}</span>
          </button>

          <a
            href={`mailto:${personalInfo.email}`}
            className="ml-2 px-4 py-2 rounded-lg text-sm font-semibold bg-cyan-500 text-[#0a0f1e] hover:bg-cyan-400 transition-all duration-200 shadow-lg shadow-cyan-500/20"
          >
            {t("nav.hire")}
          </a>
        </div>

        {/* Mobile: lang + hamburger */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={toggleLang}
            className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-bold text-slate-400 hover:text-white border border-white/10 hover:border-cyan-500/40 transition-all cursor-pointer uppercase"
            aria-label="Switch language"
          >
            <Globe size={12} />
            {lang === "en" ? "FR" : "EN"}
          </button>
          <button
            className="text-slate-300 hover:text-white transition-colors p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } bg-[#0a0f1e]/95 backdrop-blur-xl border-b border-white/5`}
      >
        <div className="px-6 py-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNav(link.href)}
              className="text-left px-4 py-3 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 transition-all cursor-pointer"
            >
              {link.label}
            </button>
          ))}
          <a
            href={`mailto:${personalInfo.email}`}
            className="mt-2 px-4 py-3 rounded-lg text-sm font-semibold bg-cyan-500 text-[#0a0f1e] text-center hover:bg-cyan-400 transition-all"
          >
            {t("nav.hire")}
          </a>
        </div>
      </div>
    </header>
  );
}
