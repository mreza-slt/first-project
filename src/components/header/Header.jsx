import { Button, Typography, useMediaQuery } from "@mui/material";
import { useParams } from "react-router-dom";
import AnimateStart from "../../common/animateScroll";
import NavBar from "../navigation/NavBar";
import img_1 from "../../assets/images/pexels-photo-841130.jpeg";
import img_2 from "../../assets/images/texture.55db9915.png";
import HeaderStyle from "./headerStyle";
import { useTranslation } from "react-i18next";

const Header = ({ setDirection }) => {
  // get website text translations
  const { t } = useTranslation();

  const params = useParams();

  // start animation when scroll
  const { scroll, ref } = AnimateStart();

  // get media Query
  const lgQuery = useMediaQuery("(max-width:960px)");

  // set title with userName
  document.title = `${document.title} - ` + params.name;

  // get headerStyles
  const useStyles = HeaderStyle();
  const classes = useStyles();

  return (
    <main className={classes.header}>
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
            {t("header_button")}
          </Button>
        </div>

        <div className={classes.img}>
          <img className={classes.img_1} src={img_1} alt="header-image" />
          <img className={classes.img_2} src={img_2} alt="header-image" />
          <img className={classes.img_3} src={img_2} alt="header-image" />
        </div>
      </section>
    </main>
  );
};

export default Header;
