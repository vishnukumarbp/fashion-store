import faker from "faker";
import { getDiscountedPrice } from "../utils";

function Product(json) {
  const discount = faker.datatype.number({ min: 10, max: 50 });
  this.id = json.id;
  this.name = json.name;
  this.category = json.category;
  this.image = json.image;
  this.images = json.images;
  this.stock = json.stock;
  this.price = json.price;
  this.discount = discount;
  this.discountedPrice = getDiscountedPrice(json.price, discount);
  this.description = faker.commerce.productDescription();
}

export default Product;
