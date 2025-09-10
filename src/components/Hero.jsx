import { motion } from "framer-motion";
import React from "react";
import { assests } from "../constants/assets"; // adjust path as needed
import { FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
export default function Hero() {
  const stats = [
    { number: "3+", label: "Experience" },
    { number: "80+", label: "Projects Done" },
    { number: "30+", label: "Happy Clients" },
  ];

  const socials = [
    { icon: <FaInstagram />, url: "https://instagram.com" },
    { icon: <FaLinkedin />, url: "https://linkedin.com" },
    { icon: <FaWhatsapp />, url: "https://wa.me/+923154026023" },
  ];

  return (
    <div className="flex flex-col lg:flex-row justify-between items-center my-20 lg:my-40 px-6 lg:px-20">
      {/* Left Content */}
      <motion.div
        className="flex flex-col max-w-xl"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9, type: "spring" }}
        viewport={{ once: false, amount: 0.3 }}
      >
        {/* <p className="text-lg text-gray-500">Hi I am</p> */}
        <p className="text-2xl text-gray-500">M. Zain Azhar</p>

        {/* Title */}
        <motion.h1
          className="text-4xl sm:text-6xl lg:text-7xl font-bold text-[#dec827] my-4"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, type: "spring" }}
          viewport={{ once: false, amount: 0.3 }}
        >
          CEO STRATEX
        </motion.h1>

        {/* Social Icons */}
        <div className="flex gap-4 my-2">
          {socials.map((social, i) => (
            <motion.a
              key={i}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 300 }}
              viewport={{ once: false }}
              className="text-gray-700 hover:text-[#dec827] text-2xl cursor-pointer"
            >
              {social.icon}
            </motion.a>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-4 my-6">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="px-6 py-2 bg-[#dec827] text-white rounded-md"
          >
            Contact Me
          </motion.button>
        </div>

        {/* Stats */}
        <div className="flex justify-between gap-4 sm:gap-6 py-4 px-4 sm:px-8 rounded-md font-semibold bg-[#1e1e1e] mt-6 w-full">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              viewport={{ once: false }}
              className={i !== stats.length - 1 ? "border-r border-gray-600 px-2" : "px-2"}
            >
              <p className="text-xl font-bold text-[#dec827]">{stat.number}</p>
              <p className="text-sm sm:text-base text-gray-300">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Right Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, type: "spring" }}
        viewport={{ once: false, amount: 0.3 }}
        // className="h-[450px] w-[350px] sm:h-[430px] sm:w-[400px] rounded-full bg-white flex justify-center items-center mt-10 lg:mt-0"
      >
        <motion.div whileHover={{ y: -14 }}>
          <img
            className="w-52 sm:w-72"
            // src={assests.man}
            alt="Gandu"
          />
        </motion.div>
      </motion.div>

    </div>
  );
}
