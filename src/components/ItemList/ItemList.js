import React from 'react';
import PropTypes from 'prop-types';

import Item from '../Item';

import './ItemList.css';

const ItemList = (props) => {
  const { items, renderIcon, getItemId } = props;
  return (
    <ul className='menu'>
      {
        items.length ?
          items.map(item => <Item key={item.id} item={item} renderIcon={renderIcon} getItemId={getItemId} />)
          : null
      }
    </ul>
  )
};

ItemList.propTypes = {
  items: PropTypes.array.isRequired,
  renderIcon: PropTypes.func,
  getItemId: PropTypes.func.isRequired,
}


export default ItemList;
