/**
 * Eater Design System - Spacing scale
 * From Figma: Spacing/Size 00-05, Spacing/XS, Container/Small
 */
export const spacing = {
  0: 0,
  1: 4,
  2: 8,
  3: 12,
  4: 16,
  5: 16, // XS / Size 05
  xs: 16,
  containerSmall: 16,
} as const;

export type Spacing = typeof spacing;
