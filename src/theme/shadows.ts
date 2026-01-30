/**
 * Eater Design System - Shadows & effects
 * From Figma: Mobile/Shadow Content, Mobile/Glass Navigation
 */
export const shadows = {
  content: '0 2px 8px 0 rgba(0, 0, 0, 0.06)', // DROP_SHADOW #0000000F, offset (0,2), radius 8
  glass: '0 4px 32px 0 rgba(0, 0, 0, 0.2)', // DROP_SHADOW #00000033, offset (0,4), radius 32
} as const;

export type Shadows = typeof shadows;
