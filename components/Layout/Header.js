import React, { useEffect, useState } from "react";
import Button from "./Button";
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
      <Button
        variant="ghost"
        aria-label={isLight ? "Switch to dark mode" : "Switch to light mode"}
        className="h-10 w-10 px-0 text-brand-light-subtle hover:text-brand-teal dark:text-brand-dark-subtle dark:hover:text-brand-cyan"
        onClick={() => setTheme(isLight ? "dark" : "light")}
      >
        {isLight ? (
          // Sun icon
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-5 w-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
            />
          </svg>
        ) : (
          // Moon icon
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-5 w-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75 9.75 9.75 0 0 1 8.25 6c0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25 9.75 9.75 0 0 0 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
            />
          </svg>
        )}
      </Button>
    );
  }

  return (
    <header className="sticky top-0 z-30 border-b border-brand-light-border bg-brand-light-surface/85 backdrop-blur-xl dark:border-brand-dark-border dark:bg-brand-dark-bg/85">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <div className="text-lg font-bold tracking-tight text-brand-light-text dark:text-brand-dark-text">
          Timothy{" "}
          <span className="text-brand-teal dark:text-brand-cyan">Leong</span>
        </div>

        <div className="flex items-center gap-3">
          <Navbar />
          <ToggleButton />
        </div>
      </div>
    </header>
  );
}