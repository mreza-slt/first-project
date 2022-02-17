import { ListItemButton } from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";
import styles from "./overChildOne.module.css";
import AnimateStart from "../../../common/animateScroll";

const OverChildOne = () => {
  const { ref, scroll } = AnimateStart();
  return (
    <div className={styles.child_1}>
      <div className={styles.section_1}>
        <h1 className=" mb-4 text-3xl font-bold font-sans">My Expertise</h1>
        <ul
          ref={ref}
          className={
            scroll
              ? "animate__animated animate__bounce  animate__fadeInLeft"
              : ""
          }
        >
          <ListItemButton className={`${styles.li}`}>
            <CircleIcon color="primary" sx={{ fontSize: 10 }} />
            <li className="pl-4 ">
              <span className="font-bold">Bodybuilding</span> (Expert)
            </li>
          </ListItemButton>

          <ListItemButton className={`${styles.li}`}>
            <CircleIcon color="primary" sx={{ fontSize: 10 }} />
            <li className="pl-4 ">
              <span className="font-bold">Croosfit</span> (Expert)
            </li>
          </ListItemButton>
        </ul>
      </div>
      <div className={styles.section_2}>
        <h1 className="text-3xl font-bold">My overview</h1>
      </div>
    </div>
  );
};

export default OverChildOne;
