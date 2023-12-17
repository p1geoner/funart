import React from "react";
import SliderItem from "./SliderItem/SliderItem";
import classes from "./SliderCategory.module.css";
const PopularThemesList = ({ list }) => {
  return (
    <div className={classes.popularThemes}>
      <p className={classes.sliderTitle}>
          Самые популярные раскраски сегодня
      </p>
      {list.map((category) => {
        return (
          <SliderItem
            key={category.id}
            category={category}
            width={290}
            height={145}
          />
        );
      })}
    </div>
  );
};

export default PopularThemesList;
