import Cards from "./Cards";
import background from "./landscape_view.jpg";

export default function Home() {
    return (
        <div className="entry">
              <div className="container">
                <img src={background}/>
                <div class="centered">Arise Reformed Church</div>
                <div class ="centered-subtext">Gospel-centered in Everything</div>
              </div>
              <Cards/>
        </div>
    );
}