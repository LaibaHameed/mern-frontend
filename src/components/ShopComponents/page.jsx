'use client';
import { useState } from 'react';
import Container from '../shared/common/Container';
import ProductsList from './ProductsList';
import useDebounce from '@/hooks/useDebounce';
import SideFilters from './sideFilters/page';

const MainContent = () => {
  const [sortOption, setSortOption] = useState("default");
  const [totalProducts, setTotalProducts] = useState(0); 
  const [searchQuery, setSearchQuery] = useState("");
  const [debounced, setDebounced] = useState(true);
  const debouncedSearch = useDebounce({ value: searchQuery });

  const handleSearch = (query, debounce = true) => {
    setSearchQuery(query);
    setDebounced(debounce);
  };

  return (
    <div className="flex-center sm:mx-6 mb-12">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="md:block col-span-2 md:col-span-1">
            <SideFilters setSearchQuery={handleSearch} setSortOption={setSortOption} totalProducts={totalProducts} />
          </div>

          <div className="col-span-2 md:col-span-3">
            <ProductsList 
              searchQuery={debounced ? debouncedSearch : searchQuery} 
              sortOption={sortOption} 
              setTotalProducts={setTotalProducts}
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default MainContent;
