// import { Box, Button, Heading, Paragraph } from "grommet";
import React, { useState } from "react";
import Select from "react-select";
import { useKotiiTheme } from "../../context";
// import { themes } from "../../config/themes";

// const options = [
//   { value: "en", label: "English" },
//   { value: "ts", label: "Tsonga" },
//   { value: "ve", label: "Venda" },
// ];

const ThemeSwitcher = () => {
  const { changeTheme, theme, themes } = useKotiiTheme();
  const [selectedOption, setSelectedOption] = useState(theme);
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

  return (
    <div>
      <Select
        defaultValue={selectedOption}
        onChange={(e) => {
          console.log("onchange event;;;", e);
          switchTheme(e.value);
        }}
        options={[...getOptions()]}
        styles={customStyles}
      />
      {/* <Box>
        <p>Grommet boxx</p>
        <Heading level="1">Hello Grommet Theme Toggle</Heading>
        <Paragraph fill> */}
      This is a{" "}
      {/* <Anchor
            as={"a"}
              href="https://developer.hpe.com/blog/dark-mode-theming-in-grommet-theme-color-customization/"
              target="_blank"
              // function={() => {}}
            >
              theming tutorial
            </Anchor> */}
      {/* using Grommet.
        </Paragraph>
        <Button
          label="Toggle Theme"
          primary
          alignSelf="center"
          margin="large"
          // onClick={() => setDarkMode(!darkMode)}
        />
      </Box> */}
      {/* <Box pad="large">
          <Heading level="1">Hello Grommet Theme Toggle</Heading>
          <Paragraph fill>
            This is a{" "}
            <Anchor
              href="https://developer.hpe.com/blog/dark-mode-theming-in-grommet-theme-color-customization/"
              target="_blank"
            >
              theming tutorial
            </Anchor>{" "}
            using Grommet.
          </Paragraph>

          <Button
            label="Toggle Theme"
            primary
            alignSelf="center"
            margin="large"
            onClick={() => setDarkMode(!darkMode)}
          />
          <DemoSection />
        </Box> */}
    </div>
  );
};

export default ThemeSwitcher;
