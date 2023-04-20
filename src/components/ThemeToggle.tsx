import { useEffect, useRef } from "preact/hooks";
import { useStore } from "@nanostores/preact";
import { theme, THEMES } from "../stores/theme";

// update dark mode class and theme color
function update() {
  if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    document.documentElement.classList.add("dark");
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute("content", "#18181B");
  } else {
    document.documentElement.classList.remove("dark");
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute("content", "#ffffff");
  }
}

function useTheme() {
  const $theme = useStore(theme);
  const initial = useRef(true);

  // set initial app theme from localStorage
  useEffect(() => {
    const localTheme = localStorage.theme;
    if (localTheme === "light" || localTheme === "dark") {
      theme.set(localTheme);
    } else {
      theme.set("auto");
    }
  }, []);

  // sync localStorage with app theme when it changes
  useEffect(() => {
    if ($theme === "auto") {
      localStorage.removeItem("theme");
    } else if ($theme === "light" || $theme === "dark") {
      localStorage.theme = $theme;
    }
    if (initial.current) {
      initial.current = false;
    } else {
      update();
    }
  }, [$theme]);

  // update app theme when system theme changes
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    mediaQuery.addEventListener("change", update);

    return () => {
      mediaQuery.removeEventListener("change", update);
    };
  }, []);

  return [$theme, theme.set] as const;
}

export function ThemeToggle() {
  const [theme, setTheme] = useTheme();

  return (
    <div className="inline-flex rounded-full border border-[#0071e3] p-[1px]">
      {THEMES.map((t) => {
        const isActive = t === theme;
        return (
          <label key={t}>
            <input
              className="absolute appearance-none"
              type="radio"
              name="theme-toggle"
              value={t}
              autoComplete="off"
              onChange={() => setTheme(t)}
            ></input>
            <div
              className={`min-w-[42px] rounded-full border px-2 py-[1px] text-center text-xs capitalize  ${
                isActive
                  ? "border-[#0071e3] bg-[#0071e3] text-white"
                  : "border-transparent text-[#0071e3]"
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
