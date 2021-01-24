import React from 'react';

import { Consumer } from '../helpers/context';

import './Card.css'

const defaultImgUrl = './img/no_img.jpg'

const Card = (props) => {
  const {
    item: {
      name = '',
      sprites: {
        other: {
          'official-artwork': {
            front_default = ''
          } = {}
        } = {}
      } = {}
    } = {}
  } = props;

  return (
    <Consumer>
      {
        (nightTheme) => (
          <div className={`card ${nightTheme ? 'card--night' : ''}`}>
            <img className='card__img' src={front_default ? front_default : defaultImgUrl} alt='' width='100px' />
            <h2 className='card__title'>{name}</h2>
            <ul className='card__info'>
              {
                React.Children.map(props.children, child => React.cloneElement(child, { item: props.item }))
              }
            </ul>
          </div>
        )
      }
    </Consumer>



  );
}

export default Card;
