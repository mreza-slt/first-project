import { Typography, useMediaQuery } from "@mui/material";
import { makeStyles } from "@mui/styles";
import appStore_img from "../../assets/images/app-store.9ebdc2c9.png";
import googlePlay_img from "../../assets/images/download (1).png";
import logo from "../../assets/images/logo-rambody.6f2da0b2.png";
import AnimateStart from "../../common/animateScroll";

const GetApp = () => {
  const { ref, scroll } = AnimateStart();

  const smQuery = useMediaQuery("(max-width:600px)");
  const xsQuery = useMediaQuery("(max-width:472px)");

  const useStyles = makeStyles({
    getApp: {
      margin: "4rem auto 3rem auto",
      maxWidth: "540px",
      textAlign: "center",
    },
    logo: {
      margin: "1rem auto",
      background: "#fff",
      width: "120px",
      height: "120px",
      border: "1px solid #eff5ff",
      borderRadius: "50%",
      boxShadow: "0px 3px 9px 6px #eff5ff",
      padding: "25px",
    },
    img: {
      display: "flex",
      flexDirection: xsQuery && "column",
      alignItems: "center",
      justifyContent: "center",
    },
    img_download: {
      width: "200px",
      height: "64px",
      boxShadow: "0 16px 25px 0 rgb(57 73 89 / 25%)",
      margin: "0.8rem",
      borderRadius: "6px",
    },
  });

  const classes = useStyles();

  return (
    <main className="w-full">
      <div className={classes.getApp}>
        <div className={classes.logo}>
          <img src={logo} alt="" />
        </div>
        <div ref={ref}>
          <Typography
            variant="h4"
            fontWeight={600}
            mb={"1.5rem"}
            fontSize={smQuery && "1.5rem"}
            className={scroll ? "animate__backInLeft animate__animated" : ""}
          >
            Download Application
          </Typography>
          <div className={classes.img}>
            <a href="https://play.google.com/store/apps/details?id=co.rambody">
              <div className={classes.img_download}>
                <img
                  style={{ width: "100%", height: "100%", borderRadius: "6px" }}
                  src={googlePlay_img}
                  alt=""
                />
              </div>
            </a>

            <a href="https://apps.apple.com/app/rambody/id1300350064">
              <div className={classes.img_download}>
                <img
                  style={{ width: "100%", height: "100%", borderRadius: "6px" }}
                  src={appStore_img}
                  alt=""
                />
              </div>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};

export default GetApp;
