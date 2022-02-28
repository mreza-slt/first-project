import { Button, Typography, useMediaQuery } from "@mui/material";
import { useParams } from "react-router-dom";
import AnimateStart from "../../common/animateScroll";
import NavBar from "../navigation/NavBar";
import img_1 from "../../assets/images/pexels-photo-841130.jpeg";
import img_2 from "../../assets/images/texture.55db9915.png";
import { makeStyles } from "@mui/styles";

import "./header.scss";

const Header = ({ setDirection }) => {
  const params = useParams();
  const { scroll, ref } = AnimateStart();

  const mdQuery = useMediaQuery("(max-width:1280px)");
  const lgQuery = useMediaQuery("(max-width:960px)");
  const smQuery = useMediaQuery("(max-width:600px)");

  document.title = `${document.title} - ` + params.name;

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
      display: " grid",
      gridTemplateColumns: mdQuery
        ? "grid-template-columns: repeat(1, minmax(0, 1fr))"
        : "repeat(2, minmax(0, 1fr))",
      justifyContent: "center",
      alignItems: "center",
      maxWidth: "960px",
      margin: "0 auto",
      padding: smQuery ? "0 0.75rem" : "0 1.5rem",
      width: lgQuery && "100%",
      height: lgQuery && "90%",
      position: lgQuery && "relative",
    },
    content: {
      order: mdQuery && "2",
      position: lgQuery && "absolute",
      left: "0",
      bottom: "0",
      padding: smQuery ? "0 0.75rem" : "0 1.5rem",
    },
    img: {
      position: "relative",
      height: "544px",
      width: "544px",
      order: mdQuery ? "1" : "2",
      margin: mdQuery ? "2rem 0" : "0",
    },
    img_1: {
      width: "400px",
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
      transform: "rotate(180deg)",
    },
    img_3: {
      position: "absolute",
      right: "0",
      bottom: "0",
      zIndex: "1",
    },
  });
  const classes = useStyles();

  return (
    <main className={`header ${classes.header}`}>
      <section>
        <NavBar setDirection={setDirection} />
      </section>
      <section ref={ref} className={classes.section_parent}>
        <div className={classes.content}>
          <div
            className={scroll ? "animate__animated animate__fadeInDown" : ""}
          >
            <Typography variant="h4" fontWeight={500}>
              {params.name.toUpperCase()}
            </Typography>
            <Typography variant="h6" mb={1}>
              @{params.name}
            </Typography>
          </div>
          <Button
            sx={{
              display: lgQuery ? "block" : "none",
              borderRadius: "32px",
              color: "#fff",
              width: " 128px",
              height: "40px",
              padding: "8px 16px",
              my: "1rem",
              fontSize: "0.8rem",
            }}
            variant="contained"
          >
            Open app
          </Button>
        </div>

        <div className="img">
          <img className="img_1" src={img_1} alt="header-image" />
          <img className="img_2" src={img_2} alt="header-image" />
          <img className="img_3" src={img_2} alt="header-image" />
        </div>
      </section>
    </main>
  );
};

export default Header;
