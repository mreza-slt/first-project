import {
  Button,
  Fade,
  Menu,
  MenuItem,
  Paper,
  Popper,
  useMediaQuery,
} from "@mui/material";
import styles from "./navBar.module.css";
import { Language } from "@mui/icons-material";

import { useTranslation } from "react-i18next";
import i18next from "i18next";
import cookies from "js-cookie";
import { useEffect, useState } from "react";

// language lists
const languages = [
  {
    code: "en",
    name: "English",
    country_code: "gb",
  },
  {
    code: "ar",
    name: "العربية",
    country_code: "sa",
    dir: "rtl",
  },
  {
    code: "fa",
    name: "فارسی",
    country_code: "ir",
    dir: "rtl",
  },
];

const NavBar = () => {
  // get media query
  const media = useMediaQuery("(max-width:960px)");

  // use of cookies pakage for get code from cookies
  const currentLanguageCode = cookies.get("i18next") || "en";

  const currentLanguage = languages.find((l) => l.code === currentLanguageCode);

  // Get data related to any language
  const { t } = useTranslation();

  // change {dir} Due to the language
  useEffect(() => {
    document.body.dir = currentLanguage.dir || "ltr";
    document.title = t("title");
  }, [currentLanguage]);

  // Drawer component function
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (code) => {
    i18next.changeLanguage(code);
    setAnchorEl(null);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.img_md}>
        <img
          src="data:image/png;base64,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"
          alt="logo"
        />
      </div>
      <div className={styles.img_sm}>
        <img src="https://rambody-trainer.azureedge.net/static/media/logo-rambody-white.818c0b64.png" />
      </div>
      <div>
        <div>
          <Button
            variant="outlined"
            className={styles.myBtn}
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            <Language color="primary" className={`p-0.5 mr-1 ${styles.icon}`} />
            {media ? currentLanguage.code : currentLanguage.name}
          </Button>
          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            {languages.map(({ code, name, country_code }) => (
              <div key={country_code}>
                <MenuItem
                  className={code === currentLanguageCode ? "font-bold" : ""}
                  onClick={() => handleClose(code)}
                >
                  {/* <span
                    className={`flag-icon flag-icon-${country_code}`}
                  ></span> */}
                  {media ? code : name}
                </MenuItem>
              </div>
            ))}
          </Menu>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
