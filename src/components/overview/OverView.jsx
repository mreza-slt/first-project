import { useMediaQuery } from "@mui/material";
import { makeStyles } from "@mui/styles";
import OverChildOne from "./overChid-1/OverChildOne";
import OverChildTwo from "./overChild-2/OverChildTwo";

const OverView = () => {
  const smQuery = useMediaQuery("(max-width:600px)");

  // styles-----------------------------------
  const useStyles = makeStyles({
    OverView: {
      maxWidth: "960px",
      margin: " 2rem auto 0 auto",
      padding: smQuery ? "0 0.75rem" : "0 1.5rem",
    },
  });

  const classes = useStyles();

  return (
    <main className={classes.OverView}>
      <section>
        <OverChildOne />
      </section>
      <section>
        <OverChildTwo />
      </section>
    </main>
  );
};

export default OverView;
