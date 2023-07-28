/* eslint-disable no-unused-vars */
import { Box, Button, Page } from "kotii-ui";
import React from "react";
import { useTranslation } from "react-i18next";
export const Home = () => {
  const { t, i18n } = useTranslation();

  const settings = {
    autoplay: false,
    speed: 300,
    slidesToShow: 5,
  };

  function changeLanguage(e) {
    console.log(i18n);
    i18n.changeLanguage(e.target.value);
  }

  console.log("THE KOTII-UI::", Button);
  console.log("THE UI PAGE", Page);

  // console.log("carouselSlick;;;", CarouselSlick);

  return (
    <Box>
      <div>
        <h1>{t("greetings")}</h1>
        <p>
          {t("message")}
          <span>
            <a href="#">{t("flex")}</a>
          </span>
        </p>
        <button onClick={changeLanguage} value="en">
          English
        </button>
        <button onClick={changeLanguage} value="ts">
          Tsonga
        </button>
        <Button />
      </div>
    </Box>

    // <Carousel />
    //   <CarouselSlick
    //     settings={settings}
    //     items={[...items]}
    //     shouldShowHead={true}
    //   />
  );
};
