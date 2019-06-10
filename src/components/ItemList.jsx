import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import Item from './Item'

class ItemList extends PureComponent {
  render() {
    return (
      <ul>
        {this.props.items.map(item => (
          <Item key={item.id}>{item.text}</Item>
        ))}
      </ul>
    )
  }
}

const mapStateToProps = state => {
  return {
    items: state.items,
  }
}

export default connect(mapStateToProps)(ItemList)
