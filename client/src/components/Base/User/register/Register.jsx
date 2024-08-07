import { useRef, useState } from 'react';
import { NavLink, useNavigate } from "react-router-dom"
import { checkEmail,
          checkStrLength,
          checkConfirmPassword,
          checkPassword
     } from '../../../../helpers/functions/formFunctions';
import { root } from '../../../../helpers/constants/constants';
     import './_register.scss';
import { currentLanguageDataSelector } from '../../../../helpers/reduxSelectors';
import { useSelector } from 'react-redux';

function Register() {
     const [userName, setUserName] = useState('');
     const [userLogin, setUserLogin] = useState('');
     const [userEmail, setUserEmail] = useState('');
     const [userPassword, setUserPassword] = useState('');
     const [userConfirm, setUserConfirm] = useState('');
     const [userGender, setUserGender] = useState('');
     const [emailLoginExist, setEmailLoginExist] = useState(true);
     const registerUser = useSelector(currentLanguageDataSelector)?.register;
     console.log("🚀 ~ Register ~ registerUser:", registerUser)
     const navigate = useNavigate()
     
     
     const changeUserGender = e => setUserGender(e.target.value)
     const changeUserName = e => setUserName(e.target.value);
     const changeUserEmail = e => setUserEmail(e.target.value);
     const changeUserPassword = e => setUserPassword(e.target.value);
     const changeUserConfirm = e => setUserConfirm(e.target.value);
     const passIsValid = checkConfirmPassword(userPassword, userConfirm)
     console.log("🚀 ~ Register ~ passIsValid:", passIsValid)
     const formRef = useRef();
     const handleSubmit = async (e) => {
          e.preventDefault();
          const data = new FormData(formRef.current);
          passIsValid && await fetch(`${root}/api/register`, {
               method: 'POST',
               body: new URLSearchParams(data),    // ERROR THERE
          })
          .then(res => res.json())
          .then(res => {
               console.log(res);
               
                +res === 1 ? setEmailLoginExist(true) : setEmailLoginExist(false);
                navigate('/login')
          })
     }
     return (
          <form className="register__block container" onSubmit={handleSubmit} ref={formRef}>
               <h3>{registerUser?.register}</h3>
               <div className="user__info">
                    <div className="block__item name__block">
                         <p className="name__block__header">{registerUser?.your_name}</p>
                         <input 
                              className="register__input__item"
                              type="text" 
                              name="name"
                              id="name"
                              placeholder={`${registerUser?.name}*`}
                              value={userName}
                              onChange={changeUserName}
                              autoComplete="off"
                         />
                         <span className="output">
                              {
                                   checkStrLength(userName, 2) ? '' : `${registerUser?.inc_name}`
                              }
                         </span>
                    </div>
                    <div className="block__item login__block">
                         <p className="name__block__header">{registerUser?.your_login}</p>

                         <input
                              className="register__input__item"
                              type="text"
                              name="login"
                              id="login"
                              placeholder="Login*"
                              value={userLogin}
                              autoComplete="off"
                              onChange={(e) => setUserLogin(e.target.value)}
                         />
                         <span className="output">
                         {
                              checkStrLength(userLogin, 2) ? '' :`${registerUser?.inc_login}`
                         }
                         {
                              emailLoginExist ? '' : `${registerUser?.inc_email}`
                         }
                         </span>
                    </div>
                    <div className="block__item email__block">
                         <p className="name__block__header">{registerUser?.your_email}</p>

                         <input
                              className="register__input__item"
                              type="email"
                              name="email"
                              id="email"
                              placeholder={`${registerUser?.email}*`}
                              autoComplete="off"
                              value={userEmail}
                              onChange={changeUserEmail}

                         />
                         <span className="output">
                              {
                                   checkEmail(userEmail) ? '' : `${registerUser?.inc_email}`
                              }
                              {
                                   emailLoginExist ? '' : `${registerUser?.inc_email}`
                              }
                         </span>
                    </div>
                    <div className="block__item password__block">
                          <p className="name__block__header">{registerUser?.your_pass}</p>
                         <input
                              className="register__input__item"
                              type="password"
                              name="password"
                              id="password"
                              placeholder={`${registerUser?.your_pass}*`}
                              autoComplete="off"
                              value={userPassword}
                              onChange={changeUserPassword}
                         />
                         <span className="output">
                              {
                                   checkPassword(userPassword) ? '' : `${registerUser?.inc_pass}`
                              }
                         </span>
                    </div>
                    <div className="block__item confirm__block">
                         <input
                              className="register__input__item"
                              type="password"
                              
                              id="confirm"
                              placeholder={`${registerUser?.confirm_pass}*`}
                              autoComplete="off"
                              value={userConfirm}
                              onChange={changeUserConfirm}
                         />
                         <span className="output">
                         <span>{
                              checkPassword(userPassword) ? '' : `${registerUser?.inc_pass}`
                         }</span>
                         <span>{
                              userConfirm.length > 0 ? 
                                   checkConfirmPassword(userPassword, userConfirm) ? 
                                        '' :  `${registerUser?.inc_match_pass}*`: ''
                         }</span>
                         
                         

                         </span>
                    </div>
                    <div className="gender__block">
                         {
                              registerUser &&
                              Object.entries(registerUser?.gender).map(item => {
                                   return <>
                                        <input
                                             type="radio"
                                             id={`${item[0]}`}
                                             name="gender"
                                             value={userGender}
                                             onChange={changeUserGender}
                                        />
                                        <label htmlFor={`${item[0]}`}>
                                             <span>{item[1]}</span>
                                        </label>

                                   </>
                              })
                         }
                    </div>
                    <p>Արդեն գրանցվե՞լ եք  <NavLink to={'/login'}>Մուտք</NavLink></p>
                    <button
                    className="continue"
                         
                    >{registerUser?.continue}</button>
               </div>
          </form>
     )
}
export default Register;
