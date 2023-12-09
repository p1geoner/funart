import axiosConfig from "@/utils/axiosConfig";
import { makeAutoObservable, configure, action } from "mobx";

configure({
  enforceActions: "never",
});
export class CategoryStore {
  categorylist = [];
  pickedCategory = [];
  popularThemes = [];
  Themeslist = [];
  coloringsList = [];
  constructor() {
    makeAutoObservable(this);
  }

  getCategories = async () => {
    const response = await axiosConfig().get(`categories/`);
    this.setCategoryList(response.data?.categories);
    return response.data;
  };
  setNewThemesList = (list) => {
    const themesList = this.Themeslist;
    const NewThemesList = themesList.concat(list);
    this.Themeslist = NewThemesList;
  };
  getThemesList = async (page, url) => {
    const response = await axiosConfig().get(`${url}/?page=${page}&per_page=8&language=English`);
    this.setNewThemesList(response.data.themes);
    return response.data.themes;
  };

  searchThemesList = async (page, search, isPagination) => {
    if (isPagination) {
      const response = await axiosConfig().get(
        `search/?page=${page}&per_page=8&search=${search}`,
      );
      if (response.status === 200) {
        this.setNewThemesList(response.data.Coloring);
      }
    } else {
      const response = await axiosConfig().get(
        `search/?page=${page}&per_page=8&search=${search}`,
      );
      this.Themeslist = response.data.Coloring;
      return response.data.page_data;
    }
  };

  getColoringsList = async (page, url) => {
    const response = await axiosConfig().get(`${url}/?page=${page}&per_page=8`);
    this.setNewColoringsList(response.data.colorings);
    return response.data.colorings;
  };
  setNewColoringsList = (list) => {
    const coloringsList = this.coloringsList;
    const NewColoringsList = coloringsList.concat(list);
    this.coloringsList = list;
  };
  setCategoryList = (list) => {
    this.categorylist = list;
  };
  setPickedCategory = (category) => {
    this.PickedCategory = category;
  };
}
