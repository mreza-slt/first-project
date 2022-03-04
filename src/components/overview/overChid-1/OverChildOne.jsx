import CircleIcon from "@mui/icons-material/Circle";
import { ListItemButton, Typography, useMediaQuery } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useTranslation } from "react-i18next";
import AnimateStart from "../../../common/animateScroll";

const OverChildOne = () => {
  // start animation when scroll
  const { ref, scroll } = AnimateStart();

  // get media query
  const mdQuery = useMediaQuery("(max-width:1280px)");
  const smQuery = useMediaQuery("(max-width:600px)");

  // get website text translations
  const { t } = useTranslation();

  // styles-----------------------------------
  const useStyles = makeStyles({
    child_1: {
      display: "flex",
      width: "100%",
      flexDirection: mdQuery && "column",
      alignItems: "flex-start",
      maxWidth: mdQuery && "1280px",
      color: "rgb(57, 73, 89)",
      marginTop: smQuery ? "1rem" : " 3rem",
    },
    section_1: {
      flexBasis: mdQuery ? "100%" : "50%",
      width: "100%",
    },
    section_2: {
      flexBasis: mdQuery ? "100%" : "50%",
      width: "100%",
      marginTop: (smQuery && "1rem") || (mdQuery && "2rem"),
    },
  });

  const classes = useStyles();

  return (
    <div className={classes.child_1}>
      <div className={classes.section_1}>
        <Typography variant="h4" fontWeight={500} fontSize={"1.8rem"}>
          {t("overView.Title_1")}
        </Typography>
        <ul
          ref={ref}
          className={
            scroll
              ? "animate__animated animate__bounce  animate__fadeInLeft"
              : ""
          }
        >
          <ListItemButton sx={{ padding: "0.5rem 0" }}>
            <CircleIcon color="primary" sx={{ fontSize: 10 }} />
            <Typography className="pl-1 ">
              <span className="font-bold"> {t("overView.li_1")}</span> (
              {t("overView.li_sm")})
            </Typography>
          </ListItemButton>

          <ListItemButton sx={{ padding: "0.5rem 0" }}>
            <CircleIcon color="primary" sx={{ fontSize: 10 }} />
            <Typography className="pl-1 ">
              <span className="font-bold"> {t("overView.li_2")}</span> (
              {t("overView.li_sm")})
            </Typography>
          </ListItemButton>
        </ul>
      </div>
      <div className={classes.section_2}>
        <Typography variant="h4" fontWeight={500} fontSize={"1.8rem"}>
          {t("overView.Title_2")}
        </Typography>
      </div>
    </div>
  );
};

export default OverChildOne;
