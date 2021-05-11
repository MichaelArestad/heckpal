import cn from 'classnames'
import React from 'react'
import styles from './control-group.module.scss'

export default class ControlGroup extends React.Component {
  constructor(props){
    super(props);
    
    this.state = {
      currentControl: 0
    };

    this.dots = []

    for (let i = 0; i < this.props.children.length; i++) {
      this.dots.push(i);
    }

    this.dotList = this.dots.map(dot => 
      <div key={dot.toString()} className={cn(styles.dot, this.isActive(dot))}/>
    );

    console.log(this.dots);
    console.log(this.dotList);

    this.nextControl = this.nextControl.bind(this);
  }

  nextControl() {
    if (this.state.currentControl < this.props.children.length - 1) {
      this.setState({
        currentControl: this.state.currentControl + 1
      });
    } else {
      this.setState({
        currentControl: 0
      });
    }
  }
  
  isActive(id) {
    console.log(this.state.currentControl === id ? styles.isActive : false);
    return this.state.currentControl === id ? styles.isActive : null;
  }

  render () {
    return (
      <div onClick={this.nextControl} className={styles.controlGroup}>
        {this.props.children[this.state.currentControl]}
        {this.dotList}
      </div>
    );
  }
}