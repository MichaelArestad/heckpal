import styles from './control-component.module.scss'
import cn from 'classnames'

export default function ControlComponent({className, type}) {
  const controlTypes = {
    'small-button': styles.isSmallButton
  };

  const getType = type => {
    return controlTypes[type] ? controlTypes[type] : null;
  };

  return <div className={cn(className, styles.controlComponent, getType(type))} />
}