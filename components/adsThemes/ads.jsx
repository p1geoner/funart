import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import styles from "./ads.module.css";
const Ads = () => {
  const [screenWidth, setScreenWidth] = useState();
  const router = useRouter();
  useEffect(() => {
    if (typeof window !== "undefined") {
      setScreenWidth(window.innerWidth);

      if (window.innerWidth > 1000) {
        console.log(6);
        window.yaContextCb.push(() => {
          Ya.Context.AdvManager.render({
            blockId: "R-A-3408799-6",
            renderTo: "yandex_rtb_R-A-3408799-6",
          });
        });
      } else {
        if (window.innerWidth <= 1000 && window.innerWidth > 768) {
          console.log(5);
          window.yaContextCb.push(() => {
            Ya.Context.AdvManager.render({
              blockId: "R-A-3408799-5",
              renderTo: "yandex_rtb_R-A-3408799-5",
            });
          });
        } else {
          if (window.innerWidth <= 768 && window.innerWidth > 480) {
            console.log(4);
            window.yaContextCb.push(() => {
              Ya.Context.AdvManager.render({
                blockId: "R-A-3408799-4",
                renderTo: "yandex_rtb_R-A-3408799-4",
              });
            });
          } else {
            if (window.innerWidth <= 480 && window.innerWidth > 360) {
              console.log(3);
              window.yaContextCb.push(() => {
                Ya.Context.AdvManager.render({
                  blockId: "R-A-3408799-3",
                  renderTo: "yandex_rtb_R-A-3408799-3",
                });
              });
            } else {
              if (window.innerWidth <= 360) {
                console.log(2);
                window.yaContextCb.push(() => {
                  Ya.Context.AdvManager.render({
                    blockId: "R-A-3408799-2",
                    renderTo: "yandex_rtb_R-A-3408799-2",
                  });
                });
              }
            }
          }
        }
      }
    }
  }, []);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setScreenWidth(window.innerWidth);
      if (window.innerWidth > 1000) {
        window.yaContextCb.push(() => {
          Ya.Context.AdvManager.render({
            blockId: "R-A-3408799-6",
            renderTo: "yandex_rtb_R-A-3408799-6",
          });
        });
      }
      if (window.innerWidth <= 1000 && window.innerWidth > 768) {
        window.yaContextCb.push(() => {
          Ya.Context.AdvManager.render({
            blockId: "R-A-3408799-5",
            renderTo: "yandex_rtb_R-A-3408799-5",
          });
        });
      }
      if (window.innerWidth <= 768 && window.innerWidth > 480) {
        window.yaContextCb.push(() => {
          Ya.Context.AdvManager.render({
            blockId: "R-A-3408799-4",
            renderTo: "yandex_rtb_R-A-3408799-4",
          });
        });
      }
      if (window.innerWidth <= 480 && window.innerWidth > 360) {
        window.yaContextCb.push(() => {
          Ya.Context.AdvManager.render({
            blockId: "R-A-3408799-3",
            renderTo: "yandex_rtb_R-A-3408799-3",
          });
        });
      }
      if (window.innerWidth <= 360) {
        window.yaContextCb.push(() => {
          Ya.Context.AdvManager.render({
            blockId: "R-A-3408799-2",
            renderTo: "yandex_rtb_R-A-3408799-2",
          });
        });
      }
    }
  }, [router]);

  return (
    <div id="advert">
      <div className={styles.maxWidth} id="container">
        <div className={styles.sticky} id="yandex_rtb_R-A-3408799-6"></div>
      </div>
      <div id="yandex_rtb_R-A-3408799-2"></div>
      <div id="yandex_rtb_R-A-3408799-3"></div>
      <div id="yandex_rtb_R-A-3408799-4"></div>
      <div id="yandex_rtb_R-A-3408799-5"></div>
    </div>
  );
};

export default Ads;
