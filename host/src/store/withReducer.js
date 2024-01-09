import React from "react";

import { injectReducer } from "host/store";

const withReducer = (key, reducer) => (WrappedComponent) => {
  injectReducer(key, reducer);

  return (props) => <WrappedComponent {...props} />;
};

export default withReducer;
