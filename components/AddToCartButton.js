function AddToCartButton({ onClickFn }) {
  return (
    <button
      className="w-1/2 flex items-center justify-center rounded-md bg-palette-plightest hover:bg-palette-plighter text-palette-primary"
      type="button"
      onClick={onClickFn}
    >
      Add to Cart
    </button>
  );
}

export default AddToCartButton;
