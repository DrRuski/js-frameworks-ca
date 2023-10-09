import Search from "../misc/search";
import Button from "../misc/button";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function ProductList({ productData }) {
  const [searchText, setSearchText] = useState("");
  const prodSearch = productData.filter((item) =>
    item.title.toLowerCase().includes(searchText.toLowerCase())
  );
  return (
    <section id="productList" className="flex flex-col gap-5">
      <div className="flex flex-col md:flex-row gap-5">
        <CategorySelect />

        <Search
          query={searchText}
          setQuery={setSearchText}
          placeholderText="Search Items..."
        />
      </div>
      <ul className="grid grid-cols-1 gap-5 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {prodSearch?.map((product) => (
          <Product product={product} key={product.id} />
        ))}
      </ul>
    </section>
  );
}

function Product({ product }) {
  let percentage =
    ((product.price - product.discountedPrice) / product.discountedPrice) * 100;
  return (
    <li>
      <Link
        to={`product/${product.id}`}
        className="flex flex-col shadow shadow-secondary rounded bg-secondary text-text border border-secondary hover:border hover:border-primary cursor-pointer h-full"
      >
        <div className="relative">
          {percentage !== 0 && (
            <div className="h-20 w-20 absolute flex items-center justify-center bg-accent rounded-full shadow-md rotate-12 top-2 right-2">
              <p className="text-secondary text-2xl font-bold">
                {percentage !== 0 && `${Math.round(percentage)}%`}
              </p>
            </div>
          )}
          <img
            className="aspect-square object-cover rounded-t"
            src={product.imageUrl}
            alt={product.title}
          />
        </div>
        <div className="flex flex-col gap-3 m-3 justify-between h-full">
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
        </div>
      </Link>
    </li>
  );
}

function CategorySelect() {
  const buttonStyle = `
      rounded bg-secondary shadow shadow-secondary border border-secondary hover:border-primary px-3 h-10`;

  return (
    <ul className="flex flex-wrap md:flex-nowrap gap-2 md:gap-5 text-text h-full md:h-10">
      <li>
        <Button buttonStyle={buttonStyle}>All</Button>
      </li>
      <li>
        <Button buttonStyle={buttonStyle}>Discounted</Button>
      </li>
      <li>
        <Button buttonStyle={buttonStyle}>Cloths</Button>
      </li>
      <li>
        <Button buttonStyle={buttonStyle}>Electronics</Button>
      </li>
      <li>
        <Button buttonStyle={buttonStyle}>Nutrients</Button>
      </li>
      <li>
        <Button buttonStyle={buttonStyle}>Cosmetics</Button>
      </li>
    </ul>
  );
}
