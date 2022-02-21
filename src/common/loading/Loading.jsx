import { Box, LinearProgress } from "@mui/material";
import styles from "./loading.module.css";
const Loading = () => {
  return (
    <>
      <Box sx={{ width: "100%" }}>
        <LinearProgress />
      </Box>
      <div className={styles.logo}>
        <img
          src="https://rambody-trainer.azureedge.net/static/media/logo-rambody.6f2da0b2.png"
          alt=""
        />
      </div>
    </>
  );
};

export default Loading;
