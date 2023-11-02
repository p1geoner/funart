import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const Ads = () => {
  const [screenWidth, setScreenWidth] = useState();
  const router = useRouter();
  useEffect(() => {
    if (typeof window !== "undefined") {
      setScreenWidth(window.innerWidth);

      if (window.innerWidth > 1000) {
        window.yaContextCb.push(()=>{
          Ya.Context.AdvManager.render({
            "blockId": "R-A-3408799-6",
            "renderTo": "yandex_rtb_R-A-3408799-6"
          });
        });    

      }

      if (window.innerWidth <= 1000 && window.innerWidth > 768) {
          window.yaContextCb.push(()=>{
            Ya.Context.AdvManager.render({
              "blockId": "R-A-3408799-5",
              "renderTo": "yandex_rtb_R-A-3408799-5"
            });
          }); 

      }

      if (window.innerWidth <= 768 && window.innerWidth > 480){
          window.yaContextCb.push(() => {
            Ya.Context.AdvManager.render({
              blockId: "R-A-3408799-4",
              renderTo: "yandex_rtb_R-A-3408799-4",
            });
          });
        
      }

      if (window.innerWidth <= 480 && window.innerWidth > 360){
        window.yaContextCb.push(()=>{
          Ya.Context.AdvManager.render({
            "blockId": "R-A-3408799-3",
            "renderTo": "yandex_rtb_R-A-3408799-3"
          })
        })
        
      }

      if (window.innerWidth <= 360){
        window.yaContextCb.push(()=>{
          Ya.Context.AdvManager.render({
            "blockId": "R-A-3408799-2",
            "renderTo": "yandex_rtb_R-A-3408799-2"
          })
        })
    
      }
    }
  }, []);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setScreenWidth(window.innerWidth);
      if (window.innerWidth > 1000) {
        window.yaContextCb.push(()=>{
          Ya.Context.AdvManager.render({
            "blockId": "R-A-3408799-6",
            "renderTo": "yandex_rtb_R-A-3408799-6"
          });
        });    
            
      }
        if (window.innerWidth <= 1000 && window.innerWidth > 768) {
          window.yaContextCb.push(()=>{
            Ya.Context.AdvManager.render({
              "blockId": "R-A-3408799-5",
              "renderTo": "yandex_rtb_R-A-3408799-5"
            });
          }); 

        }
        if (window.innerWidth <= 768 && window.innerWidth > 480){
          window.yaContextCb.push(() => {
            Ya.Context.AdvManager.render({
              blockId: "R-A-3408799-4",
              renderTo: "yandex_rtb_R-A-3408799-4",
            });
          });
        
      }
      if (window.innerWidth <= 480 && window.innerWidth > 360){
        window.yaContextCb.push(()=>{
          Ya.Context.AdvManager.render({
            "blockId": "R-A-3408799-3",
            "renderTo": "yandex_rtb_R-A-3408799-3"
          })
        })
        
      }
      if (window.innerWidth <= 360){
        window.yaContextCb.push(()=>{
          Ya.Context.AdvManager.render({
            "blockId": "R-A-3408799-2",
            "renderTo": "yandex_rtb_R-A-3408799-2"
          })
        })
    
      }
    }
  }, [router]);

  return (
    <div id="advert">
      <div id="yandex_rtb_R-A-3408799-6"></div>
      <div id="yandex_rtb_R-A-3408799-2"></div>
      <div id="yandex_rtb_R-A-3408799-3"></div>
      <div id="yandex_rtb_R-A-3408799-4"></div>
      <div id="yandex_rtb_R-A-3408799-5"></div>
    </div>
  );
};

export default Ads;
