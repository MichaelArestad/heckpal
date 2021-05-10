import PageMeta from '../page-meta'
import styles from './main.module.scss'

export default function Main({children}) {
  return (
    <main className={styles.main}><PageMeta/>{children}</main>
  );
}