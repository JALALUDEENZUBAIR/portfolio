import { IoLogoHtml5, IoLogoCss3, IoLogoSass } from "react-icons/io";
import Frontend from "./resource/frontend_engineer.png";
import JavaScript_Basics from "./resource/javascript_basics.png";
import Software_Engineer from "./resource/software_engineer.png";
import {
  SiPostman,
  SiExpress,
  SiApachekafka,
  SiMongodb,
  SiRedux,
  SiWebpack,
  SiApachemaven,
  SiJenkins,
} from "react-icons/si";
import {
  FaAws,
  FaJsSquare,
  FaGithub,
  FaJava,
  FaAngular,
  FaNodeJs,
  FaDocker,
  FaGraduationCap,
} from "react-icons/fa";
import { GrReactjs } from "react-icons/gr";
import {
  BiLogoSpringBoot,
  BiLogoPostgresql,
  BiLogoTypescript,
} from "react-icons/bi";
import {
  MdStar,
  MdOutlineStarBorderPurple500,
  MdOutlineStarHalf,
  MdBuild,
  MdWork,
} from "react-icons/md";
import { RiBearSmileLine } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import { AiOutlineKubernetes } from "react-icons/ai";
import { DiLinux, DiNpm } from "react-icons/di";
import { TbCertificate } from "react-icons/tb";

const education = [
  {
    institution: "Aalim Muhammed Salegh College of Engineering, Chennai 600055",
    degree:
      "Bachelor of Engineering in Computer Science and Engineering ( 8.13 / 10 GPA )",
    duration: "2021 - 2025",
    className: "college",
  },
  {
    institution:
      "St. Mary’s Anglo-Indian Higher Secondary School, Chennai 600001",
    degree: "Higher Secondary Certificate ( HSC )",
    duration: "2011 - 2021",
    className: "school",
  },
];

