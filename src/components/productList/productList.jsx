import { useRef } from "react";
import { useKey } from "../misc/useKey";
import Button from "../misc/button";

export default function ProductList({ productData }) {
  return (
    <section id="productList" className="flex flex-col gap-5">
      <div className="flex flex-wrap md:flex-nowrap gap-5 items-center h-10">
        <CategorySelect />
        <Search />
      </div>
      <ul className="grid grid-cols-1 gap-5 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {productData?.map((product) => (
          <Product product={product} key={product.id} />
        ))}
      </ul>
    </section>
  );
}

function Product({ product }) {
  return (
    <li className="flex flex-col shadow shadow-secondary rounded bg-secondary text-text border border-secondary hover:border hover:border-primary cursor-pointer">
      <img
        className="aspect-square object-cover rounded-t"
        src={product.imageUrl}
        alt={product.title}
      />
      <div className="flex flex-col gap-3 m-3 justify-between h-full">
        <div>
          <h3 className="text-l font-bold">{product.title}</h3>
          <p className="text-base/6">{product.description}</p>
        </div>
        <div className="flex justify-between items-end">
          <p className="text-sm">
            {product.rating ? (
              <span className="text-sm">
                User Rating | ${product.rating} ⭐
              </span>
            ) : (
              <span className="text-sm font-light opacity-50">
                <em>Product is not yet rated.</em>
              </span>
            )}
          </p>
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
    </li>
  );
}

function Search({ query, setQuery }) {
  const inputEl = useRef(null);

  useKey("Enter", function () {
    if (document.activeElement === inputEl.current) {
      return;
    }
    inputEl.current.focus();
    setQuery("");
  });

  return (
    <input
      className="block w-5/6 md:w-full h-full rounded ps-3 text-text placeholder:text-text bg-secondary shadow shadow-secondary border border-secondary hover:border-primary outline-none focus:border-primary cursor-pointer py"
      type="text"
      placeholder="Search items..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      ref={inputEl}
    />
  );
}

function CategorySelect() {
  const buttonStyle = `
      rounded bg-secondary shadow shadow-secondary border border-secondary hover:border-primary px-3 h-full`;

  return (
    <ul className="flex flex-wrap md:flex-nowrap gap-2 md:gap-5 text-text h-full">
      <li>
        <Button buttonStyle={buttonStyle}>All</Button>
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

/*

*/
