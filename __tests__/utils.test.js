import IndexedData from "../repository/indexedData";
import {
  getDiscountedPrice,
  getCartSubTotal,
  getMatchingProductIds,
} from "../utils";

describe("Utils => Utility functions", () => {
  describe("Utils => getDiscountedPrice", () => {
    it("Should return original price if price/discount is not an number", () => {
      expect(getDiscountedPrice("abc", "xyz")).toEqual("abc");
    });

    it("Should return original price if discount is 0", () => {
      expect(getDiscountedPrice(1000)).toEqual(1000);
    });

    it("Should return price after applying discount", () => {
      const discountedPrice = getDiscountedPrice(2000, 10);
      expect(discountedPrice).toEqual("1799.99");
    });
  });
  describe("Utils => getCartSubTotal", () => {
    it("Should return 0 if no items in the cart", () => {
      expect(getCartSubTotal([])).toEqual(0);
    });

    it("Should return total cart value from discounted price", () => {
      const total = getCartSubTotal([
        { qty: 2, discountedPrice: 1000, price: 2000 },
        { qty: 5, discountedPrice: 1000, price: 2000 },
      ]);
      expect(total).toEqual(7000);
    });

    it("Should return total cart value from discounted or original price", () => {
      const total = getCartSubTotal([
        { qty: 2, price: 2000 },
        { qty: 5, discountedPrice: 1000, price: 2000 },
      ]);
      expect(total).toEqual(9000);
    });
  });

  describe("Utils => getMatchingProductIds", () => {
    it("Should return empty list of ids if indexed data is empty", async () => {
      const result = await getMatchingProductIds("test");
      expect(result).toEqual([]);
    });

    it("Should return ids of matching product from indexed data", async () => {
      IndexedData.startIndexing();
      const result = await getMatchingProductIds("shirt");
      expect(result).not.toBeNull();
      expect(result).toHaveLength(6);
    });
  });
});
