import React from 'react';
import styles from './Sheet.module.css';

export type SheetHeight = 'auto' | 'low' | 'high' | 'full';

export interface SheetProps {
  open: boolean;
  onClose?: () => void;
  height?: SheetHeight;
  title?: React.ReactNode;
  showHeader?: boolean;
  showCloseButton?: boolean;
  children: React.ReactNode;
  className?: string;
  /** Optional footer with primary CTA */
  footer?: React.ReactNode;
}

export const Sheet: React.FC<SheetProps> = ({
  open,
  onClose,
  height = 'auto',
  title,
  showHeader = true,
  showCloseButton = true,
  children,
  className = '',
  footer,
}) => {
  if (!open) return null;

  const classNames = [
    styles.sheet,
    styles[height],
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <>
      <div
        className={styles.backdrop}
        onClick={onClose}
        onKeyDown={(e) => e.key === 'Escape' && onClose?.()}
        role="presentation"
        aria-hidden
      />
      <div
        className={classNames}
        role="dialog"
        aria-modal="true"
        aria-labelledby={title ? 'sheet-title' : undefined}
      >
        {showHeader && (title || showCloseButton) && (
          <div className={styles.header}>
            {title && (
              <h2 id="sheet-title" className={styles.title}>
                {title}
              </h2>
            )}
            {showCloseButton && (
              <button
                type="button"
                className={styles.closeButton}
                onClick={onClose}
                aria-label="Close"
              >
                ×
              </button>
            )}
          </div>
        )}
        <div className={styles.content}>{children}</div>
        {footer && <div className={styles.footer}>{footer}</div>}
      </div>
    </>
  );
};

Sheet.displayName = 'Sheet';
