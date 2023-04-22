import './styles/_collections.scss';
function Collections() {
     return(
          <div className="collections">
               <div className="container collections__container">
                    <div className="guest__room">
                         <div className="guest__room__sofa">
                              <p className="guest-room">GUEST ROOM</p>
                              <p className="sofa">SOFA</p>
                              <div className="discount">
                                   -20%
                              </div>
                         </div>
                    </div>
                    <div className="special__collection">
                         <div className="office__chair">
                              <p className="office-chair"><span>OFFICE</span> CHAIR</p>
                              <p className="office-chair-collection">COLLECTION</p>
                              <p className="office-chair-cost">$200.00</p>
                         </div>
                         <div className="special-collection">
                              <p className="special">
                                   <span>SPECIAL</span> COLLECTION
                              </p>
                              <p className="save">SAVE UP 45% OF FURNITURE</p>
                         </div>
                    </div>
               </div>
          </div>
     ) 
}
export default Collections;
