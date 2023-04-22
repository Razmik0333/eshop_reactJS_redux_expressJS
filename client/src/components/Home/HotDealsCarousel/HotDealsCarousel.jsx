
import Carousel from "./Carousel/Carousel";
import HotDeals from "./HotDeals/HotDeals";

function HotDealsCarousel() {
     return (
          <div className="hot__deals__carousel">
               <div className="container hot__deals__container">
                    <HotDeals />
                    <Carousel />
               </div>
          </div>
     )
}

export default HotDealsCarousel;
