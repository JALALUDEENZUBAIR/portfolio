import { TypeAnimation } from "react-type-animation";
const TextComponent = () => {
  return (
    <TypeAnimation
      sequence={[
        "An Full-Stack Developer",
        1000,
        "A Problem Solver",
        1000,
        "An Innovator",
        1000,
        "A Tech Enthusiast",
        1000,
        "A Continuous Learner",
        1000,
      ]}
      className="inline-block text-4xl font-extrabold dark:text-white max-sm:h-[85px] text-black tracking-wider leading-[40px]"
      wrapper="span"
      speed={50}
      repeat={Infinity}
    />
  );
};

export default TextComponent;
