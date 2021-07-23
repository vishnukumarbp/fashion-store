import Link from "next/link";
import { ROUTES } from "../constants";

function BuyNowButton({ onClickFn }) {
  return (
    <Link href={ROUTES.cart()}>
      <button
        className="w-1/2 flex items-center justify-center rounded-md bg-palette-primary hover:bg-palette-pdark text-palette-white"
        type="button"
        onClick={onClickFn}
      >
        Buy now
      </button>
    </Link>
  );
}

export default BuyNowButton;
