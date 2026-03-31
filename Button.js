 import styles from './Button.module.css';
 import PropTypes from 'prop-types';

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

Button.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
  variant: PropTypes.oneOf(['primary', 'secondary', 'danger']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  disabled: PropTypes.bool,
  isLoading: PropTypes.bool,
  icon: PropTypes.string
}

export default Button;
