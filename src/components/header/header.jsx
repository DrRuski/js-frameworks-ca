import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../App";

export default function Header() {
  return (
    <header className="bg-background py-2.5 my-2.5 md:py-5 md:my-5 sticky top-0 z-50">
      <Navbar />
    </header>
  );
}

function Navbar() {
  return (
    <nav className="container m-auto flex flex-col items-center gap-4 md:flex-row md:justify-between h-full">
      <a href="/" className="text-text">
        Elias` Glorious Goods
      </a>
      <NavLinks />
    </nav>
  );
}

function NavLinks() {
  const { cartData } = useContext(CartContext);
  console.log(cartData);
  return (
    <ul className="flex gap-5 text-text">
      <li>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "inActive")}
        >
          HOME
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact"
          className={({ isActive }) => (isActive ? "active" : "inActive")}
        >
          CONTACT
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/cart"
          className={({ isActive }) => (isActive ? "active" : "inActive")}
        >
          <span className="me-2">CART</span>
          <FontAwesomeIcon icon={faCartShopping} />
        </NavLink>
      </li>
    </ul>
  );
}
