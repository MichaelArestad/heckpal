import styles from './screen-reader-text.module.scss'

export default function ScreenReaderText({children}) {
  return <span className={styles.screenReaderText}>{children}</span>;
}