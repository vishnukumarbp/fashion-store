import ProductImage from "./ProductImage";
import ProductDetails from "./ProductDetails";

function ProductSection({ product = {} }) {
  return (
    <div className="flex flex-col justify-center items-center md:flex-row md:items-start space-y-8 md:space-y-0 md:space-x-4 lg:space-x-8 max-w-8xl w-11/12 mx-auto">
      <ProductImage imagesList={product.images} />
      <ProductDetails product={product} />
    </div>
  );
}

export default ProductSection;
