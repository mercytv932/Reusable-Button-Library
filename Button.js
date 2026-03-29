function Button({text, onClick, variant, size, disabled}) {
  return <button className={`${variant} ${size} `} disabled={disabled} onClick={onClick}>{text}</button>
}

export default Button;
