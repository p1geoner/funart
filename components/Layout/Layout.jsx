import React, { useEffect } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import store from "@/store/store";
import classes from "./Layout.module.css";
const Layout = ({ children }) => {
  return (
    <>
      <Header></Header>
      <div className={classes.wrapper}>{children}</div>

      <Footer></Footer>
    </>
  );
};

export default Layout;
