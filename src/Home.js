import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { IoIosPaper } from "react-icons/io";
import TextComponent from "./TextComponent";
import { saveAs } from "file-saver";
import { SiLeetcode } from "react-icons/si";
import { BsCardText } from "react-icons/bs";

const Home = () => {
  const summaryParagraphs = [
    "Computer Science and Engineering graduate skilled in both frontend and backend development, with expertise in the MERN stack — MongoDB, Express.js, React, and Node.js. Experienced in building responsive, user-centric applications with a strong focus on delivering solutions aligned with user needs and project goals.",
  ];

  const links = [
    {
      href: "https://github.com/jalaludeenzubair",
      icon: <FaGithub />,
      label: "Github",
    },
    {
      href: "https://www.linkedin.com/in/jalaludeenzubair",
      icon: <CiLinkedin />,
      label: "Linkedin",
    },
    // {
    //   href: "https://www.leetcode.com/u/jalaludeenzubair",
    //   icon: <SiLeetcode />,
    //   label: "Leetcode",
    // },
    {
      action: () =>
        saveAs(
          "https://JalaludeenZubair.github.io/portfolio/JalaludeenZubair's_Resume.pdf",
          "JalaludeenZubair's_Resume.pdf"
        ),
      icon: <IoIosPaper />,
      label: "Resume",
      isButton: true,
    },
  ];

  return (
    <div className=" px-6 py-12 md:px-12 lg:px-24  transition-colors duration-300 max-sm:px-0">
      <div className="text-center mb-12">
        <h1 className="text-2xl md:text-3xl font-semibold text-gray-800 dark:text-gray-200 tracking-wide">
          Hello, I am
        </h1>
        <h2 className="text-4xl md:text-5xl font-bold text-yellow-600 dark:text-yellow-400 tracking-wider mt-2">
          Jalaludeen Zubair
        </h2>
        <div className="mt-4 ">
          <TextComponent />
        </div>
      </div>
      <div className="max-w-4xl mx-auto ">
        <h3 className="text-2xl text-gray-900 dark:text-gray-100 bg-clip-text bg-gradient-to-r from-yellow-600 to-yellow-400 dark:from-yellow-400 dark:to-yellow-200 font-extrabold">
          <span className="flex items-center gap-2">
            <BsCardText /> Summary
          </span>
        </h3>
        <div className="mt-5 space-y-8">
          {summaryParagraphs.map((paragraph, index) => (
            <div key={index} className="relative ">
              <p className="text-gray-600 dark:text-gray-200 text-base leading-relaxed  rounded-lg  p-5 pt-0 pl-0 transition-all duration-200 ">
                {paragraph}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-4xl  mx-auto grid md:grid-cols-1 lg:grid-cols-3 gap-6 ">
        {links.map((link, index) =>
          link.isButton ? (
            <button
              key={index}
              onClick={link.action}
              className="flex items-center justify-center  h-12 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-md shadow-md hover:bg-gray-200 dark:hover:bg-gray-600 border border-gray-300 dark:border-gray-600 transition-all duration-300 w-full"
            >
              <span className="text-xl mr-2">{link.icon}</span>
              <span className="text-base font-medium">{link.label}</span>
            </button>
          ) : (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center  h-12 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-md shadow-md hover:bg-gray-200 dark:hover:bg-gray-600 border border-gray-300 dark:border-gray-600 transition-all duration-300 w-full"
            >
              <span className="text-xl mr-2">{link.icon}</span>
              <span className="text-base font-medium">{link.label}</span>
            </a>
          )
        )}
      </div>
    </div>
  );
};

export default Home;
