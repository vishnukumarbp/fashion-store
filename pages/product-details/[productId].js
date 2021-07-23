import ProductSection from "../../components/ProductSection";
import productsObject from "../../repository/Products";

const ProductDetail = ({ product }) => {
  return (
    <div className="container mx-auto mt-6 pb-28">
      <ProductSection product={product} />
    </div>
  );
};

export default ProductDetail;

export async function getServerSideProps(ctx) {
  const productId = ctx.query.productId;
  const product = await productsObject.getProduct(productId);
  return { props: { product: product } };
}
