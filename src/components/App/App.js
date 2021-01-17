import React from 'react';

import Service from '../../service';
import Panels from '../Panels';

import {
  PokemonMenu,
  BerryMenu,
  PokemonDetails,
  BerryDetails
} from '../pokemon-components';

import './App.css';

class App extends React.Component {

  state = {
    pokemonId: 1,
    berryId: 1
  }

  API = new Service();

  getPokemonIdHandler = (id) => {
    this.setState({ pokemonId: id });
  }

  getBerryIdHandler = (id) => {
    this.setState({ berryId: id });
  }

  render() {
    return (
      <div className='container'>
        <Panels
          left={<PokemonMenu getItemId={this.getPokemonIdHandler} />}
          right={<PokemonDetails id={this.state.pokemonId} />}
        />
        <Panels
          left={<BerryMenu getItemId={this.getBerryIdHandler} />}
          right={<BerryDetails id={this.state.berryId} />}
        />
      </div >
    );
  }
}

export default App;
