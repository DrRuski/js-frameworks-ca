export default function ProductList({ productData }) {
  return (
    <section>
      <ul className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {productData?.map((product) => (
          <Product product={product} key={product.id} />
        ))}
      </ul>
    </section>
  );
}

function Product({ product }) {
  return (
    <li className="flex flex-col shadow-sm shadow-secondary rounded bg-secondary text-text border border-secondary hover:border hover:border-primary cursor-pointer">
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
                <em>Product is not rated.</em>
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
