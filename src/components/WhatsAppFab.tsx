import { useEffect, useState } from "react";
import { useLang } from "../i18n/LangContext";
import { waExternal, waHref, WhatsAppIcon } from "./ui";

/** Bouton WhatsApp fixe, seulement sur mobile, affiché une fois l'en-tête dépassé. */
export default function WhatsAppFab() {
  const { c } = useLang();
  const [visible, setVisible] = useState(false);
  const waProps = waExternal ? { target: "_blank", rel: "noopener noreferrer" } : {};

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href={waHref(c.contact.whatsappMessage)}
      {...waProps}
      className={`md:hidden fixed bottom-4 right-4 z-40 inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-[#06210f] shadow-xl shadow-black/40 transition-all duration-300 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
      aria-label={c.contact.whatsapp}
      aria-hidden={!visible}
      tabIndex={visible ? 0 : -1}
    >
      <WhatsAppIcon size={28} />
    </a>
  );
}
