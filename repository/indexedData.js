import productData from "./products.json";

class IndexedData {
  static indexedData = {};

  static startIndexing() {
    productData.forEach((product) => {
      IndexedData.indexedData[product.id] =
        `${product.name} ${product.category} ${product.price}`.toLowerCase();
    });
  }
}

export default IndexedData;
