"use client";

import { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import style from "./Slider.module.css";
import { Pagination, Mousewheel } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/mousewheel";
import "swiper/css/navigation";

const information = [
  {
    title: "Открывай Удмуртию",
    infoText: "Отправься в путешествие в колоритный, многонациональный, гостеприимный край.",
    imageUrl : "https://mykaleidoscope.ru/x/uploads/posts/2022-09/1663226024_37-mykaleidoscope-ru-p-izhevsk-stolitsa-udmurtii-pinterest-37.jpg"
  },
  {
    title: "Увези Удмуртию с собой",
    infoText:
      "Вкусные сувениры и подарки для друзей и близких. Приятное послевкусие от поездки",
    imageUrl:
      "https://izvestiaur.ru/upload/iblock/23f/qd7mfd9z86uz5ryrbesnnfk6yhd7jcra/img_0X3A3762.jpg",
  },
  {
    title: "Путешествуй по Удмуртии",
    infoText:
      " Разработай маршруты для всех кто готов познакомиться с Удмуртией ближе",
    imageUrl:
      "https://pibig.info/uploads/posts/2022-11/1669214640_1-pibig-info-p-baigurez-udmurtiya-krasivo-1.jpg",
  },
  {
    title: " Попробуй Удмуртию на вкус",
    infoText: "#ВкуснаяУдмуртия",
    imageUrl:
      "https://avatars.dzeninfra.ru/get-zen_doc/1861837/pub_5e09c9f9dddaf400b27f6760_5e09ca3386c4a900b0ac9d68/scale_1200",
  },
];

const Slider: FC = () => {
  return (
    <>
      <Swiper
        loop={true}
        modules={[Pagination, Mousewheel]}
        pagination={{ clickable: true }}
        style={{ height: "100vh" }}
      >
        {information.map(({ title, imageUrl, infoText },id) => (
          <SwiperSlide
            key={title}
            style={{
              background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), 
              url(${imageUrl})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
            className={style.slide}
          >
            <h1 className={style.title}> {id===0 ? <><span style={{color:"red"}}>{title.split(' ')[0]}</span> {title.split(' ')[1]}</> : title}</h1>
            <p className={style.infoText}>{infoText}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Slider;
