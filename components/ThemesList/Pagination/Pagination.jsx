import React from "react";
import classes from "../ThemeList.module.css";
import store from "@/store/store";
import { observer } from "mobx-react-lite";
import axiosConfig from "@/utils/axiosConfig";
const Pagination = observer(() => {
  const handleNextPage = async () => {
    const NotlastPage = store.pagination.handleNextPage();
    if (NotlastPage === true) {
      switch (store.pagination.pageData) {
        case "category":
          store.categories.getThemesList(
            store.pagination.currentPage,
            `categories/${store.pagination.categoryId}/themes`,
          );
          return true;
        case "main":
          store.categories.getThemesList(
            store.pagination.currentPage,
            "themes",
          );
          return true;
        case "search":
          store.categories.searchThemesList(
            store.pagination.currentPage,
            store.pagination.currentSearch,
            true,
          );
          return true;
      }
    }
  };
  return (
    <>
      {store.pagination.currentPage === store.pagination.countPages ? (
        " "
      ) : (
        <button onClick={handleNextPage} className={classes.paginationButton}>
          See more
        </button>
      )}
    </>
  );
});

export default Pagination;
