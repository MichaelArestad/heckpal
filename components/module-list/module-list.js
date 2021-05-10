import styles from './module-list.module.scss'

export default function ModuleList({children}) {
  return <ul className={styles.moduleList}>{children}</ul>;
}