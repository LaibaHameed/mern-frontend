import Reviews from './Reviews';

const ProductTabs = ({product}) => {
  return (
    <div className="py-12">
      <div className="w-full flex-center tracking-tighter">
        <h1
          className={`group relative text-xl sm:text-2xl md:!text-4xl font-semibold font-serif my-4 tracking-tighter cursor-pointer sm:mx-6 mx-2 transition-colors duration-500 hover:text-primary  
             'text-secondary'
          `}
        >
          Reviews ({product.reviews || 0})
        </h1>
      </div>

      <div className="my-12">
        <Reviews />
      </div>
    </div>
  );
};

export default ProductTabs;
