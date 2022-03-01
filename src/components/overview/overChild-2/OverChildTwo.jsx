import { useMediaQuery } from "@mui/material";
import { makeStyles } from "@mui/styles";
import img from "../../../assets/images/texture.55db9915.png";
import animationVideo from "../../../assets/videos/animation.mp4";

const OverChildTwo = () => {
  // get media query
  const lgQuery = useMediaQuery("(max-width:960px)");

  // styles-----------------------------------
  const useStyles = makeStyles({
    child_2: {
      width: "100%",
      position: "relative",
      margin: lgQuery ? "3rem 0 4rem 0" : "3rem 0 9rem 0",
    },
    video: {
      maxWidth: "552px",
      maxHeight: "405px",
      margin: " 0 auto",
      zIndex: "2",
    },
    img: {
      display: lgQuery && "none",
      position: "absolute",
      bottom: "-73px",
      right: "108px",
      zIndex: "-1",
      transform: document.body.dir === "ltr" ? "rotate(0)" : "rotate(180deg)",
    },
  });

  const classes = useStyles();

  return (
    <div className={classes.child_2}>
      <div className={classes.video}>
        <video
          controls
          style={{
            borderRadius: "15px",
            minWidth: " 100px",
            boxShadow: "8px 37px 42px 0 rgb(56 124 255 / 13%)",
          }}
        >
          <source src={animationVideo} type="video/mp4" />
        </video>
        <div className={classes.img}>
          <img src={img} alt="background-image" />
        </div>
      </div>
    </div>
  );
};

export default OverChildTwo;
