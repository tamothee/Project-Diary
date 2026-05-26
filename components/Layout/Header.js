import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Navbar from "./Navbar";

export default function Header() {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  function ToggleButton() {
    const currentTheme = theme === "system" ? systemTheme : theme;

    if (!mounted) return null;

    const isLight = currentTheme === "light";

    return (
      <button
        type="button"
        aria-label={isLight ? "Switch to dark mode" : "Switch to light mode"}
        onClick={() => setTheme(isLight ? "dark" : "light")}
        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-brand-light-border bg-brand-light-surface text-brand-teal shadow-sm transition hover:bg-brand-light-muted hover:text-teal-600 focus:outline-none focus:ring-2 focus:ring-brand-teal focus:ring-offset-2 focus:ring-offset-brand-light-bg dark:border-brand-dark-border dark:bg-brand-dark-surface dark:text-brand-cyan dark:hover:bg-brand-dark-muted dark:hover:text-cyan-300 dark:focus:ring-brand-cyan dark:focus:ring-offset-brand-dark-bg sm:h-11 sm:w-11"
      >
        {isLight ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="block h-5 w-5 sm:h-6 sm:w-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="block h-5 w-5 sm:h-6 sm:w-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75 9.75 9.75 0 0 1 8.25 6c0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25 9.75 9.75 0 0 0 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
            />
          </svg>
        )}
      </button>
    );
  }

  return (
    <header className="sticky top-0 z-30 border-b border-brand-light-border bg-brand-light-surface/85 backdrop-blur-xl dark:border-brand-dark-border dark:bg-brand-dark-bg/85">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-3 sm:flex-nowrap sm:px-6 sm:py-4">
        <div className="min-w-0 shrink-0 text-base font-bold tracking-tight text-brand-light-text dark:text-brand-dark-text sm:text-lg">
          Timothy{" "}
          <span className="text-brand-teal dark:text-brand-cyan">Leong</span>
        </div>

        <div className="flex min-w-0 flex-1 items-center justify-end gap-2 sm:flex-none sm:gap-3">
          <Navbar />
          <ToggleButton />
        </div>
      </div>
    </header>
  );
}