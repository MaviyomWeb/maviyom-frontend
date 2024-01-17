import { PiSquaresFourBold } from "react-icons/pi";

import {
  RiCoupon3Fill,
  RiDashboardFill,
  RiShoppingBag3Fill,
} from "react-icons/ri";

import Link from "next/link";
import { IoIosPeople } from "react-icons/io";

const Sidebar = ({ isSidebarOpen, setIsSidebarOpen }) => (
  <aside
    className={`w-60  fixed transition transform ease-in-out duration-1000 z-50 flex h-screen bg-secondary   ${
      isSidebarOpen ? "translate-x-none" : "-translate-x-48"
    } `}
  >
    {/* <!-- open sidebar button --> */}
    <div
      className={`max-toolbar ${
        isSidebarOpen ? "translate-x-0" : "translate-x-24 scale-x-0"
      } w-full -right-6 transition transform ease-in duration-300 flex items-center justify-between border-4 border-white dark:border-[#0F172A] bg-secondary  absolute top-2 rounded-full h-12`}
    >
      <div className="flex items-center space-x-3 group bg-gradient-to-r from-cyan-500 to-blue-500  pl-10 pr-2 py-1 ml-2 rounded-full text-white  ">
        <div className="transform ease-in-out duration-300 mr-12">Maviyom</div>
      </div>
    </div>
    <div
      onClick={() => setIsSidebarOpen((prev) => !prev)}
      className="-right-6 transition transform ease-in-out duration-500 flex border-4 border-white dark:border-[#0F172A] bg-secondary hover:bg-blue-500  absolute top-2 p-3 rounded-full text-white hover:rotate-45 cursor-pointer"
    >
      <PiSquaresFourBold size={16} />
    </div>
    {/* <!-- MAX SIDEBAR--> */}
    <div
      className={`max ${
        isSidebarOpen ? "flex" : "hidden"
      } text-white mt-20 flex-col space-y-2 w-full h-[calc(100vh)]`}
    >
      <div className="hover:ml-4 w-full text-white hover:text-primary  bg-secondary p-2 pl-8 rounded-full transform ease-in-out duration-300 flex flex-row items-center space-x-3 cursor-pointer">
        <RiDashboardFill size={16} />
        <div>Dashboard</div>
      </div>
      <Link
        href="/dashboard/product"
        className="hover:ml-4 w-full text-white hover:text-primary  bg-secondary p-2 pl-8 rounded-full transform ease-in-out duration-300 flex flex-row items-center space-x-3 cursor-pointer"
      >
        <RiShoppingBag3Fill size={16} />
        <div>Product</div>
      </Link>
      <div className="hover:ml-4 w-full text-white hover:text-primary  bg-secondary p-2 pl-8 rounded-full transform ease-in-out duration-300 flex flex-row items-center space-x-3 cursor-pointer">
        <IoIosPeople size={18} />
        <div>Leads</div>
      </div>
    </div>
    {/* <!-- MINI SIDEBAR--> */}
    <div
      className={`mini mt-20 ${
        isSidebarOpen ? "hidden" : "flex"
      } flex-col space-y-2 w-full h-[calc(100vh)]`}
    >
      <div className="hover:ml-4 justify-end pr-5 text-white hover:text-primary  w-full bg-secondary p-3 rounded-full transform ease-in-out duration-300 flex cursor-pointer">
        <RiDashboardFill size={16} />
      </div>
      <div className="hover:ml-4 justify-end pr-5 text-white hover:text-primary  w-full bg-secondary p-3 rounded-full transform ease-in-out duration-300 flex cursor-pointer">
        <RiShoppingBag3Fill size={16} />
      </div>
      <div className="hover:ml-4 justify-end pr-5 text-white hover:text-primary  w-full bg-secondary p-3 rounded-full transform ease-in-out duration-300 flex cursor-pointer">
        <IoIosPeople size={18} />
      </div>
    </div>
  </aside>
);

export default Sidebar;
