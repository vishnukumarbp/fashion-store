import {
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
} from "../redux/cart.slice";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import ListPageHeader from "../components/ListPageHeader";
import { TrashIcon } from "@heroicons/react/outline";
import { getCartSubTotal, getLocalPrice, toFixedLen } from "../utils";
import BackToProductButton from "../components/BackToProductButton";
import Price from "../components/Price";
import { ROUTES } from "../constants";

const CartPage = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const history = useRouter();

  const cartTotal = getLocalPrice(toFixedLen(getCartSubTotal(cart)));

  return (
    <div className="container mx-auto px-5 pb-28">
      {cart.length === 0 ? (
        <div className="flex justify-center items-center w-full h-52 text-palette-primary">
          <h1 className="text-3xl">Your Cart is Empty!</h1>
        </div>
      ) : (
        <>
          <ListPageHeader label={`Cart Items (${cart.length || 0})`} />
          <div className="flex flex-col mt-5">
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                <div className="overflow-hidden border-b border-gray-200 sm:rounded-t-lg">
                  <table className="shadow min-w-full">
                    <thead className="bg-gray-200">
                      <tr>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xl font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Product
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xl font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Price
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xl font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Quantity
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xl font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Total
                        </th>
                        <th scope="col" className="relative px-6 py-3">
                          <span className="sr-only">Actions</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white">
                      {cart.map((item) => (
                        <tr key={item.id}>
                          <td
                            className="px-6 py-4 whitespace-nowrap h-40 cursor-pointer"
                            onClick={() =>
                              history.push(ROUTES.productDetail(item.id))
                            }
                          >
                            <div className="flex items-center">
                              <div className="flex-shrink-0 w-28">
                                <img
                                  className="h-24 rounded-md border-2"
                                  src={item.image}
                                  alt=""
                                />
                              </div>
                              <div className="ml-4">
                                <div className="text-xl font-medium text-palette-black">
                                  {item.name}
                                </div>
                                <span className="text-ss font-medium text-gray-600">
                                  Size: XS
                                </span>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-xl text-palette-black">
                              <Price
                                price={item.price}
                                offerPrice={item.discountedPrice}
                                textSize="text-xl"
                              />
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-xl text-palette-black text-l">
                              <button
                                className="w-10 mr-2 text-palette-plight font-semibold"
                                onClick={() =>
                                  dispatch(incrementQuantity(item.id))
                                }
                              >
                                +
                              </button>
                              <span className="w-10">{item.qty}</span>
                              <button
                                className="w-10 ml-2 text-palette-slight font-semibold"
                                onClick={() =>
                                  dispatch(decrementQuantity(item.id))
                                }
                              >
                                -
                              </button>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="px-2 inline-flex text-xl leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                              {getLocalPrice(
                                (
                                  item.qty *
                                  (item.discountedPrice || item.price)
                                ).toFixed(2)
                              )}
                            </span>
                          </td>
                          <td className="py-4 whitespace-nowrap text-sm text-palette-primary underline">
                            <button
                              onClick={() => dispatch(removeFromCart(item.id))}
                            >
                              <TrashIcon className="h-6 w-6" />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          <h2 className="my-5 text-right text-xl">
            Grand Total:{" "}
            <span className="font-semibold rounded-full bg-green-100 text-green-800">
              {cartTotal}
            </span>
          </h2>
        </>
      )}
      <div className="w-full flex items-center justify-center">
        <BackToProductButton goToPath={ROUTES.shop()} />
      </div>
    </div>
  );
};

export default CartPage;
