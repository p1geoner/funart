import Image from "next/image";
import React from "react";
import classes from "./ThemeItem.module.css";
import Link from "next/link";
import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";
const ThemeItem = ({ theme }) => {
  const src = `${process.env.NEXT_PUBLIC_BACK_IMG}${theme.image}`;
  console.log(theme)
  return (
    <Link className={classes.container} href={`/theme/${theme.id}`}>
      <div className={classes.imageBackground}>
        <div className={classes.imageFilter}>
          <Image
              className={classes.image}
              src={src}
              alt={theme.name}
              width={440}
              height={282}
          />
          <div className={classes.hoverFilter}></div>
        </div>
        <div className={classes.text}>
          <h3>{theme.name}</h3>
          <p>{theme.time}</p>
        </div>
      </div>
    </Link>
  );
};

export default ThemeItem;
