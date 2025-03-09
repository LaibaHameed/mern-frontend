import { IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5';
// import PropTypes from 'prop-types';
import ThemeButton from '../buttons/ThemeButton';

const Pagination = ({ handleNextPage, handlePreviousPage, currentPage, totalPages }) => {
    return (
        <div className="flex-center my-12">
            <ThemeButton
                styles="text-white bg-primary hover:bg-primary-hover text-sm "
                onClick={handlePreviousPage}
                disabled={currentPage === 1}
                buttonText={<><IoChevronBackOutline /> Previous</>}
            />
                
            <span className="text-sm mx-12">Page {currentPage} of {totalPages}</span>
            <ThemeButton
                styles="text-white bg-primary hover:bg-primary-hover text-sm "
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
                buttonText={<><IoChevronForwardOutline /> Next</>}
            />
        </div>
    );
};

export default Pagination;

// Pagination.propTypes = {
//     handleNextPage: PropTypes.func.isRequired,
//     handlePreviousPage: PropTypes.func.isRequired,
//     currentPage: PropTypes.number.isRequired,
//     totalPages: PropTypes.number.isRequired,
// };
