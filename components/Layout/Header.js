import React, { useEffect, useState } from "react";
import Button from "./Button";
import { useTheme } from "next-themes";
import Image from "next/image";

export default function Header() {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  function ToggleButton() {
    const currentTheme = theme === "system" ? systemTheme : theme;

    if(!mounted) return null;

    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }

    if (currentTheme === "light") {
      return (
        <Button
          className="bg-gray-400 text-yellow-400"
          onClick={() => setTheme("dark")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
            />
          </svg>
        </Button>
      );
    } else {
      return (
        <Button className="bg-gray-500" onClick={() => setTheme("light")}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
            />
          </svg>
        </Button>
      );
    }
  }

  return (
    <header>
      <div className="pt-3 text-xl font-bold flex justify-center items-center">
        <div className="mr-auto invisible">div</div>
        <div className="inline-flex items-center">
          <Image alt="" src={"/bongo_cat_mini.png"} width={100} height={60} unoptimized/>
          Project Diary
        </div>
        <div className="ml-auto">
          <ToggleButton />
        </div>
      </div>
      <hr className="border-black dark:border-white" />
    </header>
  );
}
