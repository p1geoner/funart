import React, { useState } from "react";
import classes from "./Select.module.css";
import { observer } from "mobx-react-lite";
import store from "@/store/store";
import { redirect } from "next/dist/server/api-utils";
import Link from "next/link";
import { useRouter } from "next/router";
const Select = observer(({ options, value, onChange, activeOption }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleSelect = (option) => {
    onChange(option);
    setIsOpen(false);
    console.log(option, store.categories.PickedCategory);
  };

  const router = useRouter();

  return (
    <div className={classes.wrapper} onMouseLeave={() => setIsOpen(false)}>
      <div
        className={isOpen ? classes.selectedOpen : classes.selected}
        onClick={() => setIsOpen(!isOpen)}>
        <p className={classes.text}>
          {store.categories.PickedCategory?.name
            ? store.categories.PickedCategory?.name
            : value}
        </p>
        <svg
          width="11"
          height="7"
          transform={isOpen ? ` rotate(180)` : ` rotate(0)`}
          viewBox="0 0 11 7"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path d="M1 1L5.32 6L10 1" stroke="#976EAF" />
        </svg>
      </div>
      {isOpen && (
        <div className={classes.options}>
          {options?.map((option) => (
            <div
              key={option.id}
              className={
                store.categories.PickedCategory?.id === option.id
                  ? classes.activeOption
                  : classes.option
              }
              onClick={() => handleSelect(option)}>
              <Link className={classes.link} href={`/category/${option.id}`}>
                {option.name}
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
});

export default Select;
