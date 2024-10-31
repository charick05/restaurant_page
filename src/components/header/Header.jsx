import { Link, useLocation } from 'react-router-dom';
import {useSelector} from 'react-redux';
import { HeaderBtn } from '../headerButton/HeaderBtn';
import { GoToHome } from '../goToHome/GoToHome';
import './header.css';

export const Header = () => {
   const location = useLocation();
   const {products, totalPrice} = useSelector(state => state.basket);
   const basketEmpty = products.length === 0;

      let count = products.length;
      let productCountName;
      if (count === 1 || count === 0) {
         productCountName =  'товар';
      }
      if(count >= 2 && count <= 4) {
         productCountName = 'товара';
      }
      if (count > 4) {
         productCountName = 'товаров'
      }

      let headerTitle = '';

      switch (location.pathname) {
         case '/': headerTitle = 'наша продукция';
         break;
         case '/basket': headerTitle = 'корзина с выбранными товарами';
         break;
         default: headerTitle = '';
      }

   return (
      <header>
            {
               location.pathname !== '/' &&
                  <Link className="productPage-goToHome" to={'/'}>
                     <GoToHome />
                  </Link>
            }
            <h1 className='headerTitle'>{headerTitle.toUpperCase()}</h1>
            <div className='headerRightBlock'>
            {
               !basketEmpty && location.pathname !== '/basket' &&
               <Link to={'/basket'}>
                  <div className="basketInfo">
                     <span className='countProduct'>
                        {products.length} {productCountName} <br />
                        на сумму {totalPrice} ₽
                     </span>
                     <img src="/assets/basket-card.png" alt="" />
                  </div>
               </Link>
               }
            <HeaderBtn />
         </div>
      </header>
   )
}