'use client';

import { useDispatch } from 'react-redux';
import { logoutUser } from '@/redux/slices/user/userSlice';
import ThemeButton from '@/components/shared/buttons/ThemeButton';
import Container from '@/components/shared/Container';
import Link from 'next/link';
const Header = () => {

  const dispatch = useDispatch();
  return (
    <div>
      {/* Main Header */}
      <div className="flex-center shadow-md">
        <Container>
          <div className="flex-center justify-between py-6 sm:margin-lg">
            {/* Logo */}
            <Link href={'/dashboard'}>
              <h1 className='text-2xl text-primary font-serif font-bold cursor-pointer'>Admin Dashboard</h1>
            </Link>

            <ThemeButton
              buttonText="Logout"
              handleClick={() => dispatch(logoutUser())}
              styles={'bg-red-600 hover:bg-red-700'}
            />
          </div>
        </Container>
      </div>
    </div>
  );
}

export default Header