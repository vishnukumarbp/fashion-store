import Link from "next/link";
import { ArrowLeftIcon } from "@heroicons/react/outline";
import { ROUTES } from "../constants";
import { useRouter } from "next/router";

function BackToProductButton({ goToPath }) {
  const history = useRouter();
  const goBack = () => (goToPath ? history.push(goToPath) : history.back());
  return (
    <a
      onClick={goBack}
      aria-label="back-to-products-list"
      className="w-44 cursor-pointer border border-palette-primary text-palette-primary text-lg font-primary font-semibold pt-1.5 pb-1 leading-relaxed flex 
      justify-center items-center focus:ring-1 hover:ring-palette-dark focus:ring-palette-dark focus:outline-none w-full hover:text-palette-pdark rounded-sm"
    >
      <ArrowLeftIcon className="w-4 mr-2 inline-flex" />
      Back To List
    </a>
  );
}

export default BackToProductButton;
