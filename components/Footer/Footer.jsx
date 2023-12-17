import React from "react";
import classes from "./Footer.module.css";
import Navigation from "./Navigation/Navigation";
const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.wrapper}>
        <h1 className={classes.title}>
          Дидишка. <p>Воплощай идеи в цвете</p>
        </h1>
        <Navigation />
      </div>
    </footer>
  );
};

export default Footer;
