const withChild = (Wrapped, renderFunction) => {
  return (props) => {
    return <Wrapped {...props} renderIcon={renderFunction} />
  }
};

export { withChild };
