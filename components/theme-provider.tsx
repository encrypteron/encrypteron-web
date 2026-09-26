"use client";

import { createContext, useContext, useEffect, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { LEGAL_ACKNOWLEDGEMENT_VERSION } from "@/app/legal-constants";

type Theme = "dark" | "light";
type Language = "en" | "fr";
type ThemeContextValue = { theme: Theme; setTheme: (theme: Theme) => void; language: Language; setLanguage: (language: Language) => void };
const ThemeContext = createContext<ThemeContextValue | null>(null);

function writeThemeCookie(theme: Theme) {
  const secure = window.location.protocol === "https:" ? "; secure" : "";
  document.cookie = `theme=${theme}; path=/; max-age=31536000; samesite=lax${secure}`;
}

export function ThemeProvider({
  children,
  initialTheme,
  hasThemeCookie,
  defaultLanguage = "en",
  acceptedLegalNotice,
}: Readonly<{ children: React.ReactNode; initialTheme: Theme; hasThemeCookie: boolean; defaultLanguage?: Language; acceptedLegalNotice?: string }>) {
  const pathname = usePathname();
  const router = useRouter();
  const routeLanguage: Language = pathname === "/fr" || pathname.startsWith("/fr/") ? "fr" : "en";
  const isLegalPage = pathname === "/terms" || pathname === "/privacy" || pathname === "/fr/terms" || pathname === "/fr/privacy";
  const [acknowledged, setAcknowledged] = useState(false);
  const acknowledgementRef = useRef<HTMLInputElement>(null);
  const initialPathRef = useRef(pathname);
  const [language, setLanguageState] = useState<Language>(routeLanguage === "fr" ? "fr" : defaultLanguage);
  const [acceptedVersion, setAcceptedVersion] = useState(acceptedLegalNotice);
  // Start from the same server-provided value during hydration. The system
  // preference is applied in an effect after hydration; before-paint CSS still
  // prevents a flash on the document itself.
  const [theme, setThemeState] = useState<Theme>(initialTheme);
  const showWelcome = acceptedVersion !== `${LEGAL_ACKNOWLEDGEMENT_VERSION}:${language}`;

  useEffect(() => {
    if (pathname !== initialPathRef.current) {
      setLanguageState(routeLanguage);
      setAcknowledged(false);
    }
  }, [pathname, routeLanguage]);

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  useEffect(() => {
    if (defaultLanguage === "fr" && !pathname.startsWith("/fr") && acceptedLegalNotice === `${LEGAL_ACKNOWLEDGEMENT_VERSION}:fr`) {
      router.replace(`/fr${pathname === "/" ? "" : pathname}`);
    }
  // This redirect is for an already-accepted French preference on an English URL.
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (hasThemeCookie) return;
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const syncSystemTheme = () => setThemeState(mediaQuery.matches ? "dark" : "light");
    syncSystemTheme();
    mediaQuery.addEventListener("change", syncSystemTheme);
    return () => mediaQuery.removeEventListener("change", syncSystemTheme);
  }, [hasThemeCookie]);

  useEffect(() => {
    document.documentElement.classList.remove("dark", "light");
    document.documentElement.classList.add(theme);
  }, [theme]);

  const setTheme = (nextTheme: Theme) => {
    setThemeState(nextTheme);
    writeThemeCookie(nextTheme);
  };

  const persistLanguage = (nextLanguage: Language) => {
    const secure = window.location.protocol === "https:" ? "; secure" : "";
    document.cookie = `language=${nextLanguage}; path=/; max-age=31536000; samesite=lax${secure}`;
  };

  const setLanguage = (nextLanguage: Language) => {
    if (nextLanguage !== language) setAcknowledged(false);
    setLanguageState(nextLanguage);
    persistLanguage(nextLanguage);
    let basePath = pathname.replace(/^\/fr(?=\/|$)/, "") || "/";
    if (basePath.startsWith("/wiki/") && nextLanguage === "fr") basePath = "/wiki";
    if (basePath.startsWith("/wiki/") && nextLanguage === "en") basePath = "/wiki";
    router.push(nextLanguage === "fr" ? `/fr${basePath === "/" ? "" : basePath}` : basePath);
  };

  const selectWelcomeTheme = (nextTheme: Theme) => {
    setThemeState(nextTheme);
  };

  const selectWelcomeLanguage = (nextLanguage: Language) => {
    if (nextLanguage !== language) setAcknowledged(false);
    setLanguageState(nextLanguage);
  };

  const acceptAndEnter = () => {
    if (!acknowledged) return;
    const secure = window.location.protocol === "https:" ? "; secure" : "";
    document.cookie = `legal_notice_version=${LEGAL_ACKNOWLEDGEMENT_VERSION}:${language}; path=/; max-age=31536000; samesite=lax${secure}`;
    persistLanguage(language);
    writeThemeCookie(theme);
    setAcceptedVersion(`${LEGAL_ACKNOWLEDGEMENT_VERSION}:${language}`);
    const basePath = pathname.replace(/^\/fr(?=\/|$)/, "") || "/";
    router.replace(language === "fr" ? `/fr${basePath === "/" ? "" : basePath}` : basePath);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, language, setLanguage }}>
      {(!showWelcome || isLegalPage) && children}
      {showWelcome && !isLegalPage && <WelcomeScreen language={language} onSelectLanguage={selectWelcomeLanguage} theme={theme} onSelectTheme={selectWelcomeTheme} acknowledged={acknowledged} onAcknowledge={setAcknowledged} onContinue={acceptAndEnter} acknowledgementRef={acknowledgementRef} />}
    </ThemeContext.Provider>
  );
}

