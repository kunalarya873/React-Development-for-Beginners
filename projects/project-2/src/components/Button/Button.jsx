/* eslint-disable react/prop-types */
import styles from "./Button.module.css"
const Button = (props) => {
  const {isOutline, icons, text, ...rest} = props;
  return (
    <button 
    {...rest}
     className={isOutline ? styles.outline_btn : styles.primary_btn}>
        {icons}
        {text}
    </button>
  )
}
export default Button