import { useState, type FormEvent } from "react";
import { CheckCircle2, Mail, AlertCircle } from "lucide-react";
import { useLang } from "../i18n/LangContext";
import { config } from "../content";
import { SectionHeader, waExternal, waHref, WhatsAppIcon } from "./ui";

type Status = "idle" | "sending" | "sent" | "error";

// Formulaire Netlify Forms : le même formulaire caché existe dans index.html
// pour que Netlify le détecte au déploiement (name="contact").
export default function Contact() {
  const { c } = useLang();
  const f = c.contact.form;
  const [status, setStatus] = useState<Status>("idle");
  const waProps = waExternal ? { target: "_blank", rel: "noopener noreferrer" } : {};

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    if (data.get("bot-field")) return;
    setStatus("sending");
    try {
      const body = new URLSearchParams();
      data.forEach((value, key) => body.append(key, String(value)));
      const res = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: body.toString(),
      });
      if (!res.ok) throw new Error(String(res.status));
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  const field =
    "w-full rounded-xl bg-[#0a0f1e] border border-white/15 px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20";

  return (
    <section id="contact" className="py-20 sm:py-28 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 lg:gap-16">
        <div>
          <SectionHeader label={c.contact.label} title={c.contact.title} intro={c.contact.text} />
          <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-3">
            <a
              href={waHref(c.contact.whatsappMessage)}
              {...waProps}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold bg-cyan-400 text-[#0a0f1e] hover:bg-cyan-300 transition-colors"
            >
              <WhatsAppIcon />
              {c.contact.whatsapp}
            </a>
            <a
              href={`mailto:${config.email}`}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-white border border-white/15 hover:border-cyan-400/60 hover:bg-white/5 transition-colors"
            >
              <Mail size={18} />
              {config.email}
            </a>
          </div>
        </div>

        <form
          name="contact"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
          onSubmit={onSubmit}
          className="p-5 sm:p-8 rounded-3xl bg-white/[0.03] border border-white/10 space-y-4"
        >
          <input type="hidden" name="form-name" value="contact" />
          <p className="hidden">
            <label>
              Ne pas remplir : <input name="bot-field" tabIndex={-1} autoComplete="off" />
            </label>
          </p>

          <div>
            <label htmlFor="cf-name" className="block text-sm font-medium text-slate-200 mb-1.5">
              {f.name} <span className="text-slate-500 font-normal">({f.required})</span>
            </label>
            <input id="cf-name" name="name" required autoComplete="name" className={field} />
          </div>
          <div>
            <label htmlFor="cf-business" className="block text-sm font-medium text-slate-200 mb-1.5">
              {f.business}
            </label>
            <input id="cf-business" name="business" placeholder={f.businessPlaceholder} className={field} />
          </div>
          <div>
            <label htmlFor="cf-contact" className="block text-sm font-medium text-slate-200 mb-1.5">
              {f.contact} <span className="text-slate-500 font-normal">({f.required})</span>
            </label>
            <input id="cf-contact" name="contact" required autoComplete="email" className={field} />
          </div>
          <div>
            <label htmlFor="cf-message" className="block text-sm font-medium text-slate-200 mb-1.5">
              {f.message} <span className="text-slate-500 font-normal">({f.required})</span>
            </label>
            <textarea id="cf-message" name="message" required rows={4} placeholder={f.messagePlaceholder} className={field} />
          </div>

          <button
            type="submit"
            disabled={status === "sending"}
            className="w-full px-6 py-3.5 rounded-xl font-semibold bg-white text-[#0a0f1e] hover:bg-cyan-100 disabled:opacity-60 transition-colors cursor-pointer"
          >
            {status === "sending" ? f.sending : f.send}
          </button>

          <div aria-live="polite">
            {status === "sent" && (
              <p className="flex items-start gap-2 text-emerald-300 text-sm">
                <CheckCircle2 size={18} className="shrink-0 mt-0.5" />
                {f.success}
              </p>
            )}
            {status === "error" && (
              <p className="flex items-start gap-2 text-amber-300 text-sm">
                <AlertCircle size={18} className="shrink-0 mt-0.5" />
                {f.error}
              </p>
            )}
          </div>
          <p className="text-xs text-slate-500">{f.privacy}</p>
        </form>
      </div>
    </section>
  );
}
