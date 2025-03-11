"use client";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { GoSearch } from "react-icons/go";
import { FiX } from "react-icons/fi";
import SearchInput from "../inputs/SearchInput";

const TableSearch = ({ setSearchQuery }) => {
    const { control, handleSubmit, reset, watch } = useForm();

    const searchValue = watch("search", "");
    const [inputValue, setInputValue] = useState("");

    useEffect(() => {
        setInputValue(searchValue);
    }, [searchValue]);

    const onSubmit = (data) => {
        setSearchQuery(data.search.trim(), false);
    };

    const handleClear = () => {
        reset();
        setInputValue("");
        setSearchQuery("", false);
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="relative flex items-center w-full max-w-sm px-3 py-2 bg-white border-2 border-gray-100"
        >
            <SearchInput name={'search'} control={control} placeholder={'Search Product...'} setSearchQuery={setSearchQuery} />
            <div className="flex items-center gap-1">
                {inputValue.length > 0 && (
                    <button type="button" onClick={handleClear} className="focus:outline-none">
                        <FiX className="text-gray-500 hover:text-secondary cursor-pointer" size={20} />
                    </button>
                )}
                <button type="submit" className="focus:outline-none">
                    <GoSearch className="text-gray-500 hover:text-secondary cursor-pointer" size={20} />
                </button>
            </div>
        </form>
    );
};

export default TableSearch;