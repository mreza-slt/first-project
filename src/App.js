import { ThemeProvider } from "@mui/material";
import { jssPreset, StylesProvider } from "@mui/styles";
import { create } from "jss";
import rtl from "jss-rtl";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CustomTheme from "./assets/customTheme";
import NotFound from "./common/NotFound/NotFound";
import FirstPage from "./page/FirstPage";
import Home from "./page/Home";

const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

const App = () => {
  const { setDirection, customTheme } = CustomTheme();
  return (
    <div className="App">
      <BrowserRouter>
        <StylesProvider jss={jss}>
          <ThemeProvider theme={customTheme}>
            <Routes>
              <Route path="/" element={<FirstPage />} />
              <Route
                path="/:name"
                element={<Home setDirection={setDirection} />}
              />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </ThemeProvider>
        </StylesProvider>
      </BrowserRouter>
    </div>
  );
};

export default App;
