import truck from "./../../assets/images/truck.png";
import shop from "./../../assets/images/shop.png";
import deals from "./../../assets/images/deals.png";
import { HashLink } from "react-router-hash-link";

export default function Hero({ productData }) {
  //   const buttonStyle = `rounded bg-primary shadow shadow-secondary hover:bg-secondary w-3/6 py-2 border border-primary hover:border-primary hover:text-primary text-secondary text-lg font-semibold`;
  return (
    <section>
      <div className="flex flex-col gap-16">
        <div className="flex flex-wrap-reverse md:flex-nowrap gap-10">
          <div className="flex flex-col gap-5 justify-evenly text-text lg:flex-1">
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
            <div className="w-full text-center">
              <HashLink
                type="button"
                smooth
                to="#productList"
                className="rounded bg-primary shadow shadow-secondary hover:bg-secondary w-3/6 py-2 border border-primary hover:border-primary hover:text-primary text-secondary text-lg font-semibold"
              >
                Shop Now
              </HashLink>
            </div>
          </div>
          <div className="lg:flex-1">
            <ImageDisplay productData={productData} />
          </div>
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
      <ul className="flex flex-wrap gap-10 lg:flex-nowrap text-text text-center">
        <li className="flex flex-col gap-2 items-center lg:flex-1">
          <img className="w-2/6" src={shop} alt={shop} />
          <div className="flex flex-col gap-2">
            <h3 className="text-2xl font-semibold">Shop with Confidence</h3>
            <p>
              At Elias` Glorious Goods, we prioritize your satisfaction. Our
              products are sourced from trusted suppliers, ensuring authenticity
              and quality. With secure payment options and a hassle-free
              shopping experience, you can shop with complete peace of mind.
            </p>
          </div>
        </li>
        <li className="flex flex-col gap-2 items-center lg:flex-1">
          <img className="w-2/6" src={truck} alt={truck} />
          <div className="flex flex-col gap-2">
            <h3 className="text-2xl font-semibold">
              Fast and Reliable Delivery{" "}
            </h3>
            <p>
              Enjoy prompt and reliable delivery to your doorstep. We understand
              the importance of getting your purchases quickly, and we`re
              committed to delivering on time, every time.
            </p>
          </div>
        </li>

        <li className="flex flex-col gap-2 items-center lg:flex-1">
          <img className="w-2/6" src={deals} alt={deals} />
          <div className="flex flex-col gap-2">
            <h3 className="text-2xl font-semibold">
              Exclusive Deals and Offers
            </h3>
            <p>
              Stay tuned for our special promotions, discounts, and exclusive
              offers. No matter what you`re looking for, Elias` Glorious Goods
              is your trusted partner in finding the perfect products to suit
              your lifestyle and needs. Join our diverse community of happy
              customers and start shopping today.
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
}
