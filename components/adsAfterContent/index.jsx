import dynamic from "next/dynamic";

export const AdvertsAfterContent = dynamic(() => import("./ads"), {
  ssr: false,
});
