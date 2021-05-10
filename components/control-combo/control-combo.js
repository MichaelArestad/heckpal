import cn from 'classnames'
import Description from '../description/description'
import React from 'react'
import styles from './control-combo.module.scss'

export default class ControlCombo extends React.Component {
  constructor(props) {
    super(props);
    this.comboComponents = [];
    this.state = {
      isExpanded: false
    };

    for (let i = 0; i < this.props.components.length; i++) {
      if (i > 0) {
        this.comboComponents.push(<div className={styles.plus} key={i + this.props.label}>+</div>);
      }
      this.comboComponents.push(this.props.components[i]);
    }
  }

  toggleDescription() {
    this.setState({
      isExpanded: !this.state.isExpanded
    })
  }

  isExpanded() {
    return this.state.isExpanded ? styles.isExpanded : null;
  }

  render () {
    return (
      <div onClick={this.toggleDescription.bind(this)} className={cn(styles.controlComboWrapper, this.isExpanded())}>
        <div className={styles.controlCombo}>{this.comboComponents}</div>
        <h3 className={styles.label}>
          {this.props.label}
          <svg
            className={styles.arrow}
            width={11}
            height={9}
            viewBox="0 0 11 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M5.5 9L.737.75h9.526L5.5 9z" fill="#fff" />
          </svg>
        </h3>
        <Description className={styles.description}>{this.props.children}</Description>
      </div>
    );
  }
}