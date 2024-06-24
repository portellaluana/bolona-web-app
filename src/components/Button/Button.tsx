interface ButtonProps {
  label: string
  className?: string
}

const Button = ({label, className=''}: ButtonProps) => {
  return (
    <button className={className}>
      {label}
    </button>
  );
}

export default Button;
