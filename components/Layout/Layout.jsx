import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import store from "@/store/store";
import classes from "./Layout.module.css";
import { useRouter } from "next/router";
import NotFoundPage from "@/pages/404";
import LoaderPage from "../LoaderPage/LoaderPage";
import NextNProgress from "nextjs-progressbar";
const Layout = ({ children }) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [pathname, setPathname] = useState(router.pathname);

    useEffect(() => {
        const handleRouteChange = () => {
                setIsLoading(true);
              };
              const handleRouteChangeComplete = () => {
                setIsLoading(false);
                setPathname(router.pathname);
              };
              router.events.on("routeChangeStart", handleRouteChange);
              router.events.on("routeChangeComplete", handleRouteChangeComplete);
              router.events.on("routeChangeError", handleRouteChangeComplete);
    }, [router]);
  return (
    <>
      {pathname !== "/404" && <Header></Header>}
      <NextNProgress color="#703D8F" />
      <div className={classes.wrapper}>{children}</div>

      {pathname !== "/404" && <Footer></Footer>}
    </>
  );
};

export default Layout;
