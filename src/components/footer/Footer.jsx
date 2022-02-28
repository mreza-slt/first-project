import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Typography } from "@mui/material";
import "./footer.scss";
import footer_img from "../../assets/images/logo-rambody-text-white.c792b75a.png";

const Footer = () => {
  return (
    <div className="footer_parent">
      <div className="footer">
        <div className="footer_content">
          <div className="content">
            <img src={footer_img} alt="" />
            <Typography
              variant="subtitle2"
              fontSize={".85rem"}
              fontWeight={450}
              className="opacity-70"
            >
              Rambody is a communication platform between trainers and trainees
              to provide a dedicated training and nutrition plan.
            </Typography>
          </div>
        </div>
        <div className="links">
          <div>
            <a href="https://www.rambody.ca/">www.Rambody.com</a>
            <a href="info@rambody.com">info@rambody.com</a>
          </div>

          <div>
            <a href="https://www.rambody.ca/faq">FAQ</a>
            <a href="https://www.rambody.ca/blog/categories/englishblogs">
              Blog
            </a>
          </div>
        </div>
      </div>
      <div className="footer_2_parent">
        <div className="footer_2">
          <div className="content">
            <Typography
              variant="subtitle2"
              fontSize={".85rem"}
              fontWeight={400}
              className="opacity-70"
            >
              All rights reserved 2019. Farosa Technologies Inc. Farosa
              Technologies Inc
            </Typography>
          </div>
          <div className="icons">
            <a href="https://www.instagram.com/accounts/login/?next=/rambody.app/">
              <InstagramIcon className="icon" fontSize="small" />
            </a>
            <a href="https://twitter.com/RambodyApp/">
              <TwitterIcon className="icon" fontSize="small" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
