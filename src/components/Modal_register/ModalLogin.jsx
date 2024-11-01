import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { islogin, goToRegister } from '../../redux/reducers/BusketSlice';
import './Modal.css';

export const ModalLogin = ({onClose}) => {
  const dispatch = useDispatch();
  const {login} = useSelector(state => state.basket);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const savedLogin = localStorage.getItem('логин');
  const savedPass = localStorage.getItem('пароль');

  const checkLogin = () => {
    if (login === false) {
      if(savedLogin === username && savedPass === password) {
        dispatch(islogin())
        alert('Авторизация прошла успешно!')
        onClose();
      } else {
        alert('Логин или пароль введен неправильно!')
        setUsername('');
        setPassword('');
      }
    }
  }
 
   return (
     <div className="modal-overlay">
      <span onClick={() => onClose()} className='close'>&#10006;</span>
       <div className="modal">
       <span onClick={() => dispatch(goToRegister())} className='onLogin'>зарегистрироваться</span>
         <h2>Авторизация</h2>
         <input
            className="modal-input"
            type='text'
            placeholder="Логин"
            value={username}
            onChange={e => setUsername(e.target.value)}
            required
         />
         <input
            className="modal-input"
            type="password"
            placeholder="Пароль"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
         />
         <button onClick={checkLogin} className="modal-button" type='submit'>Войти</button>
       </div>
     </div>
   );
 };