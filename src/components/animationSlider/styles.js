import { useMediaQuery } from "@mui/material";
import { makeStyles } from "@mui/styles";

const StyleAnimation = () => {
  // get media query
  const lgQuery = useMediaQuery("(max-width:960px)");
  const smQuery = useMediaQuery("(max-width:600px)");
  const xsQuery = useMediaQuery("(max-width:320px)");

  const useStyles = makeStyles({
    animation_slider: {
      width: "100%",
    },
    animate_content: {
      display: "flex",
      flexDirection: lgQuery && "column",
      maxWidth: "calc(100vw - ((100vw - 960px) / 2))",
      height: "100%",
      paddingLeft: lgQuery ? 0 : "1.6rem",
      margin: "0 0 0 auto",
      position: "relative",
    },
    contentSlide: {
      flexBasis: lgQuery ? "100%" : "33.3%",
      width: "100%",
      maxHeight: "288px",
      marginTop: smQuery ? "0" : "20px",
      background: "#fff",
      padding: (smQuery && "0 0.75rem") || (lgQuery && "0 1.5rem"),
    },
    imageSlider: {
      position: "relative",
      padding: "0.3rem 0 0.3rem 0.6rem",
      flexBasis: lgQuery ? "100%" : "66.6%",
      width: lgQuery ? "100%" : "66.6%",
      height: "100%",
      background: "#fff",
      paddingLeft: lgQuery && 0,
    },
    swiper_slide: {
      padding: smQuery ? "0 0.75rem" : "0 1.5rem",
      maxHeight: "280px",
      width: " 408px",
    },
    img: {
      borderRadius: "10px",
      boxShadow: " 0px 0px 5px 5px#e9ebec",
      height: lgQuery ? "240px" : "280px",
      width: xsQuery ? "298px" : lgQuery ? "328px" : "100%",
    },
    pagination: {
      position: lgQuery ? "static" : "absolute",
      bottom: "6px",
      left: "25px",
      display: lgQuery && "flex",
      justifyContent: lgQuery && "center",
      marginTop: lgQuery && "2rem",
    },
  });

  return useStyles;
};

export default StyleAnimation;
