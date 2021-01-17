import React from 'react';

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
    <div className='card'>
      <img className='card__img' src={front_default ? front_default : defaultImgUrl} alt='' width='100px' />
      <h2 className='card__title'>{name}</h2>
      <ul className='card__info'>
        {
          React.Children.map(props.children, child => React.cloneElement(child, { item: props.item }))
        }
      </ul>
    </div>
  );
}

export default Card;
