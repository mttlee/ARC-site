import Header from "./Header";
import {Outlet} from "react-router-dom";

export default function Layout() {
    return (
        <main>
            <Header/>
            <Outlet/>
            <footer>
                <p>Arise Reformed Church<br/><br/>15411 S. Figueroa St.<br/>Gardena, CA 90248</p>
            </footer>
        </main>
    );
}