import React from 'react';
import styles from './Typography.module.css';

export type TypographyVariant =
  | 'titleL'
  | 'titleM'
  | 'titleS'
  | 'titleXS'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'body1'
  | 'body2'
  | 'caption';

type ElementMap = {
  titleL: 'h1';
  titleM: 'h2';
  titleS: 'h3';
  titleXS: 'h4';
  h1: 'h1';
  h2: 'h2';
  h3: 'h3';
  body1: 'p';
  body2: 'p';
  caption: 'span';
};

const defaultElement: ElementMap = {
  titleL: 'h1',
  titleM: 'h2',
  titleS: 'h3',
  titleXS: 'h4',
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  body1: 'p',
  body2: 'p',
  caption: 'span',
};

export interface TypographyProps {
  variant?: TypographyVariant;
  as?: keyof JSX.IntrinsicElements;
  children: React.ReactNode;
  className?: string;
  color?: 'default' | 'primary' | 'secondary' | 'inverse';
}

export const Typography = React.forwardRef<HTMLElement, TypographyProps>(
  (
    {
      variant = 'body1',
      as,
      children,
      className = '',
      color = 'default',
      ...props
    },
    ref
  ) => {
    const Component = (as ?? defaultElement[variant]) as keyof JSX.IntrinsicElements;
    const classNames = [
      styles.typography,
      styles[variant],
      color !== 'default' ? styles[`color_${color}`] : '',
      className,
    ]
      .filter(Boolean)
      .join(' ');

    return React.createElement(
      Component,
      { ref: ref as React.Ref<HTMLElement>, className: classNames, ...props },
      children
    );
  }
);

Typography.displayName = 'Typography';
