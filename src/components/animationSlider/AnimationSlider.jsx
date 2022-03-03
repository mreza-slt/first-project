import { Typography, useMediaQuery } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
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
  // get website text translations
  const { t } = useTranslation();

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
      h1: t("animateSlider.title_1"),
      p: t("animateSlider.body_1"),
      src: img_1,
    },
    {
      id: 1,
      h1: t("animateSlider.title_2"),
      p: t("animateSlider.body_2"),
      src: img_2,
    },
    {
      id: 2,
      h1: t("animateSlider.title_3"),
      p: t("animateSlider.body_3"),
      src: img_3,
    },
    {
      id: 3,
      h1: t("animateSlider.title_4"),
      p: t("animateSlider.body_4"),
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
                dir={document.body.dir === "ltr" ? "ltr" : "rtl"}
                key={document.body.dir === "ltr" ? "ltr" : "rtl"}
                style={{
                  padding: "0.5rem 0",
                }}
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
            <div className={classes.after_imageSlider}></div>
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
