import { Helmet } from "react-helmet";

import React from "react";

const Head = ({ title }) => {
  return (
    <Helmet>
      <title>{`${title}`}</title>
    </Helmet>
  );
};

export { Helmet as HeadHelmet };
export default Head;
