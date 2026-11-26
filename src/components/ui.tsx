import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { config } from "../content";

/** Lien WhatsApp avec un message déjà écrit ; renvoie vers le formulaire si aucun numéro n'est configuré. */
export function waHref(message: string) {
  if (!config.whatsapp) return "#contact";
  return `https://wa.me/${config.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const waExternal = Boolean(config.whatsapp);

export function WhatsAppIcon({ size = 18 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" aria-hidden="true">
      <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.64.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.88 1.21 3.08.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2.01-1.42.25-.7.25-1.29.17-1.42-.07-.13-.27-.2-.57-.35zM12.04 21.5h-.01a9.45 9.45 0 0 1-4.82-1.32l-.35-.2-3.58.94.96-3.49-.23-.36a9.43 9.43 0 0 1-1.45-5.03c0-5.22 4.25-9.46 9.48-9.46 2.53 0 4.9.99 6.69 2.78a9.4 9.4 0 0 1 2.77 6.69c0 5.22-4.25 9.46-9.46 9.46zm8.05-17.51A11.32 11.32 0 0 0 12.04.66C5.77.66.66 5.76.66 12.03c0 2 .52 3.96 1.52 5.69L.57 23.6l6.02-1.58a11.35 11.35 0 0 0 5.44 1.39h.01c6.27 0 11.38-5.1 11.38-11.37 0-3.04-1.18-5.9-3.33-8.05z" />
    </svg>
  );
}

export function SectionHeader({ label, title, intro }: { label: string; title: string; intro?: string }) {
  return (
    <div className="max-w-2xl mb-10 sm:mb-14">
      <p className="text-cyan-400 text-sm font-semibold uppercase tracking-[0.18em] mb-3">{label}</p>
      <h2 className="font-space text-3xl sm:text-4xl font-bold text-white leading-tight">{title}</h2>
      {intro && <p className="mt-4 text-slate-400 text-base sm:text-lg leading-relaxed">{intro}</p>}
    </div>
  );
}

export function Reveal({ children, delay = 0, className }: { children: ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      className={className}
      // Pas de fondu : le contenu reste visible même sans JavaScript d'animation
      // (aperçus de liens, captures, moteurs de recherche).
      initial={{ y: 14 }}
      whileInView={{ y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
