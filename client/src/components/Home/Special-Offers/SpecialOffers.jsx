import MostestProducts from "./MostestProducts/MostestProducts";
import SpecialOffer from "./SpecialOffer/SpecialOffer";
import './styles/_special-offers.scss';
function SpecialOffers() {
     return (
          <div className="special__offers">
               <div className="container special__offers__container">
                    <MostestProducts />
                    <SpecialOffer />

               </div>
          </div>
     )
}

export default SpecialOffers;
