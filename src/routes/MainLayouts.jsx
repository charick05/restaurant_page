import { Outlet, useLocation } from "react-router-dom";
import { Footer } from "../components/footer/Footer";
import { Header } from "../components/header/Header";
import { useSelector } from "react-redux";

export const MainLayout = () => {
   const location = useLocation();
   const {products} = useSelector(state => state.basket)
   return (
      <>
         <Header />
         <Outlet />
         {location.pathname === '/basket' && products.length !== 0 && <Footer />}
      </>
   )
}