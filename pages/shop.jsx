import ListPageHeader from "../components/ListPageHeader";
import ProductCard from "../components/ProductCard";
import productsObject from "../repository/Products";

const ShopPage = ({ products }) => {
  return (
    <div className="container mx-auto pb-28">
      <ListPageHeader label="All Products" />
      <div className="flex flex-row flex-wrap w-full">
        {products.map((product) => (
          <div className="flex flex-col w-1/2">
            <ProductCard key={product.id} product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopPage;

export async function getStaticProps() {
  const products = await productsObject.allProducts;
  return { props: { products } };
}
