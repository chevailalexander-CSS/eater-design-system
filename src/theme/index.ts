/**
 * Eater Design System - Theme
 * Single export for colors, typography, spacing, radius, shadows
 */
export { colors } from './colors';
export type { Colors } from './colors';
export { fontFamilies, fontWeights, typeScale } from './typography';
export type { TypeScale } from './typography';
export { spacing } from './spacing';
export type { Spacing } from './spacing';
export { radius } from './radius';
export type { Radius } from './radius';
export { shadows } from './shadows';
export type { Shadows } from './shadows';

import { colors } from './colors';
import { typeScale, fontFamilies } from './typography';
import { spacing } from './spacing';
import { radius } from './radius';
import { shadows } from './shadows';

export const theme = {
  colors,
  typography: typeScale,
  fontFamilies,
  spacing,
  radius,
  shadows,
} as const;

export type Theme = typeof theme;
