import { useRouter } from "next/router";
import ListPageHeader from "../../components/ListPageHeader";
import ProductCard from "../../components/ProductCard";
import productsObject from "../../repository/Products";

const CategoryPage = ({ products }) => {
  const router = useRouter();
  return (
    <div className="container mx-auto pb-28">
      <ListPageHeader label={`Products for ${router.query.category}`} />
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

export default CategoryPage;

export async function getServerSideProps(ctx) {
  const category = ctx.query.category;
  const products = await productsObject.getProductsByCategory(category);
  return { props: { products } };
}
