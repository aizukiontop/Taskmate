import './Button.css';

type ButtonProps = {
  text: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'danger' | 'ghost';
  type?: 'button' | 'submit';
  ariaLabel?: string;
};

export default function Button({
  text,
  onClick,
  variant = 'primary',
  type = 'button',
  ariaLabel,
}: ButtonProps) {
  return (
    <button
      className={`btn btn--${variant}`}
      onClick={onClick}
      type={type}
      aria-label={ariaLabel}
    >
      {text}
    </button>
  );
}
