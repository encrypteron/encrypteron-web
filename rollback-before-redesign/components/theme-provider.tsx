"use client";

import { createContext, useContext, useEffect, useState } from "react";

type Theme = "dark" | "light";
type ThemeContextValue = { theme: Theme; setTheme: (theme: Theme) => void };
const ThemeContext = createContext<ThemeContextValue | null>(null);

function writeThemeCookie(theme: Theme) {
  document.cookie = `theme=${theme}; path=/; max-age=31536000; samesite=lax`;
}

export function ThemeProvider({
  children,
  initialTheme,
  hasThemeCookie,
}: Readonly<{ children: React.ReactNode; initialTheme: Theme; hasThemeCookie: boolean }>) {
  const [theme, setThemeState] = useState<Theme>(initialTheme);
  const [showWelcome, setShowWelcome] = useState(!hasThemeCookie);

  useEffect(() => {
    document.documentElement.classList.remove("dark", "light");
    document.documentElement.classList.add(theme);
  }, [theme]);

  const setTheme = (nextTheme: Theme) => {
    setThemeState(nextTheme);
    writeThemeCookie(nextTheme);
  };

  const selectWelcomeTheme = (nextTheme: Theme) => {
    setTheme(nextTheme);
    setShowWelcome(false);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
      {showWelcome && <WelcomeScreen theme={theme} onSelect={selectWelcomeTheme} />}
    </ThemeContext.Provider>
  );
}

function WelcomeScreen({ theme, onSelect }: { theme: Theme; onSelect: (theme: Theme) => void }) {
  return (
    <section className="welcome" aria-labelledby="welcome-title">
      <div className="welcome-grid" aria-hidden="true" />
      <div className="welcome-content">
        <p className="eyebrow"><span className="pink-dot" /> Encrypteron</p>
        <h1 id="welcome-title">Choose your interface.</h1>
        <p className="welcome-copy">A focused environment for infrastructure, security, and the work between them.</p>
        <div className="theme-options" role="group" aria-label="Choose colour theme">
          <button className={`theme-option ${theme === "dark" ? "selected" : ""}`} onClick={() => onSelect("dark")}>
            <span className="theme-swatch dark-swatch" aria-hidden="true" />
            <span><strong>Dark</strong><small>Default interface</small></span>
          </button>
          <button className={`theme-option ${theme === "light" ? "selected" : ""}`} onClick={() => onSelect("light")}>
            <span className="theme-swatch light-swatch" aria-hidden="true" />
            <span><strong>Light</strong><small>Bright interface</small></span>
          </button>
        </div>
      </div>
    </section>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within ThemeProvider");
  return context;
}
