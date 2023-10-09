export default function Search({ query, setQuery, placeholderText }) {
  return (
    <input
      className="block w-full h-10 rounded ps-3 text-text placeholder:text-text bg-secondary shadow shadow-secondary border border-secondary hover:border-primary outline-none focus:border-primary cursor-pointer"
      type="text"
      placeholder={placeholderText}
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />
  );
}
