import { useRouter } from "next/router";
import ListPageHeader from "../../components/ListPageHeader";
import ProductCard from "../../components/ProductCard";
import productsObject from "../../repository/Products";

const FeaturedPage = ({ products }) => {
  const router = useRouter();
  return (
    <div className="container mx-auto pb-28">
      <ListPageHeader label="Featured Products" />
      <div className="flex flex-row flex-wrap w-full">
        {products.map((product) => (
          <div key={product.id} className="flex flex-col w-1/2">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedPage;

export async function getServerSideProps() {
  const products = await productsObject.featuredProducts;
  return { props: { products } };
}
