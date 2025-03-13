import ThemeButton from '../buttons/ThemeButton';

const Pagination = ({ page, totalPages, nextPage, prevPage }) => {
    return (
        <div className="flex-center my-12">
            <ThemeButton
                buttonText="Previous"
                styles="text-white bg-primary hover:bg-primary-hover text-sm"
                handleClick={prevPage}
                disabled={page === 1}
            />
            <span className="text-sm mx-12">Page {page} of {totalPages}</span>
            <ThemeButton
                buttonText="Next"
                styles="text-white bg-primary hover:bg-primary-hover text-sm"
                handleClick={nextPage}
                disabled={page === totalPages}
            />
        </div>
    );
};

export default Pagination;
