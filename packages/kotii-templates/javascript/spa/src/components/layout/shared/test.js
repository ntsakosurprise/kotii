import React from "react";
import styled, { css, keyframes } from "styled-components";
import SVGImage from "./svgImage";

const capitalizeFirstLetter = (text) => {
  console.log("The text Uppercasing;;;", text);
  return `${text.slice(0, 1).toUpperCase()}${text.slice(1)}`;
};
const TextAsPaths = () => {
  return (
    <>
      <path
        d="M74.305,105.668v20.706c0,0.386-0.193,0.578-0.578,0.578h-2.142c-0.386,0-0.578-0.192-0.578-0.578v-20.706
  c0-0.385,0.192-0.578,0.578-0.578h2.142C74.112,105.09,74.305,105.283,74.305,105.668z"
      />
      <path
        d="M84.674,126.952h-2.108c-0.386,0-0.578-0.192-0.578-0.578v-20.706c0-0.385,0.192-0.578,0.578-0.578h1.904
  c0.362,0,0.612,0.125,0.748,0.374l8.228,14.79h0.136v-14.586c0-0.385,0.192-0.578,0.578-0.578h2.108
  c0.385,0,0.578,0.193,0.578,0.578v20.706c0,0.386-0.193,0.578-0.578,0.578h-1.836c-0.363,0-0.657-0.181-0.884-0.544l-8.16-14.62
  h-0.136v14.586C85.252,126.76,85.06,126.952,84.674,126.952z"
      />
      <path
        d="M112.928,126.952h-3.638c-1.678,0-2.975-0.464-3.893-1.394c-0.918-0.929-1.377-2.221-1.377-3.876V110.36
  c0-1.677,0.459-2.975,1.377-3.893s2.215-1.377,3.893-1.377h3.638c1.678,0,2.976,0.459,3.894,1.377s1.377,2.216,1.377,3.893v1.224
  c0,0.408-0.193,0.612-0.578,0.612h-2.143c-0.386,0-0.577-0.204-0.577-0.612v-1.088c0-1.677-0.816-2.516-2.448-2.516h-2.686
  c-1.632,0-2.448,0.839-2.448,2.516v11.05c0,1.677,0.816,2.516,2.448,2.516h2.686c1.632,0,2.448-0.838,2.448-2.516v-3.06
  c0-0.227-0.125-0.34-0.374-0.34h-2.755c-0.385,0-0.577-0.192-0.577-0.578v-1.734c0-0.385,0.192-0.578,0.577-0.578h5.713
  c0.476,0,0.714,0.238,0.714,0.714v5.712c0,1.655-0.465,2.947-1.395,3.876C115.874,126.488,114.582,126.952,112.928,126.952z"
      />
      <path
        d="M136.83,126.952h-10.881c-0.386,0-0.577-0.192-0.577-0.578v-20.706c0-0.385,0.191-0.578,0.577-0.578h10.881
  c0.362,0,0.544,0.193,0.544,0.578v1.734c0,0.385-0.182,0.578-0.544,0.578h-7.752c-0.272,0-0.408,0.114-0.408,0.34v5.746
  c0,0.227,0.136,0.34,0.408,0.34h6.562c0.408,0,0.612,0.193,0.612,0.578v1.734c0,0.386-0.204,0.578-0.612,0.578h-6.562
  c-0.272,0-0.408,0.113-0.408,0.34v6.052c0,0.25,0.136,0.374,0.408,0.374h7.752c0.362,0,0.544,0.193,0.544,0.578v1.734
  C137.374,126.76,137.192,126.952,136.83,126.952z"
      />
      <path
        d="M146.928,126.952h-2.108c-0.386,0-0.577-0.192-0.577-0.578v-20.706c0-0.385,0.191-0.578,0.577-0.578h1.904
  c0.362,0,0.612,0.125,0.748,0.374l8.229,14.79h0.136v-14.586c0-0.385,0.192-0.578,0.578-0.578h2.107
  c0.386,0,0.578,0.193,0.578,0.578v20.706c0,0.386-0.192,0.578-0.578,0.578h-1.836c-0.362,0-0.657-0.181-0.884-0.544l-8.16-14.62
  h-0.136v14.586C147.506,126.76,147.313,126.952,146.928,126.952z"
      />
      <path
        d="M170.082,105.668v20.706c0,0.386-0.193,0.578-0.578,0.578h-2.142c-0.386,0-0.578-0.192-0.578-0.578v-20.706
  c0-0.385,0.192-0.578,0.578-0.578h2.142C169.889,105.09,170.082,105.283,170.082,105.668z"
      />
      <path
        d="M186.64,126.952h-3.944c-1.678,0-2.976-0.464-3.894-1.394c-0.918-0.929-1.377-2.221-1.377-3.876V110.36
  c0-1.677,0.459-2.975,1.377-3.893s2.216-1.377,3.894-1.377h3.944c1.677,0,2.979,0.459,3.909,1.377s1.395,2.216,1.395,3.893v11.322
  c0,1.655-0.465,2.947-1.395,3.876C189.619,126.488,188.316,126.952,186.64,126.952z M183.171,124.062h2.958
  c1.654,0,2.482-0.838,2.482-2.516v-11.05c0-1.677-0.828-2.516-2.482-2.516h-2.958c-1.632,0-2.447,0.839-2.447,2.516v11.05
  C180.724,123.224,181.539,124.062,183.171,124.062z"
      />
      <path
        d="M210.507,105.09h2.142c0.408,0,0.612,0.182,0.612,0.544v16.048c0,1.655-0.471,2.947-1.411,3.876
  c-0.94,0.93-2.238,1.394-3.893,1.394h-3.774c-1.655,0-2.947-0.464-3.876-1.394c-0.93-0.929-1.395-2.221-1.395-3.876v-16.014
  c0-0.385,0.192-0.578,0.578-0.578h2.143c0.385,0,0.578,0.193,0.578,0.578v15.878c0,1.677,0.815,2.516,2.447,2.516h2.788
  c1.654,0,2.482-0.838,2.482-2.516v-15.878C209.929,105.283,210.121,105.09,210.507,105.09z"
      />
      <path
        d="M220.163,121.648v-0.884c0-0.385,0.192-0.578,0.578-0.578h2.176c0.385,0,0.578,0.193,0.578,0.578v0.612
  c0,0.952,0.209,1.638,0.629,2.057c0.419,0.42,1.116,0.629,2.091,0.629h2.346c0.975,0,1.678-0.221,2.108-0.663
  c0.431-0.442,0.646-1.161,0.646-2.159v-0.782c0-0.725-0.277-1.297-0.833-1.717s-1.24-0.691-2.057-0.816s-1.712-0.3-2.686-0.527
  c-0.976-0.226-1.87-0.487-2.687-0.782c-0.815-0.294-1.502-0.85-2.057-1.666c-0.556-0.816-0.833-1.858-0.833-3.128v-1.428
  c0-1.654,0.47-2.952,1.411-3.893c0.94-0.94,2.238-1.411,3.893-1.411h3.604c1.677,0,2.985,0.471,3.927,1.411
  c0.94,0.941,1.411,2.239,1.411,3.893v0.748c0,0.386-0.193,0.578-0.578,0.578h-2.176c-0.386,0-0.578-0.192-0.578-0.578V110.7
  c0-0.974-0.21-1.671-0.629-2.091c-0.42-0.419-1.117-0.629-2.092-0.629h-2.142c-0.975,0-1.672,0.221-2.091,0.663
  c-0.42,0.442-0.629,1.196-0.629,2.261v1.054c0,1.02,0.736,1.712,2.21,2.074c0.657,0.159,1.377,0.295,2.159,0.408
  c0.781,0.114,1.569,0.284,2.362,0.51c0.794,0.227,1.519,0.527,2.177,0.901c0.656,0.374,1.189,0.941,1.598,1.7
  c0.408,0.76,0.612,1.683,0.612,2.771v1.326c0,1.655-0.471,2.953-1.411,3.893c-0.941,0.941-2.239,1.411-3.894,1.411h-3.808
  c-1.655,0-2.958-0.47-3.91-1.411C220.639,124.601,220.163,123.303,220.163,121.648z"
      />
    </>
  );
};

