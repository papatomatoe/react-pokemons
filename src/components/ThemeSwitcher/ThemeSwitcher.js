import React from 'react';
import PropTypes from 'prop-types';

import { Consumer } from '../helpers/context';

import './ThemeSwitcher.css';

const ThemeSwitcher = (props) => {
  const { switchTheme } = props;
  return (
    <Consumer>
      {
        (nightTheme) => (
          <label className='theme'>
            <input className='theme__input' type='checkbox' onChange={() => switchTheme()} checked={nightTheme} />
            <span className='theme__label'>Night theme:</span>
            <div className='theme__control'></div>
          </label>
        )
      }
    </Consumer>
  );
}

ThemeSwitcher.propTypes = {
  switchTheme: PropTypes.func.isRequired
}

export default ThemeSwitcher;
