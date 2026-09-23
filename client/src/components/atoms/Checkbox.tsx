import './Checkbox.css';

type CheckboxProps = {
  checked: boolean;
  onChange: () => void;
  ariaLabel?: string;
};

export default function Checkbox({ checked, onChange, ariaLabel }: CheckboxProps) {
  return (
    <input
      type="checkbox"
      className="checkbox"
      checked={checked}
      onChange={onChange}
      aria-label={ariaLabel}
    />
  );
}
