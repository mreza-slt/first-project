import styles from "./pakage.module.css";
import "./styles.css";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
// import required modules
import { Autoplay, EffectCoverflow, Pagination } from "swiper";
import { useState } from "react";

import AlertDialog from "../../common/alertDialog-pakage/AlertDialog";
import AnimateStart from "../../common/animateScroll";

const MyPakage = () => {
  const pakages = [
    {
      id: 1,
      src: "https://lifediet.ir/wp-content/uploads/2019/06/image3-1.jpg",
      price: "100,000 T",
      h1: "fitness",
      p: "vip 6weeks",
    },
    {
      id: 2,
      src: "https://lifediet.ir/wp-content/uploads/2019/06/image3-1.jpg",
      price: "300,000 T",
      h1: "برنامه غذایی",
      p: "رژیم غذایی",
    },
    {
      id: 3,
      src: "https://vazneh-gym.ir/wp-content/uploads/2019/03/%DA%86%D8%B1%D8%A7-%D8%A8%D8%A7%DB%8C%D8%AF-%D8%A7%D8%B2-%D9%85%DA%A9%D9%85%D9%84%E2%80%8C%D9%87%D8%A7%DB%8C-%D8%A8%D8%AF%D9%86%D8%B3%D8%A7%D8%B2%DB%8C-%D8%A7%D8%B3%D8%AA%D9%81%D8%A7%D8%AF%D9%87-%DA%A9%D9%86%DB%8C%D9%85%D8%9F.jpg",
      price: "100,000 T",
      h1: "تمرینی",
      p: "تمرین با وزنه و هوازی",
    },
    {
      id: 4,
      src: "https://vazneh-gym.ir/wp-content/uploads/2019/03/%DA%86%D8%B1%D8%A7-%D8%A8%D8%A7%DB%8C%D8%AF-%D8%A7%D8%B2-%D9%85%DA%A9%D9%85%D9%84%E2%80%8C%D9%87%D8%A7%DB%8C-%D8%A8%D8%AF%D9%86%D8%B3%D8%A7%D8%B2%DB%8C-%D8%A7%D8%B3%D8%AA%D9%81%D8%A7%D8%AF%D9%87-%DA%A9%D9%86%DB%8C%D9%85%D8%9F.jpg",
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
    <main className={`${styles.main} w-fill text-center my_pakage`}>
      <div className={styles.pakage_content}>
        <section ref={ref} className={`${styles.content} py-8`}>
          <h1
            className={`font-bold ${
              scroll ? "animate__animated animate__fadeInDown" : ""
            }`}
          >
            My packages
          </h1>
          <p
            className={`font-medium ${
              scroll
                ? "animate__animated animate__fadeInDown animate__slow"
                : ""
            }`}
          >
            You can see the list of my packages that I can design in this
            section. Note that these packages have not been prepared in advance
            and are designed based on your physical conditions and goal. You can
            also contact me via the chat button in my profile after installing
            the Rambody application.
          </p>
        </section>

        <div className={styles.parent_slide}>
          <img
            className={styles.img_bg}
            src="https://rambody-trainer.azureedge.net/static/media/texture.55db9915.png"
            alt="backgground_img"
          />
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
            className={styles.swiper}
          >
            {pakages.map((p) => (
              <SwiperSlide
                key={p.id}
                onClick={() => handleClickOpen(p)}
                className={styles.img}
              >
                <img src={p.src} />
                <span>{p.price}</span>
                <div>
                  <h1>{p.h1}</h1>
                  <p>{p.p}</p>
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