const xmlStyleToJs = (style) => {
  console.log("splitingString", style);
  const jsStyle = {};
  const splitStyle = style.replace(/;$/, "").trim().split(";");
  console.log("Split array", splitStyle);

  splitStyle.map((valuePair) => {
    const valuePairArray = valuePair.split(":");
    const key = valuePairArray[0];
    const value = valuePairArray[1];
    const isStringValue = isNaN(value) ? true : false;
    const shouldCamelCaseKey = key.indexOf("-") >= 0 ? true : false;
    const splitKey = shouldCamelCaseKey ? key.split("-") : key;
    const camelCasedKey =
      splitKey.length === 2
        ? `${splitKey[0]}${capitalizeFirstLetter(splitKey[1])}`
        : splitKey;

    jsStyle[camelCasedKey] = isStringValue ? value : parseInt(value);
  });

  console.log("JSSTYLE", jsStyle);
  return jsStyle;
};

const downOutAnimation = keyframes` 
0% {
  transform: translateZ(-50px) transLateY(20px);
  opacity: 0
}
40% {
  opacity: 0.2
}
60%{ opacity: 0.5}
80% {
  transform: translateZ(-10px) transLateY(0px);
  opacity: .8
}
100% {
  transform: translateZ(0px) transLateY(0px);
  opacity: 1
}
`;
const draw = keyframes` 
    0% {
    }
    100% {      stroke-dashoffset: 0;
      stroke-opacity: 1;
    }
  `;
