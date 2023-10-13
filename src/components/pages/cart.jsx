import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { CartContext } from "../../App";

export default function CartPage() {
  const { cartData, setCartData } = useContext(CartContext);
  console.log(cartData);

  //
  const handleIncrement = (id) => {
    const prodIndex = cartData.findIndex((item) => item.id === id);
    if (prodIndex !== -1) {
      [...cartData][prodIndex].quantity += 1;
      setCartData([...cartData]);
    }
    console.log([...cartData]);
  };
  //
  const handleDecrement = (id) => {
    const productIndex = [...cartData].findIndex((item) => item.id === id);

    if (productIndex !== -1) {
      if ([...cartData][productIndex].quantity > 1) {
        [...cartData][productIndex].quantity -= 1;
        setCartData([...cartData]);
      } else {
        [...cartData].splice(productIndex, 1);
        setCartData([...cartData]);
      }
    }
  };
  //
  function handleDeleteProduct(id) {
    setCartData((cartData) => cartData.filter((product) => product.id !== id));
  }
  return (
    <div className="flex flex-col gap-10">
      <h2 className="text-text m-auto text-xl md:text-3xl">Shopping Cart</h2>

      {cartData.length >= 1 ? (
        <>
          <ul className="flex flex-col md:gap-5">
            <div className="text-text flex justify-end gap-16">
              <p className="col-start-2">Quantity</p>
              <p className="col-start-3">Price</p>
              <p className="col-start-4">Total</p>
              <p className="col-start-5">Delete</p>
            </div>
            {cartData.map((product) => (
              <CartItem
                product={product}
                key={product.id}
                handleIncrement={handleIncrement}
                handleDecrement={handleDecrement}
                onDeleteProduct={handleDeleteProduct}
              />
            ))}
          </ul>
          <div className="flex flex-col items-end gap-5 text-text">
            <p>Total</p>
            <p className="text-primary text-xl font-bold">
              $
              {cartData
                .reduce(
                  (total, product) =>
                    total +
                    Number(product.discountedPrice || product.price) *
                      product.quantity,
                  0
                )
                .toFixed(2)}{" "}
              ,-
            </p>
          </div>
        </>
      ) : (
        <h3 className="text-text m-auto md:text-xl">Your Cart is Empty.</h3>
      )}
    </div>
  );
}

function CartItem({
  product,
  onDeleteProduct,
  handleIncrement,
  handleDecrement,
}) {
  return (
    <li className="flex justify-between items-center">
      <div className="flex gap-5">
        <img
          className="object-cover aspect-square rounded w-16 md:w-24"
          src={product.imageUrl}
          alt={product.title}
        />
        <div className="text-text w-2/4">
          <h3>{product.title}</h3>
          <p>{product.description}</p>
        </div>
      </div>
      <div className="flex items-center gap-16">
        <div className="flex bg-secondary rounded shadow-md">
          <button
            onClick={() => handleDecrement(product.id)}
            className="py-1 px-2 text-primary font-black text-base border rounded border-secondary hover:border-primary"
          >
            -
          </button>
          <div className="flex justify-center items-center w-10 text-primary bg-secondary font-black">
            {product.quantity}
          </div>
          <button
            onClick={() => handleIncrement(product.id)}
            className="py-1 px-2 text-primary font-black text-base border rounded border-secondary hover:border-primary"
          >
            +
          </button>
        </div>

        {product.discountedPrice !== product.price ? (
          <>
            <p className="text-primary">
              ${Number(product.discountedPrice).toFixed(2)}
            </p>
            <p className="text-primary">
              ${(product.quantity * Number(product.discountedPrice)).toFixed(2)}
            </p>
          </>
        ) : (
          <>
            <p className="text-primary">${Number(product.price).toFixed(2)}</p>
            <p className="text-primary">
              ${(product.quantity * Number(product.price)).toFixed(2)}
            </p>
          </>
        )}
        <button
          className="text-text p-2 border shadow border-background h-full"
          onClick={() => onDeleteProduct(product.id)}
        >
          <FontAwesomeIcon icon={faTrashCan} />
        </button>
      </div>
    </li>
  );
}

/* 
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
*/
