import { Typography } from "@mui/material";
import appStore_img from "../../assets/images/app-store.9ebdc2c9.png";
import googlePlay_img from "../../assets/images/download (1).png";
import logo from "../../assets/images/logo-rambody.6f2da0b2.png";
import AnimateStart from "../../common/animateScroll";
import "./getApp.scss";
const GetApp = () => {
  const { ref, scroll } = AnimateStart();

  return (
    <main className="w-full">
      <div className="getApp">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div ref={ref}>
          <Typography
            variant="h4"
            fontWeight={600}
            mb={"1.5rem"}
            className={scroll ? "animate__backInLeft animate__animated" : ""}
          >
            Download Application
          </Typography>
          <div className="img">
            <a href="https://play.google.com/store/apps/details?id=co.rambody">
              <div>
                <img src={googlePlay_img} alt="" />
              </div>
            </a>

            <a href="https://apps.apple.com/app/rambody/id1300350064">
              <div>
                <img src={appStore_img} alt="" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};

export default GetApp;
