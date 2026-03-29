
function Button({text, onClick, variant, size, disabled, isLoading}) {
  return <button 
   className={`${variant} ${size} `}  disabled={disabled || isLoading} onClick={onClick}>
    
    { isLoading ?'Loading...' :  text}
   </button>
}

export default Button;
