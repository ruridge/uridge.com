import { h, Fragment } from "preact";
import { useState, useEffect } from "preact/hooks";

const themes = ["light", "dark", "auto"] as const;
type Theme = typeof themes[number];

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme | null>(() => {
    if (import.meta.env.SSR) return null;
    if (localStorage.theme === "dark") return "dark";
    if (localStorage.theme === "light") return "light";
    return "auto";
  });

  useEffect(() => {
    const { classList } = document.documentElement;
    classList.remove(...themes);

    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      classList.add("dark");
    } else {
      classList.remove("dark");
    }
  }, [theme]);

  function handleThemeChange(newTheme: Theme) {
    if (newTheme === "light") {
      // Whenever the user explicitly chooses light mode
      localStorage.theme = "light";
    } else if (newTheme === "dark") {
      // Whenever the user explicitly chooses dark mode
      localStorage.theme = "dark";
    } else if (newTheme === "auto") {
      // Whenever the user explicitly chooses to respect the OS preference
      localStorage.removeItem("theme");
    }
    setTheme(newTheme);
  }

  return (
    <div className="inline-flex rounded-full border border-blue-700 p-[1px]">
      {themes.map((t) => {
        const isActive = t === theme;
        return (
          <label key={t} htmlFor={t}>
            <input
              id={t}
              className="absolute appearance-none"
              type="radio"
              name="theme-toggle"
              value={t}
              autoComplete="off"
              onChange={() => handleThemeChange(t)}
            ></input>
            <div
              className={`min-w-[42px] rounded-full py-[1px] px-2 text-center text-sm capitalize ${
                isActive && "bg-blue-700 text-white"
              }`}
            >
              {t}
            </div>
          </label>
        );
      })}
    </div>
  );
}
