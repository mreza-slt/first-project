// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Scrollbar } from "swiper";
import "swiper/css";

import PlayCircleIcon from "@mui/icons-material/PlayCircle"; // Import Swiper styles

import styles from "./tutorial.module.css";
import "./styless.css";

import AnimateStart from "../../common/animateScroll";
import AlertTutorial from "../../common/alertTutorial/AlertDialogTutorial";

import { useState } from "react";
import { useMediaQuery } from "@mui/material";

const Tutorial = () => {
  const tutorial = [
    {
      src: "https://rambody-trainer.azureedge.net/assets/common/tutorial-videos/request_a_plan.jpg",
      h3: "1. How to request a pakage",
      video:
        "https://rambody-trainer.azureedge.net/assets/common/tutorial-videos/request_a_plan.mp4#t=0.1",
      descr: [
        "In this section, I will show you how to request a package via the Rambody application.",
        "1. After installing the application, search for my ID (mehdiSherafat) in the search page",
        "2. Enter my profile. Read the description of the package and choose the one that fits your needs and goal.Plans are not pre-designed. I will design a custom plan based on your physical condition and goal.",
        "3. Pay for your selected package fee using your my payment method. You can see my payment method by clicking the ‘Request Package’ button.",
        "4. Once you have paid for the package go to the app and click on the 'I paid' button to complete the request.",
        "5. On the next page, enter the payment information or upload your receipt then request the package.",
        "6. You will receive an initial notification when I approved and started to prepare your plan. I needs some time to prepare a custom plan for you. Once I completed the plan you will receive another notification that your plan is ready to use.",
      ],
      logo: "https://rambody-trainer.azureedge.net/assets/common/tutorial-videos/request_a_plan.png",
      id: 1,
    },

    {
      src: "https://rambody-trainer.azureedge.net/assets/common/tutorial-videos/client_profile.jpg",
      h3: "2. Your profile in the trainer application",
      video:
        "https://rambody-trainer.azureedge.net/assets/common/tutorial-videos/client_profile.mp4#t=0.1",
      desc: "In this video, you can see what information is displayed to me in trainer's application.Based on this information, I can design a plan suitable for your physical condition and main goal.As you can see in the video, I will have full access to your physical analysis and all the body images you might have uploaded. It is suggested to upload body images from three different angles which will help me to know your body shape and better design a plan for you.Note: You can choose not to upload photos without showing your face.",
      logo: "https://rambody-trainer.azureedge.net/assets/common/tutorial-videos/client_profile.png",
      id: 2,
    },

    {
      src: "https://rambody-trainer.azureedge.net/assets/common/tutorial-videos/create_workout.jpg",
      h3: "3. How your trainer designs a custom workout",
      video:
        "https://rambody-trainer.azureedge.net/assets/common/tutorial-videos/create_workout.mp4#t=0.1",
      desc: "As described in the previous section, I will review your profile and main goal and starts the planning for you.I will choose the right exercises for you from the hundreds of training exercises that exist in the Rambody exercises collection.For each exercise, I will provide more details such as sessions, the number of sets, the execution time, and the training systems.This process will take time. That is the reason I can not immediately send a plan to you. Make sure to request your next plan a few days before the end of the current plan.",

      logo: "https://rambody-trainer.azureedge.net/assets/common/tutorial-videos/create_workout.png",
      id: 3,
    },
  ];
  const lgQuery = useMediaQuery("(max-width:1280px)");

  const { ref, scroll } = AnimateStart();

  const [open, setOpen] = useState(false);
  const [data, setData] = useState([]);

  const handleClickOpen = (data) => {
    setOpen(true);
    setData(data);
  };

  return (
    <div className={`${styles.tutorial} totorial`}>
      <div ref={ref} className="text-center">
        <h1
          className={`font-bold ${
            scroll ? "animate__fadeInRight animate__animated" : ""
          }`}
        >
          Tutorial
        </h1>
        <p className={scroll ? "animate__fadeInLeft animate__animated" : ""}>
          Watch tutorial videos here for better use and knowledge of how to
          design training plans
        </p>
      </div>
      <div>
        <div className={styles.slider}>
          <img
            className={styles.img_1}
            src="https://rambody-trainer.azureedge.net/static/media/texture.55db9915.png"
            alt=""
          />
          <Swiper
            grabCursor={true}
            watchSlidesProgress={true}
            slidesPerView={lgQuery ? "auto" : 2.99}
            spaceBetween={25}
            scrollbar={lgQuery ? true : false}
            autoplay={{
              delay: 5000,
              disableOnInteraction: true,
            }}
            modules={[Scrollbar, Autoplay]}
            className="mySwiper"
          >
            {tutorial.map((t) => (
              <SwiperSlide key={t.id}>
                <img src={t.src} alt="toutrial" />
                <div className={styles.text_img}>
                  <h3>{t.h3}</h3>
                  <button onClick={() => handleClickOpen(t)}>
                    <PlayCircleIcon color="primary" sx={{ fontSize: 40 }} />
                  </button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <AlertTutorial setOpen={setOpen} open={open} data={data} />
    </div>
  );
};

export default Tutorial;
