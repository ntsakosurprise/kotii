import React from "react";

const KotiiSvg = (props) => {
  // eslint-disable-next-line react/prop-types
  const { width = 40 } = props;
  return (
    <>
      <svg
        width={width}
        height="54"
        viewBox="0 0 61 54"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M34.0758 0L57.3928 40.3862H10.7588L34.0758 0Z"
          fill="#D680FF"
        />
        <path
          d="M26.9241 0L50.2411 40.3862H3.60715L26.9241 0Z"
          fill="#00BFA5"
        />
        <rect
          x="10.9379"
          y="39.5448"
          width="15.9862"
          height="8.41379"
          fill="#00BFA5"
        />
        <rect
          x="26.9241"
          y="39.5448"
          width="15.9862"
          height="8.41379"
          fill="#F7C02B"
        />
      </svg>
    </>
  );
};

export default KotiiSvg;
