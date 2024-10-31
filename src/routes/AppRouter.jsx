import { Routes, Route } from "react-router-dom";
import { MainLayout } from "./MainLayouts";
import { ProductList } from "./productList/ProductList";
import { ProductPage } from "./productPage/ProductPage";
import { BasketPage } from "./busket/BasketPage";
import { ErrorPage } from "./ErrorPage";

export const AppRouter = () => {
   return (
      <Routes>
         <Route path="/" element={<MainLayout />}>
            <Route index element={<ProductList />} />
            <Route path="/basket" element={<BasketPage />} />
            <Route path="/products/:id" element={<ProductPage />} />
         </Route>
         <Route path="*" element={<ErrorPage />} />
      </Routes>
   )
}