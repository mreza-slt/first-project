import { ThemeProvider } from "@mui/material/styles";
import { jssPreset, StylesProvider } from "@mui/styles";
import { create } from "jss";
import rtl from "jss-rtl";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CustomTheme from "./assets/CustomTheme";
import NotFound from "./common/NotFound/NotFound";
import FirstPage from "./page/FirstPage";
import Home from "./page/Home";

const App = () => {
  const jss = create({
    plugins: [...jssPreset().plugins, rtl()],
  });

  return (
    <div className="App">
      <BrowserRouter>
        <ThemeProvider theme={CustomTheme}>
          <StylesProvider jss={jss}>
            <Routes>
              <Route path="/" element={<FirstPage />} />
              <Route path="/:name" element={<Home />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </StylesProvider>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
};

export default App;