const skills = [
  {
    icon: <IoLogoHtml5 className="text-5xl" />,
    name: "HTML",
    rating: [1, 1, 1, 1, 0],
  },
  {
    icon: <IoLogoCss3 className="text-5xl" />,
    name: "CSS",
    rating: [1, 1, 1, 1, 0],
  },
  {
    icon: <RiTailwindCssFill className="text-5xl" />,
    name: "Tailwind",
    rating: [1, 1, 1, 0, 0],
  },
  {
    icon: <IoLogoSass className="text-5xl" />,
    name: "Sass",
    rating: [1, 1, 1, 0, 0],
  },
  {
    icon: <FaJsSquare className="text-5xl" />,
    name: "JavaScript",
    rating: [1, 1, 1, 1, 0],
  },
  {
    icon: <BiLogoTypescript className="text-5xl" />,
    name: "TypeScript",
    rating: [1, 1, 1, 1, 0],
  },
  {
    icon: <GrReactjs className="text-5xl" />,
    name: "React",
    rating: [1, 1, 1, 1, 0],
  },
  {
    icon: <FaAngular className="text-5xl" />,
    name: "Angular",
    rating: [1, 1, 1, 0, 0],
  },
  {
    icon: <SiRedux className="text-5xl" />,
    name: "React Redux",
    rating: [1, 1, 1, 0.5, 0],
  },
  {
    icon: <RiBearSmileLine className="text-5xl" />,
    name: "Zustand",
    rating: [1, 1, 1, 0, 0],
  },
  {
    icon: <FaJava className="text-5xl" />,
    name: "Java",
    rating: [1, 1, 1, 0.5, 0],
  },
  {
    icon: <FaNodeJs className="text-5xl" />,
    name: "Node.js",
    rating: [1, 1, 1, 1, 0],
  },
  {
    icon: <BiLogoSpringBoot className="text-5xl" />,
    name: "Spring Boot",
    rating: [1, 1, 1, 0.5, 0],
  },
  {
    icon: <SiExpress className="text-5xl" />,
    name: "Express.js",
    rating: [1, 1, 1, 1, 0],
  },
  {
    icon: <SiApachekafka className="text-5xl" />,
    name: "Kafka",
    rating: [1, 1, 1, 0.5, 0],
  },
  {
    icon: <BiLogoPostgresql className="text-5xl" />,
    name: "PostgreSQL",
    rating: [1, 1, 1, 1, 0],
  },
  {
    icon: <SiMongodb className="text-5xl" />,
    name: "MongoDB",
    rating: [1, 1, 1, 1, 0],
  },
  {
    icon: <FaGithub className="text-5xl" />,
    name: "Github",
    rating: [1, 1, 1, 1, 0],
  },
  {
    icon: <FaAws className="text-5xl" />,
    name: "AWS",
    rating: [1, 1, 1, 0, 0],
  },
  {
    icon: <FaDocker className="text-5xl" />,
    name: "Docker",
    rating: [1, 1, 1, 0, 0],
  },
  {
    icon: <AiOutlineKubernetes className="text-5xl" />,
    name: "Kubernetes",
    rating: [1, 1, 0.5, 0, 0],
  },
  {
    icon: <DiLinux className="text-5xl" />,
    name: "Linux",
    rating: [1, 1, 1, 0, 0],
  },
  {
    icon: <SiWebpack className="text-5xl" />,
    name: "Webpack",
    rating: [1, 1, 1, 1, 0],
  },
  {
    icon: <SiApachemaven className="text-5xl" />,
    name: "Maven",
    rating: [1, 1, 1, 1, 0],
  },
  {
    icon: <DiNpm className="text-5xl" />,
    name: "Npm",
    rating: [1, 1, 1, 1, 0],
  },
  {
    icon: <SiJenkins className="text-5xl" />,
    name: "Jenkins",
    rating: [1, 1, 1, 0, 0],
  },
  {
    icon: <SiPostman className="text-5xl" />,
    name: "PostMan",
    rating: [1, 1, 1, 1, 0],
  },
];
let Certificates = [
  { src: Frontend, alt: "Frontend Role Certificate" },
  { src: Software_Engineer, alt: "Software Engineer Certificate" },
  { src: JavaScript_Basics, alt: "JavaScript Basics Certificate" },
];
let Experience_TimeLine = [
  {
    title: "VoxyHealth",
    role: "SDE Intern",
    present: false,
    time: "28th Aug 2025 - 27th Feb 2026",
    description:
      "I actively contributed to the live production environment by implementing new features and resolving existing issues to enhance the platform’s performance and reliability. My responsibilities included developing and integrating features, handling requests and responses, and ensuring smooth functionality across the system. Additionally, I was involved in bug fixing and maintenance tasks, addressing and resolving critical issues to maintain seamless operations. My key technical skills include React, Node.js, Python, JavaScript, Express.js, TypeScript, MongoDB, RabbitMQ, Manual Testing, and Unit Testing.",
  },
];

