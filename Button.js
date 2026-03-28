function Button({text, onClick, variant, size}) {
  return <button className={`${variant} ${size} `} onClick={onClick}>{text}</button>
}

export default Button;
