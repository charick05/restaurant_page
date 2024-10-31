import { useSelector } from "react-redux"
import './footer.css';

export const Footer = () => {

   const {totalPrice} = useSelector(state => state.basket);

   return (
      <footer>
         <div>ЗАКАЗ НА  СУММУ: <span>{totalPrice} ₽</span></div>
         <button className="footerBtn">Оформить заказ</button>
      </footer>
   )
}