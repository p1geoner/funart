import dynamic from "next/dynamic";

export const AdvertsThematics = dynamic(() => import("./ads"), {
  ssr: false,
});
