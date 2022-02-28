import AnimationSlider from "../components/animationSlider/AnimationSlider";
import GetApp from "../components/getAppComp/GetApp";
import Header from "../components/header/Header";
import MyPakage from "../components/myPakage/MyPakage";
import OverView from "../components/overview/OverView";
import Tutorial from "../components/tutorial/Tutorial";
import Footer from "../components/footer/Footer";
import { useState } from "react";
import Loading from "../common/loading/Loading";
const Home = () => {
  const [loading, setLoading] = useState(false);

  // setTimeout(() => {
  //   setLoading(false);
  // }, 5000);

  return (
    <div className="h-screen" style={{ background: "#fff" }}>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Header />
          <OverView />
          <AnimationSlider />
          <MyPakage />
          <GetApp />
          <Tutorial />
          <Footer />
        </>
      )}
    </div>
  );
};

export default Home;
