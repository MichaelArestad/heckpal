import ControlCard from './control-card'
import Description from '../description/description'
import styles from './control.module.scss'

export default function Control({children, label, led, title, type}) {
  return (
    <div className={styles.control}>
      <ControlCard label={label} led={led} type={type} />
      <Description className={styles.description} title={title}>{children}</Description>
    </div>
  );
}