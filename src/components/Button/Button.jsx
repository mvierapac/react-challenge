import "./Button.css";

export const Button = ({
  children,
  color = "black",
  disabled = false,
  fullWidth = false,
  size = "md",
  className = "",
  ...props
}) => {
  return (
    <button
      className={`btn btn--${color} ${disabled ? "btn--disabled" : ""}
        ${fullWidth ? "btn--full" : ""} btn--${size} ${className}`.trim()}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};
