import FurnitureGallery from "./FurnitureGallery/FurnitureGallery";
import SpecialOffer from "./SpecialOffer/SpecialOffer";
import './styles/_special-offers.scss';
function SpecialOffers() {
     return (
          <div className="special__offers">
               <div className="container special__offers__container">
                    <FurnitureGallery />
                    <SpecialOffer />

               </div>
          </div>
     )
}

export default SpecialOffers;
