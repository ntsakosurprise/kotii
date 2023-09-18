// import { Box, Button, Heading, Paragraph } from "grommet";
import React, { useState } from "react";
import { BsFillMoonStarsFill as MoonIcon } from "react-icons/bs";
import Switch from "react-switch";
import styled from "styled-components";
import { useKotiiTheme } from "../../../context";

// import { themes } from "../../config/themes";

// const options = [
//   { value: "en", label: "English" },
//   { value: "ts", label: "Tsonga" },
//   { value: "ve", label: "Venda" },
// ];

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

const List = styled("ul")(() => {
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
    width: "150px",
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
    alignItems: "center",
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
const ThemeSwitcher = () => {
  const { changeTheme, theme, themes } = useKotiiTheme();
  const [selectedOption, setSelectedOption] = useState(theme);
  const [showThemes, setShowThemes] = useState(false);
  const [switchChecked, setSwitch] = useState(false);
  console.log("the themSWITCHER;;;", themes);
  console.log(changeTheme, theme);

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

  const getListItems = (items) => {
    return items.map((it, ix) => {
      return (
        <ListItem key={ix}>
          <SwitcherText>{it.label}</SwitcherText>
          <SwitcherSlider>
            <Switch
              onChange={handleSwitchleChange}
              checked={switchChecked}
              uncheckedIcon={false}
              height={16}
              width={32}
            />
          </SwitcherSlider>
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
        <ThemeDropDown>
          <List>{getListItems(getOptions())}</List>
        </ThemeDropDown>
      ) : null}
    </div>
  );
};

export default ThemeSwitcher;
