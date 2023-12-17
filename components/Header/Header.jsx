import Link from "next/link";
import React, { useEffect, useState } from "react";
import classes from "./Header.module.css";
import Select from "../Select/Select";
import store from "@/store/store";
import { observer } from "mobx-react-lite";
import SearchBar from "../SearchBar/SearchBar";
import { useRouter } from "next/router";
import Burger from "../BurgerMenu/Burger";
import clsx from "clsx";
import Logo from "../Logo/Logo";
// import Burger from "../BurgerMenu/Burger";

const Header = observer(({}) => {
  const selectCategory = (category) => {
    store.categories.setPickedCategory(category);
  };
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const router = useRouter();
  useEffect(() => {
    setIsVisible(true);
  }, [router]);
  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== "undefined") {
        setPrevScrollPos(window.scrollY);
      }
    };

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const isScrollingDown = currentScrollPos > prevScrollPos;

      if (currentScrollPos >= 200) {
        setIsVisible(!isScrollingDown);
        setPrevScrollPos(currentScrollPos);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, isVisible]);

  useEffect(() => {
    setIsVisible(true);
  }, [router.pathname]);

  const headerStyles = clsx({
    [classes.header]: true,
    [classes.visible]: isVisible,
  });

  return (
    <header className={headerStyles}>
      <div className={classes.wrapper}>
        <Link className={classes.logo} href={"/"}>
          Дидишка
        </Link>
        <div className={classes.adaptiveHeader}>
          <Link className={classes.logo} href={"/"}>
            Дидишка
          </Link>
          <div className={classes.burger}>
            {store.categories.categorylist && (
              <Burger categories={store.categories.categorylist} />
            )}
          </div>
        </div>

        <div className={classes.centerWrapper}>
          {store.categories.categorylist && (
            <Select
              className={classes.selectCategory}
              options={store.categories.categorylist}
              onChange={selectCategory}
              activeOption={store.categories.PickedCategory}
              value="Все категории"
            />
          )}
          <SearchBar />
          {/* <Select options={"ru"}></Select> */}
        </div>
        <div className={classes.burger}>
          {store.categories.categorylist && (
            <Burger categories={store.categories.categorylist} />
          )}
          <Link className={classes.LinkAbout} href={`/about`}>
            О нас
          </Link>
        </div>
      </div>
    </header>
  );
});

export default Header;
