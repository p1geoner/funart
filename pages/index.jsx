import Head from "next/head";
import Image from "next/image";

import styles from "@/styles/Home.module.css";
import classes from "../styles/Home.module.css";
import Title from "@/components/Title/Title";
import SliderCategory from "@/components/SliderCategory/SliderCategory";
import store from "@/store/store";
import { observer } from "mobx-react-lite";
import axiosConfig from "@/utils/axiosConfig";
import axios from "axios";
import { useEffect } from "react";
import ThemeList from "@/components/ThemesList/ThemeList";
import { Inter } from "next/font/google";
import Upper from "@/components/Upper/Upper";
import { Adverts } from "@/components/ads";
const inter = Inter({ subsets: ["latin", "cyrillic"] });

export const getStaticProps = async () => {
  const response = await axiosConfig().get(`categories/`);
  const categories = response.data.categories;

  const response2 = await axiosConfig().get(`themes/populars/`);
  const popularThemes = response2.data.themes;

  const response3 = await axiosConfig().get(
    `themes/?page=1&per_page=8&language=English`,
  );
  const themeList = response3.data;

  return {
    props: { categories, popularThemes, themeList },
    revalidate: 60,
  };
};

const Home = observer(({ categories, popularThemes, themeList }) => {
  useEffect(() => {
    store.categories.categorylist = categories !== undefined && categories;
    store.categories.PickedCategory = "";
    store.categories.popularThemes = popularThemes;
    store.categories.Themeslist = themeList.themes;
    const pages = themeList.page_data.split(",");
    store.pagination.countPages = pages.length;
    store.pagination.pageData = "main";
  }, []);
  const metaData = popularThemes.map((theme) => theme.name);
  console.log(metaData);
  return (
    <>
      <Head>
        <title>Дидишка - Бесплатные раскраски для детей и взрослых.</title>
        <meta
          name="description"
          content={`У нас вы найдете бесплатные раскраски на разные темы, от животных и природы до популярных персонажей. Скачивайте и распечатывайте раскраски, чтобы окунуться в мир творчества. Раскраски для всех возрастов и интересов. ${metaData.join(
            ", ",
          )} Воплощайте свои идеи в цвете с Didishka!`}
        />
        <meta
          name="keywords"
          content={`Раскраски, распечатать раскраски, бесплатные раскраски, раскраски бесплатно, раскраски для детей, раскраски для взрослых, раскраски на разные темы, раскраски для печати, раскраски онлайн, раскраски для детей онлайн, интерактивные раскраски, раскраски животные, раскраски природа, скачать раскраски, раскраски лета, ${metaData.join(
            ", ",
          )}`}
        />
        <meta />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <script>window.yaContextCb=window.yaContextCb||[]</script>
        <script src="https://yandex.ru/ads/system/context.js" async></script>
      </Head>
      <div className={classes.wrapper}>
        <Title
          title={"Воплощай идеи в цвете"}
          description={"Распечатайте и разукрасьте моменты из любимых мультиков или фильмов прямо сейчас"}
        />
        <div className={classes.wrapperRelative}>
          <div className={classes.wrapperAbsolute}>
            <SliderCategory categories={popularThemes}></SliderCategory>
          </div>
        </div>
        <Adverts />
        <ThemeList name={"Все раскраски"} list={themeList.themes} />
      </div>
      <Upper />
    </>
  );
});
export default Home;
