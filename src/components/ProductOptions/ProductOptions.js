import styles from './ProductOptions.module.scss';
import Button from '../Button/Button';
import OptionColor from '../OptionColor/OptionColor';
import OptionSize from '../OptionSize/OptionSize';
const ProductOptions = props => {

  return (
    <form>
      <OptionSize
        sizes={props.onSize}
        setSize={props.setSize}
        currentSize={props.currentSize}>
      </OptionSize>
      <OptionColor
        colors={props.onColor}
        setColor={props.setColor}
        currentColor={props.currentColor}>
      </OptionColor>
      <Button
        onClick={props.action}
        className={styles.button}>
        <span className="fa fa-shopping-cart" />
      </Button>
    </form>
  )
}
export default ProductOptions;