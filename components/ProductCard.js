import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { ROUTES } from "../constants";
import { addToCart } from "../redux/cart.slice";
import { getFakeImageUrl, getFakePrice, getFakeProductName } from "../utils";
import AddToCartButton from "./AddToCartButton";
import BuyNowButton from "./BuyNowButton";
import FavButton from "./FavButton";
import Price from "./Price";

function ProductCard({ product = {} }) {
  const dispatch = useDispatch();
  const history = useRouter();
  const addToCartAction = (event) => {
    event.stopPropagation();
    dispatch(addToCart(product));
  };

  return (
    <div
      className="flex m-3 rounded-md shadow-ss hover:shadow-md overflow-hidden border cursor-pointer"
      onClick={() => history.push(ROUTES.productDetail(product.id))}
    >
      <div className="flex-none w-52 relative">
        <img
          src={product.image || getFakeImageUrl()}
          alt=""
          className="absolute inset-0 w-full h-full object-cover rounded-l-md"
        />
      </div>
      <form className="flex-auto p-6">
        <div className="flex flex-wrap items-baseline">
          <h1 className="w-full flex-none font-semibold text-palette-black mb-2.5">
            {product.name || getFakeProductName()}
          </h1>
          <div className="leading-7 font-bold text-palette-primary">
            <Price
              price={product.price || getFakePrice()}
              offerPrice={product.discountedPrice || 0}
              textSize="text-4xl"
            />
          </div>
          <div className="text-sm font-medium text-gray-400 ml-3">
            {product.stock > 0 ? "In stock" : "Out of Stock"}
          </div>
        </div>
        <div className="flex items-baseline lg:flex-col xl:flex-row my-8">
          <ul className="flex justify-between pr-3 xl:pr-3 xl:w-80 lg:pr-0 lg:w-60 text-sm space-x-1 w-80">
            {["XS", "S", "M", "L", "XL"].map((size) => (
              <li
                key={size}
                className="relative items-center justify-center border-2 rounded-full cursor-pointer"
              >
                <span className="flex items-center justify-center font-medium w-8 h-8">
                  {size}
                </span>
              </li>
            ))}
          </ul>
          <div className="ml-3 lg:ml-0 text-sm lg:mt-3 text-gray-500 underline">
            Size Guide
          </div>
        </div>
        <div className="flex space-x-3 mb-4 text-sm font-semibold">
          <div className="flex-auto flex space-x-3">
            <BuyNowButton onClickFn={addToCartAction} />
            <AddToCartButton onClickFn={addToCartAction} />
          </div>
          <FavButton />
        </div>
        <p className="text-sm text-gray-500">Free shipping on all orders.</p>
      </form>
    </div>
  );
}

export default ProductCard;
