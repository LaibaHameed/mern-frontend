'use client'
import { useDispatch } from 'react-redux';
import { logout } from '@/redux/slices/authSlice';
import { useRouter } from 'next/navigation';

const LogoutButton = () => {
    const dispatch = useDispatch();
    const router = useRouter()

    const handleLogout = () => {
        dispatch(logout()); 
        localStorage.removeItem('token');
        router.push('/')
    };

    return (
        <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-2 rounded">
            Logout
        </button>
    );
};

export default LogoutButton;
