import { makeStyles } from "@mui/styles";

const PakageStyles = () => {
  const useStyles = makeStyles({
    pakage_content: {
      margin: "3rem auto",
      maxWidth: "960px",
    },
    content: {
      maxWidth: "504px",
      paddingTop: "4rem",
      lineHeight: "22px",
      marginLeft: "auto",
      marginRight: "auto",
      opacity: "0.69",
    },
    parent_slide: {
      position: "relative",
    },
    img_bg: {
      position: "absolute",
      top: "-20px",
      left: "-50px",
      transform:
        document.body.dir === "ltr" ? "rotate(180deg)" : "rotate(0deg)",
    },
    swiper: {
      height: "25rem",
      padding: "1rem 2rem",
      maxWidth: "910px",
      position: "relative",
    },
    span: {
      position: "absolute",
      background: "#387cff",
      color: "#fff",
      borderRadius: "25px",
      padding: "6px 15px",
      fontSize: "1rem",
      top: "15px",
      left: "15px",
    },
    img_content: {
      position: "absolute",
      color: "#fff",
      padding: "6px 15px",
      bottom: "25px",
      left: "6px",
      textAlign: "left",
    },
  });

  return useStyles;
};

export default PakageStyles;
