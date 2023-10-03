import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="container mx-auto my-5 md:my-10">
      <Nav />
    </header>
  );
}

function Nav() {
  return (
    <nav className="flex flex-col items-center gap-4 md:flex-row md:justify-between h-full">
      <Logo />
      <NavLinks />
    </nav>
  );
}

function Logo() {
  return (
    <div>
      <h2 className="text-text">Elias` Glorious Goods</h2>
    </div>
  );
}

function NavLinks() {
  return (
    <div>
      <ul className="flex gap-5 text-text">
        <li>
          <Link to="/" className="hover:text-primary cursor-pointer">
            HOME
          </Link>
        </li>
        <li>
          <Link to="/contact" className="hover:text-primary cursor-pointer">
            CONTACT
          </Link>
        </li>
        <li>
          <Link
            to="/cart"
            className="text-text hover:text-primary cursor-pointer"
          >
            <span className="me-2">CART</span>
            <FontAwesomeIcon icon={faCartShopping} />
          </Link>
        </li>
      </ul>
    </div>
  );
}
