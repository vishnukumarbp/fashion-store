import Price from "./Price";

function ProductInfo({ product }) {
  return (
    <div className=" font-primary">
      <h1 className="leading-relaxed font-extrabold text-3xl text-palette-primary py-2 sm:py-4">
        {product.name}
      </h1>
      <p className="font-medium text-lg">{product.description}</p>
      <div className="text-xl text-palette-primary font-medium py-4 px-1">
        <Price
          price={product.price}
          offerPrice={product.discountedPrice || 0}
          textSize="text-4xl"
        />
      </div>
    </div>
  );
}

export default ProductInfo;
