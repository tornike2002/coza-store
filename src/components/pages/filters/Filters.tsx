import { Fragment } from "react";
const Filters: React.FC = () => {
  return (
    <Fragment>
      <div className="container flex items-center justify-center py-5  text-navlinks flex-wrap gap-5">
        <button
          type="button"
          className="hover:border-b font-Poppins text-sm
           hover:border-black transition-all duration-500 ease"
        >
          All Products
        </button>
        <button
          type="button"
          className="hover:border-b font-Poppins text-sm
           hover:border-black transition-all duration-500 ease"
        >
          Women
        </button>
        <button
          type="button"
          className="hover:border-b font-Poppins text-sm
           hover:border-black transition-all duration-500 ease"
        >
          Men
        </button>
        <button
          type="button"
          className="hover:border-b font-Poppins text-sm
           hover:border-black transition-all duration-500 ease"
        >
          Bag
        </button>
        <button
          type="button"
          className="hover:border-b font-Poppins text-sm
           hover:border-black transition-all duration-500 ease"
        >
          Shoes
        </button>
        <button
          type="button"
          className="hover:border-b font-Poppins text-sm
           hover:border-black transition-all duration-500 ease"
        >
          Watches
        </button>
      </div>
    </Fragment>
  );
};

export default Filters;
