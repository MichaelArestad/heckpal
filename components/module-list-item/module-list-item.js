import Link from 'next/link'
import styles from './module-list-item.module.scss'

export default function ModuleListItem({children, href}) {
  return <li className={styles.moduleListItem}><Link href={href}>{children}</Link></li>
}