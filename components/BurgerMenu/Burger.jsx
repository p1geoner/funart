import React, { useState } from "react";
import classes from "./Burger.module.css";
import Link from "next/link";
import { observer } from "mobx-react-lite";
import store from "@/store/store";
const Burger = observer(({ categories }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [listIsOpen, setListIsOpen] = useState(false);
  const handleSelect = (option) => {
    setIsOpen(false);
    store.categories.setPickedCategory(option);
  };
  return (
    <div className={classes.wrapper}>
      <button onClick={() => setIsOpen(!isOpen)} className={classes.button}>
        {isOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="53"
            height="53"
            viewBox="0 0 53 53"
            fill="none">
            <g id="Frame 84">
              <rect
                x="0.5"
                y="0.5"
                width="52"
                height="52"
                rx="26"
                fill="#976EAF"
                className={classes.svgRectHover}
              />
              <rect
                className={classes.svgRectWhite}
                id="Rectangle 1"
                x="17.4143"
                y="17.0918"
                width="27"
                height="2"
                rx="1"
                transform="rotate(45 17.4143 17.0918)"
                fill="#976EAF"
              />
              <rect
                className={classes.svgRectWhite}
                id="Rectangle 3"
                x="16"
                y="36.0918"
                width="27"
                height="2"
                rx="1"
                transform="rotate(-45 16 36.0918)"
                fill="#976EAF"
              />
              <rect
                x="0.5"
                y="0.5"
                width="52"
                height="52"
                rx="26"
                stroke="#976EAF"
              />
            </g>
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="53"
            height="53"
            viewBox="0 0 53 53"
            fill="none">
            <rect
              width="53"
              height="53"
              rx="26.5"
              fill="#976EAF"
              className={classes.svgRectHover}
            />
            <rect
              x="13"
              y="18.5"
              width="27"
              height="2"
              rx="1"
              className={classes.svgRectWhite}
              fill="#976EAF"
            />
            <rect
              x="13"
              y="25.5"
              width="27"
              height="2"
              rx="1"
              className={classes.svgRectWhite}
              fill="#976EAF"
            />
            <rect
              x="13"
              y="32.5"
              width="27"
              height="2"
              rx="1"
              className={classes.svgRectWhite}
              fill="#976EAF"
            />
            <rect
              x="0.5"
              y="0.5"
              width="52"
              height="52"
              rx="26"
              stroke="#976EAF"
            />
          </svg>
        )}
      </button>
      {isOpen && (
        <div onClick={() => setIsOpen(!isOpen)} className={classes.modal}>
          <div className={classes.modalWrapper}>
            <div className={classes.wrapperInner}>
              {!listIsOpen ? (
                <>
                  <Link href={"/about/"}>
                    <div className={classes.navigation}>
                      <p>About</p>
                    </div>
                  </Link>
                  <button
                    className={classes.navigation}
                    onClick={(e) => {
                      setListIsOpen(true);
                      e.stopPropagation();
                    }}>
                    {store.categories.PickedCategory?.name
                      ? store.categories.PickedCategory?.name
                      : "Any category"}
                  </button>
                </>
              ) : (
                <>
                  <div
                    className={classes.openList}
                    onClick={(e) => {
                      setListIsOpen(!setListIsOpen);
                      e.stopPropagation();
                    }}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="28"
                      height="24"
                      viewBox="0 0 28 24"
                      fill="none">
                      <g id="ep:back" clipPath="url(#clip0_487_2010)">
                        <path
                          id="Vector"
                          d="M3.09375 11.3438H26.2188C26.5254 11.3438 26.8195 11.4656 27.0363 11.6824C27.2532 11.8992 27.375 12.1933 27.375 12.5C27.375 12.8067 27.2532 13.1008 27.0363 13.3176C26.8195 13.5344 26.5254 13.6562 26.2188 13.6562H3.09375C2.78709 13.6562 2.493 13.5344 2.27616 13.3176C2.05932 13.1008 1.9375 12.8067 1.9375 12.5C1.9375 12.1933 2.05932 11.8992 2.27616 11.6824C2.493 11.4656 2.78709 11.3438 3.09375 11.3438Z"
                          fill="#4A4A4A"
                        />
                        <path
                          id="Vector_2"
                          d="M3.57255 12.5L13.1625 22.0876C13.3796 22.3047 13.5016 22.5992 13.5016 22.9062C13.5016 23.2133 13.3796 23.5078 13.1625 23.7249C12.9454 23.942 12.6509 24.064 12.3439 24.064C12.0368 24.064 11.7424 23.942 11.5252 23.7249L1.11899 13.3186C1.01131 13.2112 0.925881 13.0836 0.867591 12.9431C0.809301 12.8027 0.779297 12.6521 0.779297 12.5C0.779297 12.3479 0.809301 12.1973 0.867591 12.0568C0.925881 11.9164 1.01131 11.7888 1.11899 11.6814L11.5252 1.27512C11.7424 1.05801 12.0368 0.936035 12.3439 0.936035C12.6509 0.936035 12.9454 1.05801 13.1625 1.27512C13.3796 1.49223 13.5016 1.7867 13.5016 2.09375C13.5016 2.40079 13.3796 2.69526 13.1625 2.91237L3.57255 12.5Z"
                          fill="#4A4A4A"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_487_2010">
                          <rect width="28" height="24" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    {store.categories.PickedCategory?.name
                      ? store.categories.PickedCategory?.name
                      : "Any category"}
                  </div>
                  <div className={classes.categoryList}>
                    {categories?.map((option) => (
                      <Link
                        key={option.id}
                        className={classes.link}
                        href={`/category/${option.id}`}>
                        <div
                          className={
                            store.categories.PickedCategory?.id === option.id
                              ? classes.activeOption
                              : classes.option
                          }
                          onClick={() => handleSelect(option)}>
                          {option.name}
                        </div>
                      </Link>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
});

export default Burger;
