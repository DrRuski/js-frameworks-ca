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
  const [query, setQuery] = useState("");
  const { isLoading, productData, error } = useData();
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
                <ProductList
                  productData={productData}
                  query={query}
                  setQuery={setQuery}
                />
              ) : (
                <ErrorMessage message={error} />
              )}
            </Home>
          }
        ></Route>
        <Route
          path="contact"
          element={<ContactPage query={query} setQuery={setQuery} />}
        ></Route>
        <Route path="cart" element={<CartPage />}></Route>
        <Route path="product/:id" element={<SingleProduct />}></Route>
      </Route>
    </Routes>
  );
}
