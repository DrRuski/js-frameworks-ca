import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../misc/loader";
import { Link } from "react-router-dom";

const url = `https://api.noroff.dev/api/v1/online-shop`;

export default function SingleProduct() {
  const params = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    async function fetchSingleProduct() {
      try {
        const res = await fetch(`${url}/${params.id}`);
        const json = await res.json();

        setProduct(json);
      } catch (error) {
        console.log(error);
      }
    }
    fetchSingleProduct();
  }, [params.id]);
  if (product === null) return <Loader />;

  let percentage =
    ((product.price - product.discountedPrice) / product.discountedPrice) * 100;

  return (
    <section>
      <div className="flex flex-col lg:flex-row  text-text">
        <div className="relative">
          {percentage !== 0 && (
            <div className="h-20 w-20 absolute flex items-center justify-center bg-accent rounded-full shadow-md rotate-12 top-2 right-2">
              <p className="text-secondary text-2xl font-bold">
                {percentage !== 0 && `${Math.round(percentage)}%`}
              </p>
            </div>
          )}
          <img
            className="aspect-square object-cover"
            src={product.imageUrl}
            alt={product.title}
          />
        </div>
        <div className="flex flex-col gap-3 m-3">
          <div>
            <h3 className="text-l font-bold">{product.title}</h3>
            <p className="text-base/6">{product.description}</p>
          </div>
          <div className="flex justify-between items-end">
            <div>
              <p className="text-sm">
                {product.rating ? (
                  <span className="text-sm">
                    User Rating | {product.rating} ⭐
                  </span>
                ) : (
                  <span className="text-sm font-light opacity-50">
                    <em>Product is not yet rated.</em>
                  </span>
                )}
              </p>
            </div>
            <p className="flex flex-col text-right">
              {product.discountedPrice !== product.price ? (
                <>
                  <span className="text-sm md:text-base line-through opacity-50">
                    {product.price}
                  </span>
                  <span className="text-sm md:text-base font-medium text-primary">
                    {product.discountedPrice} $
                  </span>
                </>
              ) : (
                <span className="text-sm md:text-base font-medium text-primary">
                  {product.price} $
                </span>
              )}
            </p>
          </div>
          <div>
            <input type="number" name="" id="" />
            <Link
              type="button"
              className="rounded bg-primary shadow shadow-secondary hover:bg-secondary w-3/6 py-2 border border-primary hover:border-primary hover:text-primary text-secondary text-lg font-semibold text-center"
            >
              Add to Cart
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
