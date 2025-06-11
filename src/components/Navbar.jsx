import logo from "../assets/logo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-10 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img
          src={logo}
          alt="logo"
          className="h-16 w-14 object-cover rounded-full mx-2"
        />
      </div>

      <div className="m-8 flex items-center justify-center gap-4 text-2xl text-white">
        <a
          href="https://www.linkedin.com/in/kadees-wardyy-539b66209/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-cyan-400 transition-colors duration-200 cursor-pointer"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/kadeeswardy?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-cyan-400 transition-colors duration-200 cursor-pointer"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.facebook.com/kadees.wardy/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-cyan-400 transition-colors duration-200 cursor-pointer"
        >
          <FaFacebook />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;