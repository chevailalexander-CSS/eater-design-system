import React from 'react';
import styles from './TopAppBar.module.css';

export interface TopAppBarProps {
  title?: React.ReactNode;
  leading?: React.ReactNode;
  trailing?: React.ReactNode;
  variant?: 'default' | 'glass';
  className?: string;
  children?: React.ReactNode;
}

export const TopAppBar: React.FC<TopAppBarProps> = ({
  title,
  leading,
  trailing,
  variant = 'default',
  className = '',
  children,
}) => {
  const classNames = [
    styles.bar,
    variant === 'glass' ? styles.glass : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <header className={classNames} role="banner">
      {leading && <div className={styles.leading}>{leading}</div>}
      {title && <div className={styles.title}>{title}</div>}
      {trailing && <div className={styles.trailing}>{trailing}</div>}
      {children}
    </header>
  );
};

TopAppBar.displayName = 'TopAppBar';
