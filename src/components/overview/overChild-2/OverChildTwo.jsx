import styles from "./overChildTwo.module.css";

const OverChildTwo = () => {
  return (
    <div className={styles.child_2}>
      <div className={styles.video}>
        <video controls>
          <source
            src="https://rambody-trainer.azureedge.net/assets/en/animation.mp4#t=0.1"
            type="video/mp4"
          />
        </video>
        <div className={styles.img}></div>
      </div>
    </div>
  );
};

export default OverChildTwo;
