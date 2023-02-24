import { useEffect, useRef } from "preact/hooks";
import { useStore } from "@nanostores/preact";
import { theme, themes } from "../stores/theme";

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
      ?.setAttribute("content", "#0B1120");
  } else {
    document.documentElement.classList.remove("dark");
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute("content", "#f8fafc");
  }
}

function useTheme() {
  const $theme = useStore(theme);
  const initial = useRef(true);

  useEffect(() => {
    const localTheme = localStorage.theme;
    if (localTheme === "light" || localTheme === "dark") {
      theme.set(localTheme);
    } else {
      theme.set("auto");
    }
  }, []);

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

  return [$theme, theme.set] as const;
}

export function ThemeToggle() {
  const [theme, setTheme] = useTheme();

  return (
    <div className="inline-flex rounded-full border border-[#0071e3] p-[1px]">
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
              onChange={() => setTheme(t)}
            ></input>
            <div
              className={`min-w-[42px] rounded-full border py-[1px] px-2 text-center text-xs capitalize  ${
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
