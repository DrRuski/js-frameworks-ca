import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/home";
import Hero from "./components/hero/hero";
import Layout from "./components/layout/layout";
import Loader from "./components/misc/loader";
import ProductList from "./components/productList/productList";
import useData from "./data/useData";
import ErrorMessage from "./components/misc/error";
import ContactPage from "./components/pages/contact";
import CartPage from "./components/pages/cart";
import SingleProduct from "./components/pages/singleProduct";
import { useState } from "react";

export default function App() {
  const { isLoading, productData, error } = useData();
  const [cartData, setCartData] = useState([]);
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route
          index
          path="/"
          element={
            <Home>
              <Hero productData={productData} />
              {isLoading && <Loader />}
              {!isLoading && !error ? (
                <ProductList productData={productData} />
              ) : (
                <ErrorMessage message={error} />
              )}
            </Home>
          }
        ></Route>
        <Route path="contact" element={<ContactPage />}></Route>
        <Route path="cart" element={<CartPage cartData={cartData} />}></Route>
        <Route
          path="product/:id"
          element={<SingleProduct setCartData={setCartData} />}
        ></Route>
      </Route>
    </Routes>
  );
}
