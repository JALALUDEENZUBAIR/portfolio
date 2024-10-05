import "./About.css"
import { IoLogoHtml5 } from "react-icons/io";
import { SiPostman } from "react-icons/si";
import { IoLogoCss3 } from "react-icons/io";
import { FaJsSquare } from "react-icons/fa";
import { GrReactjs } from "react-icons/gr";
import { FaGithub } from "react-icons/fa";
import { FaJava } from "react-icons/fa6";
import { BiLogoSpringBoot } from "react-icons/bi";
import { SiSpringsecurity } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiApachemaven } from "react-icons/si";
import { SiDocker } from "react-icons/si";
import { SiApachekafka } from "react-icons/si";
import { MdStar } from "react-icons/md";
import { MdOutlineStarBorderPurple500 } from "react-icons/md";
import { MdOutlineStarHalf } from "react-icons/md";
import { SiMongodb } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
const About = () =>{
    return(
        <div className="About-container">
            <br/>
            <div className="about">
                <h3>EDUCATION : </h3>
                <div className="Education-container">
                    <div className="Education college">
                        <p>Aalim Muhammed Salegh College of Engineering, Chennai 600055 <br/>
                        (<span id="degree"> Bachelor of Engineering in Computer Science and Engineering </span>)
                        <br/>
                        <span>JUNE  2021 - 2025</span></p>
                    </div>
                    <div className="Education school">
                        <p>St. Mary’s Anglo-Indian Higher Secondary School, Chennai 600001<br/>
                        (<span id="degree"> HSC </span>)
                        <br/>
                        <span>2011 - 2021</span></p>
                    </div>
                </div>
            </div>
            <div id="skills-container">
                <h3>Skills :</h3>
                <div id="skills">
                    <span id="skill-container"><IoLogoHtml5 id="skill"/><p>HTML</p><h2><MdStar/><MdStar/><MdStar/><MdStar/><MdOutlineStarBorderPurple500/></h2></span>
                    <span id="skill-container"><IoLogoCss3 id="skill"/><p>CSS</p><h2><MdStar/><MdStar/><MdStar/><MdOutlineStarHalf/><MdOutlineStarBorderPurple500/></h2></span>
                    <span id="skill-container"><FaJsSquare id="skill"/><p>JavaScript</p><h2><MdStar/><MdStar/><MdStar/><MdOutlineStarBorderPurple500/><MdOutlineStarBorderPurple500/></h2></span>
                    <span id="skill-container"><GrReactjs id="skill"/><p>ReactJS</p><h2><MdStar/><MdStar/><MdStar/><MdOutlineStarHalf/><MdOutlineStarBorderPurple500/></h2></span>
                    <span id="skill-container"><SiRedux id="skill"/><p>Redux</p><h2><MdStar/><MdStar/><MdStar/><MdOutlineStarBorderPurple500/><MdOutlineStarBorderPurple500/></h2></span>
                    <span id="skill-container"><RiNextjsFill id="skill"/><p>Next.JS</p><h2><MdStar/><MdStar/><MdStar/><MdOutlineStarBorderPurple500/><MdOutlineStarBorderPurple500/></h2></span>
                    <span id="skill-container"><FaJava id="skill"/><p>Java</p><h2><MdStar/><MdStar/><MdStar/><MdOutlineStarHalf/><MdOutlineStarBorderPurple500/></h2></span>
                    <span id="skill-container"><BiLogoSpringBoot id="skill"/><p>Spring Boot</p><h2><MdStar/><MdStar/><MdStar/><MdOutlineStarHalf/><MdOutlineStarBorderPurple500/></h2></span>
                    <span id="skill-container"><SiSpringsecurity id="skill"/><p>Spring <br/>Security</p><h2><MdStar/><MdStar/><MdStar/><MdOutlineStarBorderPurple500/><MdOutlineStarBorderPurple500/></h2></span>
                    <span id="skill-container"><SiApachekafka id="skill"/><p>Kafka</p><h2><MdStar/><MdStar/><MdStar/><MdOutlineStarHalf/><MdOutlineStarBorderPurple500/></h2></span>
                    <span id="skill-container"><BiLogoPostgresql id="skill"/><p>PostgreSQL</p><h2><MdStar/><MdStar/><MdStar/><MdOutlineStarHalf/><MdOutlineStarBorderPurple500/></h2></span>
                    <span id="skill-container"><SiMongodb id="skill"/><p>MongoDB</p><h2><MdStar/><MdStar/><MdStar/><MdOutlineStarBorderPurple500/><MdOutlineStarBorderPurple500/></h2></span>
                    <span id="skill-container"><FaGithub id="skill"/><p>Github</p><h2><MdStar/><MdStar/><MdStar/><MdOutlineStarHalf/><MdOutlineStarBorderPurple500/></h2></span>
                    <span id="skill-container"><SiPostman id="skill"/><p>PostMan</p><h2><MdStar/><MdStar/><MdStar/><MdStar/><MdOutlineStarBorderPurple500/></h2></span>
                    <span id="skill-container"><SiApachemaven id="skill"/><p>Maven</p><h2><MdStar/><MdStar/><MdStar/><MdOutlineStarHalf/><MdOutlineStarBorderPurple500/></h2></span>
                    <span id="skill-container"><SiDocker id="skill"/><p>Docker</p><h2><MdStar/><MdStar/><MdOutlineStarHalf/><MdOutlineStarBorderPurple500/><MdOutlineStarBorderPurple500/></h2></span>
                </div>
            </div>   
        </div>
    )
}
export default About;