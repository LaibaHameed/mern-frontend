'use client';
import {useState} from 'react';
import {GoSearch} from 'react-icons/go';
import {FiX} from 'react-icons/fi';

const TableSearch = ({setSearchQuery}) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e) => {
    setInputValue(e.target.value);
    setSearchQuery(e.target.value, true);
  };

  const handleClear = () => {
    setInputValue('');
    setSearchQuery('', false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchQuery(inputValue.trim(), false);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className='relative flex items-center w-full max-w-sm px-3 py-2 bg-white border-2 border-gray-100'
    >
      <input
        type='text'
        placeholder='Search'
        value={inputValue}
        onChange={handleChange}
        className='w-full bg-transparent outline-none text-gray-600 border-none text-xs sm:text-sm'
      />
      <div className='flex items-center gap-1'>
        {inputValue && (
          <button
            type='button'
            onClick={handleClear}
            className='focus:outline-none'
          >
            <FiX
              className='text-gray-500 hover:text-secondary cursor-pointer'
              size={20}
            />
          </button>
        )}
        <button type='submit' className='focus:outline-none'>
          <GoSearch
            className='text-gray-500 hover:text-secondary cursor-pointer'
            size={20}
          />
        </button>
      </div>
    </form>
  );
};

export default TableSearch;
