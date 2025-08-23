import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#" },
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Contact us", href: "#contact" },
  ];

  return (
    <>
  {/* Desktop Navbar */}
  <motion.nav
    className={`px-6 lg:px-28 hidden lg:flex items-center justify-between py-4 fixed top-0 left-0 w-full z-50 transition-colors duration-500 
      ${scrolled ? "bg-gray-900/80 backdrop-blur-md shadow-md" : "bg-white text-white"}
    `}
    initial={{ y: -50, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.6, type: "spring" }}
  >
    {/* Logo */}
    <motion.img
      whileHover={{ scale: 1.05 }}
      src="/assests/LOGO.png"
      alt="Zain Logo"
      className="h-18 w-20 cursor-pointer"
    />

    {/* Links */}
    <ul className="flex gap-14 text-[20px] font-medium">
      {navLinks.map((link) => (
        <motion.li
          key={link.label}
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <a
            href={link.href}
            className={`hover:text-[#cab344] transition-colors duration-300 ${scrolled ? "text-white" : " text-gray-900 "}`}
          >
            {link.label}
          </a>
        </motion.li>
      ))}
    </ul>
  </motion.nav>

  {/* Mobile Navbar Top Bar */}
  <div
    className={`flex lg:hidden items-center justify-between py-4 px-4 fixed top-0 left-0 w-full z-50 transition-colors duration-500 ${
      scrolled
        ? "bg-gray-800/40 backdrop-blur-md text-white shadow-md"
        : "bg-transparent text-gray-400"
    }`}
  >
    {/* Logo */}
    <motion.img
      whileHover={{ scale: 1.05 }}
      src="/assests/LOGO.png"
      alt="Zain Logo"
      className="h-14 w-14 cursor-pointer"
    />

    {/* Hamburger */}
    <button onClick={() => setIsOpen(!isOpen)} className="text-3xl">
      ☰
    </button>
  </div>

  {/* Mobile Menu */}
  {isOpen && (
    <motion.nav
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="flex 900:hidden flex-col items-center justify-center gap-10 fixed top-0 right-0 bg-black text-white w-full h-screen z-[100]"
    >
      {/* Close */}
      <button
        className="absolute top-6 right-6 text-3xl"
        onClick={() => setIsOpen(false)}
      >
        ✕
      </button>

      {/* Links */}
      <ul className="flex flex-col gap-6 text-[26px] font-medium">
        {navLinks.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="hover:text-orange-500 transition-colors duration-300"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </motion.nav>
  )}
</>

  );
}
