import React from 'react';

import Item from '../Item';

import './ItemList.css';

class ItemList extends React.Component {
  state = {
    items: [],
  }

  componentDidMount() {
    this.props.getData().then(data => this.setState({ items: data.slice(0, 6) }));
  }

  render() {
    const { items } = this.state;
    return (
      <ul className='menu'>
        {
          items.length ? items.map(item => <Item key={item.id} item={item} renderIcon={this.props.renderIcon} />) : null
        }
      </ul>
    )
  }
}

export default ItemList;
