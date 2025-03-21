import {IoMdAdd} from 'react-icons/io';
import {HiOutlineMinus} from 'react-icons/hi';

const ProductQuantity = ({quantity, setQuantity}) => {
  const increaseQuantity = () => setQuantity((prev) => prev + 1);
  const decreaseQuantity = () =>
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-5 sm:space-y-0 space-y-5 my-10">
      <div className="flex items-center">
        <button
          className="rounded-l-full py-3 px-4 text-secondary border border-primary text-2xl cursor-pointer"
          onClick={decreaseQuantity}
        >
          <HiOutlineMinus />
        </button>
        <p className="py-3 flex-center w-20 border text border-primary">
          {quantity}
        </p>
        <button
          className="rounded-r-full py-3 px-4 text-secondary border border-primary text-2xl cursor-pointer"
          onClick={increaseQuantity}
        >
          <IoMdAdd />
        </button>
      </div>
    </div>
  );
};

export default ProductQuantity;
