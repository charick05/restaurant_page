import { useSelector } from "react-redux";

export const ProductCountName = () => {
   const {products} = useSelector(state => state.basket);
   let count = products.length;
   if (count === 1) {
      return 'товар';
   }

   if(count >= 2 && count <= 4) {
      return 'товара';
   }

   if (count > 4) {
      return 'товаров'
   }
};