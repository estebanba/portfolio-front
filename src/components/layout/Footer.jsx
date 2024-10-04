// import cvDownload from "../assets/files/CV_2022_EstebanBasili_EN.pdf";
import { useEffect, useState } from "react";
import stylesFooter from "./Footer.module.css";
import { ThemeSwitchButton } from "./ThemeSwitchButton";

const Footer = () => {
  const [year, setYear] = useState();

  useEffect(() => {
    const date = new Date();
    const year = date.getFullYear();
    setYear(year);
  }, []);

  return (
    <footer>
      {year && (
        <>
          <p>© {year} Esteban Basili</p>

          <ul>
            <li className={stylesFooter.nav}>
              <a
                style={{ color: "inherit" }}
                href="mailto:me@estebanbasili.com"
              >
                e-mail
              </a>
            </li>

            <li className={stylesFooter.nav}>
              <a
                href="https://www.linkedin.com/in/estebanbasili/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </li>

            <li className={stylesFooter.nav}>
              <a
                href="https://github.com/estebanba"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </li>
            <li className={stylesFooter.nav}>
              <ThemeSwitchButton />
            </li>
          </ul>
        </>
      )}
    </footer>
  );
};

export default Footer;
