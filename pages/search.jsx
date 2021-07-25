import ListPageHeader from "../components/ListPageHeader";
import ProductCard from "../components/ProductCard";
import productsObject from "../repository/Products";
import { getMatchingProductIds } from "../utils";

const ShopPage = ({ products, keyword }) => {
  return (
    <div className="container mx-auto pb-28">
      <ListPageHeader label={`Results for ${keyword}`} />
      <div className="flex flex-row flex-wrap w-full">
        {products.length ? (
          products.map((product) => (
            <div className="flex flex-col w-1/2">
              <ProductCard key={product.id} product={product} />
            </div>
          ))
        ) : (
          <p className="w-full h-24 flex items-center justify-center text-2xl">
            🙁 No product found
          </p>
        )}
      </div>
    </div>
  );
};

export default ShopPage;

export async function getServerSideProps(ctx) {
  const searchKeyWord = ctx.query.q;
  const productIds = await getMatchingProductIds(searchKeyWord);
  const products = await productsObject.getProductsById(productIds);
  return { props: { products: products, keyword: searchKeyWord } };
}
