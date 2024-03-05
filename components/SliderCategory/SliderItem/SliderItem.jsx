import React from "react";
import Image from "next/image";
import classes from "./SliderItem.module.css";
import Link from "next/link";
import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";
const SliderItem = ({ category, width, height }) => {
  const src = `${process.env.NEXT_PUBLIC_BACK_IMG}${category.popular_image}`;
  return (
    <Link
      href={`/theme/${category.id}`}
      className={classes.container}
      style={{ height: `${height}px` }}>
      <div className={classes.imageBackground} style={{ width: `${width}px` }}>
        <Image
          className={classes.image}
          src={src}
          alt={category.name}
          width={width}
          height={145}
        />
        <p className={classes.text}>{category.name}</p>
      </div>
    </Link>
  );
};

export default SliderItem;
