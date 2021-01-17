import ItemList from '../ItemList';
import Icon from '../Icon';

import Service from '../../service';
import { withData, withChild } from '../helpers/hoc';

const API = new Service();

const { getPokemons, getBerries } = API;


const renderBerryIcon = () => <img src='img/berry.svg' alt='icon' width='30px' />;
const renderPokemonIcon = () => <Icon />

const PokemonMenu = withData(withChild(ItemList, renderPokemonIcon), getPokemons);
const BerryMenu = withData(withChild(ItemList, renderBerryIcon), getBerries);

export { PokemonMenu, BerryMenu }
