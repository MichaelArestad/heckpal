import cn from 'classnames'
import styles from './led.module.scss'

export default function LED({className, color}) {
  let adjustedColor = '#FF4747';

  const colorMap = {
    'purple': '#C549FF',
    'blue': '#4992FF',
    'green': '#49FF71',
    'yellow': '#FFFF90',
    'orange': '#FF9B3F',
    'red': '#FF4747',
    'pink': '#FF81EB'
  };

  if (colorMap[color]) {
    adjustedColor = colorMap[color];
  } else if (color) {
    adjustedColor = color;
  }

  return <div className={cn(styles.led, className)} style={color && {'color': adjustedColor}} />;
}