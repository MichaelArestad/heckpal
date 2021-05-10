import Heading from "../heading/heading"
import Link from "next/link"
import ScreenReaderText from "../screen-reader-text/screen-reader-text"
import styles from './header.module.scss'

export default function Header({children}) {
  return (
    <header className={styles.header}>
      <Heading className={styles.heading} level={1}>{children}</Heading>
      <Link href="/" passHref>
        <a className={styles.close}>
          <ScreenReaderText>Close</ScreenReaderText>
        
          <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <mask id="prefix__a" maskUnits="userSpaceOnUse" x={5} y={5} width={14} height={14}>
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" fill="currentColor"/>
            </mask>
            <g mask="url(#prefix__a)">
              <path fill="currentColor" d="M0 0h24v24H0z" />
            </g>
          </svg>
        </a>
      </Link>
    </header>
  )
}