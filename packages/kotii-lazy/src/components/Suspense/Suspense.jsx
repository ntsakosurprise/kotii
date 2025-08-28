import React, { Suspense } from "react";

const KotiiSuspense = ({ children, fallback }) => {
  return (
    <Suspense fallback={fallback || <div>Loading...</div>}>{children}</Suspense>
  );
};

export default KotiiSuspense;
// const Suspense = ({ fallback }) => {

//   return (
//     <a href={to} onClick={handleOnclick} {...props}>
//       {children}
//     </a>
//   );
// };

// class LazySuspense extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { hasError: null, lazyError: null };
//   }

//   static getDerivedStateFromError(error) {
//     console.log("Derived Error", error, error instanceof Promise),
//       error instanceof Error;
//     if (error instanceof Promise) {
//       return { lazyError: error };
//     }
//     return { hasError: error };
//   }

//   componentDidCatch(error) {
//     console.log("THE COMPONENT DID CATCH", error, error instanceof Promise);
//     if (error instanceof Promise) {
//       this.state.lazyError.then((res) => {
//         console.log("LAZY SUSPENSE PROMIS", res);
//         this.setState({ lazyError: null });
//       });
//     }
//   }

//   render() {
//     console.log("Suspense Renders", this.state, this.props);
//     if (this.state.lazyError) {
//       return this.props.fallback;
//     }
//     if (this.state.hasError) {
//       return <div>An error occured rendering component</div>;
//     }

//     return this.props.children;
//   }
// }

// export default LazySuspense;
