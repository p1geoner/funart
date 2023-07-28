import React from "react";
import classes from "./Footer.module.css";
import Navigation from "./Navigation/Navigation";
const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.wrapper}>
        <h1 className={classes.title}>
          Didishka. <p>Coloring for fun</p>
        </h1>
        <Navigation />
      </div>
    </footer>
  );
};

export default Footer;
