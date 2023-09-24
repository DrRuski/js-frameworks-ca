import Layout from "./components/layout/layout";
import Main from "./components/main";
import Loader from "./components/misc/loader";
import ProductList from "./components/productList/productList";
import useData from "./data/useData";

export default function App() {
  const { isLoading, productData, error } = useData();
  return (
    <div className="bg-background">
      <Layout>
        <Main>
          {isLoading && <Loader />}
          {!isLoading && !error && <ProductList productData={productData} />}
        </Main>
      </Layout>
    </div>
  );
}
