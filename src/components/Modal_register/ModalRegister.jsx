import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { goToLogin } from '../../redux/reducers/BusketSlice';
import './Modal.css';

export const ModalRegister = ({onClose}) => {

  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
        event.preventDefault();
        localStorage.setItem('логин', username);
        localStorage.setItem('пароль', password);
        setUsername('');
        setPassword('');
        alert("Регистрация прошла успешно!")
        dispatch(goToLogin())
  };
 
   return (
     <div className="modal-overlay">
       <span onClick={() => onClose()} className='close'>&#10006;</span>
       <form className="modal" onSubmit={handleSubmit}>
       <span onClick={() => dispatch(goToLogin())} className='onLogin'>авторизоваться</span>
         <h2>Регистрация</h2>
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
         <button className="modal-button" type='submit'>Зарегистрироваться</button>
       </form>
     </div>
   );
 };