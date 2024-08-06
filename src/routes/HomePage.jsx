import { Link } from "react-router-dom";
import stylesHomePage from "./HomePage.module.css";

export const HomePage = () => {
  return (
    <div className={stylesHomePage.center}>
      <Link to={"/map"}>
        <button className="bigButton">Enter</button>
      </Link>
    </div>
  );
};
