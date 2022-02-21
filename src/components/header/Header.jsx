import { useParams } from "react-router-dom";
import AnimateStart from "../../common/animateScroll";
import NavBar from "../navigation/NavBar";
import styles from "./header.module.css";

const Header = () => {
  const params = useParams();
  const { scroll, ref } = AnimateStart();
  return (
    <main className={styles.header}>
      <section>
        <NavBar />
      </section>
      <section ref={ref} className={styles.section_parent}>
        <div className={styles.content}>
          <div
            className={scroll ? "animate__animated animate__fadeInDown" : ""}
          >
            <h1>{params.name.toUpperCase()}</h1>
            <h2 className="font-normal text-xl">@{params.name}</h2>
          </div>
          <button className={styles.myBtn}>Open app</button>
        </div>

        <div className={styles.img}>
          <img
            className={styles.img_1}
            src="https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt="header-image"
          />
          <img
            className={styles.img_2}
            src="https://rambody-trainer.azureedge.net/static/media/texture.55db9915.png"
            alt="header-image"
          />
          <img
            className={styles.img_3}
            src="https://rambody-trainer.azureedge.net/static/media/texture.55db9915.png"
            alt="header-image"
          />
        </div>
      </section>
    </main>
  );
};

export default Header;
