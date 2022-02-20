import AnimationSlider from "../components/animationSlider/AnimationSlider";
import GetApp from "../components/getAppComp/GetApp";
import Header from "../components/header/Header";
import MyPakage from "../components/myPakage/MyPakage";
import OverView from "../components/overview/OverView";
import Tutorial from "../components/tutorial/Tutorial";
import Footer from "../components/footer/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <OverView />
      <AnimationSlider />
      <MyPakage />
      <GetApp />
      <Tutorial />
      <Footer />
    </>
  );
};

export default Home;
