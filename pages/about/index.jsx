import React from "react";
import classes from "./AboutPage.module.css";
import Title from "@/components/Title/Title";
const index = () => {
  return (
    <div className={classes.wrapper}>
      <Title
        title={`About us`}
        description={`Rosalina is a woman with great power, whose sole duty is to watch over and guard the universe, the Mushroom World and protect the Lumas.`}
      />
      <div className={classes.chatWrapper}>
        <div className={classes.mesageWrapper}>
          <h2 className={classes.mesageTitle}>Who we are? 🤔 </h2>
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
              We are a team of enthusiasts who are delighted to introduce you
              to our coloring website. Our goal is to inspire children and
              adults to unleash their creativity and have fun through the art
              of coloring fascinating pictures.
            </h3>
          </div>
        </div>
        <div className={classes.mesageWrapperRight}>
          <h2 className={classes.mesageTitle}>Our mission 🫡 </h2>
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
              We believe in the power of art and its ability to stimulate
              imagination, fine motor skills, and concentration. Our collection
              of coloring pages covers a wide range of themes, from animals and
              plants to fairy tale characters and vehicles. <br /> <br />{" "}
              We have coloring pages for children of all ages and skill levels,
              as well as special options for adults, helping them relax and
              enjoy the process of creation.
            </h3>
          </div>
        </div>
        <div className={classes.mesageWrapper}>
          <h2 className={classes.mesageTitle}>Who we are? 🤔 </h2>
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
              We are a team of enthusiasts who are delighted to introduce you
              to our coloring website. Our goal is to inspire children and
              adults to unleash their creativity and have fun through the art
              of coloring fascinating pictures.
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
