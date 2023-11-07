import Header from "./Header";
import {Outlet} from "react-router-dom";
import insta from './instagram_gray.png';
import facebook from './facebook_gray.png';

export default function Layout() {
    return (
        <main>
            <Header/>
            <Outlet/>
            <footer>
                <p>Arise Reformed Church<br/><br/>15411 S. Figueroa St.<br/>Gardena, CA 90248</p>

                <p>Service Times<br/><br/>9:30am - servants' service<br/>11:00am - main service</p>
                <nav>
                    <a href="https://www.instagram.com/arisereformedchurch/" class = "inline-block" target = "_blank">
                        <img src={insta} width="50" height="50"/>
                    </a>

                    <a href="https://www.facebook.com/arisereformedchurch/" class="inline-block" target = "_blank">
                        <img src={facebook} width="48" height="40"/>
                    </a>
                </nav>
            </footer>
        </main>
    );
}