import React from 'react';
import PropTypes from 'prop-types';

const withDataItem = (Component, getData) => {
  return class extends React.Component {
    state = {
      item: {}
    }

    componentDidMount() {
      getData(this.props.id).then(item => this.setState({ item }))
    }

    componentDidUpdate(prevProps) {
      if (prevProps.id !== this.props.id) {
        getData(this.props.id).then(item => this.setState({ item }))
      }
    }

    render() {
      return (
        <Component {...this.props} item={this.state.item} />
      );
    }

  }
};

withDataItem.propsTypes = {
  item: PropTypes.object.isRequired,
  props: PropTypes.shape({
    id: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ])
  }).isRequired,
  Component: PropTypes.elementType.isRequired,
  getData: PropTypes.func.isRequired,
}

export { withDataItem };
