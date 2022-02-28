import { createTheme } from "@mui/material/styles";
import { useState } from "react";

const [direction, setDirection] = useState("ltr");

const handleSwitch = () => {
  setDirection(direction === "ltr" ? "rtl" : "ltr");
};

const theme = createTheme({ direction });
document.body.dir = direction;
