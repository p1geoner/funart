import Image from "next/image";
import React from "react";
import classes from "./ColoringItem.module.css";
import Link from "next/link";
const ColoringItem = ({ name, image, id }) => {
  const style = {
    width: "100%",
    height: "auto",
    objectFit: "contain",
    objectPosition: "top",
    position: "inherit",
  };
  const handlePrint = () => {
    const url = `https://api-didishka.ru${image}`;
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
              src={`https://api-didishka.ru${image}`}
              alt={name}
              priority
            />
          </div>
          <div className={classes.buttonWrapper}>
            <h3 className={classes.nameTitle}>{name}</h3>
            {/* <div className={classes.buttons}>
            <a
              className={classes.buttonDownLoad}
              href={`https://api-didishka.ru/api/colorings/${id}/download/`}
              download={`${name}.jpeg`}>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_358_2905)">
                  <path
                    d="M2 16C1.45 16 0.979002 15.804 0.587002 15.412C0.195002 15.02 -0.000664969 14.5493 1.69779e-06 14V11H2V14H14V11H16V14C16 14.55 15.804 15.021 15.412 15.413C15.02 15.805 14.5493 16.0007 14 16H2ZM8 12L3 7L4.4 5.55L7 8.15V0H9V8.15L11.6 5.55L13 7L8 12Z"
                    fill="#976EAF"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_358_2905">
                    <rect width="16" height="16" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </a>
            <button className={classes.buttonPrint} onClick={handlePrint}>
              <svg
                width="20"
                height="18"
                viewBox="0 0 20 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <g id="material-symbols:print" clipPath="url(#clip0_358_2902)">
                  <path
                    id="Vector"
                    d="M16 4H4V0H16V4ZM16 9.5C16.2833 9.5 16.521 9.404 16.713 9.212C16.905 9.02 17.0007 8.78267 17 8.5C17 8.21667 16.904 7.979 16.712 7.787C16.52 7.595 16.2827 7.49933 16 7.5C15.7167 7.5 15.479 7.596 15.287 7.788C15.095 7.98 14.9993 8.21733 15 8.5C15 8.78333 15.096 9.021 15.288 9.213C15.48 9.405 15.7173 9.50067 16 9.5ZM14 16V12H6V16H14ZM16 18H4V14H0V8C0 7.15 0.291667 6.43733 0.875 5.862C1.45833 5.28667 2.16667 4.99933 3 5H17C17.85 5 18.5627 5.28767 19.138 5.863C19.7133 6.43833 20.0007 7.15067 20 8V14H16V18Z"
                    fill="#976EAF"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_358_2902">
                    <rect width="20" height="18" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </button>
          </div> */}
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ColoringItem;
