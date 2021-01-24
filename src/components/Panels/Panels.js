import React from 'react';

import PropTypes from 'prop-types';

import './Panels.css';

const Panels = (props) => {
  const { left, right } = props;

  return (
    <div className='panels'>
      {left}
      {right}
    </div>
  );
};

Panels.propTypes = {
  left: PropTypes.node.isRequired,
  right: PropTypes.node.isRequired,
}

export default Panels;
