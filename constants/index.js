export const HTTP_VERBS = {
  GET: "GET",
  POST: "POST",
  DELETE: "DELETE",
  PUT: "PUT",
};

export const CURRENCY = "₹";

export const ROUTES = {
  home: () => "/",
  shop: () => "/shop",
  productDetail: (id) => `/product-details/${id}`,
  category: (category) => `/category/${category}`,
  cart: () => "/cart",
  featured: () => "/featured",
  search: (keyword) => `/search?q=${keyword}`,
};
