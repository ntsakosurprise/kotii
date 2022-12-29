import React, { useState } from "react";
import Select from "react-select";
import { useLanguage } from "../../context/language-provider";

const options = [
  { value: "en", label: "English" },
  { value: "ts", label: "Tsonga" },
  { value: "ve", label: "Venda" },
];

const LanguageSwitcher = () => {
  const { changeCurrentLanguage, language } = useLanguage();
  const [selectedOption, setSelectedOption] = useState(language);

  const switchLanguage = (value) => {
    console.log("the props;;", value);
    changeCurrentLanguage(value);
    setSelectedOption(value);
  };

  return (
    <div>
      <Select
        defaultValue={selectedOption}
        onChange={(e) => {
          console.log("onchange event;;;", e);

          switchLanguage(e.value);
        }}
        options={options}
      />
    </div>
  );
};

export default LanguageSwitcher;
