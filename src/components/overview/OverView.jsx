import OverChildOne from "./overChid-1/OverChildOne";
import styles from "./over.module.css";
import OverChildTwo from "./overChild-2/OverChildTwo";

const OverView = () => {
  return (
    <main className={styles.OverView}>
      <section>
        <OverChildOne />
      </section>
      <section>
        <OverChildTwo />
      </section>
    </main>
  );
};

export default OverView;
