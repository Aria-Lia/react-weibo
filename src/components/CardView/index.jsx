import React, { Component } from 'react';
import Card from 'react-bootstrap/Card'
import './style.css'

class CardView extends Component {

  render() {
    const {children, size, style} = this.props
    return (
      <Card className={"card-view" + ` card-view-${size}`} style={style}>
        {children}
      </Card>
    )
  }
}

export default CardView