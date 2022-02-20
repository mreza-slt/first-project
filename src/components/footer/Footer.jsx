import styles from "./footer.module.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

const Footer = () => {
  return (
    <div className={styles.footer_parent}>
      <div className={styles.footer}>
        <div className={styles.footert_content}>
          <div className={styles.content}>
            <img
              src="https://rambody-trainer.azureedge.net/static/media/logo-rambody-text-white.c792b75a.png"
              alt=""
            />
            <p>
              Rambody is a communication platform between trainers and trainees
              to provide a dedicated training and nutrition plan.
            </p>
          </div>
        </div>
        <div className={styles.links}>
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
      <div className={styles.footer_2_parent}>
        <div className={styles.footer_2}>
          <div className={styles.content}>
            <p>
              All rights reserved 2019. Farosa Technologies Inc. Farosa
              Technologies Inc
            </p>
          </div>
          <div className={styles.icons}>
            <a href="https://www.instagram.com/accounts/login/?next=/rambody.app/">
              <InstagramIcon className={styles.icon} fontSize="small" />
            </a>
            <a href="https://twitter.com/RambodyApp/">
              <TwitterIcon className={styles.icon} fontSize="small" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
