import Link from "next/link";
import React, { useEffect, useState } from "react";
import classes from "./Header.module.css";
import Select from "../Select/Select";
import store from "@/store/store";
import { observer } from "mobx-react-lite";
import SearchBar from "../SearchBar/SearchBar";
import { useRouter } from "next/router";
import Burger from "../BurgerMenu/Burger";
// import Burger from "../BurgerMenu/Burger";

const Header = observer(({}) => {
  const selectCategory = (category) => {
    store.categories.setPickedCategory(category);
  };

  return (
    <header className={classes.header}>
      <div className={classes.wrapper}>
        <Link className={classes.logo} href={"/"}>
          FunArt
        </Link>
        <div className={classes.adaptiveHeader}>
          <Link className={classes.logo} href={"/"}>
            FunArt
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
              value="Any category"
            />
          )}
          <SearchBar />
          {/* <Select options={"ru"}></Select> */}
        </div>
        <div className={classes.burger}>
          {store.categories.categorylist && (
            <Burger categories={store.categories.categorylist} />
          )}
        </div>
      </div>
    </header>
  );
});

export default Header;
