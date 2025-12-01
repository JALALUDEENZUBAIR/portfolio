import { MdMenuOpen } from "react-icons/md";

const Nav = ({ isMobile, toggle, isCollapsed }) => {
  return (
    <nav className="flex justify-between items-center w-full px-6 py-4 max-sm:px-2  transition-colors duration-300">
      <div className="flex items-center">
        {isMobile && (
          <button
            className="text-3xl text-gray-800 dark:text-gray-200 mr-4"
            onClick={toggle}
            aria-label="Toggle menu"
          >
            <MdMenuOpen className="w-8 h-8" />
          </button>
        )}
      </div>
    </nav>
  );
};

export default Nav;
