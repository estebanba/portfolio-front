import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import stylesLayout from "./Layout.module.css";
import { useMediaQuery } from "react-responsive";
import { CONSTANTS } from "../../utils/constants";

export const Layout = () => {
  // const isMobile = useMediaQuery({ maxWidth: CONSTANTS.mobileWidth });
  return (
    <section className={stylesLayout.layout}>
      {/* <div className={stylesLayout.header}>
        <Header />
      </div> */}

      {/* <div className={stylesLayout.leftSide}></div> */}
      <div className={stylesLayout.body}>
        <Outlet />
      </div>
      {/* <div className={stylesLayout.rightSide}></div> */}
      {/* {!isMobile && ( */}
      <div className={stylesLayout.footer}>
        <Footer />
      </div>
      {/* )} */}
    </section>
  );
};
