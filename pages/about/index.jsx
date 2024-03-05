import React, {useEffect} from "react";
import classes from "./AboutPage.module.css";
import Title from "@/components/Title/Title";
import { Adverts } from "@/components/ads";
import axiosConfig from "@/utils/axiosConfig";
import store from "@/store/store";
import {observer} from "mobx-react-lite";

export const getStaticProps = async () => {
  const response = await axiosConfig().get(`categories/`);
  const categories = response?.data.categories;
  return {
    props: { categories },
    revalidate: 60,
  };
};

const Index = observer(({categories}) => {
  useEffect(()=>{
    store.categories.categorylist = categories !== undefined && categories;
    store.categories.PickedCategory = "";
  },[])
  return (
    <div className={classes.wrapper}>
      <Title
        title={`О нас`}
        description={`Источник вдохновения в мире раскрасок`}
      />
      <div className={classes.chatWrapper}>
        <div className={classes.mesageWrapper}>
          <h2 className={classes.mesageTitle}>Кто мы такие? 🤔 </h2>
          <div className={classes.textWrapper}>
            <svg
              className={classes.svgLeft}
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="13"
              viewBox="0 0 40 13"
              fill="none">
              <path
                d="M0.00856175 13V0.504223C-0.00300342 0.33053 -0.00270343 0.162228 0.00856175 0V0.504223C0.305917 4.9701 8.44698 13 39.7284 13H0.00856175Z"
                fill="#976EAF"
              />
            </svg>
            <h3>
              Мы - команда энтузиастов, которые с восторгом представляют вам наш веб-сайт с раскрасками. Наша цель - вдохновить детей и взрослых проявить свою креативность и получить удовольствие от искусства раскрашивания увлекательных картинок.
            </h3>
          </div>
        </div>
        <div className={classes.mesageWrapperRight}>
          <h2 className={classes.mesageTitle}>Наша миссия 🫡 </h2>
          <div className={classes.textWrapperRight}>
            <svg
              className={classes.svgRight}
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="13"
              viewBox="0 0 40 13"
              fill="none">
              <path
                d="M39.9914 13V0.504223C40.003 0.33053 40.0027 0.162228 39.9914 0V0.504223C39.6941 4.9701 31.553 13 0.271626 13H39.9914Z"
                fill="#976EAF"
              />
            </svg>
            <h3>
              Мы верим в силу искусства и его способность стимулировать воображение, моторику и концентрацию. Наша коллекция раскрасок охватывает широкий спектр тем, начиная от животных и растений, заканчивая персонажами сказок и транспортными средствами.
              У нас есть раскраски для детей всех возрастов и уровней навыков, а также специальные варианты для взрослых, помогающие им расслабиться и наслаждаться процессом творчества.
            </h3>
          </div>
        </div>
        <div className={classes.mesageWrapper}>
          <h2 className={classes.mesageTitle}>Что нас выделяет? 🤔 </h2>
          <div className={classes.textWrapper}>
            <svg
              className={classes.svgLeft}
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="13"
              viewBox="0 0 40 13"
              fill="none">
              <path
                d="M0.00856175 13V0.504223C-0.00300342 0.33053 -0.00270343 0.162228 0.00856175 0V0.504223C0.305917 4.9701 8.44698 13 39.7284 13H0.00856175Z"
                fill="#976EAF"
              />
            </svg>
            <h3>
              Мы постоянно обновляем нашу коллекцию, чтобы предложить вам новые и захватывающие рисунки каждый раз, когда вы посещаете наш веб-сайт. Наши раскраски создаются с любовью и заботой, чтобы предоставить вам приятный и вдохновляющий опыт раскрашивания.
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Index;
