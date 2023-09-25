import Home from "./components/home/home";
import Layout from "./components/layout/layout";
import Loader from "./components/misc/loader";
import ProductList from "./components/productList/productList";
import useData from "./data/useData";

export default function App() {
  const { isLoading, productData, error } = useData();
  return (
    <div className="bg-background">
      <Layout>
        <Home>
          {isLoading && <Loader />}
          {!isLoading && !error && <ProductList productData={productData} />}
        </Home>
      </Layout>
    </div>
  );
}
