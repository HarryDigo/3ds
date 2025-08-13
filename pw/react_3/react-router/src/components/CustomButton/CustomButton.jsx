// eslint-disable-next-line no-unused-vars
import styles from './customButton.module.css';

const CustomButton = (props) => {
  const { onClick, variant, children } = props;

  return (
    <button className={eval('styles.'+variant)} onClick={onClick}>
      {children}
    </button>
  )
}

export { CustomButton };