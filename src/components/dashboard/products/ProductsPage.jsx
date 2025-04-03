'use client';
import {useState} from 'react';
import {useRouter} from 'next/navigation';
import {DASHBOARD_ROUTES} from '@/utils/PATHS';
import useDebounce from '@/hooks/useDebounce';
import TopSection from '../../shared/TableComponents/TopSection';
import ProductTable from './ProductTable';

const ProductsPage = () => {
  const router = useRouter();

  const [searchQuery, setSearchQuery] = useState('');
  const [debounced, setDebounced] = useState(true);

  const debouncedSearch = useDebounce({value: searchQuery});

  const handleSearch = (query, debounce = true) => {
    setSearchQuery(query);
    setDebounced(debounce);
  };

  const onClickButton = () => router.push(DASHBOARD_ROUTES.products.addProduct);

  return (
    <div className='flex-center flex-col text-black gap-6'>
      <TopSection
        title='Products'
        setSearchQuery={handleSearch}
        onClickButton={onClickButton}
        buttonText='Add Product'
      />
      <ProductTable searchQuery={debounced ? debouncedSearch : searchQuery} />
    </div>
  );
};

export default ProductsPage;
