import "./overChildTwo.scss";

const OverChildTwo = () => {
  return (
    <div className="child_2">
      <div className="video">
        <video controls>
          <source
            src="https://rambody-trainer.azureedge.net/assets/en/animation.mp4#t=0.1"
            type="video/mp4"
          />
        </video>
        <div className="img"></div>
      </div>
    </div>
  );
};

export default OverChildTwo;