const StyledSvg = styled("svg")({
  position: "absolute",
  top: "50%",
  left: "50%",
  right: "50%",
  transform: "translate(-50%, -50%)",
  "& path": {
    animation: css`
      ${draw} 2.5s infinite
    `,
    animationTimingFunction: "linear",
  },
});
const Test = () => {
  return (
    <StyledSvg
      viewBox="0 0 300 300"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="300px"
      height="300px"
    >
      <g
        strokeWidth="1"
        fillRule="evenodd"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeOpacity="1"
        strokeDasharray="45, 45"
        strokeDashoffset="180"
        fill="#fff"
        stroke="#02B3E4"
      >
        <polyline
          style={{ fill: "none", stroke: "#50C4E8", strokeMiterlimit: 10 }}
          points="28.651,131.726 56.151,131.726 56.151,145.726 
      249.645,145.726 249,645,128.226"
        />
        <circle
          style={{ fill: "#FFFFFF", stroke: "#50C4E8", strokeMiterlimit: 10 }}
          cx="28.651"
          cy="131.726"
          r="3.057"
        />
        <path
          style={xmlStyleToJs(
            "fill:#FFFFFF;stroke:#50C4E8;stroke-miterlimit:10;"
          )}
          d="M246.588,128.226c0-1.688,1.369-3.057,3.057-3.057
      s3.057,1.369,3.057,3.057c0,1.688-1.369,3.057-3.057,3.057S246.588,129.914,246.588,128.226z"
        />

        <line
          style={xmlStyleToJs("fill:none;stroke:#50C4E8;stroke-miterlimit:10;")}
          x1="96.151"
          y1="148.118"
          x2="96.151"
          y2="241.02"
        />
        <line
          style={xmlStyleToJs("fill:none;stroke:#50C4E8;stroke-miterlimit:10;")}
          x1="127.221"
          y1="148.118"
          x2="127.221"
          y2="241.02"
        />
        <line
          style={xmlStyleToJs("fill:none;stroke:#50C4E8;stroke-miterlimit:10;")}
          x1="173.151"
          y1="145.726"
          x2="173.151"
          y2="203.726"
        />
        <line
          style={xmlStyleToJs(
            "fill:none;stroke:#50C4E8;stroke-width:3;stroke-miterlimit:10;"
          )}
          x1="207.651"
          y1="145.726"
          x2="207.651"
          y2="241.02"
        />

        <path
          style={xmlStyleToJs(
            "fill:#FFFFFF;stroke:#50C4E8;stroke-width:3;stroke-miterlimit:10;"
          )}
          d="M104.651,184.476
      c0-1.688,1.369-3.057,3.057-3.057s3.057,1.369,3.057,3.057s-1.369,3.057-3.057,3.057S104.651,186.164,104.651,184.476z"
        />
        <path
          style={xmlStyleToJs(
            "fill:#FFFFFF;stroke:#50C4E8;stroke-miterlimit:10;"
          )}
          d="M93.721,145.725c0,1.342,1.088,2.431,2.43,2.431
      s2.43-1.089,2.43-2.431c0-1.341-1.088-2.43-2.43-2.43S93.721,144.385,93.721,145.725z"
        />
        <path
          style={xmlStyleToJs(
            "fill:#FFFFFF;stroke:#50C4E8;stroke-miterlimit:10;"
          )}
          d="M124.79,145.725c0,1.342,1.089,2.431,2.431,2.431
      s2.43-1.089,2.43-2.431c0-1.341-1.088-2.43-2.43-2.43S124.79,144.385,124.79,145.725z"
        />
        <path
          style={xmlStyleToJs(
            "fill:#50C4E8;stroke:#50C4E8;stroke-width:0.8121;stroke-miterlimit:10;"
          )}
          d="M214.543,81.409
      c0-2.761,2.238-4.999,4.999-4.999c2.761,0,4.999,2.238,4.999,4.999c0,2.761-2.238,4.999-4.999,4.999
      C216.782,86.408,214.543,84.17,214.543,81.409z"
        />
        <polyline
          style={xmlStyleToJs("fill:none;stroke:#50C4E8;stroke-miterlimit:10;")}
          points="96.151,174.226 78.651,187.226 78.651,209.726"
        />
        <polyline
          style={xmlStyleToJs("fill:none;stroke:#50C4E8;stroke-miterlimit:10;")}
          points="96.151,209.726 104.651,220.226 104.651,236.726"
        />
        <circle
          style={xmlStyleToJs(
            "fill:#FFFFFF;stroke:#50C4E8;stroke-miterlimit:10;"
          )}
          cx="78.651"
          cy="209.726"
          r="3.057"
        />
        <circle
          style={xmlStyleToJs(
            "fill:#FFFFFF;stroke:#50C4E8;stroke-miterlimit:10;"
          )}
          cx="104.651"
          cy="236.726"
          r="3.057"
        />
        <circle
          style={xmlStyleToJs(
            "fill:#FFFFFF;stroke:#50C4E8;stroke-miterlimit:10;"
          )}
          cx="173.151"
          cy="202.476"
          r="3.057"
        />
        <path
          style={xmlStyleToJs(
            "fill:#FFFFFF;stroke:#50C4E8;stroke-miterlimit:10;"
          )}
          d="M170.094,171.17c0-1.688,1.369-3.057,3.057-3.057
      s3.057,1.369,3.057,3.057s-1.369,3.057-3.057,3.057S170.094,172.857,170.094,171.17z"
        />
        <path
          style={xmlStyleToJs("fill:#BCE6F5;")}
          d="M93.357,241.02c0-1.543,1.251-2.794,2.794-2.794s2.794,1.251,2.794,2.794
      c0,1.543-1.251,2.794-2.794,2.794S93.357,242.563,93.357,241.02z"
        />
        <circle
          style={xmlStyleToJs("fill:#BCE6F5;")}
          cx="96.151"
          cy="250.976"
          r="2.794"
        />
        <circle
          style={xmlStyleToJs("fill:#BCE6F5;")}
          cx="96.151"
          cy="163.726"
          r="2.794"
        />
        <path
          style={xmlStyleToJs("fill:#BCE6F5;")}
          d="M124.426,241.02c0-1.543,1.252-2.794,2.795-2.794s2.793,1.251,2.793,2.794
      c0,1.543-1.25,2.794-2.793,2.794S124.426,242.563,124.426,241.02z"
        />
        <path
          style={xmlStyleToJs("fill:#BCE6F5;")}
          d="M124.426,202.476c0-1.543,1.252-2.794,2.795-2.794s2.793,1.251,2.793,2.794
      s-1.25,2.794-2.793,2.794S124.426,204.019,124.426,202.476z"
        />
        <polyline
          style={xmlStyleToJs(
            "fill:none;stroke:#50C4E8;stroke-width:3;stroke-miterlimit:10;"
          )}
          points="135.318,145.726 135.318,178.559 
      144.984,191.976 144.984,223.226     "
        />
        <line
          style={xmlStyleToJs(
            "fill:none;stroke:#50C4E8;stroke-width:3;stroke-miterlimit:10;"
          )}
          x1="107.707"
          y1="145.726"
          x2="107.707"
          y2="182.227"
        />
        <circle
          style={xmlStyleToJs(
            "fill:#FFFFFF;stroke:#50C4E8;stroke-width:3;stroke-miterlimit:10;"
          )}
          cx="144.984"
          cy="223.226"
          r="5.834"
        />
        <path
          style={xmlStyleToJs(
            "fill:#FFFFFF;stroke:#50C4E8;stroke-width:3;stroke-miterlimit:10;"
          )}
          d="M201.817,241.02
      c0-3.221,2.611-5.834,5.834-5.834s5.834,2.613,5.834,5.834c0,3.221-2.611,5.834-5.834,5.834S201.817,244.241,201.817,241.02z"
        />
        <line
          style={xmlStyleToJs(
            "fill:none;stroke:#50C4E8;stroke-width:3;stroke-miterlimit:10;"
          )}
          x1="207.651"
          y1="186.476"
          x2="231.401"
          y2="209.726"
        />
        <circle
          style={xmlStyleToJs(
            "fill:#FFFFFF;stroke:#50C4E8;stroke-width:3;stroke-miterlimit:10;"
          )}
          cx="231.401"
          cy="209.726"
          r="4.193"
        />
        <line
          style={xmlStyleToJs("fill:none;stroke:#50C4E8;stroke-miterlimit:10;")}
          x1="90.876"
          y1="81.409"
          x2="144.21"
          y2="81.409"
        />
        <path
          style={xmlStyleToJs(
            "fill:#FFFFFF;stroke:#50C4E8;stroke-miterlimit:10;"
          )}
          d="M139.146,81.409c0-2.797,2.268-5.064,5.064-5.064
      c2.797,0,5.064,2.268,5.064,5.064c0,2.797-2.268,5.064-5.064,5.064C141.414,86.473,139.146,84.206,139.146,81.409z"
        />
        <path
          style={xmlStyleToJs(
            "fill:#FFFFFF;stroke:#50C4E8;stroke-miterlimit:10;"
          )}
          d="M87.246,81.409c0-2.005,1.625-3.631,3.631-3.631
      c2.006,0,3.631,1.625,3.631,3.631c0,2.005-1.625,3.631-3.631,3.631C88.871,85.04,87.246,83.414,87.246,81.409z"
        />
        <polyline
          style={xmlStyleToJs("fill:none;stroke:#50C4E8;stroke-miterlimit:10;")}
          points="117.543,68.876 160.542,68.876 177.042,81.409 
      219.542,81.409"
        />
        <path
          style={xmlStyleToJs(
            "fill:#FFFFFF;stroke:#50C4E8;stroke-miterlimit:10;"
          )}
          d="M113.913,68.876c0-2.005,1.626-3.631,3.631-3.631
      s3.631,1.626,3.631,3.631c0,2.005-1.626,3.631-3.631,3.631S113.913,70.881,113.913,68.876z"
        />
        <polyline
          style={xmlStyleToJs(
            "fill:none;stroke:#50C4E8;stroke-width:3;stroke-miterlimit:10;"
          )}
          points="81.542,59.966 198.542,59.966 
      224.875,40.518    "
        />
        <path
          style={xmlStyleToJs(
            "fill:none;stroke:#50C4E8;stroke-width:3;stroke-miterlimit:10;"
          )}
          d="M103.265,59.966"
        />
        <path
          style={xmlStyleToJs("fill:#BCE6F5;")}
          d="M232.428,40.52c0,4.17-3.383,7.551-7.553,7.551c-4.171,0-7.553-3.381-7.553-7.551
      c0-4.171,3.382-7.554,7.553-7.554C229.045,32.966,232.428,36.349,232.428,40.52z"
        />
        <path
          style={xmlStyleToJs("fill:#BCE6F5;")}
          d="M87.246,59.967c0,2.411-1.956,4.366-4.367,4.366c-2.411,0-4.366-1.955-4.366-4.366
      c0-2.412,1.955-4.368,4.366-4.368C85.29,55.599,87.246,57.555,87.246,59.967z"
        />
        <path
          style={xmlStyleToJs("fill:#BCE6F5;")}
          d="M81.412,81.41c0,2.411-1.955,4.366-4.367,4.366c-2.41,0-4.365-1.955-4.365-4.366
      c0-2.412,1.955-4.368,4.365-4.368C79.457,77.042,81.412,78.998,81.412,81.41z"
        />

        <TextAsPaths />
        <SVGImage />
        <text x="0" y="15" fill="black">
          Kotii
        </text>
      </g>
    </StyledSvg>
  );
};

export default Test;
