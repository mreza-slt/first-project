import { useMediaQuery } from "@mui/material";
import { makeStyles } from "@mui/styles";

const HeaderStyle = () => {
  const mdQuery = useMediaQuery("(max-width:1280px)");
  const lgQuery = useMediaQuery("(max-width:960px)");
  const smQuery = useMediaQuery("(max-width:600px)");

  const direction = document.body.dir;

  // styles css -------------------------
  const useStyles = makeStyles({
    header: {
      background: lgQuery ? "#9fa2a6" : "#f4f9fe",
      color: lgQuery && "#fff",
      height: lgQuery && "36.5rem",
      width: "100%",
      maxWidth: mdQuery && "1280px",
      paddingBottom: lgQuery ? "1rem" : "2rem",
    },
    section_parent: {
      display: "grid",
      gridTemplateColumns: mdQuery
        ? "grid-template-columns: repeat(1, minmax(0, 1fr))"
        : "repeat(2, minmax(0, 1fr))",
      justifyContent: "flex-start",
      alignItems: "center",
      maxWidth: "960px",
      margin: "0 auto",
      padding: smQuery ? "0 0.75rem" : "0 1.5rem",
      height: lgQuery && "90%",
      position: lgQuery && "relative",
    },
    content: {
      order: mdQuery && "2",
      position: lgQuery && "absolute",
      left: "0",
      bottom: "0",
      padding: (smQuery && "0 0.75rem") || (lgQuery && "0 1.5rem"),
    },
    img: {
      display: lgQuery && "none",
      position: "relative",
      height: "544px",
      width: "544px",
      order: mdQuery && "1",
      margin: mdQuery && "2rem 0",
    },
    img_1: {
      width: " 400px",
      height: "400px",
      borderRadius: "15px",
      background: "#f4f9fe",
      position: "absolute",
      left: "72px",
      top: "72px",
      zIndex: "2",
    },
    img_2: {
      position: "absolute",
      top: "0",
      left: "0",
      zIndex: "1",
      transform: direction === "ltr" ? "rotate(180deg)" : "rotate(0)",
    },
    img_3: {
      position: " absolute",
      right: "0",
      bottom: "0",
      zIndex: "1",
      transform: direction === "rtl" ? "rotate(180deg)" : "rotate(0)",
    },
  });

  return useStyles;
};

export default HeaderStyle;
