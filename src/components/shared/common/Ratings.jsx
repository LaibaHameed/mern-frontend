import {Rating} from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';

const Ratings = ({rating, setRating, isDisabled, maxWidth = 180}) => {
  return (
    <Rating
      style={{maxWidth}}
      halfFillMode={true}
      className="stars-rating"
      radius="large"
      value={rating}
      onChange={setRating}
      readOnly={isDisabled}
    />
  );
};

export default Ratings;
