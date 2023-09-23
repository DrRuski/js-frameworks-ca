import Main from "./components/main";
import ProductList from "./components/productList/productList";
import useData from "./data/useData";

export default function App() {
  const { isLoading, productData, error } = useData();
  console.log(productData);
  return (
    <div>
      <Main>
        <ProductList productData={productData} />
      </Main>
    </div>
  );
}
