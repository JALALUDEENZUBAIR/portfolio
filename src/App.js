import { useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import ContactUs from './pages/ContactUs';
import Home from './pages/Home';
import About from './pages/About';
import Project from './pages/Project';
import './App.css';
import ScrollToTop from './hooks/ScrollToTop';
import { CiMenuFries } from 'react-icons/ci';
import { IoMdClose } from 'react-icons/io';
const App = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const toggleDropdown = () => {
    setIsDropdownOpen(prevState => !prevState);
  };
  return (
    <div className="main-container">
      <div className={`header-container ${isDropdownOpen ? 'show' : ''}`}>
        <div>
          <ul className="list-container">
            <li><Link to="/" onClick={toggleDropdown}>Home</Link></li>
            <li><Link to="/about" onClick={toggleDropdown}>About</Link></li>
            <li><Link to="/contact" onClick={toggleDropdown}>Contact</Link></li>
            <li><Link to="/projects" onClick={toggleDropdown}>Projects</Link></li>
          </ul>
        </div>
        <IoMdClose
          className={"close"}
          onClick={toggleDropdown}
        />
      </div>
      <ScrollToTop />
      <div className="body-container">
        <CiMenuFries
          className={`open ${!isDropdownOpen ? 'show' : ''}`}
          onClick={toggleDropdown}
        />
        <div className={`route ${isDropdownOpen ? 'show' : ''}`}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/projects" element={<Project />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};
export default App;