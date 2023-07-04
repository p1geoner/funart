import React from "react";
import Image from "next/image";
import classes from "./SliderItem.module.css";
import Link from "next/link";
const SliderItem = ({ category, width }) => {
  const src = `http://127.0.0.1:8000${category.image}`;
  return (
    <Link href={`/theme/${category.id}`}>
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
