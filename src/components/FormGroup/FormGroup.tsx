import React from 'react';
import styles from './FormGroup.module.css';

export interface FormGroupProps {
  label?: React.ReactNode;
  description?: React.ReactNode;
  error?: React.ReactNode;
  required?: boolean;
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export const FormGroup: React.FC<FormGroupProps> = ({
  label,
  description,
  error,
  required = false,
  children,
  className = '',
  id: idProp,
}) => {
  const id = idProp ?? `eater-form-group-${React.useId()}`;

  return (
    <div className={`${styles.group} ${className}`} id={id}>
      {label && (
        <span className={styles.label}>
          {label}
          {required && <span className={styles.required} aria-hidden> *</span>}
        </span>
      )}
      {description && <p className={styles.description}>{description}</p>}
      <div className={styles.control}>{children}</div>
      {error && (
        <p className={styles.error} role="alert">
          {error}
        </p>
      )}
    </div>
  );
};

FormGroup.displayName = 'FormGroup';
