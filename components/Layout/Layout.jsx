import React, { useEffect } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import store from "@/store/store";
import classes from "./Layout.module.css";
import { useRouter } from "next/router";
import NotFoundPage from "@/pages/404";
const Layout = ({ children }) => {
  const { pathname } = useRouter();
  return (
    <>
      {pathname !== "/404" && <Header></Header>}

      <div className={classes.wrapper}>{children}</div>

      {pathname !== "/404" && <Footer></Footer>}
    </>
  );
};

export default Layout;
