import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function CartPage({ cartData }) {
  console.log(cartData);
  return (
    <div className="flex flex-col gap-10">
      <h2 className="text-text">Shopping Cart</h2>

      <ul className="flex flex-col gap-5">
        <div className="text-text grid grid-cols-5 text-end">
          <p className="col-start-2">Amount</p>
          <p className="col-start-3">Price</p>
          <p className="col-start-4">Total</p>
          <p className="col-start-5">Delete</p>
        </div>
        {cartData.map((product) => (
          <CartItem product={product} key={product.id} />
        ))}
      </ul>
    </div>
  );
}

function CartItem({ product }) {
  const [count, setCount] = useState(1);
  function handleRemoveProduct() {
    console.log("hello");
    return;
  }
  return (
    <li className="flex justify-between items-center">
      <div className="flex gap-5">
        <img
          className="object-cover aspect-square rounded w-16 md:w-24"
          src={product.imageUrl}
          alt={product.title}
        />
        <div className="text-text">
          <h3>{product.title}</h3>
          <p>{product.description}</p>
        </div>
      </div>
      <div className="flex items-center gap-16">
        <div className="flex bg-secondary rounded shadow-md">
          <button
            onClick={() => setCount((c) => c - 1)}
            className="py-1 px-2 text-primary font-black text-base border rounded border-secondary hover:border-primary"
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
            className="py-1 px-2 text-primary font-black text-base border rounded border-secondary hover:border-primary"
          >
            +
          </button>
        </div>
        <p className="text-primary">{product.price}</p>
        <p className="text-primary">{count}</p>
        <button
          className="text-text p-2 border shadow border-background h-full"
          onClick={handleRemoveProduct}
        >
          <FontAwesomeIcon icon={faTrashCan} />
        </button>
      </div>
    </li>
  );
}
