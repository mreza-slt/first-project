import { useMediaQuery } from "@mui/material";
import { makeStyles } from "@mui/styles";

const FooterStyles = () => {
  const lgQuery = useMediaQuery("(max-width:960px)");
  const xsQuery = useMediaQuery("(max-width:430px)");

  const useStyles = makeStyles({
    footer_parent: {
      width: "100%",
      background: "#394959",
      padding: "0 0.25rem",
    },
    footer: {
      maxWidth: "960px",
      margin: "0 auto",
      padding: "0 0.5rem",
    },
    footer_content: {
      maxWidth: "960px",
      margin: "0 auto",
      display: "flex",
      flexWrap: "wrap",
    },
    img: {
      width: "10rem",
      height: "2.5rem",
      margin: "1.7rem 0",
    },
    content: {
      flexBasis: lgQuery ? "100%" : "33.33%",
      width: "100%",
      fontSize: "small",
      color: "#fff",
      marginBottom: "1rem",
    },
    links: {
      display: lgQuery ? "block" : "flex",
      justifyContent: "space-between",
      alignItems: "center",
      maxWidth: "600px",
      margin: "0.5rem 0",
    },
    footer_2_parent: {
      background: "#334250",
      width: "100%",
    },
    footer_2: {
      display: "flex",
      flexDirection: xsQuery && "column",
      justifyContent: "space-between",
      alignItems: xsQuery ? "flex-start" : "center",
      maxWidth: "960px",
      margin: "0 auto",
      padding: "1rem 0.5rem 0 0.5rem",
      color: "#fff",
    },
    icon: {
      background: "#bbc2cb",
      color: "#5b6065",

      marginLeft: "0.2rem",
      padding: "0.2rem",
      borderRadius: "50%",
      transition: "all 0.3s",

      "&:hover": {
        background: "#2f3d49",
        color: "#000",
      },
    },
  });

  return useStyles;
};

export default FooterStyles;
