import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import { Typography, useMediaQuery } from "@mui/material";
import { useState } from "react";
import { Autoplay, Scrollbar } from "swiper";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import AlertTutorial from "../../common/alertTutorial/AlertDialogTutorial";
import AnimateStart from "../../common/animateScroll";
import "./tutorial.scss";
import bg_img from "../../assets/images/texture.55db9915.png";
import img_1 from "../../assets/images/request_a_plan.jpg";
import img_2 from "../../assets/images/client_profile.jpg";
import img_3 from "../../assets/images/create_workout.jpg";
import video_1 from "../../assets/videos/request_a_plan.mp4";
import video_2 from "../../assets/videos/client_profile.mp4";
import video_3 from "../../assets/videos/create_workout.mp4";

const Tutorial = () => {
  const tutorial = [
    {
      src: img_1,
      h3: "1. How to request a pakage",
      video: video_1,
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
      src: img_2,
      h3: "2. Your profile in the trainer application",
      video: video_2,
      desc: "In this video, you can see what information is displayed to me in trainer's application.Based on this information, I can design a plan suitable for your physical condition and main goal.As you can see in the video, I will have full access to your physical analysis and all the body images you might have uploaded. It is suggested to upload body images from three different angles which will help me to know your body shape and better design a plan for you.Note: You can choose not to upload photos without showing your face.",
      logo: "https://rambody-trainer.azureedge.net/assets/common/tutorial-videos/client_profile.png",
      id: 2,
    },

    {
      src: img_3,
      h3: "3. How your trainer designs a custom workout",
      video: video_3,
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
    <div className="tutorial">
      <div ref={ref} className="text-center">
        <Typography
          variant="h4"
          my={"2rem"}
          fontWeight={500}
          className={scroll ? "animate__fadeInRight animate__animated" : ""}
        >
          Tutorial
        </Typography>
        <Typography
          variant="subtitle2"
          maxWidth={"504px"}
          px={"0.75rem"}
          m={"1rem auto"}
          className={scroll ? "animate__fadeInLeft animate__animated" : ""}
        >
          Watch tutorial videos here for better use and knowledge of how to
          design training plans
        </Typography>
      </div>
      <div>
        <div className="slider">
          <img className="img_1" src={bg_img} alt="" />
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
          >
            {tutorial.map((t) => (
              <SwiperSlide key={t.id}>
                <img src={t.src} alt="toutrial" />
                <div className="text_img">
                  <Typography
                    variant="h6"
                    fontWeight={500}
                    mt={"3rem"}
                    textAlign={"left"}
                    pl={"1rem"}
                  >
                    {t.h3}
                  </Typography>
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
