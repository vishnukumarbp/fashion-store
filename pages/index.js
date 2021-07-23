import CategoryBlock from "../components/CategoryBlock";
import HomePageBanner from "../components/HomePageBanner";
import ProductCaurosel from "../components/ProductCaurosel";
import productsObject from "../repository/Products";

function HomePage({ products }) {
  return (
    <main className="relative pb-28 min-h-full">
      <HomePageBanner />
      <CategoryBlock />
      <ProductCaurosel products={products} />
    </main>
  );
}
export default HomePage;

export async function getStaticProps() {
  const products = await productsObject.featuredProducts;
  return { props: { products: (products || []).slice(0, 5) } };
}
