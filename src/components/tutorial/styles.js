import { makeStyles } from "@mui/styles";

const TutorialStyles = () => {
  const useStyles = makeStyles({
    tutorial: {
      width: "100%",
      background: "#f4f9fe",
      padding: "2rem 0",
      color: "#394959",
    },
    slider: {
      maxWidth: "calc(100vw - ((100vw - 960px) / 2))",
      margin: "4rem 0 0 auto",
      position: "relative",
    },
    afetrSlider: {
      top: 0,
      left: "-3px",
      position: "absolute",
      width: "23px",
      height: "100%",
      background:
        "linear-gradient(to left, rgba(255, 255, 255, 0) 2%, #f4f9fe)",
      zIndex: "1",
    },
    img_1: {
      position: "absolute",
      top: "-56px",
      left: "-54px",
      transform: document.body.dir === "ltr" ? "rotate(180deg)" : "rotate(0)",
    },
    swiper: {
      width: "100%",
      height: "450px",
      margin: "20px auto",
      padding: "1.3rem 1.3rem 0 0",
    },
    swiper_slide: {
      textAlign: "center",
      background: "#f4f9fe",
      width: "320px !important",
      height: "400px !important",
      marginLeft: "1.5rem",
      boxShadow: "0 7px 22px 0 rgb(57 73 89 / 30%)",
      borderRadius: "12px",
    },
    text_img: {
      position: "absolute",
      width: "100%",
      height: "50%",
      left: 0,
      bottom: 0,
      background: "#fff",
      borderRadius: "12px",
    },
    text: {
      textAlign: "left",
      paddingLeft: "1rem",
    },
    button: {
      position: "absolute",
      bottom: "12px",
      left: "12px",
    },
  });
  return useStyles;
};

export default TutorialStyles;
