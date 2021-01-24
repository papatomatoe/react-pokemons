import React from 'react';
import { Consumer } from '../helpers/context';

import './Item.css';

const Item = (props) => {
  const {
    item: {
      name = '',
      id = '',
    } = {},
    renderIcon = null,
    getItemId,
  } = props;

  return (
    <Consumer>
      {
        (nightTheme) => (
          <li className={`menu__item ${nightTheme ? 'menu__item--night' : ''}`} onClick={() => getItemId(id)}>
            <div className='menu__item-wrapper'>
              <p className='menu__tile'>{name}</p>
              {renderIcon && renderIcon()}
            </div>
          </li>
        )
      }
    </Consumer>
  );
}

export default Item;
