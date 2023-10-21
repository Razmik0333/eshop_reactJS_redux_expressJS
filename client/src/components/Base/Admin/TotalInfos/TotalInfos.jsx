import { useSelector } from 'react-redux';
import { getTotalPrice } from '../../../../helpers/functions/functions';
import { adminOrderSelector, adminUserListSelector, currentLanguageDataSelector } from '../../../../helpers/reduxSelectors';



import '../admin/styles/_total-infos.scss'

function TotalInfos() {

     const adminMenuLangData = useSelector(currentLanguageDataSelector)?.admin?.total_infos;

     const ordersList = useSelector(adminOrderSelector);

     const userList = useSelector(adminUserListSelector)
     return (
          <div className="total__infos">
                         <div className="total__info">
                              <span className="total__count">
                                   {ordersList.length} 
                                   <span className="progress">
                                        <svg height="128px"
                                             id="Layer_1"
                                             version="1.1" 
                                             viewBox="0 0 128 128" 
                                             width="128px" >
                                             <g>
                                                  <g>
                                                       <path d="M64.032,13.869c-27.642,0-50.129,22.489-50.129,50.131c0.002,27.643,22.49,50.131,50.131,50.131    c27.64,0,50.126-22.488,50.126-50.131C114.16,36.358,91.673,13.869,64.032,13.869z M64.034,110.131    C38.6,110.131,17.905,89.438,17.903,64c0-25.437,20.693-46.131,46.129-46.131c25.435,0,46.128,20.694,46.128,46.131    C110.16,89.438,89.468,110.131,64.034,110.131z M78.539,68.918L66.034,79.694V43.942c0-1.104-0.896-2-2-2s-2,0.896-2,2v35.752    L49.527,68.918c-0.837-0.721-2.101-0.627-2.821,0.21s-0.627,2.101,0.21,2.821l17.118,14.748L81.15,71.949    c0.837-0.722,0.931-1.984,0.209-2.821C80.639,68.291,79.376,68.197,78.539,68.918z"/>
                                                  </g>
                                             </g>
                                        </svg>
                                   </span>
                              </span>
                              <span className="total__text">
                              {adminMenuLangData?.order_received}
                              </span>
                         </div>
                         <div className="total__info">
                              <span className="total__count">
                              {
                                   `${getTotalPrice(ordersList)}Դ`
                              }
                                   <span className="progress">
                                        <svg id="Layer_1" version="1.1" viewBox="0 0 512 512">
                                             <path 
                                             d="M341.8,50.9c113.3,47.7,166.5,178.3,118.7,291.6S282.2,508.9,168.9,461.2S2.5,282.9,50.3,169.6  C85,87.1,165.9,33.4,255.4,33.4C285.1,33.4,314.5,39.3,341.8,50.9z M63.4,255.4c0,106,86,192,192,192s192-86,192-192  s-86-192-192-192S63.4,149.4,63.4,255.4z M370.7,227.4L255.4,112.1L140.1,227.4l21.2,21.2l79.1-79.2v208.2h30V169.4l79.1,79.1  L370.7,227.4z"/>
                                        </svg>
                                   </span>
                              </span>
                              <span className="total__text">
                              {adminMenuLangData?.total_charges}

                              </span>
                         </div>
                         <div className="total__info">
                              <span className="total__count">
                                   {
                                        userList.length
                                   }
                                   <span className="progress">
                                        <svg id="Layer_1" version="1.1" viewBox="0 0 512 512">
                                             <path 
                                             d="M341.8,50.9c113.3,47.7,166.5,178.3,118.7,291.6S282.2,508.9,168.9,461.2S2.5,282.9,50.3,169.6  C85,87.1,165.9,33.4,255.4,33.4C285.1,33.4,314.5,39.3,341.8,50.9z M63.4,255.4c0,106,86,192,192,192s192-86,192-192  s-86-192-192-192S63.4,149.4,63.4,255.4z M370.7,227.4L255.4,112.1L140.1,227.4l21.2,21.2l79.1-79.2v208.2h30V169.4l79.1,79.1  L370.7,227.4z"/>
                                        </svg>
                                   </span>
                              </span>
                              <span className="total__text">
                              {adminMenuLangData?.total_users}
                              </span>
                         </div>
                    </div>
     )
}

export default TotalInfos
