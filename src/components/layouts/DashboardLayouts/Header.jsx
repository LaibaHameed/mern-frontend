import { DASHBOARD_ROOT, ROOT_ROUTE } from "@/utils/PATHS";
import Link from "next/link";
import { GoHomeFill } from "react-icons/go";
import { FiAlignJustify } from 'react-icons/fi';


const Header = ({ toggleSidebar }) => {
  return (
    <div className="flex items-center justify-between py-6 px-6 mb-10 bg-slate-100 shadow-md">

      <div className="flex items-center gap-2">
        <Link href={ROOT_ROUTE} className="md:ml-6">
          <GoHomeFill size={20} />
        </Link>
        <span className="text-xl">/</span>
        <Link href={DASHBOARD_ROOT}>
          <h1 className="text-primary font-serif font-bold cursor-pointer">Admin Dashboard</h1>
        </Link>
      </div>

      <button
        className="md:hidden text-gray-700 hover:text-primary text-2xl"
        onClick={toggleSidebar}
      >
        <FiAlignJustify
          className="cursor-pointer text-secondary"
          size={25}
        />
      </button>
    </div>
  );
};

export default Header;
