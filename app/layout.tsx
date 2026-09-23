import type { Metadata } from "next";
import { cookies } from "next/headers";
import Script from "next/script";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  title: "Encrypteron — Infrastructure, clearly operated",
  description: "Security-minded VPS, object storage, and tunnelled network infrastructure.",
};

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const cookieStore = await cookies();
  const theme = cookieStore.get("theme")?.value === "light" ? "light" : "dark";
  const hasThemeCookie = cookieStore.has("theme");
  const language = cookieStore.get("language")?.value === "fr" ? "fr" : "en";
  const acceptedLegalNotice = cookieStore.get("legal_notice_version")?.value;

  return (
    <html lang="en" className={theme} data-scroll-behavior="smooth" suppressHydrationWarning>
      <body>
        <Script id="system-theme" strategy="beforeInteractive">{`(() => { if (!document.cookie.match(/(?:^|; )theme=(dark|light)(?:;|$)/)) { const theme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"; document.documentElement.classList.remove("dark", "light"); document.documentElement.classList.add(theme); } })();`}</Script>
        <ThemeProvider initialTheme={theme} hasThemeCookie={hasThemeCookie} defaultLanguage={language} acceptedLegalNotice={acceptedLegalNotice}>{children}</ThemeProvider>
      </body>
    </html>
  );
}
