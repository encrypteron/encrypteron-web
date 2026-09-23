import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

type LegalPageProps = { label: string; title: string; children: React.ReactNode };

export function LegalPage({ label, title, children }: LegalPageProps) {
  return <><Header /><main className="legal-page"><p className="eyebrow">{label}</p><h1>{title}</h1><div className="legal-notice"><span className="pink-dot" /> DEVELOPMENT PLACEHOLDER — official company details and final legal text are required before public launch.</div><div className="legal-copy">{children}</div></main><Footer /></>;
}
