import Image from "next/image";
import React from "react";
import classes from "./ThemeItem.module.css";
import Link from "next/link";
const ThemeItem = ({ theme }) => {
  const src = `http://127.0.0.1:8000${theme.image}`;
  return (
    <Link className={classes.container} href={`/theme/${theme.id}`}>
      <div className={classes.imageBackground}>
        <Image
          className={classes.image}
          src={src}
          alt={theme.name}
          fill={true}
        />
        <div className={classes.text}>
          <p>{theme.name}</p>
        </div>
      </div>
    </Link>
  );
};

export default ThemeItem;
