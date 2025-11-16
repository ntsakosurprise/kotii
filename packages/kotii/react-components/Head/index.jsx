import { Helmet } from "react-helmet";

import React from "react";

const Head = ({ title }) => {
  return (
    <Helmet>
      <title>{`${title}`}</title>
      <meta charset="utf-8" />
      <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#000000" />
      <meta name="description" content="Kotti-test website" />
    </Helmet>
  );
};

export { Helmet as HeadHelmet };
export default Head;
