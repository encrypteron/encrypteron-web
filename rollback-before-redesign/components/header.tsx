"use client";

import Link from "next/link";
import { navigation } from "@/app/content";
import { useTheme } from "./theme-provider";

export function Header() {
  const { theme, setTheme } = useTheme();
  const nextTheme = theme === "dark" ? "light" : "dark";
  return (
    <header className="site-header">
      <Link href="/" className="brand" aria-label="Encrypteron home"><span className="pink-dot" />ENCRYPTERON</Link>
      <nav aria-label="Main navigation">
        {navigation.map((item) => item.disabled
          ? <span className="nav-coming-soon" aria-disabled="true" key={item.label}>{item.label}<small>soon</small></span>
          : <a href={item.href} key={item.href}>{item.label}</a>)}
      </nav>
      <div className="header-actions">
        <span className="root-control" aria-label="ROOT control panel coming soon"><b>ROOT</b><small>coming soon</small></span>
        <button className="theme-toggle" onClick={() => setTheme(nextTheme)} aria-label={`Switch to ${nextTheme} theme`}>
          <span aria-hidden="true">{theme === "dark" ? "◐" : "◑"}</span>
        </button>
        <a className="button button-small" href="mailto:mail@encrypteron.com">Enquire <span aria-hidden="true">↗</span></a>
      </div>
    </header>
  );
}
