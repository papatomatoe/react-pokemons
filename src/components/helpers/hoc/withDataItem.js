import React from 'react';

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

export { withDataItem };
