import { TypeAnimation } from "react-type-animation";
import "./TextComponent.css"
const TextComponent = () => {
    return(
      <TypeAnimation
        sequence={[
          'An Full-Stack Developer',
          1000, 
          'A Problem Solver',
          1000,
          'An Innovator',
          1000,
          'A Tech Enthusiast',
          1000,
          'A Continuous Learner',
          1000
        ]}
        className="text"
        wrapper="span"
        speed={50}
        style={{ fontSize: '2em', display: 'inline-block' }}
        repeat={Infinity}
      />
    )
}
export default TextComponent;