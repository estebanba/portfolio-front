import { useEffect, useState } from "react";
import { HashLink } from "react-router-hash-link";
import MenuNav from "./MenuNav";
import { useMediaQuery } from "react-responsive";
import MenuMobile from "./MenuMobile";
import { useLocation } from "react-router-dom";
import stylesHeader from "./Header.module.css";
import { CONSTANTS } from "../../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
  const isMobile = useMediaQuery({ maxWidth: CONSTANTS.mobileWidth });
  const [menuOpen, setMenuOpen] = useState(false);
  const handleToggle = () => {
    setMenuOpen((prev) => !prev);
  };
  let location = useLocation();

  useEffect(() => {
    console.log(location);
  }, [location]);

  return (
    <>
      <header>
        <div>
          <HashLink
            smooth
            to={{
              hash: "#",
              pathname: "/",
            }}
            onClick={() => {
              if (menuOpen === true) {
                setMenuOpen(false);
              }
            }}
          >
            EB
          </HashLink>
        </div>
        {!isMobile && <MenuNav />}
        {isMobile && (
          <Link onClick={handleToggle} className={stylesHeader.hamburger}>
            {menuOpen ? "Close" : "Menu"}
          </Link>
        )}
      </header>
      <MenuMobile menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      {/* <hr></hr> */}
    </>
  );
};

export default Header;
