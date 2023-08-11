import styles from './OptionSize.module.scss';
import shortid from 'shortid';
import clsx from 'clsx';

const OptionSize = props => {
  return (
    <div className={styles.sizes}>
      <h3 className={styles.optionLabel}>Sizes</h3>
      <ul className={styles.choices}>
        {props.sizes.map(size =>
          <li key={shortid()}>
            <button onClick={e =>
              props.setSize(e.target.value)}
              value={size.name}
              type="button"
              className={clsx(size.name === props.currentSize && styles.active)}>
              {size.name}
            </button>
          </li>
        )
        }
      </ul>
    </div>
  )
}
export default OptionSize;