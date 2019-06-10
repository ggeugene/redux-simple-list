import React, { PureComponent } from 'react'

class Item extends PureComponent {
  render() {
    return (
      <div>
        <li>{this.props.children}</li>
      </div>
    )
  }
}

export default Item
