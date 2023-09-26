import { useRef } from "react";
import { useKey } from "../misc/useKey";
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
      <Search />
      <NavLinks />
    </nav>
  );
}

function Logo() {
  return (
    <div>
      <h2 className="text-text">Elias Glorious Goods</h2>
    </div>
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
      className="block w-5/6 md:w-2/4 h-10 rounded text-center text-text bg-secondary shadow-sm shadow-secondary border border-secondary hover:border-primary outline-none focus:border-primary cursor-pointer"
      type="text"
      placeholder="Search items..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      ref={inputEl}
    />
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
          <FontAwesomeIcon
            className="text-text hover:text-primary cursor-pointer"
            icon={faCartShopping}
          />
        </li>
      </ul>
    </div>
  );
}
