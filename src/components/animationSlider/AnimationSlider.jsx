import styles from "./animateSlide.module.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import "swiper/css/thumbs";
import "./styles.css";
// import required modules
import { Autoplay, Pagination, Thumbs } from "swiper";
import { useEffect, useRef, useState } from "react";
import { useMediaQuery } from "@mui/material";

const AnimationSlider = () => {
  const slideRef = useRef(null);
  const [ref, setRef] = useState(null);

  const media = useMediaQuery("(max-width:960px)");

  useEffect(() => {
    if (slideRef) setRef(slideRef.current);
  }, [slideRef]);

  const content = [
    {
      id: 1,
      h1: "Animated exercises",
      p: "There are more than 1,500 training exercises exist inRambody, and as a trainer, I will design and send you aspecial workout plan by choosing from these exercises. Notethat these plans havent been prepared in advance and I willdesign and submit the plan based on your needs and after thespecified time.",
      src: "https://rambody-trainer.azureedge.net/assets/common/screenshots/screenshot1.gif",
    },
    {
      id: 2,
      h1: "Muscles involved",
      p: "  In the sent workout plan, I specify which of your musclesare involved during each exercise. With this feature, youcan focus on the target muscle while doing.",
      src: "https://rambody-trainer.azureedge.net/assets/common/screenshots/screenshot2.jpg",
    },
    {
      id: 3,
      h1: "Workout plan without equipment",
      p: "If you indicate to me that you do not have equipment available, according to the variety of exercises, I will design a special plan without the need for any equipment and with the help of your body weight.",
      src: "https://rambody-trainer.azureedge.net/assets/common/screenshots/screenshot3.gif",
    },
    {
      id: 4,
      h1: "Progress chart",
      p: "By entering your weight and size, see the changes on the chart, and base on the chart and the speed of your changes and by analyze your physical condition, I can change your plan to reach your goal faster and better.",
      src: "https://rambody-trainer.azureedge.net/assets/common/screenshots/screenshot4.jpg",
    },
  ];

  const handlerChangeSlider = () => {
    content.map((c) => console.log());
  };
  return (
    <main className={`swiper_animation ${styles.main}`}>
      <div>
        <div className={styles.animate}>
          <div className={styles.animate_content}>
            <div
              className={`${styles.contentSlide}  animate__animated animate__flash`}
            >
              <h3>Animated exercises</h3>
              <p>
                There are more than 1,500 training exercises exist inRambody,
                and as a trainer, I will design and send you aspecial workout
                plan by choosing from these exercises. Notethat these plans
                havent been prepared in advance and I willdesign and submit the
                plan based on your needs and after thespecified time.
              </p>
            </div>
            {media ? (
              ""
            ) : (
              <div
                ref={slideRef}
                className={`swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal ${styles.pagination}`}
              >
                <span className="swiper-pagination-bullet "></span>
                <span className="swiper-pagination-bullet"></span>
                <span className="swiper-pagination-bullet"></span>
                <span className="swiper-pagination-bullet"></span>
              </div>
            )}

            <div className={styles.imageSlider}>
              <div>
                <Swiper
                  onSlideChange={handlerChangeSlider}
                  slidesPerView={media ? 2.5 : 2}
                  spaceBetween={-15}
                  autoplay={{
                    delay: 5000,
                    disableOnInteraction: true,
                  }}
                  pagination={{
                    clickable: true,
                    el: ref,
                    type: "custom",
                  }}
                  loop={true}
                  modules={[Autoplay, Thumbs, Pagination]}
                >
                  {content.map((c) => (
                    <SwiperSlide key={c.id}>
                      <div>
                        <img
                          className={styles.img}
                          src={c.src}
                          alt="animate_img"
                        />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AnimationSlider;