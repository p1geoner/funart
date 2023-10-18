import ThemeList from "@/components/ThemesList/ThemeList";
import Title from "@/components/Title/Title";
import store from "@/store/store";
import { observer } from "mobx-react-lite";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

import classes from "./serch.module.css";
import SliderCategory from "@/components/SliderCategory/SliderCategory";
import axiosConfig from "@/utils/axiosConfig";
import Upper from "@/components/Upper/Upper";
import { Adverts } from "@/components/ads";

const SearchResults = observer(() => {
  const router = useRouter();
  const { slug } = router.query;
  const [title, setTitle] = useState();
  useEffect(() => {
    const fetchData = async () => {
      const response1 = await axiosConfig().get(`themes/populars/`);
      const popularThemes = response1.data.themes;

      const response2 = await axiosConfig().get(`categories/`);
      const categories = response2.data.categories;
      store.categories.categorylist = categories;
      store.categories.popularThemes = popularThemes;
    };
    fetchData();
    store.pagination.pageData = "search";
    store.pagination.currentPage = 1;
    store.categories.PickedCategory = "";
  }, []);

  useEffect(() => {
    if (slug !== undefined) {
      const fetchData = async () => {
        const page_data = await store.categories.searchThemesList(
          1,
          slug,
          false,
        );
        const pages = page_data.split(",");
        store.pagination.countPages = pages.length;
      };
      fetchData();
    }

    setTitle(`Coloring pages "${slug}"`);
    store.pagination.currentSearch = slug;
  }, [slug]);

  return (
    <>
      <div className={classes.wrapper}>
        <Title title={title} />
        <Adverts />
        {store.categories.Themeslist[0] !== undefined ? (
          <>
            <SliderCategory categories={store.categories.popularThemes} />
            <ThemeList list={store.categories.Themeslist} />
          </>
        ) : (
          <div>
            <h2 className={classes.subTitle}>Nothing was found 😓 </h2>
          </div>
        )}
      </div>
      <Upper />
    </>
  );
});

export default SearchResults;
