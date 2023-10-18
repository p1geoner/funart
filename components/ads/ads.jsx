import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const Ads = () => {
  const [screenWidth, setScreenWidth] = useState();
  const router = useRouter();
  useEffect(() => {
    if (typeof window !== "undefined") {
      setScreenWidth(window.innerWidth);
      if (window.innerWidth > 480) {
        window.yaContextCb.push(() => {
          Ya.Context.AdvManager.render({
            blockId: "R-A-3408799-1",
            renderTo: "yandex_rtb_R-A-3408799-1",
          });
        });
      } else {
        if (window.innerWidth <= 480 && window.innerWidth > 360) {
          window.yaContextCb.push(() => {
            Ya.Context.AdvManager.render({
              blockId: "R-A-3408799-2",
              renderTo: "yandex_rtb_R-A-3408799-2",
            });
          });
        } else {
          window.yaContextCb.push(() => {
            Ya.Context.AdvManager.render({
              blockId: "R-A-3408799-3",
              renderTo: "yandex_rtb_R-A-3408799-3",
            });
          });
        }
      }
    }
  }, []);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setScreenWidth(window.innerWidth);
      if (window.innerWidth > 480) {
        window.yaContextCb.push(() => {
          Ya.Context.AdvManager.render({
            blockId: "R-A-3408799-1",
            renderTo: "yandex_rtb_R-A-3408799-1",
          });
        });
      } else {
        if (window.innerWidth <= 480 && window.innerWidth > 360) {
          window.yaContextCb.push(() => {
            Ya.Context.AdvManager.render({
              blockId: "R-A-3408799-2",
              renderTo: "yandex_rtb_R-A-3408799-2",
            });
          });
        } else {
          window.yaContextCb.push(() => {
            Ya.Context.AdvManager.render({
              blockId: "R-A-3408799-3",
              renderTo: "yandex_rtb_R-A-3408799-3",
            });
          });
        }
      }
    }
  }, [router]);

  return (
    <div id="advert">
      <div id="yandex_rtb_R-A-3408799-1"></div>
      <div id="yandex_rtb_R-A-3408799-2"></div>
      <div id="yandex_rtb_R-A-3408799-3"></div>
      {/* {screenWidth > 480 && }
      {screenWidth <= 480 && screenWidth > 360 && (
        
      )}
      {screenWidth < 360 && } */}
    </div>
  );
};

export default Ads;
