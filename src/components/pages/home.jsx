export default function Home({ children }) {
  document.title = "Home";
  return (
    <main>
      <div className="flex flex-col gap-16">{children}</div>
    </main>
  );
}
