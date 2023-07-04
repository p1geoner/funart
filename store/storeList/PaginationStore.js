import axiosConfig from "@/utils/axiosConfig";
import { makeAutoObservable, configure, action } from "mobx";

configure({
  enforceActions: "never",
});
export class PaginationStore {
  currentPage = 0;
  countPages = 0;
  categoryId = "";
  pageData = "";
  currentSearch = "";
  constructor() {
    makeAutoObservable(this);
  }

  setCategoryList = (list) => {
    this.categorylist = list;
  };
  handleNextPage = () => {
    if (this.currentPage !== this.countPages) {
      this.currentPage += 1;
      return true;
    } else {
      return false;
    }
  };
}
