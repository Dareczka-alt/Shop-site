import styles from './OptionColor.module.scss';
import shortid from 'shortid';
import clsx from 'clsx';

const OptionColor = props => {
  return (
    <div className={styles.colors}>
      <h3 className={styles.optionLabel}>Colors</h3>
      <ul className={styles.choices}>
        {props.colors.map(color =>
          <li key={shortid()}>
            <button onClick={e =>
              props.setColor(e.target.value)}
              value={color}
              type="button"
              className={clsx(styles[`color${color[0].toUpperCase()}${color.substr(1).toLowerCase()}`],
                color === props.currentColor && styles.active)}>
            </button>
          </li>
        )}
      </ul>
    </div>
  )
}
export default OptionColor;