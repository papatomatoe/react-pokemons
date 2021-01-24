import React from 'react';

import Service from '../../service';
import Panels from '../Panels';
import ThemeSwitcher from '../ThemeSwitcher'

import {
  PokemonMenu,
  BerryMenu,
  PokemonDetails,
  BerryDetails
} from '../pokemon-components';

import { Provider } from '../helpers/context';

import './App.css';

class App extends React.Component {

  state = {
    nightTheme: false,
    pokemonId: 1,
    berryId: 1
  }

  API = new Service();

  body = document.querySelector('body');

  getPokemonIdHandler = (id) => {
    this.setState({ pokemonId: id });
  }

  getBerryIdHandler = (id) => {
    this.setState({ berryId: id });
  }

  componentDidUpdate() {
    this.body.style.backgroundColor = this.state.nightTheme ? '#000000' : '#ffffff';
  }

  switchThemeHandler = () => {
    this.setState(prevState => ({ nightTheme: !prevState.nightTheme }))
  }

  render() {
    const { nightTheme, pokemonId, berryId } = this.state;
    return (
      <div className='container'>
        <Provider value={nightTheme}>
          <ThemeSwitcher switchTheme={this.switchThemeHandler} />
          <Panels
            left={<PokemonMenu getItemId={this.getPokemonIdHandler} />}
            right={<PokemonDetails id={pokemonId} />}
          />
          <Panels
            left={<BerryMenu getItemId={this.getBerryIdHandler} />}
            right={<BerryDetails id={berryId} />}
          />
        </Provider>
      </div >
    );
  }
}

export default App;
