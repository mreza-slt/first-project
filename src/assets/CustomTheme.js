import { useMediaQuery } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { useState } from "react";

const CustomTheme = () => {
  const lgQuery = useMediaQuery("(max-width:960px)");

  const [direction, setDirection] = useState("");

  const customTheme = createTheme({
    direction,
    typography: {
      fontFamily: [
        "Roboto",
        "iran-sans",
        "Helvetica",
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

  return { setDirection, customTheme };
};

export default CustomTheme;
