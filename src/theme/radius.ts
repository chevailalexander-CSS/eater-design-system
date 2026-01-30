/**
 * Eater Design System - Border radius
 * From Figma: Control/Small (6), Control/Large (8), Control/Round (999)
 */
export const radius = {
  none: 0,
  small: 6,
  medium: 8,
  large: 12,
  round: 999,
} as const;

export type Radius = typeof radius;
