import {useState} from 'react';
import ProductQuantity from './ProductQuantity';
import {useDispatch, useSelector} from 'react-redux';
import {
  getCartItems,
  actions as productActions,
} from '@/redux/slices/product/productsSlice';

const ProductDetails = ({product}) => {
  const [quantity, setQuantity] = useState(1);
  const cartItems = useSelector(getCartItems);
  const dispatch = useDispatch();

  if (!product) {
    return <p className="h-1/3 flex-center text-lg">Product not found.</p>;
  }

  return (
    <div>
      <div className="space-y-4">
        <h2 className="md:text-3xl text-xl font-bold">{product.name}</h2>

        <p className="md:text-2xl text-xl font-semibold text-primary">
          Rs. {product.price.toFixed(2)} PKR
        </p>

        <p className="text-gray-500 my-5">{product.description}</p>

        <div className="text-sm space-y-1">
          <p>
            <span className="text-gray-500 font-light mr-2">Product Code:</span>
            {product.code}
          </p>
        </div>
        <p className="text-sm text-gray-500 capitalize">
          <span className="ml-2">Brand:</span> {product.brand}
        </p>
        <p className="text-sm text-gray-500 capitalize">
          <span className="ml-2">Color:</span> {product.color}
        </p>

        <ProductQuantity quantity={quantity} setQuantity={setQuantity} />

        {!!cartItems.find((item) => item._id === product._id) ? (
          <button
            onClick={() => dispatch(productActions.deleteFromCart(product._id))}
            className="rounded-full cursor-pointer bg-error sm:px-7 px-10 py-3 tracking-wider text-white shadow hover:bg-error-hover focus:outline-none sm:w-auto flex-center gap-2 animate"
          >
            Remove From Cart
          </button>
        ) : (
          <button
            onClick={() =>
              dispatch(productActions.addToCart({...product, quantity}))
            }
            className="rounded-full cursor-pointer bg-primary sm:px-7 px-10 py-3 tracking-wider text-white shadow hover:bg-primary-hover focus:outline-none sm:w-auto flex-center gap-2 animate"
          >
            Add To Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;
