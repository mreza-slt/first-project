import { useMediaQuery } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { jssPreset, StylesProvider } from "@mui/styles";
import { create } from "jss";
import rtl from "jss-rtl";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "./common/NotFound/NotFound";
import FirstPage from "./page/FirstPage";
import Home from "./page/Home";

const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

const App = () => {
  const lgQuery = useMediaQuery("(max-width:960px)");

  const [direction, setDirection] = useState("");

  const customTheme = createTheme({
    direction,
    typography: {
      fontFamily: [
        '"Helvetica Neue"',
        '"Segoe UI"',
        "Roboto",

        "Arial",
        "sans-serif",
      ].join(","),
    },
    components: {
      MuiPaper: {
        styleOverrides: {
          root: {
            margin: "0.75rem !important",
            width: "960px",
          },
        },
      },
      MuiDialogContent: {
        styleOverrides: {
          root: {
            padding: "0 1rem",
          },
        },
      },
      MuiTypography: {
        styleOverrides: {
          h4: {
            fontSize: lgQuery && "1.5rem !important",
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            margin:
              document.body.dir === "rtl"
                ? "0 0.5rem 0 auto"
                : "0 auto 0 0.5rem",
          },
        },
      },
    },
  });
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
