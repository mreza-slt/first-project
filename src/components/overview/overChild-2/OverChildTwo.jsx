import animationVideo from "../../../assets/videos/animation.mp4";
import "./overChildTwo.scss";

const OverChildTwo = () => {
  return (
    <div className="child_2">
      <div className="video">
        <video controls>
          <source src={animationVideo} type="video/mp4" />
        </video>
        <div className="img"></div>
      </div>
    </div>
  );
};

export default OverChildTwo;
