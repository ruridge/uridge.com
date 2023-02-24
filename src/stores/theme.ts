import { atom } from "nanostores";

export const themes = ["light", "dark", "auto"] as const;
export type Theme = (typeof themes)[number];

export const theme = atom<Theme | null>(null);
