import Layout from "@/components/layout/Layout";
import "./globals.css";
import {yekanBakh} from "@/utils/fonts";
export const metadata = {
  title: "دِونایت | برنامه نویس شب",
  description: "یاد گیری برنامه نویسی با زبان ساده و روان",
};

export default function RootLayout({children}) {
  return (
    <html lang="fa" dir="rtl">
      <body className={`${yekanBakh.className} bg-background`}>
        <Layout className={yekanBakh.className}>{children}</Layout>
      </body>
    </html>
  );
}
