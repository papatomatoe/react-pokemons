import React from 'react';

import './Item.css';

const Item = (props) => {
  const {
    item: {
      name = '',
      id = '',
    } = {},
    renderIcon = null,
    getItemId
  } = props;

  return (
    <li className='menu__item' onClick={() => getItemId(id)}>
      <div className='menu__item-wrapper'>
        <p className='menu__tile'>{name}</p>
        {renderIcon && renderIcon()}
      </div>
    </li>
  );
}

export default Item;
