import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axiosConfig from "@/utils/axiosConfig";
import ThemeList from "@/components/ThemeslistCategoryPage/ThemeList";
import classes from "./categoryPage.module.css";
import Title from "@/components/Title/Title";
import SliderCategory from "@/components/SliderCategory/SliderCategory";
import store from "@/store/store";
import { observer } from "mobx-react-lite";
import { Adverts } from "@/components/ads";
import { AdvertsAfterContent } from "@/components/adsAfterContent";
import Head from "next/head";
import PopularThemesList from "@/components/SliderCategory/popularThemesList";
import {AdvertsThematics} from "@/components/adsThemes";
export const getStaticPaths = async () => {
  const response = await axiosConfig().get(`categories/`);
  const categories = response.data.categories;

  const paths = categories.map((category) => {
    return {
      params: {
        id: category.id.toString(),
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const id = toString(params.params?.id);
  const response = await axiosConfig().get(
    `categories/${params?.id}/themes/?page=1&per_page=8`,
  );
  const categoryList = response.data;

  const response2 = await axiosConfig().get(`themes/populars/`);
  const popularThemes = response2.data.themes;

  const response3 = await axiosConfig().get(`categories/`);
  const categories = response3.data.categories;
  return {
    props: { categoryList, popularThemes, categories },
    revalidate: 60,
  };
};

const CategoryPage = ({ categoryList, popularThemes, categories }) => {
  const { asPath, pathname } = useRouter();
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    store.categories.categorylist = categories !== undefined && categories;
    store.categories.PickedCategory = categoryList.category;
    store.categories.Themeslist = categoryList.themes;
    store.pagination.categoryId = categoryList.category.id;

    const pages = categoryList.page_data.split(",");
    store.pagination.currentPage = 1;
    store.pagination.countPages = pages.length;
    store.pagination.pageData = "category";
    setIsVisible(window.innerWidth > 1000)
  }, [asPath]);

  return (
    <div className={classes.wrapper}>
      <Head>
        <script>window.yaContextCb=window.yaContextCb||[]</script>
        <script src="https://yandex.ru/ads/system/context.js" async></script>
      </Head>
      <Title
        title={categoryList?.category.name}
        description={categoryList?.category.description}
      />
      <div className={classes.flexWrapper}>
        <div>
          <PopularThemesList list={popularThemes} />
          <div className={classes.slider}>
            {!isVisible && <SliderCategory categories={popularThemes} />}
          </div>
          {isVisible && <AdvertsThematics></AdvertsThematics>}
        </div>
        {!isVisible &&<Adverts />}

        <div className={classes.themesWrapper}>
          <ThemeList name={""} list={categoryList.themes} />
        </div>
        {categoryList.themes.length > 12 && <AdvertsAfterContent />}
        </div>
      </div>
  );
};

export default CategoryPage;
