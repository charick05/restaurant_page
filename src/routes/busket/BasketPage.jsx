import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { removeProduct } from "../../redux/reducers/BusketSlice";
import './basketPage.css';

export const BasketPage = () => {
   const {products} = useSelector(state => state.basket);
   const dispatch = useDispatch();

   if(products.length === 0) {
      return (
         <div className="basketEmpty">
            <h1>Корзина пустая</h1>
            <Link to={'/'}>
               <h3>Вернуться на главную </h3>
            </Link>
         </div>
      )
   }
   return (
      <div className="basketPage">
         {
            products.map(e => <div key={e.id} className="basketPage-list">
                                 <div className="basketPage-left">
                                    <div className="basketPage-img">
                                       <img src={e.img} alt="" />
                                    </div>
                                    <h3 className="basketPage-title">
                                       {e.title}
                                    </h3>
                                 </div>
                                 <span className="basketPage-price">
                                    {e.price}
                                    <span
                                    className="basketPage-remove"
                                    onClick={() => dispatch(removeProduct(e))}
                                    >&#10006;</span>
                                 </span>
                              </div>)
                  }
      </div>
   )
};