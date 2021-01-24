import PropTypes from 'prop-types';

import Card from '../Card';
import Record from '../Record';

import Service from '../../service';

import { withDataItem } from '../helpers/hoc';

const API = new Service();

const { getOnePokemon, getOneBerry } = API;

const PokemonCard = (props) => {
  return (
    <Card item={props.item}>
      <Record label={'Weight'} field={'weight'} />
      <Record label={'Height'} field={'height'} />
      <Record label={'Base Experience'} field={'base_experience'} />
    </Card>
  );
};

const BerryCard = (props) => {
  return (
    <Card item={props.item}>
      <Record label={'Size'} field={'size'} />
      <Record label={'Growth Time'} field={'growth_time'} />
      <Record label={'Max Harvest'} field={'max_harvest'} />
    </Card>
  );
}

const PokemonDetails = withDataItem(PokemonCard, getOnePokemon);
const BerryDetails = withDataItem(BerryCard, getOneBerry);

PokemonCard.propTypes = {
  id: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]).isRequired
};

BerryCard.propTypes = {
  id: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]).isRequired
};

export { PokemonDetails, BerryDetails };
