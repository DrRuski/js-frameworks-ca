import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../misc/loader";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const url = `https://api.noroff.dev/api/v1/online-shop`;

export default function SingleProduct() {
  const params = useParams();
  const [product, setProduct] = useState(null);
  const [count, setCount] = useState(1);

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

  console.log(product);
  return (
    <section className="flex flex-col gap-10 md:gap-16 md:items-center">
      <div className="flex flex-col lg:flex-row text-text justify-center gap-5 md:gap-10">
        <div className="relative">
          {percentage !== 0 && (
            <div className="h-20 w-20 absolute flex items-center justify-center bg-accent rounded-full shadow-md rotate-12 top-2 right-2">
              <p className="text-secondary text-2xl font-bold">
                {percentage !== 0 && `${Math.round(percentage)}%`}
              </p>
            </div>
          )}

          <img
            className="object-cover aspect-square rounded h-auto md:max-w-md"
            src={product.imageUrl}
            alt={product.title}
          />
        </div>

        <div className="flex flex-col justify-between gap-5 md:max-w-md">
          <div className="flex flex-col gap-10">
            <div>
              <h3 className="text-3xl font-bold text-primary">
                {product.title}
              </h3>
              <p className="text-base">{product.description}</p>
            </div>
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
          </div>
          <div className="flex flex-col gap-5">
            <div>
              <p className="flex flex-col-reverse text-left">
                {product.discountedPrice !== product.price ? (
                  <>
                    <span className="text-sm md:text-xl line-through opacity-50">
                      {product.price}
                    </span>
                    <span className="text-sm md:text-3xl font-medium md:font-bold text-primary">
                      ${product.discountedPrice}
                    </span>
                  </>
                ) : (
                  <span className="text-sm md:text-base font-medium text-primary">
                    ${product.price}
                  </span>
                )}
              </p>
            </div>

            <div className="flex flex-col gap-2 items-center">
              <div className="flex justify-between bg-secondary rounded shadow-md w-full">
                <button
                  onClick={() => setCount((c) => c - 1)}
                  className="py-3 px-4 text-primary font-black text-base border rounded border-secondary hover:border-primary"
                >
                  -
                </button>
                <input
                  className="text-primary text-center bg-secondary font-black"
                  type="text"
                  placeholder={count}
                  value={count}
                  onChange={(e) => setCount(Number(e.target.value))}
                />

                <button
                  onClick={() => setCount((c) => c + 1)}
                  className="py-3 px-4 text-primary font-black text-base border rounded border-secondary hover:border-primary"
                >
                  +
                </button>
              </div>

              <Link
                type="button"
                className="w-full rounded bg-primary shadow shadow-secondary hover:bg-secondary py-2 border border-primary hover:border-primary hover:text-primary text-secondary text-lg font-semibold text-center"
              >
                <FontAwesomeIcon icon={faCartShopping} />{" "}
                <span>Add to Cart</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {product.reviews.length > 0 && (
        <div>
          <ReviewSection product={product} />
        </div>
      )}
    </section>
  );
}

function ReviewSection({ product }) {
  return (
    <ul className="flex flex-col gap-10">
      {product.reviews.map((review) => (
        <li
          key={review.id}
          className="text-text flex flex-col md:flex-row md:items-center gap-2 md:gap-5"
        >
          <div className="w-8 h-8 md:w-14 md:h-14 flex items-center justify-center shadow-md bg-secondary rounded-full">
            <span className="text-primary text-sm font-medium  md:font-bold md:text-base">
              {review.username.slice(0, 1)}
            </span>
          </div>
          <div className="">
            <h3>{review.username}</h3>
            <p>{review.description}</p>
            <p>⭐ {review.rating}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
