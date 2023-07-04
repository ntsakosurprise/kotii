import { capitalizeFirstLetter } from "kotii-utils";
import React, { useEffect, useState } from "react";
import Select from "react-select";
import { useLanguage } from "../../context/language-provider";

// const options = [
//   { value: "en", label: "English" },
//   { value: "ts", label: "Tsonga" },
//   { value: "ve", label: "Venda" },
//   { value: "pe", label: "Pedi" },
//   { value: "zu", label: "zulu" },
// ];

const LanguageSwitcher = () => {
  console.log("KOTII-UTILS VALUE;;;", capitalizeFirstLetter);
  const { changeCurrentLanguage, language, getLanguageNames } = useLanguage();
  const [selectedOption, setSelectedOption] = useState(language);
  // const defaultLocale = getDefaultLocale();
  const [options, setOptions] = useState([
    // { label: defaultLocale.label, value: defaultLocale.locale },
  ]);

  const switchLanguage = (value) => {
    console.log("the props;;", value);
    changeCurrentLanguage(value);
    setSelectedOption(value);
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

  if (options.length === 0) return null;

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
