/**
 * Eater Design System - Colors
 * Extracted from Figma variables (exact values)
 */
export const colors = {
  // Text
  text: {
    1: '#000000',
    2: '#000000cc',
    3: '#000000a6',
    4: '#0000007a',
    primary: '#ff4e2b',
    inverse: '#ffffff',
    neutral: '#3d3d3d',
    standard: '#6c6c6c',
    light: '#817d77',
  },
  // Shape / Surfaces
  shape: {
    primary: '#ff4e2b',
    primaryWeak: '#fae9e7',
    weak: '#0000000f',
    medium: '#0000001f',
    white: '#ffffff',
  },
  // Page backgrounds
  page: {
    white: '#ffffff',
    grey: '#f2f2f2',
  },
  // Strokes / Borders
  stroke: {
    weak: '#00000014',
    medium: '#00000029',
  },
  // Semantic
  semantic: {
    textNeutral: '#3d3d3d',
    bgNeutral: '#1a1a1a14',
  },
  // Static (legacy)
  static: {
    background: '#ffffff',
    textStandard: '#6c6c6c',
    textStrong: '#000000',
  },
  // Brand / Aliases
  black: '#23221e',
  white: '#fdfcfc',
  orange: '#ff4e2b',
  darkBrown: '#4f4131',
  darkGrey: '#e5e1db',
  grey: '#D9D9D9',
  // Backdrop (modals)
  backdrop: {
    strong: '#00000080',
  },
} as const;

export type Colors = typeof colors;
