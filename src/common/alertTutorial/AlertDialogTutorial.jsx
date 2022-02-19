import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  Slide,
  useMediaQuery,
} from "@mui/material";
import { forwardRef } from "react";
import styles from "./alertTutorial.module.css";
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
          <div className={styles.alertTutorial}>
            <div className={styles.content}>
              <img src={data.logo} className={styles.logo} alt="" />
              <h3>{data.h3}</h3>
              <div>
                {data.descr ? (
                  data.descr.map((data) => <p key={data}>{data}</p>)
                ) : (
                  <p>{data.desc}</p>
                )}
              </div>
              {!mdQuery && (
                <Button
                  className={styles.myBtn}
                  variant="contained"
                  onClick={handleClose}
                >
                  CLOSE
                </Button>
              )}
            </div>
            <div className={styles.video}>
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
