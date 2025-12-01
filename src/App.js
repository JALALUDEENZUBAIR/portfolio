import "./App.css";
import { useEffect, useRef, useState } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import Aside from "./Aside";
import Nav from "./Nav";
import OutsideClickHandler from "react-outside-click-handler";
import { FaArrowUp } from "react-icons/fa";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Projects from "./Projects";
import {
  HiOutlineHome,
  HiOutlineInformationCircle,
  HiOutlineMail,
  HiOutlineCube,
} from "react-icons/hi";

function App() {
  const [isMobile, setIsMobile] = useState(false);
  const [sidebarVisible, setSidebarVisible] = useState(true);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const sidebarRef = useRef(null);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [visible, setVisible] = useState(false);
  const navList = [
    {
      title: "Home",
      path: "/",
      component: <Home />,
      icon: <HiOutlineHome className="w-7 h-7" />,
    },
    {
      title: "About",
      path: "/about",
      component: <About />,
      icon: <HiOutlineInformationCircle className="w-7 h-7" />,
    },
    {
      title: "Contact",
      path: "/contact",
      component: <Contact />,
      icon: <HiOutlineMail className="w-7 h-7" />,
    },
    {
      title: "Projects",
      path: "/projects",
      component: <Projects />,
      icon: <HiOutlineCube className="w-7 h-7" />,
    },
  ];

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
    if (isMobile) {
      setSidebarVisible(false);
    } else {
      setIsCollapsed(true);
    }
  };

  const toggleVisibility = () => {
    setVisible(window.scrollY > 100);
  };
  function checkScreenSize() {
    const width = window.innerWidth;
    const mobile = width <= 1000;
    setIsMobile(mobile);
    setSidebarVisible(!mobile);
    setIsCollapsed(true);
  }

  const handleNavigation = () => {
    if (isMobile) {
      toggle();
    } else {
      setIsCollapsed(true);
    }
    scrollToTop();
  };
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleToggle = () => {
    if (isMobile) {
      toggle();
    } else {
      setIsCollapsed(!isCollapsed);
    }
  };
  const toggle = () => {
    setSidebarVisible((prev) => !prev);
  };
  useEffect(() => {
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("resize", checkScreenSize);
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);
  return (
    <HashRouter>
      <div
        className={`${
          isCollapsed ? "flex flex-col " : ""
        } bg-gray-50 dark:bg-gray-900`}
      >
        <OutsideClickHandler
          onOutsideClick={() => {
            if (isMobile) {
              setSidebarVisible(false);
            } else {
              setIsCollapsed(true);
            }
          }}
        >
          <Aside
            isMobile={isMobile}
            toggleTheme={toggleTheme}
            theme={theme}
            sidebarRef={sidebarRef}
            setSidebarVisible={setSidebarVisible}
            handleToggle={handleToggle}
            sidebarVisible={sidebarVisible}
            isCollapsed={isCollapsed}
            handleNavigation={handleNavigation}
            setIsCollapsed={setIsCollapsed}
            navList={navList}
          />
        </OutsideClickHandler>
        <div
          className={`min-h-screen p-5 ${
            sidebarVisible && !isMobile
              ? isCollapsed
                ? "ml-[100px]"
                : "ml-[350px]"
              : "ml-0"
          }  transition-all duration-300`}
        >
          <Nav isMobile={isMobile} toggle={toggle} isCollapsed={isCollapsed} />
          <div>
            <Routes>
              {navList.map((val) => (
                <Route key={val.path} path={val.path} element={val.component} />
              ))}
              <Route path="*" element={<div>404 - Page Not Found</div>} />
            </Routes>
          </div>
        </div>
        <div className="fixed bottom-6 right-6 z-50">
          <div className={`${visible ? "group" : "hidden"}`}>
            <button
              onClick={scrollToTop}
              className="
        flex items-center justify-center
        opacity-50 group-hover:opacity-100 
        transition-all duration-300 ease-in-out
        bg-white dark:bg-gray-800 
        text-gray-800 dark:text-gray-100
        p-3 rounded-full 
        shadow-lg hover:shadow-xl
        hover:bg-gray-100 dark:hover:bg-gray-700
        focus:outline-none focus:ring-1 focus:ring-blue-500 focus:ring-offset-1
        w-12 h-12
      "
              aria-label="Scroll to top"
            >
              <FaArrowUp className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </HashRouter>
  );
}

export default App;
