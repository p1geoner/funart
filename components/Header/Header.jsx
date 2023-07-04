import Link from "next/link";
import React, { useEffect, useState } from "react";
import classes from "./Header.module.css";
import Select from "../Select/Select";
import store from "@/store/store";
import { observer } from "mobx-react-lite";
import SearchBar from "../SearchBar/SearchBar";
import { useRouter } from "next/router";
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
        <div className={classes.centerWrapper}>
          {store.categories.categorylist && (
            <Select
              options={store.categories.categorylist}
              onChange={selectCategory}
              activeOption={store.categories.PickedCategory}
              value="Any category"></Select>
          )}
          <SearchBar />
          {/* <Select options={"ru"}></Select> */}
        </div>
        {/* <Burger></Burger> */}
      </div>
    </header>
  );
});

export default Header;
