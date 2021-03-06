import { Language } from "@mui/icons-material";
import { Button, Menu, MenuItem, useMediaQuery } from "@mui/material";
import { makeStyles } from "@mui/styles";
import i18next from "i18next";
import cookies from "js-cookie";
import { useEffect, useState } from "react";
import nav_img from "../../assets/images/download.png";
import nav_img_sm from "../../assets/images/logo-rambody-white.818c0b64.png";

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

const NavBar = ({ setDirection }) => {
  // get media query
  const media = useMediaQuery("(max-width:960px)");

  // use of cookies pakage for get code from cookies
  const currentLanguageCode = cookies.get("i18next") || "en";

  // find currnt language
  const currentLanguage = languages.find((l) => l.code === currentLanguageCode);

  // change {dir} Due to the language
  useEffect(() => {
    setDirection(currentLanguage.dir || "ltr");
  }, [currentLanguage]);

  // Drawer component function
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (code) => {
    setAnchorEl(null);
    i18next.changeLanguage(code);
  };

  // styles css -------------------------
  const useStyles = makeStyles({
    root: {
      "& .MuiPaper-root": {
        maxWidth: media ? "70px" : "104px",
        marginTop: "-36px !important",
        marginLeft: media ? "5.6px !important" : "11px !important",
        marginRight: media ? "-6.3px !important" : "-0.3px !important",
      },
    },
    navbar: {
      display: "flex",
      maxWidth: media ? "960px" : "100%",
      height: media ? "4rem" : "6rem",
      justifyContent: "space-between",
      padding: media ? "0 1.5rem" : "2rem",
      alignItems: " center",
    },
    img_sm: media
      ? {
          display: "inline",
          width: "40px",
          height: "40px",
        }
      : {
          display: "none",
        },
    img_md: media && {
      display: "none",
    },
  });

  const classes = useStyles();

  return (
    <nav className={classes.navbar}>
      <div className={classes.img_md}>
        <img src={nav_img} alt="logo" />
      </div>
      <div className={classes.img_sm}>
        <img src={nav_img_sm} />
      </div>
      <div>
        <div>
          <Button
            variant="outlined"
            sx={
              media
                ? {
                    padding: "5px 15px 5px 12px",
                    color: "#fff",
                    borderColor: "#fff",
                    "&:hover": { borderColor: "#fff" },
                  }
                : {}
            }
            id="demo-positioned-button"
            aria-controls={open ? "demo-positioned-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            <span
              className={`mx-2 flag-icon flag-icon-${currentLanguage.country_code}`}
            ></span>
            {media ? currentLanguage.code : currentLanguage.name}
          </Button>
          <Menu
            className={classes.root}
            id="demo-positioned-menu"
            aria-labelledby="demo-positioned-button"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
          >
            {languages.map(({ code, name, country_code }) => (
              <div key={country_code}>
                <MenuItem
                  sx={{ margin: "0 -9px" }}
                  className={code === currentLanguageCode ? "font-bold" : ""}
                  onClick={() => handleClose(code)}
                >
                  <span
                    className={`flag-icon px-4 flag-icon-${country_code}`}
                  ></span>
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
