import { Typography, useMediaQuery } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { Autoplay, Pagination, Thumbs } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/thumbs";
import { Swiper, SwiperSlide } from "swiper/react";
import img_1 from "../../assets/images/screenshot1.gif";
import img_2 from "../../assets/images/screenshot2.jpg";
import img_3 from "../../assets/images/screenshot3.gif";
import img_4 from "../../assets/images/screenshot4.jpg";
import StyleAnimation from "./styles";

const AnimationSlider = () => {
  const slideRef = useRef(null);
  const media = useMediaQuery("(max-width:960px)");

  const [ref, setRef] = useState(null);
  const [text, setText] = useState({
    id: 0,
    h1: "Animated exercises",
    p: "There are more than 1,500 training exercises exist inRambody, and as a trainer, I will design and send you aspecial workout plan by choosing from these exercises. Notethat these plans havent been prepared in advance and I willdesign and submit the plan based on your needs and after thespecified time.",
    src: "https://rambody-trainer.azureedge.net/assets/common/screenshots/screenshot1.gif",
  });
  const [className, setClassName] = useState("");
  useEffect(() => {
    setTimeout(() => {
      setClassName("");
    }, 1000);
  }, [text]);

  useEffect(() => {
    if (slideRef) setRef(slideRef.current);
  }, [slideRef]);

  const content = [
    {
      id: 0,
      h1: "Animated exercises",
      p: "There are more than 1,500 training exercises exist inRambody, and as a trainer, I will design and send you aspecial workout plan by choosing from these exercises. Notethat these plans havent been prepared in advance and I willdesign and submit the plan based on your needs and after thespecified time.",
      src: img_1,
    },
    {
      id: 1,
      h1: "Muscles involved",
      p: "  In the sent workout plan, I specify which of your musclesare involved during each exercise. With this feature, youcan focus on the target muscle while doing.",
      src: img_2,
    },
    {
      id: 2,
      h1: "Workout plan without equipment",
      p: "If you indicate to me that you do not have equipment available, according to the variety of exercises, I will design a special plan without the need for any equipment and with the help of your body weight.",
      src: img_3,
    },
    {
      id: 3,
      h1: "Progress chart",
      p: "By entering your weight and size, see the changes on the chart, and base on the chart and the speed of your changes and by analyze your physical condition, I can change your plan to reach your goal faster and better.",
      src: img_4,
    },
  ];

  const changeSlider = (data) => {
    const item = content.find((item) => item.id === data.realIndex);
    setText(item);
    setClassName("animate__animated animate__fadeIn animate__slow");
  };
  // styles
  const useStyles = StyleAnimation();

  const classes = useStyles();

  return (
    <main className={classes.animation_slider}>
      <div>
        <div className={classes.animate_content}>
          <div className={classes.contentSlide}>
            <div className={className}>
              <Typography variant="h4" fontWeight={500} fontSize={"2rem"}>
                {text.h1}
              </Typography>
              <Typography mt={3} variant="subtitle2">
                {text.p}
              </Typography>
            </div>
          </div>

          <div className={classes.imageSlider}>
            <div>
              <Swiper
                grabCursor={true}
                onSlideChange={(data) => changeSlider(data)}
                slidesPerView={"auto"}
                spaceBetween={media ? -45 : -15}
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: true,
                }}
                pagination={{
                  clickable: true,
                  el: ref,
                }}
                loop={true}
                modules={[Autoplay, Thumbs, Pagination]}
                className="mySwiper"
                style={{ padding: "0.5rem 0", direction: "rtl" }}
              >
                {content.map((c) => (
                  <SwiperSlide
                    className={classes.swiper_slide}
                    key={c.id}
                    id={c.id}
                  >
                    <div>
                      <img
                        className={classes.img}
                        src={c.src}
                        alt="animate_img"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div
              style={{
                display: media && "none",
                position: "absolute",
                left: 0,
                top: 0,
                width: " 15px",
                height: "100%",
                background: "#fff",
                boxShadow: "6px 0px 15px 0px #fff",
                zIndex: "10",
              }}
            ></div>
          </div>
          <div
            ref={slideRef}
            className={`swiper-pagination ${classes.pagination}`}
          ></div>
        </div>
      </div>
    </main>
  );
};

export default AnimationSlider;
