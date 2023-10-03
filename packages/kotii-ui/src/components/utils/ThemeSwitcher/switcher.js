// import { Box, Button, Heading, Paragraph } from "grommet";
import React, { useEffect, useRef, useState } from "react";
import { BsCheck, BsFillMoonStarsFill as MoonIcon } from "react-icons/bs";
import { MdOutlineLightMode as ToggleLight } from "react-icons/md";
import Switch from "react-switch";
import styled, { keyframes } from "styled-components";
import { useKotiiTheme } from "../../../context";

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
    "&:hover": { color: "red" },
    backgroundColor: "transparent",
  };
});
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
    right: 0,
  };
});

const ListItem = styled("li")(() => {
  return {
    margin: 0,
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

const SwitcherSlider = styled("p")(() => {
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
});
const ThemeSwitcher = () => {
  const { changeTheme, theme, themes, themeName, themeMode, changeThemeMode } =
    useKotiiTheme();

  const [showThemes, setShowThemes] = useState(false);

  // const [checkedItem] = useState(themeName);
  console.log("the themSWITCHER;;;", themes);
  console.log(changeTheme, theme);

  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef, setShowThemes);

  const getOptions = () => {
    const optionDictionary = [];
    for (let themeName in themes) {
      console.log("the theme I;;", themeName);
      optionDictionary.push({ value: themes[themeName], label: themeName });
    }
    return optionDictionary;
  };

  const showUpdatedThemes = () => {
    setShowThemes(!showThemes);
  };

  const handleSwitchleChange = () => {
    changeThemeMode(themeMode);
    // setSwitch(!switchChecked);
  };

  const activateTheme = (eve) => {
    const setValue = eve.target.attributes.value.nodeValue;
    // console.log("SWITCH ACTIVATE", eve.target.attributes.value.nodeValue);
    console.log("setItem", setValue);
    changeTheme(setValue);
    //setCheckedItem(setValue);
  };

  useEffect(() => {
    console.log(">>> SWITCH current theme", themeName);
    console.log(">>> SWITCH ");
    // return () => {
    //   console.log(">>> Switch UNMOUNING");
    // };
  }, [themeName, themeMode]);

  const getListItems = (items) => {
    return items.map((it, ix) => {
      // console.log(">>> THE CURRENT T THEMENAME", themeName);
      // console.log(">>> THE T CURRENT LABEL", it);
      return (
        <ListItem key={ix}>
          <SwitcherTypo>
            {themeName === it.label ? (
              <BsCheck style={{ color: "yellow" }} />
            ) : (
              <BsCheck style={{ visibility: "hidden" }} />
            )}
            <SwitcherText value={it.label} onClick={activateTheme}>
              {it.label}
            </SwitcherText>
          </SwitcherTypo>
          {themeName != it.label ? null : (
            <SwitcherSlider>
              <Switch
                onChange={handleSwitchleChange}
                checked={themeMode === "dark" ? false : true}
                uncheckedIcon={false}
                checkedIcon={<ToggleLight />}
                // disabled={true}
                height={16}
                width={30}
              />
            </SwitcherSlider>
          )}
        </ListItem>
      );
    });
  };
  return (
    <div>
      <ThemeSelector onClick={showUpdatedThemes}>
        <MoonIcon style={{ fontSize: "16px", color: "#f68fff" }} />
      </ThemeSelector>
      {showThemes ? (
        <ThemeDropDown ref={wrapperRef}>
          <List width={150}>{getListItems(getOptions())}</List>
        </ThemeDropDown>
      ) : null}
    </div>
  );
};

export default ThemeSwitcher;
