import store from "@/store/store";
import React, { useEffect, useState } from "react";
import ColoringItem from "./ColoringItem/ColoringItem";
import Pagination from "./Pagination/Pagination";
import classes from "./ColoringsList.module.css";
import { useRouter } from "next/router";
import { observer } from "mobx-react-lite";

const ColoringsList = observer(({ list }) => {
  const { asPath } = useRouter();
  const router = useRouter();
  const [colorList, setList] = useState(list);
  const [firstColumn, setFirstColumn] = useState(
    list.slice(0, list.length / 2),
  );
  const [secondColumn, setSecondColumn] = useState(
    list.slice(list.length / 2, list.length),
  );
  useEffect(() => {
    store.pagination.currentPage = 1;
    setFirstColumn(list.slice(0, list.length / 2));
    setSecondColumn(list.slice(list.length / 2, list.length));
    setList(list);
  }, [asPath]);

  useEffect(() => {
    if (store.pagination.currentPage !== 1) {
      const newColoringsList = store.categories.coloringsList;
      setList(colorList.concat(newColoringsList));
      const newFirstColumn = firstColumn.concat(
        newColoringsList.slice(0, newColoringsList.length / 2),
      );
      const newSecondColumn = secondColumn.concat(
        newColoringsList.slice(
          newColoringsList.length / 2,
          newColoringsList.length,
        ),
      );
      console.log(newColoringsList.length);
      setFirstColumn(newFirstColumn);
      setSecondColumn(newSecondColumn);
      console.log(newFirstColumn, newSecondColumn);
    } else {
      setFirstColumn(list.slice(0, list.length / 2));
      setSecondColumn(list.slice(list.length / 2, list.length));
    }
  }, [store.categories.coloringsList]);

  return (
    <div>
      <div className={classes.wrapper}>
        <div className={classes.firstColumn}>
          {firstColumn.map((coloring) => {
            return (
              <ColoringItem
                key={coloring.id}
                name={coloring.name}
                image={coloring.image}
                id={coloring.id}
              />
            );
          })}
        </div>
        <div className={classes.secondColumn}>
          {secondColumn.map((coloring) => {
            return (
              <ColoringItem
                key={coloring.id}
                name={coloring.name}
                image={coloring.image}
                id={coloring.id}
              />
            );
          })}
        </div>
      </div>
      <div className={classes.wrapperMobile}>
        {colorList.map((coloring) => {
          return (
            <ColoringItem
              key={coloring.id}
              name={coloring.name}
              image={coloring.image}
              id={coloring.id}
            />
          );
        })}
      </div>
      <Pagination />
    </div>
  );
});

export default ColoringsList;
