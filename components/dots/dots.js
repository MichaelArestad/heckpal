import styles from './dots.module.scss'

const Dot = ({active}) => {
  const background = active ? 'white' : null;
  <div className={styles.dot} style={{background: background}}/>
};

export default function Dots({total, index}) {
  return (
    <div className={styles.dots}>
      {total.map((slide, i) => (
        <Dot key={slide} active={index === i} />
      ))}
    </div>
  );
}