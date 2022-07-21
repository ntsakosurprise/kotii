import { useThemeContext } from "Contenxt";
import React, { useState } from "react";
import Select from "react-select";
// import { themes } from "../../config/themes";

// const options = [
//   { value: "en", label: "English" },
//   { value: "ts", label: "Tsonga" },
//   { value: "ve", label: "Venda" },
// ];

const ThemeSwitcher = () => {
  const { changeTheme, theme, themes } = useThemeContext();
  const [selectedOption, setSelectedOption] = useState(theme);

  const switchTheme = (value) => {
    console.log("the props;;", value);
    changeTheme(value);
    setSelectedOption(value);
  };

  return (
    <div>
      <Select
        defaultValue={selectedOption}
        onChange={(e) => {
          console.log("onchange event;;;", e);
          switchTheme(e.value);
        }}
        options={[
          ...themes.forEach((element) => {
            return { value: element.name, label: element.name };
          }),
        ]}
      />
    </div>
  );
};

export default ThemeSwitcher;
