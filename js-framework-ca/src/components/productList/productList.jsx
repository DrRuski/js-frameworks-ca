export default function ProductList({ productData }) {
  return (
    <ul className="grid grid-cols-5 gap-5">
      {productData?.map((product) => (
        <Product product={product} key={product.id} />
      ))}
    </ul>
  );
}

function Product({ product }) {
  return (
    <li className="flex flex-col shadow rounded">
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
              `User Rating | ${product.rating} ⭐`
            ) : (
              <span className="font-light">
                <em>Product is not rated.</em>
              </span>
            )}
          </p>
          <p className="flex flex-col">
            {product.discountedPrice ? (
              <>
                <span>{product.price}$</span>
                <span>{product.discountedPrice}$</span>
              </>
            ) : (
              <span>{product.price}$</span>
            )}
          </p>
        </div>
      </div>
    </li>
  );
}
