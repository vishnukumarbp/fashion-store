import faker from "faker";
import { ArrowRightIcon } from "@heroicons/react/outline";

function CategoryBlock() {
  return (
    <div className="container mx-auto px-6 my-10">
      <div
        className="h-64 rounded-md overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8d29tZXMlMjBjbG90aGluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1480&h=200&q=60')`,
        }}
      >
        <div className="bg-gray-900 bg-opacity-50 flex items-center h-full">
          <div className="px-10 max-w-xl">
            <h2 className="text-2xl text-palette-white font-semibold">
              Women's section
            </h2>
            <p className="mt-2 text-gray-400">
              {faker.commerce.productAdjective()}
            </p>
            <button className="flex items-center mt-4 px-3 py-2 bg-palette-secondary text-palette-white text-sm uppercase font-medium rounded hover:bg-palette-secondary focus:outline-none focus:bg-palette-secondary">
              <span>Shop Now</span>
              <ArrowRightIcon className="h-5 w-5 mx-2" />
            </button>
          </div>
        </div>
      </div>
      <div className="md:flex mt-8 md:-mx-4">
        <div
          className="w-full h-64 md:mx-4 rounded-md overflow-hidden bg-cover bg-center md:w-1/2"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=980&h=200&q=80')`,
          }}
        >
          <div className="bg-gray-900 bg-opacity-50 flex items-center h-full">
            <div className="px-10 max-w-xl">
              <h2 className="text-2xl text-palette-white font-semibold">
                Men's section
              </h2>
              <p className="mt-2 text-gray-400">
                {faker.commerce.productAdjective()}
              </p>
              <button className="flex items-center mt-4 text-palette-white text-sm uppercase font-medium rounded hover:underline focus:outline-none">
                <span>Shop Now</span>
                <ArrowRightIcon className="h-5 w-5 mx-2" />
              </button>
            </div>
          </div>
        </div>
        <div
          className="w-full h-64 mt-8 md:mx-4 rounded-md overflow-hidden bg-cover bg-center md:mt-0 md:w-1/2"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1528145203756-0ed7f01ee120?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=980&h=200&q=80')`,
          }}
        >
          <div className="bg-gray-900 bg-opacity-50 flex items-center h-full">
            <div className="px-10 max-w-xl">
              <h2 className="text-2xl text-palette-white font-semibold">
                Kid's section
              </h2>
              <p className="mt-2 text-gray-400">
                {faker.commerce.productAdjective()}
              </p>
              <button className="flex items-center mt-4 text-palette-white text-sm uppercase font-medium rounded hover:underline focus:outline-none">
                <span>Shop Now</span>
                <ArrowRightIcon className="h-5 w-5 mx-2" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CategoryBlock;
