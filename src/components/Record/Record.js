import React from 'react';
import PropTypes from 'prop-types';

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

Record.defaultProps = {
  item: {}
}

Record.propTypes = {
  label: PropTypes.string.isRequired,
  field: PropTypes.string.isRequired,
  item: PropTypes.object
}

export default Record;
