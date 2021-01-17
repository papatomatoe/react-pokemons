import React from 'react';

import Item from '../Item';

import './ItemList.css';

const ItemList = (props) => {
  const { items } = props;
  return (
    <ul className='menu'>
      {
        items.length ?
          items.map(item => <Item key={item.id} item={item} renderIcon={props.renderIcon} getItemId={props.getItemId} />)
          : null
      }
    </ul>
  )
};


export default ItemList;
