import ControlComponent from './control-component'
import LED from '../led/led'
import styles from './control.module.scss'

export default function Control({children, label, led, type}) {
  return (
    <div className={styles.control}>
      <div className={styles.controlPreview}>
        {led && <LED className={styles.led} color={led}/>}
        <ControlComponent className={styles.component} type={type} />
        <div className={styles.label}>{label}</div>
      </div>
      <div className={styles.description}>
        {children}
      </div>
    </div>
  );
}