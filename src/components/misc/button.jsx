export default function Button({ children, onClick, buttonStyle }) {
  return (
    <button className={buttonStyle} onClick={onClick}>
      {children}
    </button>
  );
}
