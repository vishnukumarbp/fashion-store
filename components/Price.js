import { CURRENCY } from "../constants";

function Price({
  price,
  offerPrice,
  textSize = "text-2xl",
  currency = CURRENCY,
}) {
  return (
    <>
      {currency}
      {offerPrice > 0 && price > offerPrice ? (
        <>
          <span className="pr-2 line-through">{price}</span>
          <span className={textSize}>{offerPrice}</span>
        </>
      ) : (
        <span className={textSize}>{price}</span>
      )}
    </>
  );
}

export default Price;
