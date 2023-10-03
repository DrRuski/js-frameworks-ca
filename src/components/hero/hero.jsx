export default function Hero({ productData }) {
  return (
    <section className="container">
      <div className="flex flex-col gap-5">
        <div className="flex flex-wrap md:flex-nowrap items-center gap-10">
          <div className="flex flex-col gap-5 md:basis-3/4 text-text">
            <h1 className="text-3xl lg:text-6xl">
              Discover Endless Possibilities at Elias` Glorious Goods.
            </h1>
            <p className="lg:text-xl text-base">
              Welcome to your one-stop destination for everything you desire.
              Elias` Glorious Goods brings you an extensive selection of
              top-quality products across various categories. Whether you`re
              into cosmetics, electronics, clothing, nutrients, watches, or
              more, we have it all.
            </p>
          </div>
          <ImageDisplay productData={productData} />
        </div>
        <WebsiteValues />
      </div>
    </section>
  );
}

function ImageDisplay({ productData }) {
  return (
    <ul className="grid grid-cols-3 gap-2">
      {productData?.slice(0, 6).map((product) => (
        <li key={product.id}>
          <img
            className="aspect-square object-cover rounded shadow-md shadow-secondary"
            src={product.imageUrl}
            alt={product.title}
          />
        </li>
      ))}
    </ul>
  );
}

function WebsiteValues() {
  return (
    <div>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-text text-center">
        <li>
          <img src="" alt="" />
          <h3>Shop with Confidence</h3>
          <p>
            At Elias` Glorious Goods, we prioritize your satisfaction. Our
            products are sourced from trusted suppliers, ensuring authenticity
            and quality. With secure payment options and a hassle-free shopping
            experience, you can shop with complete peace of mind.
          </p>
        </li>
        <li>
          <img src="" alt="" />
          <h3>Fast and Reliable Delivery </h3>
          <p>
            Enjoy prompt and reliable delivery to your doorstep. We understand
            the importance of getting your purchases quickly, and we`re
            committed to delivering on time, every time.
          </p>
        </li>

        <li>
          <img src="" alt="" />
          <h3>Exclusive Deals and Offers</h3>
          <p>
            Stay tuned for our special promotions, discounts, and exclusive
            offers. We believe in giving you the best value for your money,
            making your shopping experience even more rewarding. No matter what
            you`re looking for, Elias` Glorious Goods is your trusted partner in
            finding the perfect products to suit your lifestyle and needs. Join
            our diverse community of happy customers and start shopping today.
          </p>
        </li>
      </ul>
    </div>
  );
}
