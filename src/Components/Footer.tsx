import { VscGithub } from "react-icons/vsc";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="bg-[#22252c] py-[5rem]">
      <div className="w-[40%] mx-auto flex justify-center gap-5 pb-[5rem]">
        <a href="https://github.com/Rengkat" className="footer-a">
          <VscGithub className="footer-icon" />
        </a>

        <a href="https://twitter.com/RengkatAlex" className="footer-a">
          <FaTwitter className="footer-icon" />
        </a>

        <a href="https://m.facebook.com/profile.php/?id=100006361571808" className="footer-a">
          <FaFacebookF className="footer-icon" />
        </a>

        <a href="https://www.instagram.com/alexrengkat/" className="footer-a">
          <FaInstagramSquare className="footer-icon" />
        </a>

        <a href="https://www.linkedin.com/in/alexander-rengkat-b2293b1a3" className="footer-a">
          <FaLinkedinIn className="footer-icon" />
        </a>
      </div>
      <div className="dash w-[90%] md:w-[80%] mx-auto " />
      <p className="text-center text-[#02cfb4] pt-5">
        ALEXANDER RENGKAT © {new Date().getFullYear()}. ALL RIGHTS RESERVED.
      </p>
    </div>
  );
};

export default Footer;
