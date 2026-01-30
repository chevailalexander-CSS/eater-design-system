# Eater Design System

React component library extracted from the **Eater Design System** Figma file. Uses the exact colors, typography, spacing, and radius from Figma.

## Project structure

```
eater-design-system/
├── src/
│   ├── theme/           # Foundation: colors, typography, spacing, radius, shadows
│   │   ├── colors.ts
│   │   ├── typography.ts
│   │   ├── spacing.ts
│   │   ├── radius.ts
│   │   ├── shadows.ts
│   │   ├── tokens.css    # CSS custom properties (design tokens)
│   │   └── index.ts
│   ├── components/      # Primitive & compound components
│   │   ├── Button/
│   │   ├── Input/
│   │   ├── Typography/
│   │   ├── QuantityStepper/
│   │   ├── Card/
│   │   ├── Navigation/
│   │   ├── Sheet/
│   │   └── FormGroup/
│   ├── demo/            # Dev/demo app (Vite)
│   ├── index.ts
│   └── styles.ts
├── package.json
├── vite.config.ts
└── tsconfig.json
```

## Foundation (from Figma)

- **Colors**: Text (1–4, primary, inverse), Shape (primary, primaryWeak, weak, medium), Page, Stroke, Backdrop
- **Typography**: Bayon (titles L/M/S/XS), Inter (H1–H3, P2, P3, Caption 2)
- **Spacing**: 0, 4, 8, 12, 16 px
- **Radius**: small (6), medium (8), large (12), round (999)
- **Shadows**: content, glass

## Components

| Type | Components |
|------|------------|
| **Primitive** | Button (primary/secondary/ghost), Input, Typography, QuantityStepper |
| **Compound** | Card (+ CardHeader, CardMedia, CardContent, CardActions), TopAppBar, Sheet (bottom sheet), FormGroup |

## Usage

### Install

```bash
npm install
npm run build
```

### In your app

1. Import styles once (tokens + component CSS):

```ts
import '@eater/design-system/styles';
```

Or import the main entry (includes tokens):

```ts
import '@eater/design-system';
```

2. Use components:

```tsx
import { Button, Input, Typography, Card, TopAppBar, Sheet } from '@eater/design-system';

<Button variant="primary">Primary</Button>
<Input label="Email" placeholder="you@example.com" />
<Typography variant="titleS">Title</Typography>
```

### Fonts

Load Bayon and Inter (e.g. Google Fonts):

```html
<link href="https://fonts.googleapis.com/css2?family=Bayon&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
```

## Dev

```bash
npm run dev
```

Opens the demo app at `http://localhost:5173` with all components.

## Build

```bash
npm run build
```

Outputs to `dist/`: `index.js`, `styles.js`, `theme/index.js`, `design-system.css`, and `.d.ts` files.
