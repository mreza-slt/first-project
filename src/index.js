import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import "animate.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "swiper/css";
import "swiper/css/bundle";
import "flag-icon-css/css/flag-icons.min.css";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";

// use of {i18next} pakage for change language
i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    supportedLngs: ["en", "fa", "ar"],
    fallbackLng: "en",
    detection: {
      order: ["path", "cookie", "localStorage", "htmlTag", "subdomain"],
      caches: ["cookie"],
    },
    backend: {
      loadPath: "/assets/locales/{{lng}}/translation.json",
    },
  });

const loading = <div>loding...</div>;
ReactDOM.render(
  <Suspense fallback={loading}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Suspense>,
  document.getElementById("root")
);
