import React from 'react';
import styles from './Card.module.css';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'elevated' | 'outlined' | 'filled';
  padding?: 'none' | 'small' | 'medium' | 'large';
  children: React.ReactNode;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  (
    {
      variant = 'elevated',
      padding = 'medium',
      className = '',
      children,
      ...props
    },
    ref
  ) => {
    const classNames = [
      styles.card,
      styles[variant],
      styles[`padding_${padding}`],
      className,
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <div ref={ref} className={classNames} {...props}>
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';

export interface CardHeaderProps {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  action?: React.ReactNode;
  className?: string;
}

export const CardHeader: React.FC<CardHeaderProps> = ({
  title,
  subtitle,
  action,
  className = '',
}) => (
  <div className={`${styles.header} ${className}`}>
    <div className={styles.headerText}>
      <div className={styles.title}>{title}</div>
      {subtitle && <div className={styles.subtitle}>{subtitle}</div>}
    </div>
    {action && <div className={styles.action}>{action}</div>}
  </div>
);

export interface CardMediaProps {
  src?: string;
  alt?: string;
  children?: React.ReactNode;
  className?: string;
}

export const CardMedia: React.FC<CardMediaProps> = ({
  src,
  alt = '',
  children,
  className = '',
}) => (
  <div className={`${styles.media} ${className}`}>
    {src ? <img src={src} alt={alt} className={styles.mediaImage} /> : children}
  </div>
);

export interface CardContentProps {
  children: React.ReactNode;
  className?: string;
}

export const CardContent: React.FC<CardContentProps> = ({ children, className = '' }) => (
  <div className={`${styles.content} ${className}`}>{children}</div>
);

export interface CardActionsProps {
  children: React.ReactNode;
  className?: string;
}

export const CardActions: React.FC<CardActionsProps> = ({ children, className = '' }) => (
  <div className={`${styles.actions} ${className}`}>{children}</div>
);
