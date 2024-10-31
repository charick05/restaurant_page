import { productsArray } from "../../components/ProductsArray";
import { ProductCard } from "../../components/productCard/ProductCard";
import "./productList.css";

export const ProductList = () => {
   return (
      <div className="productList">
         {
            productsArray.map(e => <ProductCard key={e.id} product={e} />)
         }
      </div>
   )
};