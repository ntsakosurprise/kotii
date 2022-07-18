import i18next from "i18next";
import { reactI18next } from "react-i18next";
import { translations } from "./translations";

export const initialize = () => {
  i18next
    .use(reactI18next)
    .init({ resource: translations, lng: "en", debug: true });
};
