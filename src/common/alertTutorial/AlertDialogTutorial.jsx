import { Button, Dialog, DialogActions, Slide } from "@mui/material";
import { forwardRef } from "react";
import styles from "./alertTutorial.module.css";
const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const AlertTutorial = ({ open, data, setOpen }) => {
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Dialog
        maxWidth="xl"
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <div className={styles.alertTutorial}>
          <div className={styles.content}>
            <img src={data.logo} className={styles.logo} alt="" />
            <h3>{data.h3}</h3>
            <div>
              <div>
                <p>{data.desc}</p>
              </div>
            </div>
            <DialogActions>
              <Button variant="contained" onClick={handleClose}>
                CLOSE
              </Button>
            </DialogActions>
          </div>
          <div className={styles.video}>
            <video controls src={data.video} autoPlay></video>
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default AlertTutorial;
