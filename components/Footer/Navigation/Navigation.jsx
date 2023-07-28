import Link from "next/link";
import React from "react";
import classes from "../Footer.module.css";
const Navigation = () => {
  return (
    <div className={classes.navigationWrapper}>
      <div className={classes.firstElement}>
        <div className={classes.flexColumn}>
          <Link className={classes.navigationLink} href={"/about"}>
            About
          </Link>
          <Link className={classes.navigationLink} href={"/about"}>
            Contact
          </Link>
        </div>
        <div className={classes.flexColumn}>
          <a className={classes.navigationLink} href="#">
            Pinterest
          </a>
        </div>
      </div>
      <div className={classes.secondElement}>
        <p className={classes.navigationText}>©Didishka 2023</p>
      </div>
    </div>
  );
};

export default Navigation;
