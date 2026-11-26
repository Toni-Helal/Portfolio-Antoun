import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { content, type Content, type Lang } from "../content";

interface LangContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  c: Content;
}

const LangContext = createContext<LangContextType | null>(null);
const STORAGE_KEY = "portfolio-lang";

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used within LangProvider");
  return ctx;
}

function initialLang(): Lang {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "fr" || saved === "en") return saved;
  } catch {
    /* stockage indisponible : on garde le français */
  }
  return "fr";
}

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(initialLang);

  const setLang = (next: Lang) => {
    setLangState(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* rien à faire */
    }
  };

  useEffect(() => {
    document.documentElement.lang = lang;
    document.title = content[lang].meta.title;
  }, [lang]);

  return (
    <LangContext.Provider value={{ lang, setLang, c: content[lang] }}>
      {children}
    </LangContext.Provider>
  );
}
