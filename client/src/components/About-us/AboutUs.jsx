import React from 'react'
import { root } from '../../helpers/constants/constants'
import './styles/_about-us.scss'
import { NavLink } from 'react-router-dom'
export default function AboutUs() {

  return <>
               <div className="container about-us-container">
                    <h2 className="about-us-header">
                         ՄԵՐ ՄԱՍԻՆ
                    </h2>
                    <div className="about-us-services">
                         <div className="about-us-service-item">

                              <div className="about-us-service-item-header" id="laser">
                                   Լազերային Փորագրություն
                              </div>
                              <div className="about-us-service-item-content" >
                                   <div className="about-us-service-item-content-desc">
                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae accusamus magni rem repellat? Itaque aliquam labore eum tenetur, autem, ab accusamus provident, quasi veniam ipsam inventore vitae cum molestiae incidunt.
                                        Animi minima quod nobis laborum, consequatur possimus aperiam perspiciatis totam eius id vel cum sapiente non accusantium tempora. Vitae consequuntur culpa earum cumque illum ducimus repellendus reiciendis quasi voluptatum porro.
                                        Maiores praesentium esse, numquam ad quo ipsam tempora natus ducimus ea quam a, assumenda aliquid laborum? Provident modi, excepturi quibusdam aut quod, labore adipisci quo enim reprehenderit animi totam ullam?
                                        Fugit, ipsa cupiditate quia saepe eveniet sapiente harum eius natus modi unde sunt itaque illum quam qui tenetur repudiandae eligendi ipsum sed atque debitis dicta nam odio. Incidunt, soluta? Mollitia.
                                        Velit fugit quia id quae laborum fugiat amet aut, a pariatur rem minus adipisci voluptas obcaecati corporis maiores quam ratione sequi error nostrum vitae. Perferendis harum autem voluptas mollitia sint?
                                   </div>
                                   <div className="about-us-service-item-content-picture">
                                        <img src={`${root}/images/services/Laser-1.jpg`} alt="" />
                                   </div>
                              </div>
                         </div>
                         <div className="about-us-service-item" >
                                   <div className="about-us-service-item-header" id="tshirt">
                                        Շապիկների Տպագրություն
                                   </div>

                              <div className="about-us-service-item-content">
                                   <div className="about-us-service-item-content-desc">
                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae accusamus magni rem repellat? Itaque aliquam labore eum tenetur, autem, ab accusamus provident, quasi veniam ipsam inventore vitae cum molestiae incidunt.
                                        Animi minima quod nobis laborum, consequatur possimus aperiam perspiciatis totam eius id vel cum sapiente non accusantium tempora. Vitae consequuntur culpa earum cumque illum ducimus repellendus reiciendis quasi voluptatum porro.
                                        Maiores praesentium esse, numquam ad quo ipsam tempora natus ducimus ea quam a, assumenda aliquid laborum? Provident modi, excepturi quibusdam aut quod, labore adipisci quo enim reprehenderit animi totam ullam?
                                        Fugit, ipsa cupiditate quia saepe eveniet sapiente harum eius natus modi unde sunt itaque illum quam qui tenetur repudiandae eligendi ipsum sed atque debitis dicta nam odio. Incidunt, soluta? Mollitia.
                                        Velit fugit quia id quae laborum fugiat amet aut, a pariatur rem minus adipisci voluptas obcaecati corporis maiores quam ratione sequi error nostrum vitae. Perferendis harum autem voluptas mollitia sint?
                                   </div>
                                   <div className="about-us-service-item-content-picture">
                                        <img src={`${root}/images/services/mike-2.jpg`} alt="" />
                                   </div>
                              </div>
                         </div>
                         <div className="about-us-service-item" >
                              <div className="about-us-service-item-header" id="ploter">
                                   Պլոտերային Աշխատանքներ
                              </div>
                              <div className="about-us-service-item-content">
                                   <div className="about-us-service-item-content-desc">
                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae accusamus magni rem repellat? Itaque aliquam labore eum tenetur, autem, ab accusamus provident, quasi veniam ipsam inventore vitae cum molestiae incidunt.
                                        Animi minima quod nobis laborum, consequatur possimus aperiam perspiciatis totam eius id vel cum sapiente non accusantium tempora. Vitae consequuntur culpa earum cumque illum ducimus repellendus reiciendis quasi voluptatum porro.
                                        Maiores praesentium esse, numquam ad quo ipsam tempora natus ducimus ea quam a, assumenda aliquid laborum? Provident modi, excepturi quibusdam aut quod, labore adipisci quo enim reprehenderit animi totam ullam?
                                        Fugit, ipsa cupiditate quia saepe eveniet sapiente harum eius natus modi unde sunt itaque illum quam qui tenetur repudiandae eligendi ipsum sed atque debitis dicta nam odio. Incidunt, soluta? Mollitia.
                                        Velit fugit quia id quae laborum fugiat amet aut, a pariatur rem minus adipisci voluptas obcaecati corporis maiores quam ratione sequi error nostrum vitae. Perferendis harum autem voluptas mollitia sint?

                                   </div>
                                   <div className="about-us-service-item-content-picture">
                                        <img src={`${root}/images/services/ploter-3.jpg`} alt="" />
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </>
  
}
