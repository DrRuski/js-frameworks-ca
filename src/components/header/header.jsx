import { useRef } from "react";
import { useKey } from "../misc/useKey";

export default function Header() {
  return (
    <header className="container m-auto h-24">
      <Navbar />
    </header>
  );
}

function Navbar() {
  return (
    <nav className="flex justify-between items-center h-full">
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
      className="block w-6/12 h-10"
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
    <div className="flex">
      <ul className="flex text-text">
        <li>Home</li>
        <li>Contact</li>
      </ul>
      <ShoppingCart />
    </div>
  );
}

function ShoppingCart() {
  return <span className="text-text">hello</span>;
}
