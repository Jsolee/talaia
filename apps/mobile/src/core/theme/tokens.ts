/**
 * Tokens de disseny de Talaia (tema fosc, «Nit catalana»).
 * Font de veritat: docs/design-system.md i els mockups de Figma.
 * TG-113 hi afegeix tipografia, components base i l'indicador de l'índex.
 * Regla: cap pantalla escriu colors, mides o espaiats a mà.
 */
export const colors = {
  nit: '#0E1433',
  card: '#141B42',
  sheet: '#161D45',
  crep: '#28316B',
  linia: '#26306A',
  lluna: '#EEF0F7',
  boira: '#9AA3C7',
  far: '#FFB547',
  ras: '#5FD4C4',
  jus: '#E3C58F',
  tap: '#E0708A',
  pedra: '#D9C4A0',
} as const;

export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
} as const;

export const radii = {
  sm: 8,
  md: 16,
  pill: 999,
} as const;

export const fontSizes = {
  caption: 13,
  body: 16,
  title: 28,
  display: 44,
} as const;

export type ColorToken = keyof typeof colors;
