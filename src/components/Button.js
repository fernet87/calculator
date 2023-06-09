import React from 'react';
import './Button.scss';

export class Button extends React.Component {
  constructor(props) {
    super(props);

    this.buttonRef = React.createRef();
  }

  componentDidMount() {
    if (this.props.bgColor) {
      this.buttonRef.current.style.background = this.props.bgColor;
      this.buttonRef.current.style.width = this.props.width;
      this.buttonRef.current.style.height = this.props.height;
    }
  }
  
  render() {
     return (
      <button
        className={`button ${this.props.className}`}
        id={this.props.id}
        onClick={this.props.onClick}
        disabled={(this.props.disabled) ? true : false}
        ref={this.buttonRef}
      >
        {this.props.label}
      </button>
    );
  }
}
