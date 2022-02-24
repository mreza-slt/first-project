import OverChildOne from "./overChid-1/OverChildOne";
import OverChildTwo from "./overChild-2/OverChildTwo";
import "./over.scss";

const OverView = () => {
  return (
    <main className="OverView">
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
