import { Typography, useMediaQuery } from "@mui/material";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Autoplay, EffectCoverflow, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/effect-coverflow";
import { Swiper, SwiperSlide } from "swiper/react";
import img_1 from "../../assets/images/default-plan.c991dc08.jpg";
import img_2 from "../../assets/images/texture.55db9915.png";
import AlertDialog from "../../common/alertDialog-pakage/AlertDialog";
import AnimateStart from "../../common/animateScroll";
import "./pakage.scss";
import PakageStyles from "./styles";

const MyPakage = () => {
  // get website text translations
  const { t } = useTranslation();

  const pakages = [
    {
      id: 1,
      src: img_1,
      price: "100,000 T",
      h1: "fitness",
      p: "vip 6weeks",
    },
    {
      id: 2,
      src: img_1,
      price: "300,000 T",
      h1: "برنامه غذایی",
      p: "رژیم غذایی",
    },
    {
      id: 3,
      src: img_1,
      price: "100,000 T",
      h1: "تمرینی",
      p: "تمرین با وزنه و هوازی",
    },
    {
      id: 4,
      src: img_1,
      price: "100 T",
      h1: "تخصصی بدنسازی",
      p: "برنامه تخصصی",
    },
  ];

  // state for alertDialog
  const [open, setOpen] = useState(false);
  const [data, setData] = useState([]);

  const handleClickOpen = (data) => {
    setOpen(true);
    setData(data);
  };

  // start animation when scroll
  const { ref, scroll } = AnimateStart();

  const lgQuery = useMediaQuery("(max-width:960px)");
  // styles-------------------------
  const useStyles = PakageStyles();

  const classes = useStyles();

  return (
    <main className="my_pakage text-center">
      <div className={classes.pakage_content}>
        <section ref={ref} className={`py-8 ${classes.content}`}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: "500",
              mb: lgQuery ? "1rem" : "1.5rem",
              fontSize: lgQuery && "1.5rem",
            }}
            className={scroll ? "animate__animated animate__fadeInDown" : ""}
          >
            {t("myPakage.title")}
          </Typography>
          <Typography
            variant="subtitle2"
            px={0.75}
            className={
              scroll
                ? "animate__animated animate__fadeInDown animate__slow"
                : ""
            }
          >
            {t("myPakage.body")}
          </Typography>
        </section>

        <div className={classes.parent_slide}>
          <img className={classes.img_bg} src={img_2} alt="backgground_img" />

          <Swiper
            effect={"coverflow"}
            spaceBetween={100}
            centeredSlides={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 0,
              stretch: 7,
              depth: 100,
              modifier: 2,
              slideShadows: false,
            }}
            loop={true}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: true,
            }}
            modules={[EffectCoverflow, Pagination, Autoplay]}
            dir={document.body.dir === "ltr" ? "ltr" : "rtl"}
            key={document.body.dir === "ltr" ? "ltr" : "rtl"}
            className={`swiper ${classes.swiper}`}
          >
            {pakages.map((p) => (
              <SwiperSlide
                key={p.id}
                onClick={() => handleClickOpen(p)}
                className="img"
              >
                <img src={p.src} />
                <span className={classes.span}>{p.price}</span>
                <div className={classes.img_content}>
                  <Typography variant="h6" fontWeight={500}>
                    {p.h1}
                  </Typography>
                  <Typography variant="subtitle" fontWeight={500}>
                    {p.p}
                  </Typography>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <AlertDialog setOpen={setOpen} open={open} data={data} />
    </main>
  );
};

export default MyPakage;
