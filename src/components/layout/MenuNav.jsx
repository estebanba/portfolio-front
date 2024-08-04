import { HashLink } from "react-router-hash-link";
import { scrollWithOffset } from "../../utils/scrollWithOffset";
import stylesMenuNav from "./MenuNav.module.css";
import useAnimationStore from "../../store/animationStore";

const MenuNav = ({ setMenuOpen, menuOpen }) => {
  const { setIsBouncing } = useAnimationStore();

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
              setIsBouncing(true);
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
              setIsBouncing(true);
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
              setIsBouncing(true);
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
