import type { ReactNode } from 'react';
import './Button.css';

type ButtonProps = {
  text: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'danger' | 'ghost';
  type?: 'button' | 'submit';
  ariaLabel?: string;
  icon?: ReactNode;
  iconOnly?: boolean;
};

export default function Button({
  text,
  onClick,
  variant = 'primary',
  type = 'button',
  ariaLabel,
  icon,
  iconOnly = false,
}: ButtonProps) {
  return (
    <button
      className={`btn btn--${variant}${iconOnly ? ' btn--icon-only' : ''}`}
      onClick={onClick}
      type={type}
      aria-label={ariaLabel ?? text}
      title={iconOnly ? text : undefined}
    >
      {icon}
      {!iconOnly && text}
    </button>
  );
}
