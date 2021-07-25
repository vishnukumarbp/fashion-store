import faker from "faker";
import { CURRENCY } from "../constants";
import IndexedData from "../repository/indexedData";

export const getFakeProductName = () => faker.commerce.productName();
export const getFakePrice = () => faker.commerce.price(1000, 1500);
export const getFakeImageUrl = () => faker.image.imageUrl();

export const getLocalPrice = (price) => CURRENCY + " " + price;
export const getDiscountedPrice = (price, discount = 0) => {
  if (isNaN(discount) || isNaN(price)) {
    return price;
  }
  if (discount === 0) {
    return price;
  }
  return (Math.round(((100 - discount) * price) / 100) - 0.01).toFixed(2);
};

export const getCartSubTotal = (cart = []) => {
  if (cart.length === 0) {
    return 0;
  } else {
    const totalPrice = cart.reduce(
      (accumulator, item) =>
        accumulator +
        parseInt(item.qty) * parseFloat(item.discountedPrice || item.price),
      0
    );
    return Math.round(totalPrice * 100) / 100;
  }
};

export const toFixedLen = (number, len = 2) => parseFloat(number).toFixed(len);

export const getMatchingProductIds = async (keyword) => {
  const ids = [];
  if (Object.keys(IndexedData.indexedData).length === 0) {
    return ids;
  }
  for (let id in IndexedData.indexedData) {
    const data = IndexedData.indexedData[id];
    if (
      typeof data === "string" &&
      data.search((keyword || "").toLowerCase()) !== -1
    ) {
      ids.push(id);
    }
  }
  return ids;
};
