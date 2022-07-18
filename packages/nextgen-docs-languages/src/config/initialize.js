import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import { translations } from "./translations";

export const initialize = () => {
  i18next
    .use(initReactI18next)
    .init({ resource: translations, lng: "en", debug: true });
};
