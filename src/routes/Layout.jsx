import { Outlet } from "react-router-dom";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import stylesLayout from "./Layout.module.css";
import { useMediaQuery } from "react-responsive";
import { CONSTANTS } from "../utils/constants";

function Layout() {
  const isMobile = useMediaQuery({ maxWidth: CONSTANTS.mobileWidth });
  return (
    <section
      // id={stylesLayout.pageContainer}
      className={stylesLayout.layout}
    >
      <div className={stylesLayout.header}>
        <Header />
      </div>

      <div className={stylesLayout.leftSide}></div>
      <div className={stylesLayout.body}>
        <Outlet />
      </div>
      <div className={stylesLayout.rightSide}></div>
      {!isMobile && (
        <div className={stylesLayout.footer}>
          <Footer />
        </div>
      )}
    </section>
  );
}

export default Layout;
