import { Link, useLocation } from "react-router-dom";
import { navList } from "./navList";
import { MdMenuOpen } from "react-icons/md";
import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi";

const Aside = ({
  isMobile,
  sidebarVisible,
  sidebarRef,
  toggleTheme,
  theme,
  setSidebarVisible,
  handleToggle,
  isCollapsed,
  handleNavigation,
  setIsCollapsed,
}) => {
  const location = useLocation();

  return (
    <>
      {sidebarVisible && (
        <aside
          ref={sidebarRef}
          className={`flex flex-col ${
            !isCollapsed ? "w-80" : isMobile ? "w-72" : "w-24"
          } h-screen bg-gray-800 dark:bg-slate-800 border-r border-gray-200 dark:border-gray-700 fixed top-0 left-0 z-40 transition-all duration-300 overflow-hidden ${
            isCollapsed && !isMobile && "items-center"
          }`}
        >
          <button
            onClick={handleToggle}
            className={`text-gray-200
               w-fit dark:text-gray-300 text-3xl mt-8 ${
                 isCollapsed && !isMobile ? "mx-auto" : "ml-9"
               } hover:text-yellow-400 dark:hover:text-yellow-300 transition-colors duration-300`}
            aria-label={
              isMobile
                ? "Close Sidebar"
                : isCollapsed
                ? "Expand Sidebar"
                : "Collapse Sidebar"
            }
          >
            <MdMenuOpen className="w-8 h-8" />
          </button>
          <nav className="flex-1 flex flex-col justify-evenly items-center ">
            {navList.map((val) => (
              <Link
                key={val.path}
                to={val.path}
                className={`flex items-center ${
                  isCollapsed && !isMobile ? "px-3" : "px-10"
                } py-3 rounded-md text-gray-200 dark:text-gray-300 text-xl max-w-xs hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors duration-300 ${
                  location.pathname === val.path
                    ? "bg-gray-700 dark:bg-gray-600 border-l-4 border-yellow-500 dark:border-yellow-400"
                    : ""
                }`}
                onClick={handleNavigation}
                aria-current={
                  location.pathname === val.path ? "page" : undefined
                }
              >
                <span className="flex items-center gap-4">
                  {val.icon}
                  {(isMobile || !isCollapsed) && (
                    <span
                      className={`text-xl font-medium transition-opacity duration-300 ${
                        isCollapsed && !isMobile ? "opacity-0" : "opacity-100"
                      }`}
                    >
                      {val.title}
                    </span>
                  )}
                </span>
              </Link>
            ))}
            <button
              onClick={toggleTheme}
              className={`flex items-center ${
                isCollapsed && !isMobile ? "px-3" : "px-14"
              } py-3 rounded-md text-gray-200 dark:text-gray-300  max-w-xs hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors duration-300 `}
              aria-label={`Switch to ${
                theme === "light" ? "dark" : "light"
              } mode`}
            >
              <span className="flex items-center gap-4">
                {theme === "light" ? (
                  <HiOutlineSun className="w-7 h-7" />
                ) : (
                  <HiOutlineMoon className="w-7 h-7" />
                )}
                {(isMobile || !isCollapsed) && (
                  <span
                    className={`text-xl transition-opacity duration-300 ${
                      isCollapsed && !isMobile ? "opacity-0" : "opacity-100"
                    }`}
                  >
                    {theme === "light" ? "Dark" : "Light"}
                  </span>
                )}
              </span>
            </button>
          </nav>
        </aside>
      )}
    </>
  );
};

export default Aside;
