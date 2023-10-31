import {yekanBakh} from "@/utils/fonts";
import Footer from "./Footer";
import Header from "./Header";

function Layout({children}) {
  return (
    <section className={yekanBakh.className}>
      <Header />
      <section className="min-h-screen">{children}</section>
      <Footer />
    </section>
  );
}

export default Layout;
