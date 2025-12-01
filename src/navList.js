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

export const navList = [
  {
    title: "Home",
    path: "/",
    component: Home,
    icon: <HiOutlineHome className="w-7 h-7" />,
  },
  {
    title: "About",
    path: "/about",
    component: About,
    icon: <HiOutlineInformationCircle className="w-7 h-7" />,
  },
  {
    title: "Contact",
    path: "/contact",
    component: Contact,
    icon: <HiOutlineMail className="w-7 h-7" />,
  },
  {
    title: "Projects",
    path: "/projects",
    component: Projects,
    icon: <HiOutlineCube className="w-7 h-7" />,
  },
];