function WelcomeScreen({ language, onSelectLanguage, theme, onSelectTheme, acknowledged, onAcknowledge, onContinue, acknowledgementRef }: { language: Language; onSelectLanguage: (language: Language) => void; theme: Theme; onSelectTheme: (theme: Theme) => void; acknowledged: boolean; onAcknowledge: (value: boolean) => void; onContinue: () => void; acknowledgementRef: React.RefObject<HTMLInputElement | null> }) {
  useEffect(() => acknowledgementRef.current?.focus(), [acknowledgementRef]);

  const copy = language === "fr" ? {
    title: "Personnalisez votre accueil.", description: "Choisissez une langue et un thème, puis prenez connaissance des conditions et de la notice de confidentialité avant d’accéder au site.",
    language: "Langue", theme: "Thème", dark: "Sombre", light: "Clair", darkHint: "Thème sombre", lightHint: "Thème clair",
    acknowledgement: <>J’accepte les <Link href="/fr/terms">Conditions d’utilisation</Link> et confirme avoir lu la <Link href="/fr/privacy">Notice de confidentialité</Link>.</>,
    note: "Cette confirmation est mémorisée dans un cookie nécessaire. Elle ne vaut pas consentement au suivi facultatif. Un contrat de service est conclu séparément si vous commandez un service.",
    button: "Accéder au site",
  } : {
    title: "Set up your welcome.", description: "Choose a language and theme, then review the Terms and Privacy Notice before entering the site.",
    language: "Language", theme: "Theme", dark: "Dark", light: "Light", darkHint: "Dark theme", lightHint: "Light theme",
    acknowledgement: <>I agree to the <Link href="/terms">Terms of Use</Link> and confirm that I have read the <Link href="/privacy">Privacy Notice</Link>.</>,
    note: "This acknowledgement is remembered in a necessary cookie. It is not consent to optional tracking. A service contract is agreed separately if you order a service.",
    button: "Enter the website",
  };

  return (
    <section className="welcome" role="dialog" aria-modal="true" aria-labelledby="welcome-title" aria-describedby="welcome-copy">
      <div className="welcome-grid" aria-hidden="true" />
      <div className="welcome-content">
        <p className="eyebrow"><span className="pink-dot" /> Encrypteron</p>
        <h1 id="welcome-title">{copy.title}</h1>
        <p id="welcome-copy" className="welcome-copy">{copy.description}</p>
        <p className="welcome-choice-label">{copy.language}</p>
        <div className="language-options" role="group" aria-label={copy.language}>
          <button type="button" aria-pressed={language === "fr"} className={`language-option ${language === "fr" ? "selected" : ""}`} onClick={() => onSelectLanguage("fr")}>Français</button>
          <button type="button" aria-pressed={language === "en"} className={`language-option ${language === "en" ? "selected" : ""}`} onClick={() => onSelectLanguage("en")}>English</button>
        </div>
        <p className="welcome-choice-label">{copy.theme}</p>
        <div className="theme-options" role="group" aria-label={copy.theme}>
          <button type="button" aria-pressed={theme === "dark"} className={`theme-option ${theme === "dark" ? "selected" : ""}`} onClick={() => onSelectTheme("dark")}>
            <span className="theme-swatch dark-swatch" aria-hidden="true" />
            <span><strong>{copy.dark}</strong><small>{copy.darkHint}</small></span>
          </button>
          <button type="button" aria-pressed={theme === "light"} className={`theme-option ${theme === "light" ? "selected" : ""}`} onClick={() => onSelectTheme("light")}>
            <span className="theme-swatch light-swatch" aria-hidden="true" />
            <span><strong>{copy.light}</strong><small>{copy.lightHint}</small></span>
          </button>
        </div>
        <label className="legal-acknowledgement">
          <input ref={acknowledgementRef} type="checkbox" checked={acknowledged} onChange={(event) => onAcknowledge(event.target.checked)} />
          <span>{copy.acknowledgement}</span>
        </label>
        <p className="acknowledgement-note">{copy.note}</p>
        <button className="button welcome-continue" type="button" disabled={!acknowledged} onClick={onContinue}>{copy.button} <span aria-hidden="true">↗</span></button>
      </div>
    </section>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within ThemeProvider");
  return context;
}
