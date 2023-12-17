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
import { AdvertsAfterContent } from "@/components/adsAfterContent";
import Head from "next/head";

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

    setTitle(`Раскраски "${slug}"`);
    store.pagination.currentSearch = slug;
  }, [slug]);

  return (
    <>
      <Head>
        <script>window.yaContextCb=window.yaContextCb||[]</script>
        <script src="https://yandex.ru/ads/system/context.js" async></script>
      </Head>
      <div className={classes.wrapper}>
        <Title title={title} />
        {store.categories.Themeslist[0] !== undefined ? (
          <>
            <SliderCategory categories={store.categories.popularThemes} />
            <ThemeList list={store.categories.Themeslist} />
          </>
        ) : (
          <div>
            <h2 className={classes.subTitle}>Ничего не было найдено 😓 </h2>
          </div>
        )}
        <AdvertsAfterContent />
      </div>
      <Upper />
    </>
  );
});

export default SearchResults;
