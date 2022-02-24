import CircleIcon from "@mui/icons-material/Circle";
import { ListItemButton, Typography } from "@mui/material";
import AnimateStart from "../../../common/animateScroll";
import "./overChildOne.scss";

const OverChildOne = () => {
  const { ref, scroll } = AnimateStart();
  return (
    <div className="child_1">
      <div className="section_1">
        <Typography variant="h4" fontWeight={500} fontSize={"2rem"}>
          My Expertise
        </Typography>
        <ul
          ref={ref}
          className={
            scroll
              ? "animate__animated animate__bounce  animate__fadeInLeft"
              : ""
          }
        >
          <ListItemButton className="li">
            <CircleIcon color="primary" sx={{ fontSize: 10 }} />
            <Typography className="pl-4 ">
              <span className="font-bold">Bodybuilding</span> (Expert)
            </Typography>
          </ListItemButton>

          <ListItemButton className="li">
            <CircleIcon color="primary" sx={{ fontSize: 10 }} />
            <Typography className="pl-4 ">
              <span className="font-bold">Croosfit</span> (Expert)
            </Typography>
          </ListItemButton>
        </ul>
      </div>
      <div className="section_2">
        <Typography variant="h4" fontWeight={500} fontSize={"2rem"}>
          My overview
        </Typography>
      </div>
    </div>
  );
};

export default OverChildOne;
