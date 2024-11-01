import { useSelector, useDispatch } from "react-redux";
import { addProduct, removeProduct } from "../../redux/reducers/BusketSlice";
import './productPage.css'

export const ButtonInProduct = ({product}) => {
   const dispatch = useDispatch();
   const {products, login} = useSelector(state => state.basket)
   const productInBasket = products.find(e => product.id === e.id)

   let buttonColor = productInBasket
   ? {
      backgroundColor: "#D58C51",
      color: "#161516"
   }
   : {
      backgroundColor: "#161516",
      color: "#D58C51"
   };

   return (
      <button
         className="btnInProduct"
         onClick={() => login === false ? alert('Сначала авторизуйтесь') : dispatch(productInBasket ? removeProduct(product) : addProduct(product))}
         style={buttonColor}>
         {
            productInBasket ? "убрать" : "в корзину"
         }
      </button>
   )
}