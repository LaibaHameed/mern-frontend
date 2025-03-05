'use client';

import {useEffect} from 'react';
import {useSelector} from 'react-redux';
import {useRouter} from 'next/navigation';
import useRouteType from '@/hooks/useRouterType';
import {getCurrentUser} from '@/redux/slices/user/userSlice';
import {AUTH_ROUTES, DASHBOARD_ROUTES} from '@/utils/PATHS';

const AuthGuard = ({children}) => {
  const {isAuthRoute, isDashboardRoute} = useRouteType();
  const router = useRouter();
  const currentUser = useSelector(getCurrentUser);
  const isLoggedIn = Boolean(currentUser?._id);

  useEffect(() => {
    if (!isLoggedIn && isDashboardRoute) {
      router.push(AUTH_ROUTES.login);
    } else if (isLoggedIn && isAuthRoute) {
      router.push(DASHBOARD_ROUTES.home);
    }
  }, [isLoggedIn, isAuthRoute, isDashboardRoute, router]);

  return children;
};

export default AuthGuard;
