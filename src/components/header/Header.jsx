import { Button, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import AnimateStart from "../../common/animateScroll";
import NavBar from "../navigation/NavBar";
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
          <img
            className="img_1"
            src="https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt="header-image"
          />
          <img
            className="img_2"
            src="https://rambody-trainer.azureedge.net/static/media/texture.55db9915.png"
            alt="header-image"
          />
          <img
            className="img_3"
            src="https://rambody-trainer.azureedge.net/static/media/texture.55db9915.png"
            alt="header-image"
          />
        </div>
      </section>
    </main>
  );
};

export default Header;
