import productsObject from "../../../repository/Products";

export default function handler(req, res) {
  if (req.method !== "GET") {
    res.setHeader("Allow", ["GET"]);
    res.status(405).json({ message: `Method ${req.method} is not allowed` });
  } else {
    const products = productsObject.getProductsByCategory(req.query.category);
    res.status(200).json(products);
  }
}
