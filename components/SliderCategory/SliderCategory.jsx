import React from "react";
import classes from "./SliderCategory.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import store from "@/store/store";
import { observer } from "mobx-react-lite";
import SliderItem from "./SliderItem/SliderItem";
const SliderCategory = observer(({ categories }) => {
  console.log(categories);
  return (
    <div className={classes.wrapper}>
      <p className={classes.sliderTitle}>
        The most popular coloring ideas for today
      </p>
      <Swiper
        navigation={true}
        spaceBetween={20}
        height={420}
        slidesPerView={4}
        className={classes.swiper}>
        {categories.map((category) => {
          return (
            <SwiperSlide key={category.id} className={classes.swiperSlide}>
              <SliderItem category={category} width={320} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
});

export default SliderCategory;
