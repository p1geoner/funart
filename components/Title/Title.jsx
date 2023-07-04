import React from "react";
import classes from "./Title.module.css";
const Title = ({ title, description }) => {
  return (
    <div className={classes.wrapper}>
      <h1 className={classes.title}>{title}</h1>
      <p className={classes.description}>{description}</p>
    </div>
  );
};

export default Title;
