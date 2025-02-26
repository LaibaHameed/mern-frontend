'use client';

import {useDispatch} from 'react-redux';
import {logoutUser} from '@/redux/slices/user/userSlice';
import ThemeButton from '../shared/buttons/ThemeButton';

const Dashboard = () => {
  const dispatch = useDispatch();

  return (
    <div className="flex-center flex-col text-black">
      Dashboard <br />
      <ThemeButton
        buttonText="Logout"
        handleClick={() => dispatch(logoutUser())}
      />
    </div>
  );
};

export default Dashboard;