const About = () => {
  return (
    <div className="min-h-screen px-6 py-12 md:px-12 lg:px-24  transition-colors duration-300 max-sm:px-0">
      {Experience_TimeLine.length > 0 && (
        <div className="max-w-4xl mx-auto mb-12 max-sm:p-2">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 bg-clip-text bg-gradient-to-r from-yellow-600 to-yellow-400 dark:from-yellow-400 dark:to-yellow-200 mb-7 -ml-2">
            <span className="flex items-center gap-2">
              <MdWork /> Experience
            </span>
          </h3>
          <ol className="max-w-4xl relative border-s border-yellow-500/20 dark:border-yellow-100">
            {Experience_TimeLine.map((experience, idx) => (
              <li className="mb-10 ms-6" key={idx}>
                <span className="absolute flex items-center justify-center w-6 h-6 bg-yellow-200/80 rounded-full -start-3 ring-8 ring-yellow-200/70 dark:ring-yellow-500/20 dark:bg-yellow-500/30 ">
                  <svg
                    className="w-2.5 h-2.5  text-yellow-600 dark:text-yellow-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                  </svg>
                </span>
                <div className="px-1">
                  <h3 className="flex items-center  text-lg font-semibold text-gray-900 dark:text-white">
                    {experience.title}
                    {experience.present && (
                      <span className="text-xs font-normal me-2 px-2.5 py-0.5 rounded-lg bg-yellow-100 ms-3  dark:bg-yellow-500/20 text-yellow-600 dark:text-yellow-400">
                        Present
                      </span>
                    )}
                  </h3>
                  <div className="flex items-center mb-2 text-gray-900 dark:text-white">
                    <span className="font-mono text-lg">{experience.role}</span>
                  </div>
                  <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                    {experience.time}
                  </time>
                  <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                    {experience.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      )}
      <div className="max-w-4xl mx-auto mb-12">
        <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 bg-clip-text bg-gradient-to-r from-yellow-600 to-yellow-400 dark:from-yellow-400 dark:to-yellow-200 mb-6">
          <span className="flex items-center gap-2">
            <FaGraduationCap /> Education
          </span>
        </h3>
        <div>
          {education.map((edu, index) => (
            <div
              key={index}
              className="mb-6 last:mb-0 border-l-2 border-yellow-500 dark:border-yellow-400 bg-white dark:bg-gray-800
         rounded-md shadow-md"
            >
              <div className="border border-gray-200 dark:border-gray-700 p-5 rounded-md">
                <span className="text-lg text-gray-800 dark:text-gray-200 block">
                  <span className="mr-2 ">
                    {edu.className === "college" ? "🏛️" : "🏫"}
                  </span>
                  {edu.institution}
                </span>
                <span className="text-base text-gray-600 dark:text-gray-400 mt-1 block">
                  {edu.degree}
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-500 block mt-1">
                  {edu.duration}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* <div className="max-w-4xl mx-auto my-24">
        <img
          className="w-full"
          src={`https://leetcard.jacoblin.cool/jalaludeenzubair?theme=${
            theme === "dark" ? "nord" : "light"
          }&font=Gothic%20A1`}
          alt="leetcode-profile"
        />
      </div> */}
      <div className="max-w-4xl mx-auto mb-12">
        <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 bg-clip-text bg-gradient-to-r from-yellow-600 to-yellow-400 dark:from-yellow-400 dark:to-yellow-200 mb-6">
          <span className="flex items-center gap-2">
            <MdBuild /> Skills
          </span>
        </h3>
        <div className="grid max-sm:grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-200 dark:border-gray-700 group"
            >
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r rounded-sm from-yellow-500 to-yellow-400 dark:from-yellow-400 dark:to-yellow-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="text-gray-700 dark:text-gray-200 mb-3 text-5xl">
                {skill.icon}
              </div>
              <div className="text-sm font-semibold text-gray-800 dark:text-gray-100">
                <span>{skill.name}</span>
              </div>
              <div className="flex mt-2">
                {skill.rating.map((star, starIndex) => (
                  <span
                    key={starIndex}
                    className="text-yellow-500 dark:text-yellow-400 text-base"
                  >
                    {star === 1 ? (
                      <MdStar />
                    ) : star === 0.5 ? (
                      <MdOutlineStarHalf />
                    ) : (
                      <MdOutlineStarBorderPurple500 />
                    )}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="max-w-4xl mx-auto">
        <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 bg-clip-text bg-gradient-to-r from-yellow-600 to-yellow-400 dark:from-yellow-400 dark:to-yellow-200 mb-6">
          <span className="flex items-center gap-2">
            <TbCertificate /> Certificates
          </span>
        </h3>

        <div className="grid grid-cols-2 max-md:grid-cols-1 gap-10 mt-5">
          {Certificates.map((Certificate, idx) => (
            <img src={Certificate.src} alt={Certificate.alt} key={idx} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
