import MenuNav from "./MenuNav";
import stylesMenuMobile from "./MenuMobile.module.css";

const MenuMobile = ({ setMenuOpen, menuOpen }) => {
  return (
    <div>
      {menuOpen && (
        <div className={stylesMenuMobile.menuMobile}>
          <MenuNav menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        </div>
      )}
    </div>
  );
};

export default MenuMobile;
