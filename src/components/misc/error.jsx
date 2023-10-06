export default function ErrorMessage({ message }) {
  return (
    <p className="text-text text-center text-xl font-bold">
      <span>⛔</span> {message} <span>⛔</span>
    </p>
  );
}
