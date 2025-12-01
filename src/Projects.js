import { FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { FiFolder } from "react-icons/fi";

const projects = [
  {
    title: "Project Management Tool",
    description:
      "Developed a responsive project management platform using Angular and TypeScript, ensuring type-safe code and seamless usability across mobile and desktop devices. Implemented real-time chat pages and drag-and-drop task management to enhance team collaboration. Integrated a friend management system with search and assignment features, optimized for responsive design. Added document management with upload, preview, and search capabilities to streamline resource sharing.",
    skills: ["Angular", "TypeScript", "TailwindCSS"],
  },
  {
    title: "House Rental Management System",
    description:
      "Built a feature-rich platform for managing house rentals, supporting property listings and user accounts. Implemented secure signup and login functionality using JWT for authentication and session management. Developed RESTful APIs with Node.js and Express for property and user data management. Used MongoDB to store and retrieve user profiles, property details, and related information. Enabled users to add, edit, delete, and browse property listings through an intuitive interface.",
    skills: ["MongoDB", "Express.js", "ReactJS", "Node.js"],
  },
  {
    title: "Microservices-Based Video Streaming Platform",
    description:
      "This project implements a robust video streaming platform utilizing microservices architecture, enabling seamless video delivery and a scalable user experience. The system is designed to handle various aspects of video streaming, including inter-service communication, service discovery, load balancing, and configuration management.",
    skills: ["Spring Boot"],
  },
  {
    title: "Chat",
    description:
      "Developed a real-time chat application supporting text and image messaging between users. Designed a responsive, user-friendly interface with ReactJS, ensuring seamless usage across devices. Built backend using Node.js and Express for handling user authentication, messaging, and session management. Leveraged MongoDB Cloud for storing user profiles, chat histories, and other data. Used Cloudinary to securely store and manage user-uploaded images for chat messages. Enabled real-time communication using Socket.IO, ensuring instant message delivery and read receipt updates. Secured user sessions and data privacy with JWT-based authentication, ensuring safe and reliable communication.",
    skills: [
      "ReactJS",
      "Node.js",
      "Express",
      "MongoDB",
      "Socket.IO",
      "JWT",
      "Cloudinary",
    ],
  },
  {
    title: "Resume to Portfolio Generator",
    description:
      "Developed an AI-powered tool that transforms resumes into modern HTML portfolios using CrewAI and large language models. Built a PDF parser using pdfplumber to extract structured data from resumes. Created two specialized CrewAI agents: one to parse resumes and another to generate frontend HTML using TailwindCSS. Designed a clean, responsive portfolio layout optimized for mobile devices. Integrated a user-friendly Gradio UI to enable resume upload, manual data entry, and portfolio download.",
    skills: ["Python", "CrewAI", "Qwen2.5", "pdfplumber", "Gradio"],
  },
  {
    title: "Developers API",
    description:
      "Built an API platform allowing developers to register, request access, and interact with resources like books using secure API keys. Designed a scalable backend using microservices architecture with RESTful and GraphQL APIs to ensure flexibility in data access. Implemented Kafka for automated notifications, including account verification, password resets, and status updates. Developed secure admin tools for uploading and managing resources, protected by JWT-based authentication for role-specific access.",
    skills: ["ReactJS", "TypeScript", "Spring Boot", "PostgreSQL"],
  },
  {
    title: "JourneyJunction",
    description:
      "Welcome to JourneyJunction, the ultimate platform for exploring and sharing hidden gems and well-known spots around the world! JourneyJunction allows users to add, view, and update locations and their descriptions, making it easy for everyone to contribute to a collective repository of interesting places.",
    skills: ["ReactJS", "Spring Boot", "PostgreSQL"],
  },
];

const Project = () => {
  return (
    <div className="min-h-screen px-6 py-12 md:px-12 lg:px-24  transition-colors duration-300 max-sm:px-0">
      <div className="max-w-4xl mx-auto">
        <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 bg-clip-text bg-gradient-to-r from-yellow-600 to-yellow-400 dark:from-yellow-400 dark:to-yellow-200 mb-8">
          <span className="flex items-center gap-2">
            <FiFolder /> Projects
          </span>
        </h3>
        <div className="grid gap-6 grid-cols-1">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
              className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow duration-300 relative"
            >
              <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">
                {project.title}
              </h4>
              <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 bg-yellow-100 dark:bg-yellow-500/20 text-yellow-800 dark:text-yellow-300 text-sm font-medium rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              {project.sourceLink && (
                <div className="absolute bottom-2 right-5">
                  <a
                    href={project.sourceLink}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center text-yellow-600 dark:text-yellow-400 hover:text-yellow-700 dark:hover:text-yellow-300 transition-colors duration-300 text-base"
                  >
                    <FaExternalLinkAlt className="mr-2" />
                    Source
                  </a>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
