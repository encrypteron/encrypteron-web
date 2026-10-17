import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { default: "Infrastructure cloud, en toute clarté", template: "%s — Encrypteron" },
  description: "Encrypteron est un projet personnel en France. VPS et stockage objet en préparation, pas encore disponibles.",
};

export default function FrenchLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <div lang="fr" className="locale-fr">{children}</div>;
}
