import type { Metadata } from "next";
import { cookies } from "next/headers";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  title: "Encrypteron — Infrastructure, clearly operated",
  description: "Security-first cloud infrastructure with a transparent, single-server model.",
};

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const cookieStore = await cookies();
  const theme = cookieStore.get("theme")?.value === "light" ? "light" : "dark";
  const hasThemeCookie = cookieStore.has("theme");

  return (
    <html lang="en" className={theme} suppressHydrationWarning>
      <body>
        <ThemeProvider initialTheme={theme} hasThemeCookie={hasThemeCookie}>{children}</ThemeProvider>
      </body>
    </html>
  );
}
