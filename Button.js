 import styles from './Button.module.css';
function Button({text, onClick, variant, size, disabled, isLoading, icon}) {
  return <button 
   className={`${styles [variant]} ${styles [size]} `} 
    disabled={disabled || isLoading}
    aria-disabled={disabled || isLoading} aria-label={text}


   onClick={onClick}>

    {icon && <span className="button-icon">{icon}</span>}
    { isLoading ?'Loading...' : text}
   </button>
}

export default Button;
