import { Link } from "react-router-dom";
import style from "./styles/navBar-style.module.css";

export default function NavBar(){
  return(
    <nav>
      <ul>
        <li>
          <Link className={style["link-styles"]} to="/">Home</Link>
        </li>
        <li>
          <Link className={style["link-styles"]} to="/Owner">Owner</Link>
        </li>
      </ul>
    </nav>
  )
}