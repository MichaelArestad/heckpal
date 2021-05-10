import cn from 'classnames'
import Heading from '../heading/heading'
import styles from './description.module.scss'

export default function Description({children, className, title}) {
  return (
    <div className={cn(styles.description, className)}>
      {title && <Heading className={styles.heading} level={3}>{title}</Heading>}
      {children && children}
    </div>
  );
}