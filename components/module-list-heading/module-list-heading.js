import Heading from "../heading/heading";
import styles from './module-list-heading.module.scss'

export default function ModuleListHeading({children}) {
  return <Heading className={styles.heading}>{children}</Heading>;
}