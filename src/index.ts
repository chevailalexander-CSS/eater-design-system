/**
 * Eater Design System - React component library
 * Import once in your app: import '@eater/design-system';
 * Or import styles only: import '@eater/design-system/styles';
 */
import './theme/tokens.css';

// Foundation
export { theme, colors, spacing, radius, shadows, fontFamilies, fontWeights, typeScale } from './theme';
export type { Theme, Colors, Spacing, Radius, Shadows, TypeScale } from './theme';

// Primitive components
export { Button } from './components/Button';
export type { ButtonProps, ButtonVariant, ButtonSize } from './components/Button';
export { Input } from './components/Input';
export type { InputProps } from './components/Input';
export { Typography } from './components/Typography';
export type { TypographyProps, TypographyVariant } from './components/Typography';
export { QuantityStepper } from './components/QuantityStepper';
export type { QuantityStepperProps } from './components/QuantityStepper';

// Compound components
export { Card, CardHeader, CardMedia, CardContent, CardActions } from './components/Card';
export type { CardProps } from './components/Card';
export { TopAppBar } from './components/Navigation';
export type { TopAppBarProps } from './components/Navigation';
export { Sheet } from './components/Sheet';
export type { SheetProps, SheetHeight } from './components/Sheet';
export { FormGroup } from './components/FormGroup';
export type { FormGroupProps } from './components/FormGroup';
