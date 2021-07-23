import BackToProductButton from "./BackToProductButton";
import ProductInfo from "./ProductInfo";
import ProductForm from "./ProductForm";

function ProductDetails({ product }) {
  return (
    <div className="flex flex-col justify-between h-full w-full md:w-1/2 max-w-xs mx-auto space-y-4 min-h-128">
      <BackToProductButton />
      <ProductInfo product={product} />
      <ProductForm product={product} />
    </div>
  );
}

export default ProductDetails;
