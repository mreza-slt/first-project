import { Box, LinearProgress } from "@mui/material";
import "./loading.scss";
const Loading = () => {
  return (
    <div className="loading">
      <Box sx={{ width: "100%" }}>
        <LinearProgress />
      </Box>
      <div className="logo">
        <img
          src="https://rambody-trainer.azureedge.net/static/media/logo-rambody.6f2da0b2.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Loading;
