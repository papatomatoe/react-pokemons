import React from 'react';
import PropTypes from 'prop-types';

const withData = (Component, getData) => {
  return class extends React.Component {
    state = {
      items: [],
    }

    componentDidMount() {
      getData().then(data => this.setState({ items: data.slice(0, 6) }));
    }

    render() {
      return (
        <Component {...this.props} items={this.state.items} />
      );
    }
  }
}

withData.propsTypes = {
  items: PropTypes.array.isRequired,
  props: PropTypes.shape({
    renderIcon: PropTypes.func,
    getItemId: PropTypes.func.isRequired,
  }).isRequired,
  Component: PropTypes.elementType.isRequired,
  getData: PropTypes.func.isRequired,
}


export { withData };
