import { root } from '../../../helpers/constants/constants';
import './styles/_collections.scss';
function Collections() {
     return(
          <div className="collections ">

               <div className="container collections__container">
                    <div className="collections-header">
                         <p className="collections__header">ՊԱՏՎԵՐՈՎ ՎԱՃԱՌՔ</p>
                         <div className="collections__line__circles">
                         <div className="collections__line">

                         </div>
                         <div className="circles">
                              <div className={`circle active`}></div>
                              <div className={`circle`}></div>
                              <div className={`circle`}></div>
                         </div>

                    </div>
               </div>
                    <div className="collections__content">
                         <div className="guest__room">
                              <div className="guest__room__sofa">
                                   <p className="guest-room">ՄԵԾԱՔԱՆԱԿ ՎԱՃԱՌՔ</p>
                                   <p className="sofa">ԲՌՈՇՆԵՐ</p>
                                   <div className="discount">
                                        -20%
                                   </div>
                              </div>
                                   <img src={`${root}/images/wholesale/1.jpg`} alt="" />
                         </div>
                         <div className="guest__room">
                              <div className="guest__room__sofa">
                                   <p className="guest-room">ՀԱՎԱՔԱԾՈՒՆԵՐ</p>
                                   <p className="sofa"></p>
                                   <div className="discount">
                                        -10%
                                   </div>
                              </div>
                                   <img src={`${root}/images/wholesale/2.jpg`} alt="" />
                         </div>

                    </div>
                    {/* <div className="special__collection">
                         <div className="special__collection__office">
                              <div className="office__chair">
                                   <p className="office-chair"><span>OFFICE</span> CHAIR</p>
                                   <p className="office-chair-collection">COLLECTION</p>
                                   <p className="office-chair-cost">$200.00</p>


                              </div>
                                   <img src={`${root}/images/wholesale/4.jpg`} alt="" />

                         </div>
                         <div className="special__collection__office">
                              <div className="special-collection">
                                   <p className="special">
                                        <span>SPECIAL</span> COLLECTION
                                   </p>
                                   <p className="save">SAVE UP 45% OF FURNITURE</p>

                              </div>
                                   <img src={`${root}/images/wholesale/4.jpg`} alt="" />

                         </div>
                    </div> */}
               </div>
          </div>
     ) 
}
export default Collections;
