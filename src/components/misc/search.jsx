import { useRef } from "react";
import { useKey } from "./useKey";

export default function Search({ query, setQuery, placeholderText }) {
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
      className="block w-full h-10 rounded ps-3 text-text placeholder:text-text bg-secondary shadow shadow-secondary border border-secondary hover:border-primary outline-none focus:border-primary cursor-pointer py"
      type="text"
      placeholder={placeholderText}
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      ref={inputEl}
    />
  );
}
