import CircleIcon from "@mui/icons-material/Circle";
import { ListItemButton, Typography, useMediaQuery } from "@mui/material";
import { makeStyles } from "@mui/styles";
import AnimateStart from "../../../common/animateScroll";

const OverChildOne = () => {
  // start animation when scroll
  const { ref, scroll } = AnimateStart();

  // get media query
  const mdQuery = useMediaQuery("(max-width:1280px)");
  const smQuery = useMediaQuery("(max-width:600px)");

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
        <Typography variant="h4" fontWeight={500} fontSize={"2rem"}>
          My Expertise
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
              <span className="font-bold">Bodybuilding</span> (Expert)
            </Typography>
          </ListItemButton>

          <ListItemButton sx={{ padding: "0.5rem 0" }}>
            <CircleIcon color="primary" sx={{ fontSize: 10 }} />
            <Typography className="pl-1 ">
              <span className="font-bold">Croosfit</span> (Expert)
            </Typography>
          </ListItemButton>
        </ul>
      </div>
      <div className={classes.section_2}>
        <Typography variant="h4" fontWeight={500} fontSize={"2rem"}>
          My overview
        </Typography>
      </div>
    </div>
  );
};

export default OverChildOne;
