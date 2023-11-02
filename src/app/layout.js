import Layout from "@/components/layout/Layout";
import "./globals.css";
import {yekanBakh} from "@/utils/fonts";
import NextAuthProvider from "src/providers/NextAuthProvider";
export const metadata = {
  title: "دِونایت | برنامه نویس شب",
  description: "یاد گیری برنامه نویسی با زبان ساده و روان",
};

export default function RootLayout({children}) {
  return (
    <html lang="fa" dir="rtl">
      <body className={`${yekanBakh.className} bg-background`}>
        <NextAuthProvider>
          <Layout className={yekanBakh.className}>{children}</Layout>
        </NextAuthProvider>
      </body>
    </html>
  );
}
