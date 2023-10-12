import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { useContext, useState } from "react";
import { CartContext } from "../../App";

export default function CartPage() {
  const { cartData, setCartData } = useContext(CartContext);
  const [amount, setAmount] = useState(1);

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
              <p className="col-start-2">Amount</p>
              <p className="col-start-3">Price</p>
              <p className="col-start-4">Total</p>
              <p className="col-start-5">Delete</p>
            </div>
            {cartData.map((product) => (
              <CartItem
                product={product}
                key={product.id}
                onDeleteProduct={handleDeleteProduct}
                amount={amount}
                setAmount={setAmount}
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
                    total + Number(product.discountedPrice || product.price),
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

function CartItem({ product, onDeleteProduct, amount, setAmount }) {
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
            onClick={() => setAmount((c) => c - 1)}
            className="py-1 px-2 text-primary font-black text-base border rounded border-secondary hover:border-primary"
          >
            -
          </button>
          <input
            className="text-primary text-center bg-secondary font-black"
            type="text"
            placeholder={amount}
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
          />

          <button
            onClick={() => setAmount((c) => c + 1)}
            className="py-1 px-2 text-primary font-black text-base border rounded border-secondary hover:border-primary"
          >
            +
          </button>
        </div>
        {product.discountedPrice !== product.price ? (
          <>
            <p className="text-primary">
              {Number(product.discountedPrice).toFixed(2)}
            </p>
            <p className="text-primary">
              {(amount * Number(product.discountedPrice)).toFixed(2)}
            </p>
          </>
        ) : (
          <>
            <p className="text-primary">{Number(product.price).toFixed(2)}</p>
            <p className="text-primary">
              {(amount * Number(product.price)).toFixed(2)}
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
