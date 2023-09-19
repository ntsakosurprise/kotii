// import { Box, Button, Heading, Paragraph } from "grommet";
import React, { useEffect, useRef, useState } from "react";
import { BsCheck, BsFillMoonStarsFill as MoonIcon } from "react-icons/bs";
import { MdOutlineLightMode as ToggleLight } from "react-icons/md";
import Switch from "react-switch";
import styled from "styled-components";
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

const ThemeDropDown = styled("div")(() => {
  return {
    position: "relative",
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
  const { changeTheme, theme, themes } = useKotiiTheme();
  const [selectedOption, setSelectedOption] = useState(theme);
  const [showThemes, setShowThemes] = useState(false);
  const [switchChecked, setSwitch] = useState(false);
  const [checkedItem, setCheckedItem] = useState(null);
  console.log("the themSWITCHER;;;", themes);
  console.log(changeTheme, theme);

  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef, setShowThemes);

  const switchTheme = (value) => {
    console.log("the props;;", value);
    changeTheme(value);
    setSelectedOption(value);
  };

  const getOptions = () => {
    const optionDictionary = [];
    for (let themeName in themes) {
      console.log("the theme I;;", themeName);
      optionDictionary.push({ value: themes[themeName], label: themeName });
    }
    return optionDictionary;
  };

  const customStyles = {
    menu: (provided, state) => ({
      ...provided,
      width: state.selectProps.width,
      borderBottom: "1px dotted pink",
      color: state.selectProps.menuColor,
      padding: 20,
    }),

    option: (provided, state) => ({
      ...provided,
      borderBottom: "1px dotted pink",
      color: state.isSelected ? "red" : "blue",
      padding: 20,
    }),

    control: (_, { selectProps: { width } }) => ({
      width: width,
    }),

    singleValue: (provided, state) => {
      const opacity = state.isDisabled ? 0.5 : 1;
      const transition = "opacity 300ms";

      return { ...provided, opacity, transition };
    },
  };

  const showUpdatedThemes = () => {
    setShowThemes(!showThemes);
  };

  const handleSwitchleChange = () => {
    setSwitch(!switchChecked);
  };

  const activateTheme = (eve) => {
    const setValue = eve.target.attributes.value.nodeValue;
    // console.log("SWITCH ACTIVATE", eve.target.attributes.value.nodeValue);
    console.log("setItem", setValue);
    changeTheme(themes[setValue]);
    setCheckedItem(setValue);
  };

  // useEffect(() => {
  //   console.log("SET-ITEM HAS CHANGED", checkedItem);
  //   changeTheme(themes[checkedItem]);
  // }, [checkedItem]);

  const getListItems = (items) => {
    return items.map((it, ix) => {
      return (
        <ListItem key={ix}>
          <SwitcherTypo>
            {checkedItem === it.label || (!checkedItem && ix === 0) ? (
              <BsCheck />
            ) : (
              <BsCheck style={{ visibility: "hidden" }} />
            )}
            <SwitcherText value={it.label} onClick={activateTheme}>
              {it.label}
            </SwitcherText>
          </SwitcherTypo>
          {it.label === "light" ||
          it.label === "dark" ||
          it.label !== checkedItem ? null : (
            <SwitcherSlider>
              <Switch
                onChange={handleSwitchleChange}
                checked={switchChecked}
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
          <List
            width={
              !checkedItem || checkedItem === "light" || checkedItem === "dark"
                ? 100
                : 150
            }
          >
            {getListItems(getOptions())}
          </List>
        </ThemeDropDown>
      ) : null}
    </div>
  );
};

export default ThemeSwitcher;
