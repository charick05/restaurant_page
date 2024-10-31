import { useSelector, useDispatch } from "react-redux";
import { addProduct, removeProduct } from "../../redux/reducers/BusketSlice";
import './button.css'

export const Button = ({product}) => {
   const dispatch = useDispatch();
   const {products} = useSelector(state => state.basket)
   const productInBasket = products.find(e => product.id === e.id)

   let buttonColor = productInBasket
   ? {
      backgroundColor: "#D58C51",
   }
   : {
      backgroundColor: "#161516",
   };

   return (
      <button
         className="toggleBtn"
         onClick={() => dispatch(productInBasket ? removeProduct(product) : addProduct(product))}
         style={buttonColor}>
         {
            productInBasket ? "✔" : "✚"
         }
      </button>
   )
}