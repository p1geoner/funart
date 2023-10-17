import Image from "next/image";
import React from "react";
import classes from "./ThemeItem.module.css";
import Link from "next/link";
const ThemeItem = ({ theme }) => {
  const src = `https://api-didishka.ru${theme.image}`;
  // console.log(theme);
  return (
    <Link className={classes.container} href={`/theme/${theme.id}`}>
      <div className={classes.imageBackground}>
        <Image
          className={classes.image}
          src={src}
          alt={theme.name}
          width={440}
          height={282}
        />
        <div className={classes.text}>
          <h3>{theme.name}</h3>
          <p>{theme.time}</p>
        </div>
      </div>
    </Link>
  );
};

export default ThemeItem;
