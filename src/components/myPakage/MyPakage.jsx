import { Typography } from "@mui/material";
import { useState } from "react";
import { Autoplay, EffectCoverflow, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/effect-coverflow";
import { Swiper, SwiperSlide } from "swiper/react";
import img_1 from "../../assets/images/default-plan.c991dc08.jpg";
import img_2 from "../../assets/images/texture.55db9915.png";
import AlertDialog from "../../common/alertDialog-pakage/AlertDialog";
import AnimateStart from "../../common/animateScroll";
import "./pakage.scss";

const MyPakage = () => {
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

  const [open, setOpen] = useState(false);
  const [data, setData] = useState([]);

  const handleClickOpen = (data) => {
    setOpen(true);
    setData(data);
  };

  const { ref, scroll } = AnimateStart();

  return (
    <main className="my_pakage text-center">
      <div className="pakage_content">
        <section ref={ref} className="content py-8">
          <Typography
            variant="h4"
            fontWeight={500}
            className={`h1 ${
              scroll ? "animate__animated animate__fadeInDown" : ""
            }`}
          >
            My packages
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
            You can see the list of my packages that I can design in this
            section. Note that these packages have not been prepared in advance
            and are designed based on your physical conditions and goal. You can
            also contact me via the chat button in my profile after installing
            the Rambody application.
          </Typography>
        </section>

        <div className="parent_slide">
          <img className="img_bg" src={img_2} alt="backgground_img" />

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
            className="swiper"
          >
            {pakages.map((p) => (
              <SwiperSlide
                key={p.id}
                onClick={() => handleClickOpen(p)}
                className="img"
              >
                <img src={p.src} />
                <span className="span">{p.price}</span>
                <div>
                  <Typography variant="h5" fontWeight={500}>
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
