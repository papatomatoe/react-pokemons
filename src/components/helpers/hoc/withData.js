import React from 'react';

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

export { withData };
