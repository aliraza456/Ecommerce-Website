import { Routes, Route } from "react-router-dom";
import "./shop.scss";
import CategoriesPreview from "./CategoriesPreview";
import Category from "./Category";

const Shop = () => {
  return (
    <Routes>
      <Route index element={ <CategoriesPreview/> }  />
      <Route path=":category" element={ <Category/> }  />
    </Routes>
  )};
export default Shop;
