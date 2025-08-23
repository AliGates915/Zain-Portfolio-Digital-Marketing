import React from "react";
import { motion } from "framer-motion";
import Title from "./Title";
import { FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { FaBullseye, FaPenNib, FaChartLine, FaFacebookF, FaUsers } from "react-icons/fa";
// Socials (React Icons + links)
const socials = [
  { icon: <FaInstagram />, url: "https://www.instagram.com/stratexpvt.ltd?igsh=MTR4cGVmNHN1aGt5NA" },
  { icon: <FaLinkedin />, url: "https://www.linkedin.com/in/zain-azhar-3b9335345/" },
  { icon: <FaWhatsapp />, url: "https://wa.me/1234567890" },
];

// Skills (React Icons)
const skills = [
  { icon: <FaBullseye />, title: "Strategy" },
  { icon: <FaPenNib />, title: "Content Creation" },
  { icon: <FaChartLine />, title: "Data Analytics" },
  { icon: <FaFacebookF />, title: "Social Media Management" },
  { icon: <FaUsers />, title: "Collaboration" },
];

const About = () => {
  return (
    <div className="my-20 sm:my-32 lg:my-40 px-4 sm:px-8 lg:px-16" id="about">
      {/* Title section */}
      <Title
        text1="Our Team"
        text2="A passionate and skilled team driving business growth through strategy, innovation, creativity, and performance marketing."
      />

      {/* Main content - Image + Text */}
      <div className="flex flex-col lg:flex-row items-center lg:justify-between gap-10 lg:gap-16 mt-10">
        {/* Image with scroll animation */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ type: "spring", stiffness: 100, duration: 0.6 }}
          viewport={{ once: false, amount: 0.3 }}
          className="flex-shrink-0 w-full sm:w-3/4 lg:w-1/2"
        >
          <img
            src="./assests/team.jpeg"
            alt="About"
            className="w-full h-auto max-h-[500px] object-cover rounded-xl shadow-md"
          />
        </motion.div>

        {/* Text + Button */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ type: "spring", stiffness: 100, duration: 0.6 }}
          viewport={{ once: false, amount: 0.3 }}
          className="w-full lg:w-1/2 flex flex-col justify-center"
        >
          <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
            At Stratex, we’re more than just a digital marketing team—we’re a family of creative thinkers, problem solvers, and passionate storytellers who genuinely care about helping businesses grow. Our team brings together specialists in strategy, content creation, data analytics, social media, and performance marketing, all working side by side to turn ideas into real results.
            <br /><br />
            What makes us different is the heart we put into every project. Each member adds their own creativity, skills, and dedication, so our clients don’t just get services—they get fresh ideas and solutions designed just for them. From planning to execution, we work together like a close-knit team, staying ahead of trends and making sure our clients always shine in today’s fast-changing digital world.
          </p>

          {/* Social Links */}
          <div className="flex gap-6 mt-6 flex-wrap">
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
                className="text-2xl sm:text-3xl text-gray-700 hover:text-[#dec827] transition-colors"
              >
                {social.icon}
              </motion.a>
            ))}
          </div>

          {/* Contact Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="px-6 sm:px-8 py-2 sm:py-3 mt-8 bg-[#dec827] text-white rounded-lg cursor-pointer text-sm sm:text-base font-medium w-fit"
          >
            Contact Us
          </motion.button>
        </motion.div>
      </div>

      {/* Skills icons */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-10 mt-12 w-full">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: false, amount: 0.3 }}
            className="flex flex-col items-center justify-center gap-2 text-center"
          >
            <span className="text-4xl sm:text-5xl text-gray-700">{skill.icon}</span>
            <p className="text-xs sm:text-sm md:text-base text-gray-500">{skill.name}</p>
          </motion.div>
        ))}
      </div>
    </div>

  );
};

export default About;
