
function Button({text, onClick, variant, size, disabled, isLoading, icon}) {
  return <button 
   className={`${variant} ${size} `}  disabled={disabled || isLoading}

   onClick={onClick}>
    
    {icon && <span className="button-icon">{icon}</span>}
    { isLoading ?'Loading...' : text}
   </button>
}

export default Button;
