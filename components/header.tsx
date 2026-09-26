"use client";

import Link from "next/link";
import Image from "next/image";
import { navigation } from "@/app/content";
import { useState } from "react";
import { useTheme } from "./theme-provider";

export function Header() {
  const { theme, setTheme, language, setLanguage } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const nextTheme = theme === "dark" ? "light" : "dark";
  const t = language === "fr" ? { products: "Offres", network: "Réseau", principles: "Principes", wiki: "Wiki", soon: "bientôt", enquire: "Contact", menu: "MENU", email: "Contact par e-mail", switch: "Langue", root: "bientôt", theme: `Passer au thème ${nextTheme === "light" ? "clair" : "sombre"}` } : { products: "Products", network: "Network", principles: "Principles", wiki: "Wiki", soon: "soon", enquire: "Enquire", menu: "MENU", email: "Email enquiry", switch: "Language", root: "coming soon", theme: `Switch to ${nextTheme} theme` };
  const path = (href: string) => language === "fr" ? `/fr${href === "/" ? "" : href}` : href;
  const labels: Record<string, string> = { Products: t.products, Network: t.network, Principles: t.principles, Wiki: t.wiki };
  return (
    <header className="site-header">
      <Link href={path("/")} className="brand" aria-label="Encrypteron"><Image src="/assets/encrypteron.png" alt="Encrypteron" width={2172} height={724} priority /></Link>
      <nav aria-label={language === "fr" ? "Navigation principale" : "Main navigation"}>
        {navigation.map((item) => item.disabled
          ? <span className="nav-coming-soon" aria-disabled="true" key={item.label}>{item.label}<small>{t.soon}</small></span>
          : <a href={path(item.href ?? "/")} key={item.href}>{labels[item.label] ?? item.label}</a>)}
      </nav>
      <div className="header-actions">
        <span className="root-control" aria-label={`ROOT ${t.root}`}><b>ROOT</b><small>{t.root}</small></span>
        <label className="header-language"><span className="visually-hidden">{t.switch}</span><select value={language} onChange={(event) => setLanguage(event.target.value as "en" | "fr")} aria-label={t.switch}><option value="fr">FR</option><option value="en">EN</option></select></label>
        <button className="theme-toggle" onClick={() => setTheme(nextTheme)} aria-label={t.theme}>
          <span aria-hidden="true">{theme === "dark" ? "◐" : "◑"}</span>
        </button>
        <a className="button button-small" href={`mailto:mail@encrypteron.com?subject=${encodeURIComponent(language === "fr" ? "Demande de renseignements Encrypteron" : "Encrypteron enquiry")}`}>{t.enquire} <span aria-hidden="true">↗</span></a>
        <button className="mobile-menu-toggle" onClick={() => setMenuOpen((open) => !open)} aria-expanded={menuOpen} aria-controls="mobile-navigation">
          <span>{t.menu}</span><b aria-hidden="true">⌃</b>
        </button>
      </div>
      <div className={`mobile-navigation ${menuOpen ? "open" : ""}`} id="mobile-navigation" role="navigation" aria-label={language === "fr" ? "Navigation mobile" : "Mobile navigation"}>
        {navigation.map((item) => item.disabled
          ? <span className="mobile-disabled" aria-disabled="true" key={item.label}>{item.label}<small>{t.soon}</small></span>
          : <a href={path(item.href ?? "/")} onClick={() => setMenuOpen(false)} key={item.href}>{labels[item.label] ?? item.label}<b aria-hidden="true">↗</b></a>)}
        <span className="mobile-disabled" aria-disabled="true">ROOT<small>{t.root}</small></span>
        <a className="mobile-enquiry" href="mailto:mail@encrypteron.com">{t.email} <b aria-hidden="true">↗</b></a>
      </div>
    </header>
  );
}
