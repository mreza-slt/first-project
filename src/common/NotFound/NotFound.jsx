import { Typography } from "@mui/material";
import img from "../../assets/images/download.png";

const NotFound = () => {
  return (
    <div className="text-center h-screen px-2">
      <img className="pt-20 mx-auto" src={img} alt="" />
      <Typography variant="h4" fontWeight={500} fontSize={"2rem"} mt={"1rem"}>
        Looks like something went wrong.
      </Typography>
      <Typography variant="h5" fontWeight={500} mt={"0.5rem"}>
        Contact{" "}
        <a
          style={{ color: "#0000ee", textDecoration: "underline" }}
          href="support@rambody.com"
        >
          Rambody support
        </a>{" "}
        team
      </Typography>
      <Typography variant="h6" mt={"0.5rem"}>
        Error Details:
      </Typography>
      <Typography variant="subtitle" sx={{ fontWeight: "600", mt: "0.5rem" }}>
        Error Code: 500
      </Typography>
      <Typography sx={{ fontWeight: "600", mt: "0.5rem" }}>
        Error Message: No Trainer With this id found
      </Typography>
      <Typography sx={{ fontWeight: "600", mt: "0.5rem" }}>
        Operation Id: |b9234d9e5fa40f4b90d7b1bf98 c8dc7c.ecb827b8712e934c.
      </Typography>
    </div>
  );
};

export default NotFound;
