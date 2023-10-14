import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { useContext, useState } from "react";
import { CartContext } from "../../App";

export default function CartPage() {
  const { cartData, setCartData } = useContext(CartContext);
  const [isActive, setIsActive] = useState(false);
  document.title = "Shopping Cart";

  const handleIncrement = (id) => {
    const prodIndex = cartData.findIndex((item) => item.id === id);
    if (prodIndex !== -1) {
      [...cartData][prodIndex].quantity += 1;
      setCartData([...cartData]);
    }
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
  function handlePurchase() {
    setIsActive(true);
    setTimeout(() => {
      setIsActive(false);
      setCartData([], "products");
    }, 4000);
  }
  //
  function handleDeleteProduct(id) {
    setCartData((cartData) => cartData.filter((product) => product.id !== id));
  }
  return (
    <div className="flex flex-col gap-10">
      <h2 className="text-text m-auto text-xl md:text-3xl">Shopping Cart</h2>

      {cartData.length >= 1 ? (
        <>
          <ul className="flex flex-col gap-5">
            <div className="text-text flex justify-between md:justify-end md:gap-16">
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
            <div className="w-full border-b border-b-secondary"></div>
            {isActive && (
              <div className="flex flex-col items-center gap-5 shadow text-text md:w-1/4 m-auto bg-secondary border border-secondary rounded p-5">
                <h4 className="text-xl text-center">
                  Your purchase has been processed.
                </h4>
                <FontAwesomeIcon
                  className="text-primary text-3xl"
                  icon={faCircleCheck}
                />
                <p>Cleaning your cart now...</p>
              </div>
            )}
            <p className="font-semibold text-xl">Total</p>
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
            <button
              className="rounded w-32 bg-primary shadow shadow-secondary hover:bg-secondary py-2 border border-primary hover:border-primary hover:text-primary text-secondary text-lg font-semibold text-center"
              onClick={handlePurchase}
            >
              Purchase
            </button>
          </div>
        </>
      ) : (
        <>
          <h3 className="text-text m-auto md:text-xl">Your Cart is Empty.</h3>
        </>
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
    <li className="flex flex-col md:flex-row justify-between md:items-center">
      <div className="flex gap-3 md:gap-5">
        <img
          className="object-contain md:object-cover aspect-square rounded w-16 md:w-24"
          src={product.imageUrl}
          alt={product.title}
        />
        <div className="text-text md:w-2/4">
          <h3>{product.title}</h3>
          <p>{product.description}</p>
        </div>
      </div>
      <div className="flex items-center justify-between md:gap-16">
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
          className="text-text p-2 border shadow border-background h-full hover:text-primary"
          onClick={() => onDeleteProduct(product.id)}
        >
          <FontAwesomeIcon icon={faTrashCan} />
        </button>
      </div>
    </li>
  );
}
