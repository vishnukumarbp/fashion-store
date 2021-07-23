import { useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import {
  LocationMarkerIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";
import { ROUTES } from "../constants";

function Header() {
  const cart = useSelector((state) => state.cart);
  const searchInputRef = useRef(null);
  const history = useRouter();

  // Getting the count of items
  const getItemsCount = () => {
    return cart.reduce((accumulator, item) => accumulator + item.qty, 0);
  };

  const onSearch = (event) => {
    event.preventDefault();
    const query = searchInputRef.current.value;
    if (query) {
      history.push(ROUTES.search(query));
    }
  };

  return (
    <header className="bg-white pb-3 relative md:sticky top-0 z-10 shadow-md">
      <div className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <div className="hidden w-full text-gray-600 md:flex md:items-center">
            <LocationMarkerIcon className="h-5 w-5" />
            <span className="mx-1 text-sm">IN</span>
          </div>
          <div className="w-full md:text-center text-2xl coloured-logo">
            FashionStore
          </div>

          <div className="flex items-center justify-end w-full">
            <div className="relative w-full mr-10">
              <form onSubmit={onSearch}>
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
                  <SearchIcon className="h-5 w-5 text-gray-500" />
                </span>

                <input
                  className="w-full border rounded-md pl-10 pr-4 py-2 focus:border-blue-500 focus:outline-none focus:shadow-outline"
                  type="sumbit"
                  name="search"
                  placeholder="Search"
                  ref={searchInputRef}
                />
              </form>
            </div>

            <Link href={ROUTES.cart()}>
              <button
                className="text-gray-600 focus:outline-none mx-4 sm:mx-0 flex items-center"
                title="Shopping Cart"
              >
                <ShoppingCartIcon className="h-5 w-5" />
                <span className="text-palette-primary">{` (${getItemsCount()})`}</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
      <nav className="w-full flex justify-center items-center mt-4">
        <div className="w-full px-5 lg:w-1/2 max-w-xl flex flex-row justify-between">
          <span className="nav-link-0">
            <Link href={ROUTES.home()}>Home</Link>
          </span>

          <span className="nav-link-0">
            <Link href={ROUTES.shop()}>Shop</Link>
          </span>

          <span className="nav-link-0">
            <Link href={ROUTES.category("womens")}>For Women</Link>
          </span>
          <span className="nav-link-0">
            <Link href={ROUTES.category("mens")}>For Men</Link>
          </span>
          <span className="nav-link-0">
            <Link href={ROUTES.category("kids")}>For Kids</Link>
          </span>
        </div>
      </nav>
    </header>
  );
}

export default Header;
