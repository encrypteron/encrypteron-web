import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { default: "Infrastructure cloud, en toute clarté", template: "%s — Encrypteron" },
  description: "Serveurs privés virtuels, stockage objet et réseau par tunnel.",
};

export default function FrenchLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <div lang="fr" className="locale-fr">{children}</div>;
}
