import localFont from "next/font/local";

export const yekanBakh = localFont({
  src: [
    {
      path: "../../public/fonts/YekanBakhFaNum-Light.woff2",
      weight: "200",
      style: "normal",
    },
    {
      path: "../..//public/fonts/YekanBakhFaNum-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/YekanBakhFaNum-Bold.woff2",
      weight: "600",
      style: "normal",
    },
  ],
});
