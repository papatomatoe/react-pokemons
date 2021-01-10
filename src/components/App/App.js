import React from 'react';

import Service from '../../service';
import Panels from '../Panels';
import ItemList from '../ItemList';
import Icon from '../Icon';

import './App.css';

class App extends React.Component {

  API = new Service();

  render() {

    const pokemonMenu = (
      <ItemList
        getData={this.API.getPokemons}
        renderIcon={() => <Icon />}
      />
    )

    const berriesMenu = (
      <ItemList
        getData={this.API.getBerries}
        renderIcon={
          () => <img src='img/berry.svg' alt='icon' width='30px' />
        }
      />
    )
    return (
      <div className='container'>
        <Panels left={pokemonMenu} right={'Pokemon Card'} />
        <Panels left={berriesMenu} right={'Berry Card'} />
      </div >
    );
  }

}

export default App;
