'use client'
import RadioInputField from '@/components/shared/inputs/RadioInputField';
import { SORTING_OPRIONS } from '@/constants/general';
import { useForm } from 'react-hook-form';

const SortingOptions = ({ setSortOption, sortOption, setIsModalOpen }) => {

    const { control, handleSubmit, reset } = useForm({
        defaultValues: {
            sortOption: sortOption || "default",
        },
    });

    const onSubmit = (data) => {
        setSortOption(data.sortOption);
        if (setIsModalOpen) {
            setIsModalOpen(false);
        }
    };

    const ResetAllFilters = () => {
        reset({ sortOption: "default" });
        setSortOption("default");
        if (setIsModalOpen) {
            setIsModalOpen(false);
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 bg-white py-2 w-full">

                <RadioInputField
                    label=""
                    name="sortOption"
                    control={control}
                    options={SORTING_OPRIONS}
                />

                {/* Apply Button */}
                <button
                    type="submit"
                    className="mt-2 px-6 py-2 w-fit bg-primary hover:bg-primary-hover text-white text-sm rounded-full animate cursor-pointer"
                >
                    Apply Filter
                </button>

                {/* Reset Button */}
                <button
                    type="button"
                    className="px-6 py-2 w-fit bg-primary hover:bg-primary-hover text-white text-sm rounded-full animate cursor-pointer"
                    onClick={ResetAllFilters}
                >
                    Reset All Filters
                </button>
            </form>
        </>
    );
};

export default SortingOptions;
