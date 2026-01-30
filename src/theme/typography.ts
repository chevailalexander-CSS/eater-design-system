/**
 * Eater Design System - Typography
 * From Figma: Bayon (titles), Inter (body/UI)
 * Sizes and line-heights from Figma variables
 */
export const fontFamilies = {
  bayon: '"Bayon", sans-serif',
  inter: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
} as const;

export const fontWeights = {
  regular: 400,
  medium: 500,
  semiBold: 600,
  bold: 700,
} as const;

// Mobile-first scale from Figma variables
export const typeScale = {
  // Titles (Bayon)
  titleL: {
    fontFamily: fontFamilies.bayon,
    fontSize: 32,
    fontWeight: fontWeights.regular,
    lineHeight: 1.2,
    letterSpacing: 0,
  },
  titleM: {
    fontFamily: fontFamilies.bayon,
    fontSize: 28,
    fontWeight: fontWeights.regular,
    lineHeight: 1.2,
    letterSpacing: 0,
  },
  titleS: {
    fontFamily: fontFamilies.bayon,
    fontSize: 24,
    fontWeight: fontWeights.regular,
    lineHeight: 1.2,
    letterSpacing: 0,
  },
  titleXS: {
    fontFamily: fontFamilies.bayon,
    fontSize: 20,
    fontWeight: fontWeights.regular,
    lineHeight: 1.2,
    letterSpacing: 0,
  },
  // Headings (Inter)
  h1Bold: {
    fontFamily: fontFamilies.inter,
    fontSize: 18,
    fontWeight: fontWeights.semiBold,
    lineHeight: 1.3,
    letterSpacing: 0,
  },
  h2Medium: {
    fontFamily: fontFamilies.inter,
    fontSize: 16,
    fontWeight: fontWeights.medium,
    lineHeight: 1.3,
    letterSpacing: 0,
  },
  h3Medium: {
    fontFamily: fontFamilies.inter,
    fontSize: 14,
    fontWeight: fontWeights.medium,
    lineHeight: 1.3,
    letterSpacing: 0,
  },
  h3Bold: {
    fontFamily: fontFamilies.inter,
    fontSize: 14,
    fontWeight: fontWeights.semiBold,
    lineHeight: 1.3,
    letterSpacing: 0,
  },
  // Body (Inter)
  p2: {
    fontFamily: fontFamilies.inter,
    fontSize: 16,
    fontWeight: fontWeights.regular,
    lineHeight: 1.3,
    letterSpacing: 0,
  },
  p3: {
    fontFamily: fontFamilies.inter,
    fontSize: 14,
    fontWeight: fontWeights.regular,
    lineHeight: 1.3,
    letterSpacing: 0,
  },
  caption2: {
    fontFamily: fontFamilies.inter,
    fontSize: 12,
    fontWeight: fontWeights.medium,
    lineHeight: 1.3,
    letterSpacing: 0,
  },
} as const;

export type TypeScale = typeof typeScale;
