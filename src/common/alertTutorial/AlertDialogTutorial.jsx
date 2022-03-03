import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  Slide,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { forwardRef } from "react";
import { useTranslation } from "react-i18next";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const AlertTutorial = ({ open, data, setOpen }) => {
  // get website text translations
  const { t } = useTranslation();

  const mdQuery = useMediaQuery("(max-width:1280px)");
  const lgQuery = useMediaQuery("(max-width:960px)");

  const handleClose = () => {
    setOpen(false);
  };

  // styles------------------------
  const useStyles = makeStyles({
    alertTutorial: {
      position: "relative",
      background: "#fff",
      display: "flex",
      flexWrap: "wrap",
      flexDirection: lgQuery && "column",
      maxWidth: "960px",
    },
    content: {
      flexBasis: "50%",
      height: "100%",
      width: "100%",
      marginBottom: lgQuery ? "1rem" : "4rem",
    },
    video_parent: {
      flexBasis: "50%",
      width: "100%",
      maxHeight: "40rem",
      padding: "1rem 0 1rem 0.5rem",
    },
  });

  const classes = useStyles();

  return (
    <>
      <Dialog
        maxWidth="lg"
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogContent>
          <div className={classes.alertTutorial}>
            <div className={classes.content}>
              <img src={data.logo} className="mx-auto mt-6 mb-4" alt="" />
              <Typography
                variant="h6"
                mb={"1rem"}
                fontSize={"1.3rem"}
                textAlign={"center"}
              >
                {data.h3}
              </Typography>
              <div>
                <Typography
                  whiteSpace="break-spaces"
                  textAlign={"justify"}
                  variant="subtitle2"
                  fontWeight={500}
                  pl={"0.2rem"}
                  key={data}
                >
                  {data.descr}
                </Typography>
              </div>
            </div>
            <div className={classes.video_parent}>
              <video
                className="rounded-md h-full w-full"
                controls
                src={data.video}
                autoPlay
              />
            </div>
          </div>
        </DialogContent>

        <DialogActions>
          <Button variant="contained" onClick={handleClose}>
            {t("alert_action")}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default AlertTutorial;
