import { HeartIcon } from "@heroicons/react/outline";

function FavButton() {
  return (
    <button
      className="flex-none flex items-center justify-center w-9 h-9 rounded-full bg-palette-plightest hover:bg-palette-plighter text-palette-primary"
      type="button"
      aria-label="like"
    >
      <HeartIcon className="w-6 h-6" />
    </button>
  );
}

export default FavButton;
