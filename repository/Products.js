import Product from "./Product";
import productData from "./products.json";

class Products {
  constructor() {
    this.products = [];
    this.productsById = {};
    if (productData.length) {
      productData.forEach((product) => {
        const data = new Product(product);
        this.products.push(data);
        this.productsById[product.id] = data;
      });
    }
  }

  get allProducts() {
    return JSON.parse(JSON.stringify(this.products));
  }

  get featuredProducts() {
    return JSON.parse(
      JSON.stringify(this.products.filter((product) => product.discount > 20))
    );
  }

  getProduct(id) {
    const product =
      this.products.find((product) => product.id === Number(id)) || {};
    return { ...product };
  }

  getProductsById(ids = []) {
    const result = [];
    ids.forEach((id) => {
      if (this.productsById[id]) {
        result.push(this.productsById[id]);
      }
    });
    return JSON.parse(JSON.stringify(result));
  }

  getProductsByCategory(category) {
    const products = this.products.filter(
      (product) => product.category === category
    );
    return JSON.parse(JSON.stringify(products));
  }
}

export default new Products();
