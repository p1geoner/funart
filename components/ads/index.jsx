import dynamic from "next/dynamic";

export const Adverts = dynamic(() => import("./ads"), {
  ssr: false,
});
