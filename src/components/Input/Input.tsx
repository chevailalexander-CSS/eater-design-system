import React from 'react';
import styles from './Input.module.css';

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string;
  message?: string;
  error?: boolean;
  size?: 'medium' | 'large';
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      message,
      error = false,
      size = 'medium',
      className = '',
      id: idProp,
      ...props
    },
    ref
  ) => {
    const id = idProp ?? `eater-input-${React.useId()}`;
    const classNames = [
      styles.wrapper,
      error ? styles.error : '',
      className,
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <div className={classNames}>
        {label && (
          <label htmlFor={id} className={styles.label}>
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={id}
          className={styles.input}
          data-size={size}
          aria-invalid={error}
          aria-describedby={message ? `${id}-message` : undefined}
          {...props}
        />
        {message && (
          <span id={`${id}-message`} className={styles.message} role={error ? 'alert' : undefined}>
            {message}
          </span>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';
