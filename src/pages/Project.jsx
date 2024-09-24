import "./Project.css"
import { FaExternalLinkAlt } from "react-icons/fa";
const Project = () =>{
    return(
        <div className="project-container">
            <div className="project">
                <h4>Microservices-Based Video Streaming Platform</h4>
                <p>
                This project implements a robust video streaming platform utilizing microservices architecture, enabling seamless video delivery and a scalable user experience. The system is designed to handle various aspects of video streaming, including inter-service communication, service discovery, load balancing, and configuration management.
                </p>
                <span>
                    <p className="skills"><span>Spring Boot</span></p>
                </span>
                <div id="source-code">
                    <a href="https://github.com/JALALUDEENZUBAIR/Microservices.git" target="_blank" rel="noreferrer"><FaExternalLinkAlt /></a>
                </div>
            </div>;
            <div className="project">
                <h4>LiveNode</h4>
                <p>
                LiveNode is a real-time communication platform that leverages WebSocket technology to provide seamless, live chat experiences for users. Designed with scalability and efficiency in mind, LiveNode allows multiple users to engage in real-time conversations, making it ideal for chat applications, collaborative tools, and interactive platforms.
                </p>
                <span>
                    <p className="skills"><span>HTML</span><span>CSS</span><span>JavaScript</span><span>Spring Boot</span></p>
                </span>
                <div id="source-code">
                    <a href="https://github.com/JALALUDEENZUBAIR/Socket.git" target="_blank" rel="noreferrer"><FaExternalLinkAlt /></a>
                </div>
            </div>
            <div className="project">
                <h4>JourneyJunction</h4>
                <p>
                Welcome to JourneyJunction, the ultimate platform for exploring and sharing hidden gems and well-known spots around the world! JourneyJunction allows users to add, view, and update locations and their descriptions, making it easy for everyone to contribute to a collective repository of interesting places.
                </p>
                <span>
                    <p className="skills"><span>ReactJS</span><span>Spring Boot</span><span>PostgreSQL</span></p>
                </span>
                <div id="source-code">
                    <a href="https://github.com/JALALUDEENZUBAIR/SocialMediaFullStack.git" target="_blank" rel="noreferrer"><FaExternalLinkAlt /></a>
                </div>
            </div>
        </div>   
    )
}
export default Project;