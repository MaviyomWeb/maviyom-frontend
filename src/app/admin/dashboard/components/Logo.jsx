// Logo component
const Logo = ({ isSidebarOpen }) => (
  <div
    className={`logo ${
      isSidebarOpen ? "" : "ml-12"
    } dark:text-white  transform ease-in-out duration-500 flex-none h-full flex items-center justify-center`}
  >
    Maviyom
  </div>
);

export default Logo;
