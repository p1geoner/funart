import Image from "next/image";
import React from "react";
import classes from "./ColoringModal.module.css";
const ColoringModal = ({ coloring }) => {
  return (
    <div className={classes.wrapper}>
      <Image src={coloring.image} alt={coloring.name} fill />
    </div>
  );
};

export default ColoringModal;
