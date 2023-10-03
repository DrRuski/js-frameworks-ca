export default function Home({ children }) {
  return (
    <main className="container m-auto">
      <div className="flex flex-col gap-16">{children}</div>
    </main>
  );
}
