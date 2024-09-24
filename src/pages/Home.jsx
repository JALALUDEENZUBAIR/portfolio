import "./Home.css"
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import FileSaver from 'file-saver';
import TextComponent from "./TextComponent";
import { IoIosPaper } from "react-icons/io";
const Home = () =>{
    const download = () =>{
        // FileSaver.saveAs(
        //     "https://JalaludeenZubair.github.io/portfolio/Resume.pdf",
        //     "Resume.pdf");
    }    
    return(
        <div className="Home-container">
            <h1 className="intro"><br/>Hello , Its Me</h1><br/><br/>
            <h1 className="name">Jalaludeen Zubair </h1><br/><br/>
            <TextComponent/><br/><br/>
            <h2 className="summary">Summary:</h2>
            <div className="about-para"><br/>
                <p>As a current student pursuing a Bachelor’s degree in Computer Science and Engineering at Aalim Muhammed Salegh College of Engineering, I find myself at the intersection of technology and creativity, where my passion for problem-solving drives my academic and professional pursuits.</p><br/>
                <p>My academic journey has enabled me to become proficient in a variety of programming languages. JavaScript, in particular, has opened doors to the world of web development. It has empowered me to create dynamic and interactive web applications, and I have enjoyed exploring frameworks such as React. These tools have not only enhanced my technical abilities but have also ignited my creativity as I design user interfaces that provide seamless and engaging experiences.My ambition to master both front-end and back-end development stems from a desire to create holistic solutions that address real-world challenges. On the front-end, I have focused on understanding the principles of user experience (UX) and user interface (UI) design. I recognize that a visually appealing and user-friendly interface is crucial for the success of any application. Through various projects, I have practiced responsive design principles, ensuring that applications work seamlessly across different devices and screen sizes.</p><br/>
                <p>In parallel, my foray into back-end development has been equally rewarding. I have gained hands-on experience with server-side technologies such as Spring Boot, which allow for the creation of robust APIs and effective data management. Understanding database management through SQL systems has also been an integral part of my learning. I have developed small-scale applications that utilize these databases to store and retrieve data efficiently, reinforcing my understanding of how back-end systems support front-end functionalities.</p><br/>
                <p>The field of technology is ever-evolving, and I am committed to lifelong learning to stay ahead of industry trends and advancements. I regularly engage with online courses, tutorials, and tech communities to expand my knowledge and skills.Looking ahead, my goal is to contribute to innovative projects that leverage technology to solve real-world problems. I aspire to work in a dynamic environment where I can collaborate with cross-functional teams to develop software solutions that make a meaningful impact. Whether in the realms of healthcare, education, or sustainable technology, I am excited about the potential to create applications that improve people’s lives.</p><br/>
                <p>Furthermore, I dream of taking on leadership roles in the future, where I can mentor aspiring developers and guide teams toward achieving their objectives. I believe that fostering a culture of collaboration and inclusivity is essential for nurturing talent and driving innovation in any organization.</p>
            </div>
            <div className="about-link-container">
                <a className="about-link" href="https://github.com/JALALUDEENZUBAIR" target="_blank"><span id="about-logo"><FaGithub /></span><pre>Github</pre></a>
                <a className="about-link" href="https://www.linkedin.com/in/jalaludeenzubairm" target="_blank"><span id="about-logo"><CiLinkedin /></span><pre>Linkedin</pre></a>
                <a><button className="about-link resume" onClick={()=>download()}><span><IoIosPaper/></span><pre>Resume</pre></button></a>
            </div>
        </div>
    )
}
export default Home;