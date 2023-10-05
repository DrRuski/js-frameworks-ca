export default function Home({ children }) {
  return (
    <main>
      <div className="flex flex-col gap-16">{children}</div>
    </main>
  );
}
