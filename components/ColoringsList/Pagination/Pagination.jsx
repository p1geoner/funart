import React from "react";
import classes from "../ColoringsList.module.css";
import store from "@/store/store";
import { observer } from "mobx-react-lite";
import axiosConfig from "@/utils/axiosConfig";
const Pagination = observer(() => {
  const handleNextPage = async () => {
    const NotlastPage = store.pagination.handleNextPage();
    if (NotlastPage === true) {
      store.categories.getColoringsList(
        store.pagination.currentPage,
        `themes/${store.pagination.categoryId}/colorings`,
      );
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
