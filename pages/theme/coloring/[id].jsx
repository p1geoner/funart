import axiosConfig from "@/utils/axiosConfig";
import React from "react";
import classes from "./coloringSinglePage.module.css";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import { Adverts } from "@/components/ads";
export const getStaticProps = async ({ params }) => {
  const id = params.id.toString();
  let prevId = parseInt(params.id) - 1;
  let nextId = parseInt(params.id) + 1;
  let hasNext = false;
  let hasPrev = false;
  const responsePrev = await axiosConfig().get(`colorings/${prevId}/`);
  if (responsePrev?.status === 200) {
    hasPrev = true;
  }

  const responseNext = await axiosConfig().get(`colorings/${nextId}/`);
  if (responseNext?.status === 200) {
    hasNext = true;
  }

  const response = await axiosConfig().get(`colorings/${id}/`);
  const coloring = response.data;

  return {
    props: { coloring, hasNext, hasPrev },
    revalidate: 3600,
  };
};

export const getStaticPaths = async () => {
  const response = await axiosConfig().get(`colorings/`);
  const coloringsList = response.data;
  return {
    paths: coloringsList.map((coloring) => ({
      params: {
        id: coloring.id.toString(),
      },
    })),
    fallback: "blocking",
  };
};

const SingleColoring = ({ coloring, hasNext, hasPrev }) => {
  const router = useRouter();
  const { id } = router.query;
  const prevId = parseInt(id) - 1;
  const nextId = parseInt(id) + 1;
  const handlePrint = () => {
    const url = `https://api-didishka.ru${coloring.image}`;
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

  const handleDownload = () => {
    axiosConfig().get(`https://api-didishka.ru/api/colorings/5/download/`);
  };

  return (
    <div className={classes.wrapper}>
      <div className={classes.buttonsWrapper}>
        <button className={classes.button} onClick={() => router.back()}>
          <svg
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <g id="mdi:arrow-up">
              <path
                id="Vector"
                d="M21.0002 11.4999L21.0002 13.4999L9.00016 13.4999L14.5002 18.9999L13.0802 20.4199L5.16016 12.4999L13.0802 4.57992L14.5002 5.99992L9.00016 11.4999L21.0002 11.4999Z"
                fill="#976EAF"
              />
            </g>
          </svg>
          Back
        </button>
        <div className={classes.buttonsInnerWrapper}>
          <button className={classes.button} onClick={handlePrint}>
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <g id="mdi:arrow-up">
                <path
                  id="Vector"
                  d="M18 7H6V3H18V7ZM18 12.5C18.2833 12.5 18.521 12.404 18.713 12.212C18.905 12.02 19.0007 11.7827 19 11.5C19 11.2167 18.904 10.979 18.712 10.787C18.52 10.595 18.2827 10.4993 18 10.5C17.7167 10.5 17.479 10.596 17.287 10.788C17.095 10.98 16.9993 11.2173 17 11.5C17 11.7833 17.096 12.021 17.288 12.213C17.48 12.405 17.7173 12.5007 18 12.5ZM16 19V15H8V19H16ZM18 21H6V17H2V11C2 10.15 2.29167 9.43733 2.875 8.862C3.45833 8.28667 4.16667 7.99933 5 8H19C19.85 8 20.5627 8.28767 21.138 8.863C21.7133 9.43833 22.0007 10.1507 22 11V17H18V21Z"
                  fill="#976EAF"
                />
              </g>
            </svg>
            Print
          </button>
          <a
            className={classes.button}
            href={`https://api-didishka.ru/api/colorings/${coloring.id}/download/`}
            download={`${coloring.name}.jpeg`}>
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <g id="material-symbols:save">
                <path
                  id="Vector"
                  d="M6 20.5C5.45 20.5 4.979 20.304 4.587 19.912C4.195 19.52 3.99934 19.0493 4 18.5V15.5H6V18.5H18V15.5H20V18.5C20 19.05 19.804 19.521 19.412 19.913C19.02 20.305 18.5493 20.5007 18 20.5H6ZM12 16.5L7 11.5L8.4 10.05L11 12.65V4.5H13V12.65L15.6 10.05L17 11.5L12 16.5Z"
                  fill="#976EAF"
                />
              </g>
            </svg>
            Download
          </a>
        </div>
      </div>
      <div className={classes.imageWrapper}>
        <h1 className={classes.title}>{coloring.name}</h1>
        <Image
          className={classes.image}
          src={`https://api-didishka.ru${coloring.image}`}
          width={1000}
          height={1000}
          alt={`${coloring.name}`}
        />
        <div className={classes.navButtons}>
          {hasPrev && (
            <Link
              href={`/theme/coloring/${prevId}`}
              className={classes.prevButton}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                viewBox="0 0 50 50"
                fill="none">
                <path
                  d="M34.0002 24.4999L34.0002 26.4999L22.0002 26.4999L27.5002 31.9999L26.0802 33.4199L18.1602 25.4999L26.0802 17.5799L27.5002 18.9999L22.0002 24.4999L34.0002 24.4999Z"
                  fill="#976EAF"
                />
                <rect
                  x="0.5"
                  y="0.5"
                  width="49"
                  height="49"
                  rx="24.5"
                  stroke="#976EAF"
                />
              </svg>
            </Link>
          )}
          {hasNext && (
            <Link
              href={`/theme/coloring/${nextId}`}
              className={classes.prevButton}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                viewBox="0 0 50 50"
                fill="none">
                <path
                  d="M15.9998 25.5001L15.9998 23.5001L27.9998 23.5001L22.4998 18.0001L23.9198 16.5801L31.8398 24.5001L23.9198 32.4201L22.4998 31.0001L27.9998 25.5001L15.9998 25.5001Z"
                  fill="#976EAF"
                />
                <rect
                  x="49.5"
                  y="49.5"
                  width="49"
                  height="49"
                  rx="24.5"
                  transform="rotate(-180 49.5 49.5)"
                  stroke="#976EAF"
                />
              </svg>
            </Link>
          )}
        </div>
        <Adverts />
      </div>
    </div>
  );
};

export default SingleColoring;
