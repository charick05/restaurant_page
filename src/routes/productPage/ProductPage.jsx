import { useParams } from "react-router-dom";
import { ButtonInProduct } from "./ButtonInProduct";
import { productsArray } from "../../components/ProductsArray";
import './productPage.css';

export const ProductPage = () => {
   const {id} = useParams();
   const product = productsArray.find(e => e.id === +id)
   const {img, title, text, price} = product;
   return (
      <div className="productPage">
         <div className="productPage-left">
            <img src={img} alt="" />
         </div>
         <div className="productPage-right">
            <h1 className="productPage-title">
               {title}
            </h1>
            <p className="productPage-text">
               {text}
            </p>
            <div className="productPage-priceBlock">
               <span className="productPage-price">
                  {price} ₽
               </span>
               <ButtonInProduct product={product} />
            </div>
         </div>
      </div>
   )
}