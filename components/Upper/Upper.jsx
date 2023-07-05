import React, { useEffect, useState } from "react";
import classes from "./Upper.module.css";
const Upper = () => {
  const [showButton, setShowButton] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY >= 1000) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      {showButton && (
        <button className={classes.button} onClick={scrollToTop}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="42"
            height="42"
            viewBox="0 0 42 42"
            fill="none">
            <g id="state=default, type=up">
              <path
                id="Vector"
                d="M21 13L28 19.6667L26.04 21.6L22.4 18.1333L22.4 29L19.6 29L19.6 18.1333L15.96 21.6L14 19.6667L21 13Z"
                fill="#976EAF"
              />
              <rect
                x="0.5"
                y="0.5"
                width="41"
                height="41"
                rx="20.5"
                stroke="#976EAF"
              />
            </g>
          </svg>
        </button>
      )}
    </>
  );
};

export default Upper;
