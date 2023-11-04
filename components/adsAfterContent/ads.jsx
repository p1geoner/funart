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
            blockId: "R-A-3408799-12",
            renderTo: "yandex_rtb_R-A-3408799-12",
          });
        });
      } else {
        if (window.innerWidth <= 1000 && window.innerWidth > 768) {
          console.log(5);
          window.yaContextCb.push(() => {
            Ya.Context.AdvManager.render({
              blockId: "R-A-3408799-13",
              renderTo: "yandex_rtb_R-A-3408799-13",
            });
          });
        } else {
          if (window.innerWidth <= 768 && window.innerWidth > 480) {
            console.log(4);
            window.yaContextCb.push(() => {
              Ya.Context.AdvManager.render({
                blockId: "R-A-3408799-14",
                renderTo: "yandex_rtb_R-A-3408799-14",
              });
            });
          } else {
            if (window.innerWidth <= 480 && window.innerWidth > 360) {
              console.log(3);
              window.yaContextCb.push(() => {
                Ya.Context.AdvManager.render({
                  blockId: "R-A-3408799-15",
                  renderTo: "yandex_rtb_R-A-3408799-15",
                });
              });
            } else {
              if (window.innerWidth <= 360) {
                console.log(2);
                window.yaContextCb.push(() => {
                  Ya.Context.AdvManager.render({
                    blockId: "R-A-3408799-16",
                    renderTo: "yandex_rtb_R-A-3408799-16",
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
        console.log(6);
        window.yaContextCb.push(() => {
          Ya.Context.AdvManager.render({
            blockId: "R-A-3408799-12",
            renderTo: "yandex_rtb_R-A-3408799-12",
          });
        });
      } else {
        if (window.innerWidth <= 1000 && window.innerWidth > 768) {
          console.log(5);
          window.yaContextCb.push(() => {
            Ya.Context.AdvManager.render({
              blockId: "R-A-3408799-13",
              renderTo: "yandex_rtb_R-A-3408799-13",
            });
          });
        } else {
          if (window.innerWidth <= 768 && window.innerWidth > 480) {
            console.log(4);
            window.yaContextCb.push(() => {
              Ya.Context.AdvManager.render({
                blockId: "R-A-3408799-14",
                renderTo: "yandex_rtb_R-A-3408799-14",
              });
            });
          } else {
            if (window.innerWidth <= 480 && window.innerWidth > 360) {
              console.log(3);
              window.yaContextCb.push(() => {
                Ya.Context.AdvManager.render({
                  blockId: "R-A-3408799-15",
                  renderTo: "yandex_rtb_R-A-3408799-15",
                });
              });
            } else {
              if (window.innerWidth <= 360) {
                console.log(2);
                window.yaContextCb.push(() => {
                  Ya.Context.AdvManager.render({
                    blockId: "R-A-3408799-16",
                    renderTo: "yandex_rtb_R-A-3408799-16",
                  });
                });
              }
            }
          }
        }
      }
    }
  }, [router]);

  return (
    <div id="advert">
      <div id="yandex_rtb_R-A-3408799-12"></div>

      <div id="yandex_rtb_R-A-3408799-13"></div>
      <div id="yandex_rtb_R-A-3408799-14"></div>
      <div id="yandex_rtb_R-A-3408799-15"></div>
      <div id="yandex_rtb_R-A-3408799-16"></div>
    </div>
  );
};

export default Ads;
