import Footer from "./Footer";
import Header from "./Header";

function Layout({children}) {
  return (
    <section className="container m-auto">
      <Header />
      <section className="min-h-screen">{children}</section>
      <Footer />
    </section>
  );
}

export default Layout;
