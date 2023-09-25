export default function Footer() {
  return (
    <footer className="container text-text mx-auto my-10">
      <div className="flex flex-col">
        <div className="flex justify-evenly">
          <p className="text-text w-1/4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ratione
            distinctio ipsa quibusdam quas dolore ut. Cumque totam ipsam
            pariatur, aliquid officia temporibus, libero consectetur nemo
            placeat ea consequuntur fugiat?
          </p>
          <ul className="flex flex-col gap-5 justify-center">
            <li>HOME</li>
            <li>CONTACT</li>
          </ul>
        </div>
        <p className="text-center">Elias Glorious Goods Inc. &copy;</p>
      </div>
    </footer>
  );
}
