"use client";

import Link from "next/link";
import { useTheme } from "./theme-provider";
import { BrandLogo } from "./brand-logo";

export function Footer() {
  const { language } = useTheme();
  const fr = language === "fr";
  const path = (href: string) => fr ? `/fr${href}` : href;
  return (
    <footer className="site-footer">
      <div className="signature">
        <p>{fr ? "Bien cordialement," : "Best regards,"}</p>
        <p className="signature-brand"><BrandLogo /></p>
        <p className="signature-tagline">{fr ? "Une infrastructure exploitée en toute clarté." : "Infrastructure, clearly operated."}</p>
        <div className="pink-rule" />
        <a href="mailto:mail@encrypteron.com">mail@encrypteron.com</a>
        <a href="https://encrypteron.com">encrypteron.com</a>
      </div>
      <div className="footer-bottom"><span>© {new Date().getFullYear()} Encrypteron</span><div><Link href={path("/privacy")}>{fr ? "Confidentialité" : "Privacy"}</Link><Link href={path("/terms")}>{fr ? "Conditions" : "Terms"}</Link><Link href={path("/imprint")}>{fr ? "Mentions légales / Contact" : "Imprint / Contact"}</Link></div></div>
    </footer>
  );
}
