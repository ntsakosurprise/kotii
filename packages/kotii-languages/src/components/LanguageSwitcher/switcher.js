// import { capitalizeFirstLetter } from "kotii-utils";
// import React, { useEffect, useState } from "react";
// import Select from "react-select";
// import { useLanguage } from "../../context/language-provider";

// const options = [
//   { value: "en", label: "English" },
//   { value: "ts", label: "Tsonga" },
//   { value: "ve", label: "Venda" },
//   { value: "pe", label: "Pedi" },
//   { value: "zu", label: "zulu" },
// ];

// const LanguageSwitcher = () => {
//   console.log("KOTII-UTILS VALUE;;;", capitalizeFirstLetter);
//   const { changeCurrentLanguage, language, getLanguageNames } = useLanguage();
//   const [selectedOption, setSelectedOption] = useState(language);
// const defaultLocale = getDefaultLocale();
// const [options, setOptions] = useState([
//   // { label: defaultLocale.label, value: defaultLocale.locale },
// ]);

//   const switchLanguage = (value) => {
//     console.log("the props;;", value);
//     changeCurrentLanguage(value);
//     setSelectedOption(value);
//   };

//   useEffect(() => {
//     setOptions([
//       ...getLanguageNames().map((lag) => {
//         return {
//           value: lag.locale,
//           label: capitalizeFirstLetter(lag.name),
//         };
//       }),
//     ]);
//   }, []);

//   if (options.length === 0) return null;

//   return (
//     <div>
//       <Select
//         defaultValue={selectedOption}
//         onChange={(e) => {
//           console.log("onchange event;;;", e);

//           switchLanguage(e.value);
//         }}
//         options={options}
//       />
//     </div>
//   );
// };

// export default LanguageSwitcher;

// import { Box, Button, Heading, Paragraph } from "grommet";
import { capitalizeFirstLetter } from "kotii-utils";
import React, { useEffect, useRef, useState } from "react";
// import { AiTwotoneCopyrightCircle as Circle } from "react-icons/ai";
// import { BsFillMoonStarsFill as MoonIcon } from "react-icons/bs";
import { RiArrowDropDownLine as DropdownIcon } from "react-icons/ri";
import styled, { keyframes } from "styled-components";
import { useLanguage } from "../../context/language-provider";

// import { themes } from "../../config/themes";

// const options = [
//   { value: "en", label: "English" },
//   { value: "ts", label: "Tsonga" },
//   { value: "ve", label: "Venda" },
// ];

/**
 * Hook that alerts clicks outside of the passed ref
 */
// const rotate = keyframes`
//  from {
//    transform: rotate(0deg);
//  }

//  to {
//    transform: rotate(360deg);
//  }
// `;

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
function useOutsideAlerter(ref, closeOnOutside) {
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        // alert("You clicked outside of me!");
        closeOnOutside(false);
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
}

const ThemeSelector = styled("button")(() => {
  return {
    color: "green",
    cursor: "pointer",
    "&:hover": { color: "black" },
    backgroundColor: "rgb(205 186 159)",
    borderRadius: "8px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    "min-width": "80px",
    height: "25px",
    alignItems: "center",
  };
});
const LanguageText = styled.span`
 color: white,
 font-size: 20px
`;
const DropWithAnim = styled.div`
  animation-name: ${downOutAnimation};
  animation-duration: 2s;
  animation-iteration-count: 1;
`;
const ThemeDropDown = styled(DropWithAnim)(() => {
  return {
    position: "relative",
    opacity: 1,
  };
});

const List = styled("ul")((props) => {
  return {
    margin: 0,
    padding: "15px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "5px",
    backgroundColor: "black",
    position: "absolute",
    top: "5px",
    width: props?.width ? props?.width : "150px",
  };
});

const ListItem = styled("li")(() => {
  return {
    margin: 0,
    marginBottom: "5px",
    padding: 0,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "left",
    width: "100%",
  };
});

const SwitcherText = styled("p")(() => {
  return {
    color: "green",
    cursor: "pointer",
  };
});

const SwitcherTypo = styled("p")({
  flexGrow: 2,
  display: "flex",
  flexDirection: "row",
  gap: 10,
  cursor: "pointer",
});

const Circle = styled("div")((props) => {
  const { width = 20 } = props;
  return {
    width: width,
    height: width,
    borderRadius: "50%",
    backgroundColor: "#ac5e5e;",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };
});
const LanguageSwitcher = () => {
  const { changeCurrentLanguage, getLanguageNames, languageName } =
    useLanguage();
  // const [selectedOption, setSelectedOption] = useState(language);
  // const [selectedLanguageName, setSelectedLanguageName] = useState(null);
  const [showLanguages, setShowLanguages] = useState(false);
  const [options, setOptions] = useState([]);

  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef, setShowLanguages);

  const switchLanguage = (value, lb) => {
    console.log("the props;;", value);
    changeCurrentLanguage(value, lb);
    // setSelectedOption(value);
  };

  useEffect(() => {
    setOptions([
      ...getLanguageNames().map((lag) => {
        return {
          value: lag.locale,
          label: capitalizeFirstLetter(lag.name),
        };
      }),
    ]);
  }, []);

  const showUpdatedLanguages = () => {
    setShowLanguages(!showLanguages);
  };

  const activateTheme = (eve, label) => {
    const setValue = eve.target.attributes.value.nodeValue;
    // console.log("SWITCH ACTIVATE", eve.target.attributes.value.nodeValue);
    console.log("setItem", setValue);
    setShowLanguages(!showLanguages);
    switchLanguage(setValue, label);
    //setCheckedItem(setValue);
  };

  const getListItems = (items) => {
    return items.map((it, ix) => {
      return (
        <ListItem key={ix}>
          <SwitcherTypo>
            <Circle
              style={{ color: "black", textAlign: "center", fontSize: "14px" }}
            >
              {it.value}
            </Circle>

            <SwitcherText
              value={it.value}
              onClick={(eve) => {
                activateTheme(eve, it.label);
              }}
            >
              {it.label}
            </SwitcherText>
          </SwitcherTypo>
        </ListItem>
      );
    });
  };

  if (options.length === 0) return null;
  return (
    <div style={{ position: "relative" }}>
      <ThemeSelector onClick={showUpdatedLanguages}>
        <LanguageText>{languageName}</LanguageText>
        <DropdownIcon
          style={{ fontSize: "30px", color: "#1e9454", fontWeight: "bolder" }}
        />
      </ThemeSelector>
      {showLanguages ? (
        <ThemeDropDown ref={wrapperRef}>
          <List width={150}>{getListItems(options)}</List>
        </ThemeDropDown>
      ) : null}
    </div>
  );
};

export default LanguageSwitcher;
