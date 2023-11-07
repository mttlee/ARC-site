import {Link} from "react-router-dom";
import arcLogo from "./arc_logo.jpg";

export default function Header() {
    return (
        <header>
          <Link to="/" class="logo">Arise</Link>
          <nav>
            <Link to="/about" class="nav-link">About</Link>
            <Link to="/contactus" class="nav-link">Contact Us</Link>
            <a href="/visit" class="nav-link">Plan a Visit</a>
          </nav>
      </header>
    );
}