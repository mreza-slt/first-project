import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  Slide,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { forwardRef } from "react";
import "./alertTutorial.scss";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const AlertTutorial = ({ open, data, setOpen }) => {
  const mdQuery = useMediaQuery("(max-width:1280px)");

  const handleClose = () => {
    setOpen(false);
  };

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
          <div className="alertTutorial">
            <div className="content">
              <img src={data.logo} className="logo" alt="" />
              <Typography
                variant="h6"
                mb={"1rem"}
                fontSize={"1.3rem"}
                textAlign={"center"}
              >
                {data.h3}
              </Typography>
              <div>
                {data.descr ? (
                  data.descr.map((data) => (
                    <Typography
                      textAlign={"justify"}
                      variant="subtitle2"
                      fontWeight={500}
                      pl={"0.5rem"}
                      key={data}
                    >
                      {data}
                    </Typography>
                  ))
                ) : (
                  <Typography
                    textAlign={"justify"}
                    variant="subtitle2"
                    fontWeight={500}
                    pl={"0.5rem"}
                  >
                    {data.desc}
                  </Typography>
                )}
              </div>
              {!mdQuery && (
                <Button
                  className="myBtn"
                  variant="contained"
                  onClick={handleClose}
                >
                  CLOSE
                </Button>
              )}
            </div>
            <div
              className={`video ${document.body.dir === "rtl" ? "mb-8" : ""}`}
            >
              <video controls src={data.video} autoPlay />
            </div>
          </div>
        </DialogContent>
        {mdQuery && (
          <DialogActions>
            <Button variant="contained" onClick={handleClose}>
              CLOSE
            </Button>
          </DialogActions>
        )}
      </Dialog>
    </>
  );
};

export default AlertTutorial;
