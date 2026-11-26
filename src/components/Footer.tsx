import { useLang } from "../i18n/LangContext";
import { config } from "../content";

export default function Footer() {
  const { c } = useLang();
  const year = new Date().getFullYear();

  return (
    <footer className="py-10 px-4 sm:px-6 pb-28 md:pb-10 bg-[#070b14] border-t border-white/5">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-500">
        <p>
          © {year} {config.name} · {c.footer.rights}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
          <a href={config.github} target="_blank" rel="noopener noreferrer" className="hover:text-white">
            GitHub
          </a>
          <a href={config.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white">
            LinkedIn
          </a>
          <a href={config.cv} target="_blank" rel="noopener noreferrer" className="hover:text-white">
            {c.footer.cv}
          </a>
          <a href="#top" className="hover:text-white">
            {c.footer.top}
          </a>
        </div>
      </div>
    </footer>
  );
}
