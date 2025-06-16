import "./Button.css";

export const Button = ({
  children,
  color = "black",
  disabled = false,
  ...props
}) => {
  return (
    <button
      className={`btn btn--${color} ${disabled ? "btn--disabled" : ""}`}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};
