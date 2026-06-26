import { Heart } from "lucide-react";
import { useLang } from "../i18n/LangContext";

export default function Footer() {
  const { t } = useLang();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-10 px-6 bg-[#070b14] border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Logo / name */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-white font-bold text-base tracking-tight font-space cursor-pointer hover:opacity-80 transition-opacity"
          >
            <span className="text-cyan-400">A</span>ntoun{" "}
            <span className="text-cyan-400">H</span>elal
          </button>

          {/* Credits */}
          <p className="text-slate-600 text-xs flex items-center gap-1.5">
            {t("footer.builtWith")}{" "}
            <Heart size={11} className="text-rose-500 fill-rose-500" />
            {" "}{t("footer.using")} · © {currentYear}
          </p>

          {/* Back to top */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-slate-600 hover:text-cyan-400 text-xs transition-colors cursor-pointer"
          >
            {t("footer.backToTop")}
          </button>
        </div>
      </div>
    </footer>
  );
}
