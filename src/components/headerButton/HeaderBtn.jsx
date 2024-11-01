import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ModalRegister } from '../Modal_register/ModalRegister.jsx';
import { ModalLogin } from '../Modal_register/ModalLogin.jsx';
import { logOut, clearBasket } from '../../redux/reducers/BusketSlice.js';
import './headerBtn.css';

export const HeaderBtn = () => {

   const dispatch = useDispatch();
   const [isOpen, setIsopen] = useState(false)
   const {login, isPage} = useSelector(state => state.basket);

   function exit() {
      if (login) {
         dispatch(logOut());
         dispatch(clearBasket())
      } else {
         setIsopen(true);
      }
   }

   function onClose(){
      setIsopen(false);
   }

   return (
      <>
         <button
            onClick={exit}
            className='loginButton btn'>
               {login ? 'выйти' : 'войти'}
         </button>
         {
            isOpen && isPage === 'register' && login === false
               ? <ModalRegister onClose={onClose} />
               : isOpen && isPage === 'login' && login === false
               ? <ModalLogin onClose={onClose} />
               : null
         }
      </>
   )
}