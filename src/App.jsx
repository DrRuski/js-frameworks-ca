import { Route, Routes } from "react-router-dom";
import Home from "./components/home/home";
import Hero from "./components/hero/hero";
import Layout from "./components/layout/layout";
import Loader from "./components/misc/loader";
import ProductList from "./components/productList/productList";
import useData from "./data/useData";
import ErrorMessage from "./components/misc/error";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <div>Hello World</div>,
//   },
// ]);

export default function App() {
  const { isLoading, productData, error } = useData();
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          index
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
      </Route>
    </Routes>
  );
}
