import React from 'react';

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

export default Panels;
