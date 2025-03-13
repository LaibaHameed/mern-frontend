import ThemeButton from "../buttons/ThemeButton"
import TableSearch from "./TableSearch"

const TopSection = ({ title, onClickButton, setSearchQuery, isActionButtonRequired }) => {

    return (
        <>
            <h1 className="text-4xl font-bold font-serif text-secondary mb-6">{title}</h1>
            <div className='flex flex-col sm:flex-row w-full justify-between items-center gap-3 px-4'>
                <TableSearch setSearchQuery={setSearchQuery} />
                {isActionButtonRequired && <ThemeButton
                    buttonText="Add Product"
                    handleClick={onClickButton}
                    styles="bg-primary hover:bg-primary-hover text-sm py-2"
                />}
            </div>
        </>
    )
}

export default TopSection