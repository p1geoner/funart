import Head from "next/head";
import React, { useEffect } from "react";

const Ads = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.yaContextCb.push(() => {
        Ya.Context.AdvManager.render({
          blockId: "R-A-3408799-1",
          renderTo: "yandex_rtb_R-A-3408799-1",
        });
      });
    }
  }, []);

  return (
    <>
      <div id="yandex_rtb_R-A-3408799-1"></div>
    </>
  );
};

export default Ads;
