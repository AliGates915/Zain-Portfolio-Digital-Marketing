import React from "react";
import { motion } from "framer-motion";
import { services_data } from "../../public/assests/assest";
import Title from "./Title";

export default function Services() {
  return (
    <div className="my-40 px-6 lg:px-20" id="services">
      {/* Section Title */}
      <Title
        text1="Services"
        text2="I design modern and user-friendly UI/UX interfaces along with creative strategies that make your brand stand out."
      />

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
        {services_data.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: false, amount: 0.3 }}
              className="flex flex-col items-center text-center bg-[#1e1e1e] w-full p-8 rounded-2xl shadow-md border border-transparent hover:border-[#FA6E00]/60 hover:shadow-lg hover:shadow-[#FA6E00]/30 transition-all duration-300"
            >
              {/* Icon */}
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[#FA6E00]/10 mb-4">
                <Icon className="text-3xl text-[#dec827]" />
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>

              {/* Description */}
              <p className="text-gray-400 text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          );
        })}
      </div>


    </div>
  );
}
