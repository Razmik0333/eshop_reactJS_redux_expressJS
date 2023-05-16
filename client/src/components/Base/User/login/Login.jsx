import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import {  checkCapitalLetter,
          checkEmail,
          checkPassword,
          checkStrLength,
          checkStrWithNumber
     } from "../../../../helpers/functions/formFunctions";
import { currentUser, getUserData } from "../../../../redux/ducks/userDuck";
import { root } from "../../../../helpers/constants/constants";
import { currentLanguageDataSelector } from "../../../../helpers/reduxSelectors";

function Login() {
     const [userEmail, setUserEmail] = useState('');
     const [userPassword, setUserPassword] = useState('');
     const [emailLoginExist, setEmailLoginExist] = useState(true);
     const dispatch = useDispatch();
     const loginUser = useSelector(currentLanguageDataSelector)?.login;

     const formRef = useRef(null);
     const navigate = useNavigate();
     const handleSubmit = async (e) => {
          e.preventDefault();
          const data = new FormData(formRef.current);
         
          await fetch(`${root}/api/login`, {
               method: 'POST',
               body: new URLSearchParams(data),     
          })
          .then(res => res.json())
          .then(res => {
               console.log(res);
               if (res) {
                    setEmailLoginExist(true);
                    dispatch(currentUser(res));
                    dispatch(getUserData(res));
                //    dispatch(fetchCurrentWishList(res))

                   navigate('/home')
               }else{
                   
                    setEmailLoginExist(false);
               }
               
          })

     }
     const changeUserEmail = e => setUserEmail(e.target.value);
     const changeUserPassword = e => setUserPassword(e.target.value);
     return (
          <form className="register__block container" onSubmit={handleSubmit} ref={formRef}>
               <h3>{loginUser?.login}</h3>
               <div className="user__info">
                    <div className="block__item email__block">
                         <p className="name__block__header">{loginUser?.your_email}</p>

                         <input
                              className="register__input__item"
                              type="email"
                              name="email"
                              id="email"
                              placeholder={`${loginUser?.email}*`}
                              autoComplete="off"
                             // value={userEmail}
                              defaultValue="razmik0333@fril.ru"
                              onChange={changeUserEmail}
                         />
                         <span className="output">
                              {
                                   checkEmail(userEmail) ? '' : `${loginUser?.inc_email}`
                              }
                              {
                                   emailLoginExist ? '' : `${loginUser?.email_not_exist}`
                              }
                         </span>
                    </div>
                    <div className="block__item password__block">
                         <input
                              className="register__input__item"
                              type="password"
                              name="password"
                              id="password"
                              placeholder={`${loginUser?.your_pass}*`}
                              autoComplete="off"
                              //value={userPassword}
                              defaultValue="Razojan0333"
                              onChange={changeUserPassword}
                         />
                         <span className="output">
                              {
                                   
                                   checkPassword(userPassword) ? '' : `${loginUser?.inc_pass}`
                              }
                         </span>
                    </div>
                    <p>Առաջին անգամ եք կայքու՞մ  <NavLink to={'/register'}>Գրանցում</NavLink></p>
                    <button
                    className="continue"
                         type="submit"
                    >{loginUser?.continue}</button>
               </div>
          </form>
     )
}

export default Login;
