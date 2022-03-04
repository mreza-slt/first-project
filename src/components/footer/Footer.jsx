import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import footer_img from "../../assets/images/logo-rambody-text-white.c792b75a.png";
import FooterStyles from "./styles";

const Footer = () => {
  // get website text translations
  const { t } = useTranslation();

  const useStyles = FooterStyles();

  const classes = useStyles();

  return (
    <div className={classes.footer_parent}>
      <div className={classes.footer}>
        <div className={classes.footer_content}>
          <div className={classes.content}>
            <img className={classes.img} src={footer_img} alt="" />
            <Typography
              variant="subtitle2"
              fontSize={".85rem"}
              fontWeight={450}
              className="opacity-70"
            >
              {t("footer.title")}
            </Typography>
          </div>
        </div>
        <div className={classes.links}>
          <Typography color="primary" fontWeight={500}>
            <a className="block mt-4" href="https://www.rambody.ca/">
              www.Rambody.com
            </a>
            <a className="block mt-4" href="info@rambody.com">
              info@rambody.com
            </a>
          </Typography>

          <div>
            <a
              className="block mt-4 underline text-white opacity-70"
              href="https://www.rambody.ca/faq"
            >
              <Typography variant="subtitle2">{t("footer.link_1")}</Typography>
            </a>
            <a
              className="block mt-4 underline text-white opacity-70"
              href="https://www.rambody.ca/blog/categories/englishblogs"
            >
              <Typography variant="subtitle2">{t("footer.link_2")}</Typography>
            </a>
          </div>
        </div>
      </div>
      <div className={classes.footer_2_parent}>
        <div className={classes.footer_2}>
          <div className={classes.content}>
            <Typography
              variant="subtitle2"
              fontSize={".85rem"}
              fontWeight={500}
              className="opacity-70"
            >
              {t("footer.caption")}
            </Typography>
          </div>
          <div className="flex items-center mb-4 mx-auto">
            <a href="https://www.instagram.com/accounts/login/?next=/rambody.app/">
              <InstagramIcon
                className={classes.icon}
                sx={{ width: "27px", height: "27px" }}
              />
            </a>
            <a href="https://twitter.com/RambodyApp/">
              <TwitterIcon
                className={classes.icon}
                sx={{ width: "27px", height: "27px" }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
