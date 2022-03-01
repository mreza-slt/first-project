import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "./common/NotFound/NotFound";
import FirstPage from "./page/FirstPage";
import Home from "./page/Home";
import { create } from "jss";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import rtl from "jss-rtl";
import { StylesProvider, jssPreset } from "@mui/styles";

import { useState } from "react";

const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

const App = () => {
  const [direction, setDirection] = useState("");

  const customTheme = createTheme({ direction });
  document.body.dir = direction;

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
