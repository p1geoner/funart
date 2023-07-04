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
          <a
            className={classes.navigationLink}
            href="https://web.telegram.org/">
            Telegram
          </a>
        </div>
        <div className={classes.flexColumn}>
          <Link className={classes.navigationLink} href={""}>
            FAQ
          </Link>
          <a className={classes.navigationLink} href="#">
            Instagram
          </a>
        </div>
        <div className={classes.flexColumn}>
          <Link className={classes.navigationLink} href={"/about"}>
            Contact
          </Link>
          <Link className={classes.navigationLink} href={""}>
            Facebook
          </Link>
        </div>
      </div>
      <div className={classes.secondElement}>
        <p className={classes.navigationText}>©FunArt 2023</p>
      </div>
    </div>
  );
};

export default Navigation;
