import Link from 'next/link';
import {usePathname} from 'next/navigation';
import {GoHomeFill} from 'react-icons/go';
import {FiAlignJustify} from 'react-icons/fi';
import {DASHBOARD_ROOT, ROOT_ROUTE} from '@/utils/PATHS';

const Header = ({toggleSidebar}) => {
  const pathname = usePathname();
  const pathSegments = pathname.split('/').filter((segment) => segment);

  const currentSegment = pathSegments[1];

  return (
    <div className='flex items-center justify-between py-6 px-6 mb-10 bg-slate-100 shadow-md'>
      <div className='flex items-center gap-2'>
        <Link href={ROOT_ROUTE}>
          <GoHomeFill size={20} />
        </Link>
        <span className='text-xl'>/</span>
        <Link href={DASHBOARD_ROOT}>
          <h1 className='font-serif font-bold cursor-pointer'>Dashboard</h1>
        </Link>
        {currentSegment && (
          <>
            <span className='text-xl'>/</span>
            <h1 className='text-primary font-serif font-bold cursor-pointer capitalize'>
              {currentSegment}
            </h1>
          </>
        )}
      </div>

      <button
        className='md:hidden text-gray-700 hover:text-primary text-2xl'
        onClick={toggleSidebar}
      >
        <FiAlignJustify className='cursor-pointer text-secondary' size={25} />
      </button>
    </div>
  );
};

export default Header;
