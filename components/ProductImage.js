import { useState, useRef } from "react";
import Image from "next/image";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline";

function ProductImage({ imagesList = [] }) {
  const images = [...imagesList, ...imagesList, ...imagesList];
  const [mainImg, setMainImg] = useState(images[0]);
  const ref = useRef(null);

  function scroll(scrollOffset) {
    ref.current.scrollLeft += scrollOffset;
  }

  if (!mainImg || !images.length) {
    return null;
  }

  return (
    <div className="w-full md:w-1/2 max-w-md border border-palette-lighter bg-white rounded shadow-lg">
      <div className="relative" style={{ height: "30rem" }}>
        <Image
          src={mainImg}
          alt=""
          layout="fill"
          className="transform duration-500 ease-in-out hover:scale-105"
          objectFit="contain"
        />
      </div>
      <div className="relative flex border-t border-palette-lighter">
        <button
          aria-label="left-scroll"
          className="h-32 bg-palette-plightest hover:bg-palette-plighter absolute top-px left-0 z-10 opacity-75"
          onClick={() => scroll(-300)}
        >
          <ChevronLeftIcon className="w-4 mx-1 text-palette-primary" />
        </button>
        <div
          ref={ref}
          style={{ scrollBehavior: "smooth" }}
          className="flex space-x-1 w-full overflow-auto border-t border-palette-lighter"
        >
          {images.map((imgItem, index) => (
            <button
              key={index}
              className="relative w-20 h-32 flex-shrink-0 rounded-sm "
              onClick={() => setMainImg(imgItem)}
            >
              <Image
                src={imgItem}
                alt=""
                layout="fill"
                className=""
                objectFit="contain"
              />
            </button>
          ))}
        </div>
        <button
          aria-label="right-scroll"
          className="h-32 bg-palette-plightest hover:bg-palette-plighter absolute top-px right-0 z-10 opacity-75"
          onClick={() => scroll(300)}
        >
          <ChevronRightIcon className="w-4 mx-1 text-palette-primary" />
        </button>
      </div>
    </div>
  );
}

export default ProductImage;
