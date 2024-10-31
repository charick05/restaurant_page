import { Link } from 'react-router-dom';
import { Button } from '../button/Button';
import './productCard.css';

export const ProductCard = ({product}) => {

   return (
      <div className='productCard'>
         <Link to={`/products/${product.id}`}>
            <div>
               <div className="productCard-top">
                  <img src={product.img} alt="" />
               </div>

               <div className="productCard-middle">
                  <h4 className='productCard-title'>
                     {product.title}
                  </h4>
                  <p className='productCard-text'>
                     {product.text}
                  </p>
               </div>
            </div>
         </Link>

         <div className='productCard-bottom'>
            <div className='productCard-price'>
               <span>{product.price} ₽</span>
               <Button product={product} />
            </div>
         </div>

      </div>
   )
}