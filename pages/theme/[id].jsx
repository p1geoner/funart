import React, { useEffect } from "react";
import { useRouter } from "next/router";
import axiosConfig from "@/utils/axiosConfig";
import Title from "@/components/Title/Title";
import ColoringsList from "@/components/ColoringsList/ColoringsList";

import classes from "./coloringPage.module.css";
import store from "@/store/store";
import PopularThemesList from "@/components/SliderCategory/popularThemesList";
import SliderCategory from "@/components/SliderCategory/SliderCategory";
import Upper from "@/components/Upper/Upper";

export const getStaticProps = async ({ params }) => {
  const id = params.id.toString();

  const response = await axiosConfig().get(
    `themes/${id}/colorings/?page=1&per_page=8`,
  );
  const coloringsList = response.data;

  const response2 = await axiosConfig().get(`themes/populars/`);
  const popularThemes = response2.data.themes;

  const response3 = await axiosConfig().get(`categories/`);
  const categories = response3.data.categories;
  return {
    props: { coloringsList, popularThemes, categories },
    revalidate: 60,
  };
};

export const getStaticPaths = async () => {
  const response = await axiosConfig().get(
    `themes/?page=1&per_page=999&language=ru`,
  );
  const themesList = response.data.themes;
  return {
    paths: themesList.map((theme) => ({
      params: {
        id: theme.id.toString(),
      },
    })),
    fallback: "blocking",
  };
};

const CategoryPage = ({ coloringsList, popularThemes, categories }) => {
  const { asPath, pathname } = useRouter();
  useEffect(() => {
    store.categories.categorylist = categories;
    store.pagination.categoryId = coloringsList.theme.id;
    store.categories.coloringsList = coloringsList.colorings;
    const pages = coloringsList.page_data.split(",");
    store.pagination.currentPage = 1;
    store.pagination.countPages = pages.length;
  }, [asPath]);

  return (
    <div className={classes.wrapper}>
      <Title
        title={coloringsList.theme.name}
        description={coloringsList.theme.description}
      />
      <div className={classes.flexWrapper}>
        <PopularThemesList list={popularThemes} />
        <div className={classes.slider}>
          <SliderCategory categories={popularThemes} />
        </div>

        <ColoringsList list={coloringsList.colorings} />
      </div>
      <Upper />
    </div>
  );
};

export default CategoryPage;
