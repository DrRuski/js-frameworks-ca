import { useRef } from "react";
import { useKey } from "../misc/useKey";

export default function NavBar() {
  return (
    <nav className="container">
      <div className="flex justify-evenly">
        <Logo />
        <Search />
        <NavLinks />
      </div>
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
      className="search"
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
    <ul className="flex text-text">
      <li>Home</li>
      <li>Contact</li>
    </ul>
  );
}
