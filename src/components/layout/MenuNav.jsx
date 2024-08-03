import { HashLink } from "react-router-hash-link";
import { scrollWithOffset } from "../../utils/scrollWithOffset";
import stylesMenuNav from "./MenuNav.module.css";

const MenuNav = ({ setMenuOpen, menuOpen }) => {
  return (
    <nav>
      <ul className={stylesMenuNav.menuList}>
        <li className={stylesMenuNav.menuItem}>
          <HashLink
            smooth
            to={{
              hash: "#",
              pathname: "/",
            }}
            scroll={scrollWithOffset}
            onClick={() => {
              if (menuOpen === true) {
                setMenuOpen(false);
              }
            }}
          >
            About
          </HashLink>
        </li>
        <li className={stylesMenuNav.menuItem}>
          <HashLink
            smooth
            to={{
              hash: "#",
              pathname: "/",
            }}
            scroll={scrollWithOffset}
            onClick={() => {
              if (menuOpen === true) {
                setMenuOpen(false);
              }
            }}
          >
            Work
          </HashLink>
        </li>
        {/* <li className={stylesMenuNav.menuItem}>
          <HashLink
            smooth
            to={{
              hash: "#",
              pathname: "/hireme",
            }}
            scroll={scrollWithOffset}
            onClick={() => {
              if (menuOpen === true) {
                setMenuOpen(false);
              }
            }}
          >
            Hire Me
          </HashLink>
        </li> */}
        <li className={stylesMenuNav.menuItem}>
          <HashLink
            smooth
            to={{
              hash: "#",
              pathname: "/",
            }}
            scroll={scrollWithOffset}
            onClick={() => {
              if (menuOpen === true) {
                setMenuOpen(false);
              }
            }}
          >
            Contact
          </HashLink>
        </li>
      </ul>
    </nav>
  );
};

export default MenuNav;
