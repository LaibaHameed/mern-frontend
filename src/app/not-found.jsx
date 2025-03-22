import {ROOT_ROUTE} from '@/utils/PATHS';
import {redirect} from 'next/navigation';

const NotFound = () => redirect(ROOT_ROUTE);

export default NotFound;
