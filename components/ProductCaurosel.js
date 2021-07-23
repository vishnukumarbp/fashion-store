import Link from "next/link";
import SlickSlider from "./SlickSlider";
import ProductCard from "./ProductCard";
import { ROUTES } from "../constants";

function ProductCaurosel({ products = [] }) {
  return (
    <div className="container mx-auto mt-16">
      <div className="mx-5 flex justify-between font-medium">
        <h1 className="text-palette-primary text-4xl">Featured Products</h1>
        <span className="text-base underline text-palette-secondary pr-3 hover:text-palette-primary">
          <Link href={ROUTES.featured()}>View all</Link>
        </span>
      </div>
      <SlickSlider
        customSettings={{
          className: "m-3",
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: false,
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 1,
              },
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
              },
            },
          ],
        }}
        childrens={products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      />
    </div>
  );
}

export default ProductCaurosel;
