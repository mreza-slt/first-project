import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  Slide,
} from "@mui/material";

import { forwardRef } from "react";
import styles from "./alertPakage.module.css";
import "./styles.css";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const AlertDialog = ({ open, data, setOpen }) => {
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <main>
      <Dialog
        maxWidth="md"
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogContent>
          <div className={styles.dialog}>
            <div className={styles.img}>
              <img src={data.src} alt="" />
              <div className={styles.img_content}></div>
              <div className={styles.content_1}>
                <h1>{data.h1}</h1>
                <p>{data.p}</p>
              </div>
            </div>

            <div className={styles.content}>
              <h1>HOW DO I APPLY FOR A PACKAGE?</h1>
              <hr />
              <div>
                <div>
                  <p className="a">
                    STEP 1<span>Download Rambody application</span>
                  </p>
                  <p>
                    STEP 2
                    <span>Search for my ID (mehdiSherafat) in the app</span>
                  </p>
                  <p>
                    STEP 3
                    <span>Apply for one based on your needs and goals</span>
                  </p>
                  <p>
                    STEP 4
                    <span>
                      Design and submit the application within the specified
                      time
                    </span>
                  </p>
                </div>
              </div>
              <div className={styles.download}>
                <div>
                  <a href="https://play.google.com/store/apps/details?id=co.rambody">
                    <img
                      src="data:image/png;base64,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"
                      alt=""
                    />
                  </a>
                </div>
                <div>
                  <a href="https://apps.apple.com/app/rambody/id1300350064">
                    <img
                      src="https://rambody-trainer.azureedge.net/static/media/app-store.9ebdc2c9.png"
                      alt=""
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" onClick={handleClose}>
            CLOSE
          </Button>
        </DialogActions>
      </Dialog>
    </main>
  );
};

export default AlertDialog;
