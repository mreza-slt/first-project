import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import { Typography, useMediaQuery } from "@mui/material";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Autoplay, Scrollbar } from "swiper";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
// import video & image address
import img_2 from "../../assets/images/client_profile.jpg";
import img_3 from "../../assets/images/create_workout.jpg";
import img_1 from "../../assets/images/request_a_plan.jpg";
import bg_img from "../../assets/images/texture.55db9915.png";
import video_2 from "../../assets/videos/client_profile.mp4";
import video_3 from "../../assets/videos/create_workout.mp4";
import video_1 from "../../assets/videos/request_a_plan.mp4";
import AlertTutorial from "../../common/alertTutorial/AlertDialogTutorial";
import AnimateStart from "../../common/animateScroll";
import TutorialStyles from "./styles";

const Tutorial = () => {
  // get website text translations
  const { t } = useTranslation();

  const tutorial = [
    {
      src: img_1,
      h3: t("tutorial.slide_1.title"),
      video: video_1,
      descr: t("tutorial.slide_1.descr"),
      logo: "https://rambody-trainer.azureedge.net/assets/common/tutorial-videos/request_a_plan.png",
      id: 1,
    },

    {
      src: img_2,
      h3: t("tutorial.slide_2.title"),
      video: video_2,
      descr: t("tutorial.slide_2.descr"),
      logo: "https://rambody-trainer.azureedge.net/assets/common/tutorial-videos/client_profile.png",
      id: 2,
    },

    {
      src: img_3,
      h3: t("tutorial.slide_3.title"),
      video: video_3,
      descr: t("tutorial.slide_3.descr"),
      logo: "https://rambody-trainer.azureedge.net/assets/common/tutorial-videos/create_workout.png",
      id: 3,
    },
  ];

  const mdQuery = useMediaQuery("(max-width:1280px)");
  // start animation when scroll
  const { ref, scroll } = AnimateStart();
  // states alert dialog
  const [open, setOpen] = useState(false);
  const [data, setData] = useState([]);

  const handleClickOpen = (data) => {
    setOpen(true);
    setData(data);
  };
  // styles
  const useStyles = TutorialStyles();

  const classes = useStyles();

  return (
    <div className={classes.tutorial}>
      <div ref={ref} className="text-center">
        <Typography
          variant="h4"
          my={"2rem"}
          fontWeight={500}
          className={scroll ? "animate__fadeInRight animate__animated" : ""}
        >
          {t("tutorial.title")}
        </Typography>
        <Typography
          variant="subtitle2"
          maxWidth={"504px"}
          px={"0.75rem"}
          m={"1rem auto"}
          className={scroll ? "animate__fadeInLeft animate__animated" : ""}
        >
          {t("tutorial.body")}
        </Typography>
      </div>
      <div>
        <div className={classes.slider}>
          <img className={classes.img_1} src={bg_img} alt="" />
          <Swiper
            grabCursor={true}
            watchSlidesProgress={true}
            slidesPerView={mdQuery ? "auto" : 2.99}
            spaceBetween={25}
            scrollbar={mdQuery ? true : false}
            autoplay={{
              delay: 5000,
              disableOnInteraction: true,
            }}
            modules={[Scrollbar, Autoplay]}
            className={classes.swiper}
            dir={document.body.dir === "ltr" ? "ltr" : "rtl"}
            key={document.body.dir === "ltr" ? "ltr" : "rtl"}
          >
            {tutorial.map((t) => (
              <SwiperSlide className={classes.swiper_slide} key={t.id}>
                <img
                  style={{ borderRadius: "12px" }}
                  src={t.src}
                  alt="toutrial"
                />
                <div className={classes.text_img}>
                  <Typography
                    className={classes.text}
                    sx={{
                      fontWeight: "500",
                      mt: "3rem",
                    }}
                    variant="h6"
                  >
                    {t.h3}
                  </Typography>
                  <button
                    className={classes.button}
                    onClick={() => handleClickOpen(t)}
                  >
                    <PlayCircleIcon color="primary" sx={{ fontSize: 40 }} />
                  </button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className={classes.afetrSlider}></div>
        </div>
      </div>
      <AlertTutorial setOpen={setOpen} open={open} data={data} />
    </div>
  );
};

export default Tutorial;
