import ControlComponent from './control-component'
import LED from '../led/led'
import styles from './control.module.scss'

export default function Control({label, led, type}) {
  return (
    <div className={styles.controlCard}>
      {led && <LED className={styles.led} color={led}/>}
      <ControlComponent className={styles.component} type={type} />
      <div className={styles.label}>{label}</div>
    </div>
  );
}