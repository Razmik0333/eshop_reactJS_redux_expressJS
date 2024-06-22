
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { currenciesSelector, currentLanguageDataSelector, getCurrentCurrencySelector, getCurrentLanguageSelector, getUserDataSelector, getUserId, languagesSelector } from '../../../helpers/reduxSelectors';
import { changeCurrencies, changeCurrency, changeLanguage, changeLanguages, fetchLanguageData } from '../../../redux/ducks/configsDuck';
import MenuBurger from './MenuBurger/MenuBurger';
import './styles/_header.scss';
import { fetchCurrentCart } from '../../../redux/ducks/cartDuck';
import { fetchWishList } from '../../../redux/ducks/wishListDuck';

function Header() {
     const dispatch = useDispatch();
     const userId = useSelector(getUserId);
     const userData = useSelector(getUserDataSelector);
     const currentCurrency = useSelector(getCurrentCurrencySelector);
     const currentLanguage = useSelector(getCurrentLanguageSelector);
     const languages = useSelector(languagesSelector);
     const currencies = useSelector(currenciesSelector);
     const headerLangData = useSelector(currentLanguageDataSelector)?.header;
     const [currentLanguageObj] = languages?.filter(lang => lang?.code === currentLanguage);
     
     useEffect(() => {
          dispatch(changeLanguages());
          dispatch(changeCurrencies());
          dispatch(fetchLanguageData(currentLanguage));
     }, []);
     useEffect(() => {
          dispatch(fetchCurrentCart(userId))
          dispatch(fetchWishList(userId))     
     }, [userId]);

     const changeCurrentCurrency = (e) => {
          dispatch(changeCurrency(e.target.dataset.currency))
     }
     const changeCurrentLanguage = (e) => {
          document.cookie = `lang=${e.target.dataset.lang}`;
          dispatch(fetchLanguageData(e.target.dataset.lang));
          dispatch(changeLanguage(e.target.dataset.lang))
     }
     return (
          <header>
               <div className="container header__container">
                    <ul className="settings">
                        <li className="settings__currency">
                              <span className="setting__currency">{currentCurrency}</span>
                         
                              <ul className="settings__currency__item">
                                   
                                   {
                                        currencies
                                             ?.filter((item) => item?.code !== currentCurrency)
                                             ?.map((item,ind) => {

                                             return <li className="setting__currency"
                                                  data-currency={item?.code}
                                                  onClick={changeCurrentCurrency}
                                                  key={`curr_${ind}`}
                                             >
                                                  {item?.code}
                                             </li>
                                        })
                                   }
                                   
                              </ul>
                        </li>
                        <li className="settings__currency settings__currency__lang">
                               <span className="setting__currency">{currentLanguageObj?.title}</span> 
                         
                              <ul className="settings__currency__item">
                                   {
                                        languages
                                             ?.filter(item => item?.code !== currentLanguage)
                                             ?.map((item,ind) => {
                                                  return <li className="setting__currency"
                                                       data-lang={item?.code}
                                                       onClick={changeCurrentLanguage}
                                                       key={`lang_${ind}`}
                                                  >
                                                  {item?.title}
                                                  </li>
                                        })
                                   }
                              </ul>
                        </li>

                        <li className="settings__about">
                              <span>

                              <NavLink to={"/about"} className="setting__currency">
                              {headerLangData?.menu_burger?.about}</NavLink>
                              </span>

                         </li>
                          {/* <li>
                              <ul className="settings__item">
                                   <li className="setting">English</li>
                              </ul>
                         </li>
                         <li>
                              <ul className="settings__item">
                                   <li className="setting">Help</li>
                              </ul>
                         </li>  */}
                    </ul>
                    <div className="login__register">
                         <div className="login__register__item login">
                              <div className="register__icon"></div>
                                   {
                                        !userId &&
                                        <>
                                             <NavLink to={"/login"} className="register-link">{headerLangData?.menu_burger?.login}</NavLink>
                                        </>
                                   
                                   }
                                   

                              
                         </div>
                         <div className="login__register__item register">

                              {
                                   userId ? 
                                   <div className="register-hello">{`${headerLangData?.hello} ${userData?.name}`}</div>
                                   : <NavLink to={"/register"} className="register-link">{headerLangData?.menu_burger?.signup}</NavLink>
                              }  
                         </div>
                         <MenuBurger />
                    </div>
               </div>
          </header>
     )
}

export default Header;
