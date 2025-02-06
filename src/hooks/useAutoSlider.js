import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

const useAutoSlider = (nextSlideAction, intervalTime = 4000) => {
    const dispatch = useDispatch();

    useEffect(() => {
        const interval = setInterval(() => {
            dispatch(nextSlideAction());
        }, intervalTime);

        return () => clearInterval(interval); 
    }, [dispatch, nextSlideAction, intervalTime]);
};

export default useAutoSlider;
