import { HTTP_VERBS } from "../../../constants";
import productsObject from "../../../repository/Products";

export default function handler(req, res) {
  if (req.method !== HTTP_VERBS.GET) {
    res.setHeader("Allow", [HTTP_VERBS.GET]);
    res.status(405).json({ message: `Method ${req.method} is not allowed` });
  } else {
    const products = productsObject.allProducts;
    res.status(200).json(products);
  }
}
