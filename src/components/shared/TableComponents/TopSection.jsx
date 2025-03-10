
const TopSection = ({ title, searchComponent, buttonComponent }) => {

    return (
        <>
            <h1 className="text-4xl font-bold font-serif text-secondary mb-6">{title}</h1>
            <div className='flex flex-col sm:flex-row w-full justify-between items-center gap-3 px-4'>
                {searchComponent && searchComponent}
                {buttonComponent && buttonComponent}
            </div>
        </>
    )
}

export default TopSection