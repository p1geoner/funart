import Head from "next/head";
import React, { useEffect, useState } from "react";

const Ads = () => {
  const [screenWidth, setScreenWidth] = useState();
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

  return (
    <>
      {screenWidth > 480 && <div id="yandex_rtb_R-A-3408799-1"></div>}
      {screenWidth <= 480 && screenWidth > 360 && (
        <div id="yandex_rtb_R-A-3408799-1"></div>
      )}
      {screenWidth < 360 && <div id="yandex_rtb_R-A-3408799-1"></div>}
    </>
  );
};

export default Ads;
