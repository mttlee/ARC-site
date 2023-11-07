import Cards from "./Cards";
import background from "./landscape_view.jpg";
import brick from "./brickwall.jpg";
import AnimatedBlock from "./ScrollComponent";
import { Link, animateScroll as scroll, scroller } from 'react-scroll';

export default function Home() {
    
    const scrollToMiddle = () => {
        // Apply a class to disable animations during the scroll
        document.body.classList.add('disable-animations');
    
        // Scroll to the 'middle' section
        scroller.scrollTo('middle', {
          smooth: true,
          duration: 500,
          offset: -50,
        });
    
        // Remove the class after a delay (adjust the delay as needed)
        setTimeout(() => {
          document.body.classList.remove('disable-animations');
        }, 1000);
      };

    return (
        <div className="entry">
              <div className="container">
                <div class="banner0">
                    <div class="centered">Arise Reformed Church</div>
                    <div class ="centered-subtext">Gospel-centered in Everything</div>
                    <nav class="banner-card">
                        <a className="banner-card-link" href="#" onClick={(e) => {
                            e.preventDefault();
                            scrollToMiddle();}}>plan your visit</a>
                    </nav>
                </div>
              </div>
              <Cards/>
              
              {/* <AnimatedBlock animationClass="animate" id="middle" className="container"> */}
              <div id="middle" className="container">
                <div class="banner1">
                    <div class ="centered-subtext">Visit Us</div>
                    <nav class="banner-card">
                        <a class="banner-card-link" href="/visit">Get Started</a>
                    </nav>
                </div>
                
              </div>
              {/* </AnimatedBlock> */}
            
        </div>
    );
}