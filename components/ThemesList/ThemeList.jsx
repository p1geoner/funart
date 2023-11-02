import React, { useEffect, useState } from "react";
import ThemeItem from "./ThemeItem/ThemeItem";
import classes from "./ThemeList.module.css";
import Pagination from "./Pagination/Pagination";
import store from "@/store/store";
import { observer } from "mobx-react-lite";
const ThemeList = observer(({ name, list }) => {
  const [themes, setThemes] = useState(list);
  useEffect(() => {
    store.pagination.currentPage = 1;
  }, []);
  useEffect(() => {
    if (store.pagination.currentPage !== 1) {
      const NewThemesList = store.categories.Themeslist;
      setThemes(NewThemesList);
    } else {
      setThemes(list);
    }
  }, [store.pagination.currentPage, store.categories.Themeslist]);
  return (
    <div className={classes.wrapper}>
      <h2 className={classes.title}>{name}</h2>
      <div className={classes.list}>
        {themes.map((theme) => {
          return <ThemeItem key={theme.id} theme={theme} />;
        })}
      </div>
      <Pagination />
    </div>
  );
});

export default ThemeList;
