import React from 'react';

import './Record.css';

const Record = (props) => {
  const { label, field, item } = props;
  return (
    <li className='card__item'>
      <p className='card__label'>{label}</p>
      <p className='card__value'>{item[field]}</p>
    </li>
  );
}

export default Record;
