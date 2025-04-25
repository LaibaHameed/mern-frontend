'use client';

import {useState} from 'react';
import useDebounce from '@/hooks/useDebounce';
import TopSection from '../../shared/TableComponents/TopSection';
import FeedbackTable from '@/components/dashboard/feedbacks/FeedbackTable';

const FeedbacksPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [debounced, setDebounced] = useState(true);

  const debouncedSearch = useDebounce({value: searchQuery});

  const handleSearch = (query, debounce = true) => {
    setSearchQuery(query);
    setDebounced(debounce);
  };

  return (
    <div className='flex-center flex-col text-black gap-6'>
      <TopSection title='Feedbacks' setSearchQuery={handleSearch} />
      <FeedbackTable searchQuery={debounced ? debouncedSearch : searchQuery} />
    </div>
  );
};

export default FeedbacksPage;
