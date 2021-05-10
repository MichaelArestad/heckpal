import styles from './heading.module.scss'
import cn from 'classnames'

export default function Heading({children, className, level}) {
  const HeadingLevel = level ? 'h' + level : 'h2';
  return <HeadingLevel className={cn(styles.heading, className)}>{children}</HeadingLevel>;
}
