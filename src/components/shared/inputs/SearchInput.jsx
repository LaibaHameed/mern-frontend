import { Controller } from 'react-hook-form';

const SearchInput = ({placeholder, name, control, setSearchQuery}) => {
    return (
        <Controller
            name={name}
            control={control}
            defaultValue=""
            render={({ field }) => (
                <input
                    {...field}
                    type="text"
                    placeholder={placeholder}
                    className="w-full bg-transparent outline-none text-gray-600 border-none text-sm"
                    onChange={(e) => {
                        field.onChange(e);
                        setSearchQuery(e.target.value, true);
                    }}
                />
            )}
        />
    )
}

export default SearchInput