import { Box, LinearProgress } from "@mui/material";
import img from "../../assets/images/logo-rambody.6f2da0b2.png";
import "./loading.scss";

const Loading = () => {
  return (
    <div className="loading">
      <Box sx={{ width: "100%" }}>
        <LinearProgress />
      </Box>
      <div className="logo">
        <img SRC={img} alt="" />
      </div>
    </div>
  );
};

export default Loading;
