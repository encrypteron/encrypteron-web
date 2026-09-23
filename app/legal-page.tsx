"use client";

import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { useTheme } from "@/components/theme-provider";

type LegalPageProps = { label: string; title: string; children: React.ReactNode };

export function LegalPage({ label, title, children }: LegalPageProps) {
  const { language } = useTheme();
  return <><Header /><main lang={language} className="legal-page"><p className="eyebrow">{label}</p><h1>{title}</h1><div className="legal-notice"><span className="pink-dot" /> {language === "fr" ? "PROJET — les informations signalées sur l’entreprise, l’hébergement, la conservation et le droit applicable doivent être confirmées avant toute activité commerciale." : "DRAFT — the marked business, hosting, retention, and jurisdiction details must be confirmed before commercial launch."}</div><div className="legal-copy">{children}</div></main><Footer /></>;
}
