import React from "react";

// const Suspense = ({ fallback }) => {

//   return (
//     <a href={to} onClick={handleOnclick} {...props}>
//       {children}
//     </a>
//   );
// };

class Suspense extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: null, lazyError: null };
  }

  static getDerivedStateFromError(error) {
    if (error instanceof Promise) {
      return { lazyError: error };
    }
    return { hasError: error };
  }

  componentDidCatch(error) {
    if (error instanceof Promise) {
      this.state.lazyError.then(() => {
        this.setState({ lazyError: null });
      });
    }
  }

  render() {
    if (this.state.lazyError) {
      return this.props.fallback;
    }
    if (this.state.hasError) {
      return <div>An error occured rendering component</div>;
    }

    return this.props.children;
  }
}

export default Suspense;
