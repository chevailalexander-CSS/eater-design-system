import React from 'react';
import styles from './QuantityStepper.module.css';

export interface QuantityStepperProps {
  value: number;
  min?: number;
  max?: number;
  onChange: (value: number) => void;
  disabled?: boolean;
  'aria-label'?: string;
  className?: string;
}

export const QuantityStepper: React.FC<QuantityStepperProps> = ({
  value,
  min = 0,
  max = 99,
  onChange,
  disabled = false,
  'aria-label': ariaLabel = 'Quantity',
  className = '',
}) => {
  const handleDecrement = () => {
    if (value > min) onChange(value - 1);
  };
  const handleIncrement = () => {
    if (value < max) onChange(value + 1);
  };

  const classNames = [styles.stepper, className].filter(Boolean).join(' ');

  return (
    <div className={classNames} role="group" aria-label={ariaLabel}>
      <button
        type="button"
        className={styles.button}
        onClick={handleDecrement}
        disabled={disabled || value <= min}
        aria-label="Decrease quantity"
      >
        −
      </button>
      <span className={styles.value} aria-live="polite">
        {value}
      </span>
      <button
        type="button"
        className={styles.button}
        onClick={handleIncrement}
        disabled={disabled || value >= max}
        aria-label="Increase quantity"
      >
        +
      </button>
    </div>
  );
};

QuantityStepper.displayName = 'QuantityStepper';
