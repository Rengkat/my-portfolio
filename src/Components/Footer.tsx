import { VscGithub } from "react-icons/vsc";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  const socialLinks = [
    {
      icon: <VscGithub className="text-xl" />,
      href: "https://github.com/Rengkat",
      label: "GitHub"
    },
    {
      icon: <FaTwitter className="text-xl" />,
      href: "https://twitter.com/RengkatAlex",
      label: "Twitter"
    },
    {
      icon: <FaFacebookF className="text-xl" />,
      href: "https://m.facebook.com/profile.php/?id=100006361571808",
      label: "Facebook"
    },
    {
      icon: <FaInstagram className="text-xl" />,
      href: "https://www.instagram.com/alexrengkat/",
      label: "Instagram"
    },
    {
      icon: <FaLinkedinIn className="text-xl" />,
      href: "https://www.linkedin.com/in/alexander-rengkat-b2293b1a3",
      label: "LinkedIn"
    }
  ];

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-800 pt-16 pb-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Social links with modern styling */}
        <div className="flex justify-center gap-6 pb-12">
          {socialLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-3 rounded-full bg-gray-800 hover:bg-gradient-to-r from-teal-500 to-cyan-500 transition-all duration-300"
              aria-label={link.label}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="text-gray-300 group-hover:text-white transition-colors duration-300">
                {link.icon}
              </div>
              <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 text-xs text-gray-400 transition-opacity duration-300 whitespace-nowrap">
                {link.label}
              </span>
            </motion.a>
          ))}
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-teal-500/30 to-transparent w-full max-w-2xl mx-auto mb-8" />

        {/* Copyright text */}
        <motion.p 
          className="text-center text-teal-400/80 font-light text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          ALEXANDER RENGKAT © {new Date().getFullYear()}. ALL RIGHTS RESERVED.
        </motion.p>

        {/* Optional: Back to top button for footer */}
        <motion.div 
          className="flex justify-center mt-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <a 
            href="#top" 
            className="text-xs text-gray-500 hover:text-teal-400 transition-colors duration-300 flex items-center gap-1"
          >
            <span>Back to top</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </a>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;