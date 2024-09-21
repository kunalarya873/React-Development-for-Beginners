/* eslint-disable react/prop-types */
import styles from "./Button.module.css"
const Button = (props) => {
  const {isOutline, icons, text} = props;
  return (
    <div className={isOutline ? styles.outline_btn : styles.primary_btn}>
        {icons}
        {text}
    </div>
  )
}
export default Button