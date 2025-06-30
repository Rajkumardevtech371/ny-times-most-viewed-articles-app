import React from 'react';
import styles from './Button.module.css';

const Button = ({
  children,
  onClick,
  disabled = false,
  variant = 'primary',
  className = '',
  type = 'button',
  href = null,
  ...props
}) => {
  const buttonClass = `
    ${styles.button}
    ${styles[variant] || ''}
    ${disabled ? styles.disabled : ''}
    ${className}
  `.trim();

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={buttonClass}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={buttonClass}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
