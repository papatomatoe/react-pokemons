import PropTypes from 'prop-types'

const withChild = (Wrapped, renderFunction) => {
  return (props) => {
    return <Wrapped {...props} renderIcon={renderFunction} />
  }
};

withChild.PropTypes = {
  props: PropTypes.shape({
    items: PropTypes.array.isRequired,
    renderIcon: PropTypes.func,
    getItemId: PropTypes.func.isRequired,
  }).isRequired,
  Wrapped: PropTypes.elementType.isRequired,
  renderFunction: PropTypes.func.isRequired,
}

export { withChild };
