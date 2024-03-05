import Image from "next/image";
import React from "react";
import classes from "./ColoringItem.module.css";
import Link from "next/link";
import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";
const ColoringItem = ({ name, image, id }) => {
  const style = {
    width: "100%",
    height: "auto",
    objectFit: "contain",
    objectPosition: "top",
    position: "inherit",
  };
  const handlePrint = () => {
    const url = `${process.env.NEXT_PUBLIC_BACK_IMG}${image}`;
    const printWindow = window.open("", "_blank");
    printWindow.document.write("<html><head><title>Print</title></head><body>");
    printWindow.document.write(
      '<img id="printImage" src="' + url + '" style="width:100%" />',
    );
    printWindow.document.write("</body></html>");
    printWindow.document.close();

    const printImage = printWindow.document.getElementById("printImage");
    printImage.onload = () => {
      printWindow.print();
    };
    printWindow.onafterprint = () => {
      printWindow.close();
    };
    printImage.src = url;
    printWindow.document.close();
  };
  return (
    <div className={classes.wrapper}>
      <div className={classes.container}>
        <Link className={classes.container} href={`/theme/coloring/${id}`}>
          <div className={classes.image}>
            <Image
              fill={false}
              width={400}
              height={400}
              style={style}
              sizes="(min-height: 768px) (width:100%)"
              src={`${process.env.NEXT_PUBLIC_BACK_IMG}${image}`}
              alt={name}
              priority
            />
          </div>
          <div className={classes.buttonWrapper}>
            <h3 className={classes.nameTitle}>{name}</h3>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ColoringItem;
