import { useEffect, useState } from "react";

export default function useData() {
  const [productData, setProductData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    async function fetchProducts() {
      try {
        setIsLoading(true);
        setError("");
        const res = await fetch(`https://api.noroff.dev/api/v1/online-shop`, {
          signal: controller.signal,
        });
        if (!res.ok) {
          throw new Error("Something went wrong, try refreshing.");
        }
        const products = await res.json();
        setProductData(products);
        setError("");
      } catch (error) {
        console.log(error);
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    }
    fetchProducts();

    return function () {
      controller.abort();
    };
  }, []);
  return { productData, isLoading, error };
}
