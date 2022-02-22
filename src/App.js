// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import NotFound from "./common/NotFound/NotFound";
// import FirstPage from "./page/FirstPage";
// import Home from "./page/Home";

import { useTranslation } from "react-i18next";
import i18next from "i18next";
import cookies from "js-cookie";
import { useEffect } from "react";

// const App = () => {
//   return (
//     <div className="App">
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<FirstPage />} />
//           <Route path="/:name" element={<Home />} />
//           <Route path="*" element={<NotFound />} />
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// };

// export default App;

const languages = [
  {
    code: "en",
    name: "English",
    country_code: "gb",
  },
  {
    code: "ar",
    name: "العربية",
    country_code: "sa",
    dir: "rtl",
  },
  {
    code: "fa",
    name: "Persian",
    country_code: "ir",
    dir: "rtl",
  },
];

const App = () => {
  const currentLanguageCode = cookies.get("i18next") || "en";

  const currentLanguage = languages.find((l) => l.code === currentLanguageCode);
  const { t } = useTranslation();

  useEffect(() => {
    document.body.dir = currentLanguage.dir || "ltr";
    document.title = t("title");
  }, [currentLanguage]);

  return (
    <>
      <span>{t("language")}</span>
      {languages.map(({ code, name, country_code }) => (
        <li key={country_code}>
          <span className={`flag-icon flag-icon-${country_code} mx-4`}></span>
          <button
            className={code === currentLanguageCode ? "font-bold" : ""}
            onClick={() => i18next.changeLanguage(code)}
          >
            {name}
          </button>
        </li>
      ))}
      <h2 className="text-center font-bold mt-12">{t("welcome_to_react")}</h2>
    </>
  );
};

export default App;
