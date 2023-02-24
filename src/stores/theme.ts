import { atom } from "nanostores";

export const THEMES = ["light", "dark", "auto"] as const;
export type Theme = (typeof THEMES)[number];

export const theme = atom<Theme | null>(null);
