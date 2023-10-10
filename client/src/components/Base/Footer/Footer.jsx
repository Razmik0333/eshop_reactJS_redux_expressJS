import { useDispatch, useSelector } from "react-redux";
import {root} from "../../../helpers/constants/constants";
import { currentLanguageDataSelector, getUserId } from "../../../helpers/reduxSelectors";

import './styles/_footer.scss';
import { NavLink, useNavigate } from "react-router-dom";
import { currentUser, getUserData } from "../../../redux/ducks/userDuck";
import { changeOrdersFromLogout } from "../../../redux/ducks/orderDuck";
function Footer() {
     const dispatch = useDispatch();
     const navigate = useNavigate();
     const footerLangData = useSelector(currentLanguageDataSelector)?.footer;
     console.log("🚀 ~ file: Footer.jsx:8 ~ Footer ~ footerLangData:", footerLangData)
     const userId = useSelector(getUserId);
     const changeLogout = (e) => {        

          dispatch(currentUser(null))
          dispatch(getUserData(null))
          dispatch(changeOrdersFromLogout());
         // dispatch(fetchAddWishList(null, 20))
          navigate('/home')
    }
     return(
          <footer>
               <div className="container footer__container">
                    <div className="footer__top">
                         <div className="footer__row">
                              <ul className="footer__row__categories">
                                   <li className="footer__row__category"> {footerLangData?.information?.info}</li>
                                   <li className="footer__row__category"><NavLink to={'/about'}>{footerLangData?.information?.about}</NavLink></li>
                                   <li className="footer__row__category"><NavLink to={'/privacy'}>{footerLangData?.information?.privacy}</NavLink></li>
                                   <li className="footer__row__category"><NavLink to={'/payment'}>{footerLangData?.information?.payment}</NavLink></li>
                                   <li className="footer__row__category"><NavLink to={'/online'}>{footerLangData?.information?.online}</NavLink></li>
                              </ul>
                         </div>
                         <div className="footer__row">
                              <ul className="footer__row__categories">
                                   <li className="footer__row__category">{footerLangData?.my_account?.site}</li>
                                   <li className="footer__row__category">
                                        {
                                             userId ? <NavLink to={'/'} onClick={changeLogout}>{footerLangData?.my_account?.logout}</NavLink> 
                                             : <NavLink to={'/login'}>{footerLangData?.my_account?.login}</NavLink>
                                        }
                                   </li>
                                   <li className="footer__row__category"><NavLink to={'/cart'}>{footerLangData?.my_account?.cart}</NavLink></li>
                                   <li className="footer__row__category"><NavLink to={'/wishlist'}>{footerLangData?.my_account?.wishlist}</NavLink></li>
                                   <li className="footer__row__category"><NavLink to={'/checkout'}>{footerLangData?.my_account?.checkout}</NavLink></li>
                              </ul>
                         </div>
                         <div className="footer__row">
                              <ul className="footer__row__categories">
                                   <li className="footer__row__category">{footerLangData?.services?.all}</li>
                                   <li className="footer__row__category"><NavLink to={'/laser'}>{footerLangData?.services?.laser}</NavLink></li>
                                   <li className="footer__row__category"><NavLink to={'/plotter'}>{footerLangData?.services?.plotter}</NavLink></li>
                                   <li className="footer__row__category"><NavLink to={'/print'}>{footerLangData?.services?.print}</NavLink></li>
                                   <li className="footer__row__category"><NavLink to={'/brosh'}>{footerLangData?.services?.brosh}</NavLink></li>
                              </ul>
                         </div>
                         <div className="footer__row">
                              <ul className="footer__row__categories">
                                   <li className="footer__row__category">{footerLangData?.orders?.all}</li>
                                   <li className="footer__row__category">{footerLangData?.orders?.payment_methods}</li>
                                   <li className="footer__row__category">{footerLangData?.orders?.shipping}</li>
                                   <li className="footer__row__category">{footerLangData?.orders?.product_return}</li>
                                   <li className="footer__row__category">{footerLangData?.orders?.money_return}</li>
                                   <li className="footer__row__credit__cards">
                                        <img src={`${root}/icons/other/visa.png`} alt="" />
                                        <img src={`${root}/icons/other/master_card.png`} alt="" />
                                        <img src={`${root}/icons/other/Discover_Network.png`} alt="" />
                                        <img src={`${root}/icons/other/american_express.png`} alt="" />
                                        <img src={`${root}/icons/other//paypal.png`} alt="" />
                                        
                                   </li>
                              </ul>
                         </div>
                    </div>
                    <div className="footer__bottom">
                         <div className="footer__bottom__rows"></div>
                         <div className="footer__bottom__rows">
                              <div className="copyright">
                                   {
                                        `@${footerLangData?.down?.copyright} ${new Date(Date.now()).getFullYear()} Bazar | ${footerLangData?.down?.rights}`
                                   }
                              </div>
                         </div>
                         <div className="footer__bottom__rows">
                              <ul className="footer__bottom__icons">
                                   <li className="footer__bottom__icon">
                                        <NavLink to={"#"}>
                                             <svg className="footer__bottom__icon__item"  id="twiter" version="1.1" viewBox="0 0 211.4051 175.0664" >
                                                  <path d="M209.6471,20.4551c-1.416-0.959-3.291-0.9102-4.6582,0.123c-1.7949,1.3613-4.7168,2.4414-7.8613,3.2734  c8.1895-9.1758,8.3652-15.3027,8.2773-16.7129c-0.0918-1.4551-0.9688-2.7461-2.2891-3.3672  c-1.3242-0.625-2.875-0.4727-4.0547,0.3828c-9.2109,6.6953-18.3867,8.1094-23.8438,8.252C166.8424,4.3926,155.9635,0,144.3893,0  C119.6061,0,99.444,20.4316,99.444,45.5449c0,2.1582,0.1504,4.3164,0.4512,6.4512C56.944,51.5098,22.0651,10.3555,21.7057,9.9258  c-0.8379-1.002-2.1133-1.5371-3.416-1.4219c-1.3027,0.1133-2.4688,0.8535-3.1211,1.9863  c-12.3613,21.4434-4.0898,40.2773,3.4707,51.0605c-1.3379-0.7129-2.4219-1.416-3.0684-1.8926  c-1.2012-0.8945-2.8047-1.043-4.1543-0.3809c-1.3477,0.6641-2.209,2.0234-2.2344,3.5254  c-0.334,20.4316,9.502,32.1367,18.748,38.6074c-1.2324-0.1172-2.4844,0.3418-3.3398,1.2715  c-0.9609,1.0449-1.2988,2.5195-0.8848,3.877c6.3867,20.9082,22.0723,28.0117,32.0527,30.4219  c-20.5215,15.9746-50.7188,10.834-51.0527,10.7754c-1.8223-0.3223-3.625,0.6367-4.3672,2.3281  c-0.7422,1.6895-0.2344,3.6699,1.2344,4.7891c21.6602,16.5312,47.5664,20.1934,66.2812,20.1934  c14.1543-0.002,24.1992-2.0977,25.1602-2.3066c94.791-22.4629,97.459-109.291,97.2422-123.5215  c17.7949-16.5488,20.5762-22.8516,21.0059-24.4102C211.7154,23.1738,211.067,21.416,209.6471,20.4551z" />
                                             </svg>
                                        </NavLink>
                                   </li>
                                   <li className="footer__bottom__icon">
                                        <NavLink to={"#"}>
                                             <svg className="footer__bottom__icon__item" height="512px" id="Layer_1" version="1.1" viewBox="0 0 512 512" width="512px" >
                                                  <path d="M288,192v-38.1c0-17.2,3.8-25.9,30.5-25.9H352V64h-55.9c-68.5,0-91.1,31.4-91.1,85.3V192h-45v64h45v192h83V256h56.4l7.6-64  H288z"/>
                                             </svg>
                                        </NavLink>
                                   </li>
                                   <li className="footer__bottom__icon">
                                        <NavLink to={"#"}>
                                             <svg className="footer__bottom__icon__item"  height="56.693px" id="Layer_1" version="1.1" viewBox="0 0 56.693 56.693" width="56.693px" >
                                                  <g >
                                                       <path  d="M43.911,28.21H12.782c-4.948,0-8.959,4.015-8.959,8.962v7.201c0,4.947,4.011,8.961,8.959,8.961h31.129   c4.947,0,8.959-4.014,8.959-8.961v-7.201C52.87,32.225,48.858,28.21,43.911,28.21z M19.322,33.816h-2.894v14.38h-2.796v-14.38   H10.74V31.37h8.582V33.816z M27.497,48.196h-2.48v-1.36c-0.461,0.503-0.936,0.887-1.432,1.146c-0.496,0.27-0.975,0.396-1.441,0.396   c-0.576,0-1.004-0.183-1.297-0.555c-0.288-0.371-0.435-0.921-0.435-1.664V35.782h2.48v9.523c0,0.294,0.055,0.505,0.154,0.636   c0.107,0.135,0.277,0.197,0.51,0.197c0.18,0,0.412-0.086,0.691-0.26c0.281-0.176,0.537-0.396,0.77-0.668v-9.429h2.48V48.196z    M36.501,45.633c0,0.877-0.195,1.551-0.584,2.021c-0.387,0.47-0.953,0.701-1.686,0.701c-0.488,0-0.922-0.088-1.299-0.27   c-0.379-0.18-0.736-0.457-1.061-0.841v0.951h-2.51V31.37h2.51v5.419c0.336-0.375,0.691-0.666,1.062-0.861   c0.379-0.199,0.76-0.295,1.146-0.295c0.785,0,1.383,0.262,1.797,0.791c0.416,0.529,0.623,1.304,0.623,2.32V45.633z M45.104,42.288   h-4.746v2.339c0,0.652,0.08,1.106,0.242,1.359c0.166,0.254,0.445,0.378,0.842,0.378c0.412,0,0.697-0.107,0.863-0.321   c0.16-0.216,0.246-0.686,0.246-1.416v-0.565h2.553v0.637c0,1.272-0.309,2.231-0.936,2.878c-0.617,0.641-1.547,0.959-2.783,0.959   c-1.113,0-1.99-0.339-2.627-1.021c-0.635-0.678-0.959-1.619-0.959-2.815v-5.576c0-1.073,0.354-1.956,1.057-2.633   c0.701-0.677,1.604-1.015,2.715-1.015c1.137,0,2.01,0.313,2.619,0.941c0.609,0.629,0.914,1.529,0.914,2.706V42.288z"/>
                                                       <path  d="M41.466,37.646c-0.396,0-0.678,0.111-0.85,0.343c-0.176,0.218-0.258,0.591-0.258,1.112v1.255h2.193v-1.255   c0-0.521-0.088-0.895-0.262-1.112C42.122,37.758,41.843,37.646,41.466,37.646z"/>
                                                       <path  d="M32.909,37.604c-0.176,0-0.354,0.039-0.525,0.12c-0.174,0.079-0.344,0.21-0.512,0.38v7.733   c0.199,0.2,0.396,0.354,0.588,0.442c0.191,0.085,0.389,0.133,0.6,0.133c0.305,0,0.527-0.088,0.67-0.266   c0.141-0.176,0.213-0.457,0.213-0.854v-6.411c0-0.422-0.084-0.738-0.26-0.955C33.501,37.712,33.243,37.604,32.909,37.604z"/>
                                                       <polygon  points="16.858,23.898 20.002,23.898 20.002,16.208 23.663,5.36 20.467,5.36 18.521,12.77 18.323,12.77 16.28,5.36    13.113,5.36 16.858,16.554  "/>
                                                       <path  d="M27.923,24.243c1.27,0,2.266-0.333,2.992-0.999c0.721-0.669,1.082-1.582,1.082-2.752v-7.064   c0-1.041-0.369-1.898-1.104-2.559c-0.74-0.659-1.688-0.991-2.844-0.991c-1.27,0-2.281,0.314-3.033,0.941   c-0.75,0.627-1.127,1.468-1.127,2.531v7.088c0,1.163,0.367,2.083,1.1,2.773C25.722,23.898,26.702,24.243,27.923,24.243z    M26.765,13.246c0-0.297,0.107-0.537,0.316-0.725c0.217-0.184,0.492-0.273,0.834-0.273c0.369,0,0.668,0.089,0.896,0.273   c0.227,0.188,0.34,0.428,0.34,0.725v7.451c0,0.365-0.111,0.655-0.336,0.864c-0.223,0.21-0.523,0.313-0.9,0.313   c-0.369,0-0.654-0.1-0.854-0.31c-0.197-0.205-0.297-0.493-0.297-0.868V13.246z"/>
                                                       <path  d="M36.214,24.098c0.525,0,1.064-0.15,1.619-0.438c0.561-0.292,1.098-0.719,1.609-1.276v1.515h2.793V10.224h-2.793v10.38   c-0.26,0.297-0.549,0.541-0.859,0.735c-0.316,0.192-0.576,0.288-0.781,0.288c-0.262,0-0.455-0.072-0.568-0.221   c-0.115-0.143-0.18-0.377-0.18-0.698V10.224h-2.789v11.429c0,0.815,0.164,1.424,0.488,1.828   C35.083,23.891,35.565,24.098,36.214,24.098z"/>
                                                  </g>
                                             </svg>
                                        </NavLink>
                                   </li>
                                   <li className="footer__bottom__icon">
                                        <NavLink to={"#"}>
                                             <svg className="footer__bottom__icon__item" height="56.6934px" id="Layer_1" version="1.1" viewBox="0 0 56.6934 56.6934" width="56.6934px" >
                                                  <g >
                                                       <path d="M19.6671,25.7867c-0.0075,1.7935,0,3.5869,0.0076,5.3803c3.0067,0.098,6.0208,0.0527,9.0275,0.098   c-1.3262,6.6689-10.3989,8.8315-15.199,4.4761C8.5674,31.9206,8.801,23.5412,13.9327,19.992   c3.5869-2.8635,8.6884-2.1552,12.2752,0.324c1.4092-1.3036,2.7278-2.6977,4.0013-4.1445   c-2.984-2.3812-6.6462-4.0767-10.5421-3.8958c-8.1307-0.2713-15.6059,6.8497-15.7415,14.9805   c-0.52,6.6462,3.8506,13.1644,10.0222,15.5155c6.1489,2.3661,14.031,0.7535,17.957-4.77c2.5922-3.4889,3.1498-7.98,2.8484-12.1999   C29.7194,25.7641,24.6933,25.7716,19.6671,25.7867z"/>
                                                       <path d="M49.0704,25.7641c-0.0151-1.4996-0.0226-3.0067-0.0301-4.5062c-1.4996,0-2.9916,0-4.4836,0   c-0.0151,1.4996-0.0301,2.9991-0.0377,4.5062c-1.5071,0.0075-3.0067,0.0151-4.5062,0.0302c0,1.4995,0,2.9915,0,4.4836   c1.4995,0.0151,3.0066,0.0302,4.5062,0.0452c0.0151,1.4996,0.0151,2.9991,0.0302,4.4987c1.4996,0,2.9916,0,4.4911,0   c0.0075-1.4996,0.015-2.9991,0.0301-4.5062c1.5071-0.0151,3.0067-0.0226,4.5062-0.0377c0-1.4921,0-2.9916,0-4.4836   C52.0771,25.7792,50.57,25.7792,49.0704,25.7641z"/>
                                                  </g>
                                             </svg>
                                        </NavLink>
                                   </li>
                                   <li className="footer__bottom__icon">
                                        <NavLink to={"#"}>
                                             <svg className="footer__bottom__icon__item" version="1.1" viewBox="0 0 100 100" >
                                                  <g id="Layer_3"/>
                                                  <g id="Layer_1">
                                                       <path d="M66.8,75.4v-22c0,0-1.2-4.6-5.6-4.4c-4.4,0.2-5.8,0.9-7.8,3.3v23.1H42.1V40.5h11.2v5.1c0,0,3.6-7.1,11.2-6.6   c6.9,0.5,12.1,4.7,13.2,13.9H78v22.5H66.8z M28.7,36c-3.7,0-6.7-3-6.7-6.8c0-3.7,3-6.8,6.7-6.8s6.7,3,6.7,6.8   C35.4,32.9,32.4,36,28.7,36z M34.3,75.4H23.1V40.5h11.2V75.4z" id="linkedin"/>
                                                  </g>
                                             </svg>
                                        </NavLink>
                                   </li>
                                   <li className="footer__bottom__icon">
                                        <NavLink to={"#"}>
                                             <svg className="footer__bottom__icon" height="56.693px" id="Layer_1" version="1.1" viewBox="0 0 56.693 56.693" width="56.693px" >
                                                  <path d="M30.374,4.622c-13.586,0-20.437,9.74-20.437,17.864c0,4.918,1.862,9.293,5.855,10.922c0.655,0.27,1.242,0.01,1.432-0.715  c0.132-0.5,0.445-1.766,0.584-2.295c0.191-0.717,0.117-0.967-0.412-1.594c-1.151-1.357-1.888-3.115-1.888-5.607  c0-7.226,5.407-13.695,14.079-13.695c7.679,0,11.898,4.692,11.898,10.957c0,8.246-3.649,15.205-9.065,15.205  c-2.992,0-5.23-2.473-4.514-5.508c0.859-3.623,2.524-7.531,2.524-10.148c0-2.34-1.257-4.292-3.856-4.292  c-3.058,0-5.515,3.164-5.515,7.401c0,2.699,0.912,4.525,0.912,4.525s-3.129,13.26-3.678,15.582  c-1.092,4.625-0.164,10.293-0.085,10.865c0.046,0.34,0.482,0.422,0.68,0.166c0.281-0.369,3.925-4.865,5.162-9.359  c0.351-1.271,2.011-7.859,2.011-7.859c0.994,1.896,3.898,3.562,6.986,3.562c9.191,0,15.428-8.379,15.428-19.595  C48.476,12.521,41.292,4.622,30.374,4.622z"/>
                                             </svg>
                                        </NavLink>
                                   </li>
                              </ul>
                         </div>
                    </div>

               </div>
          </footer>
     )
}

export default Footer;
