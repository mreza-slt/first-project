import { Button, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import AnimateStart from "../../common/animateScroll";
import NavBar from "../navigation/NavBar";
import img_1 from "../../assets/images/pexels-photo-841130.jpeg";
import img_2 from "../../assets/images/texture.55db9915.png";
import "./header.scss";

const Header = () => {
  const params = useParams();
  const { scroll, ref } = AnimateStart();

  document.title = `${document.title} - ` + params.name;

  return (
    <main className="header">
      <section>
        <NavBar />
      </section>
      <section ref={ref} className="section_parent">
        <div className="content">
          <div
            className={scroll ? "animate__animated animate__fadeInDown" : ""}
          >
            <Typography variant="h4" fontWeight={500}>
              {params.name.toUpperCase()}
            </Typography>
            <Typography variant="h6" mb={1}>
              @{params.name}
            </Typography>
          </div>
          <Button variant="contained" className="myBtn">
            Open app
          </Button>
        </div>

        <div className="img">
          <img className="img_1" src={img_1} alt="header-image" />
          <img className="img_2" src={img_2} alt="header-image" />
          <img className="img_3" src={img_2} alt="header-image" />
        </div>
      </section>
    </main>
  );
};

export default Header;
