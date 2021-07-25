import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cart.slice";
import AddToCartButton from "./AddToCartButton";
import BuyNowButton from "./BuyNowButton";
import FavButton from "./FavButton";

function ProductForm({ product }) {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const addToCartAction = () => {
    dispatch(addToCart({ ...product, qty: quantity }));
  };

  function updateQuantity(e) {
    if (e === "") {
      setQuantity("");
    } else {
      setQuantity(Math.abs(Math.floor(e)));
    }
  }

  return (
    <div className="w-full">
      <div className="flex justify-start space-x-2 w-full mb-5">
        <div className="w-full md:w-1/2 flex flex-row items-center space-y-1 flex-grow-0">
          <label className="text-gray-500 text-base mr-3 ">Quantity: </label>
          <input
            type="number"
            inputMode="numeric"
            id="quantity"
            name="quantity"
            min="1"
            step="1"
            value={quantity}
            onChange={(e) => updateQuantity(e.target.value)}
            className="text-palette-black form-input border border-palette-plight w-16 rounded-sm focus:border-palette-primary focus:ring-palette-primary pl-2"
          />
        </div>
      </div>
      <div className="flex space-x-3 mb-4 text-sm font-semibold">
        <div className="flex-auto flex space-x-3">
          <BuyNowButton onClickFn={addToCartAction} />
          <AddToCartButton onClickFn={addToCartAction} />
        </div>
        <FavButton />
      </div>
    </div>
  );
}

export default ProductForm;
