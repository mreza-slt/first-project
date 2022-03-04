import { useMediaQuery } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Cookies from "js-cookie";

const AlertPakageStyles = () => {
  const lgQuery = useMediaQuery("(max-width:960px)");
  const smQuery = useMediaQuery("(max-width:600px)");
  const xsQuery = useMediaQuery("(max-width:340px)");

  const language = Cookies.get("i18next");

  const useStyles = makeStyles({
    alert_pakage: {
      background: "#fff",
      display: "flex",
      flexWrap: "wrap",
      minHeight: smQuery && "30rem",
    },
    img_bg: {
      order: 1,
      overflow: "hidden",
      flexBasis: lgQuery ? "97.5%" : "50%",
      width: lgQuery ? "100%" : "50%",
      height: lgQuery ? "9rem" : "370px",
      padding: "0.9rem 0 0 0",
      position: "relative",
      textAlign: "center",
      borderRadius: "5px",
    },
    img: {
      width: "100%",
      height: lgQuery ? "30rem" : "100%",
      borderRadius: "5px",
    },
    img_content: {
      position: "absolute",
      width: "100%",
      top: "14px",
      height: "100%",
      borderRadius: "5px",
      opacity: "0.5",
      color: " #fff",
      background: "#000",
    },
    content_1: {
      position: "absolute",
      top: 0,
      width: "100%",
      margin: "2rem auto",
      color: "#fff",
    },
    content: {
      flexBasis: lgQuery ? "100%" : "50%",
      height: lgQuery ? "100%" : "90%",
      padding: "0.5rem 0.5rem 0.5rem 0rem",
      paddingLeft: "1rem",
      width: "100%",
      order: 2,
    },
    p: {
      flexShrink: 0,
      fontWeight: "bold",
      paddingRight: "1rem",
    },
    download: {
      display: "flex",
      flexDirection: xsQuery && "column",
      alignItems: "center",
      justifyContent: "center",
      maxWidth: "30rem",
    },
    img_download:
      language === "fa"
        ? {
            width: lgQuery ? "9rem" : "15rem",
            borderRadius: "9px",
            height: "2.5rem",
          }
        : {
            width: lgQuery ? "9rem" : "9rem",
            borderRadius: "9px",
            height: "2.5rem",
          },
    img_parent: {
      maxWidth: "12rem",
      marginRight: "0.5rem",
    },
    img_parent_2: {
      maxWidth: lgQuery ? "12rem" : "8.5rem",
      marginTop: smQuery && "0.5rem",
    },
  });

  return useStyles;
};

export default AlertPakageStyles;
