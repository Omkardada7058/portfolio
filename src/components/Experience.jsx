import React from "react";
import { motion } from "framer-motion";

const ExperienceItem = ({ experience, index }) => {
  return (
    <motion.div
      className="mb-12 w-full flex flex-col md:flex-row items-center md:items-start justify-between"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.8 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
    >
      <div className="w-full md:w-auto md:order-1 text-center md:text-left mb-4 md:mb-0">
        <div className="px-2 py-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full text-sm shadow-md">
          {experience.duration}
        </div>
      </div>
      <div className="flex-1 order-2 md:pl-16">
        <div className="p-6 bg-white rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold mb-2 text-gray-800">
            {experience.position}
          </h3>
          <h4 className="text-xl text-purple-600 mb-4">{experience.company}</h4>
          <p className="text-gray-600 leading-relaxed">
            {experience.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

const Experience = ({ data }) => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
            My Journey
          </h2>
          <p className="text-xl text-gray-600">
            A timeline of my professional experiences
          </p>
        </motion.div>
        <div className="relative">
          <div className="absolute left-1/2 md:left-0 md:ml-16 transform -translate-x-1/2 md:translate-x-0 h-full w-1 bg-gradient-to-b from-blue-500 to-purple-500"></div>
          <div className="relative z-10">
            {data.experiences.map((exp, index) => (
              <ExperienceItem key={index} experience={exp} index={index} />
            ))}
          </div>
          <div className="absolute bottom-0 left-1/2 md:left-0 md:ml-16 transform -translate-x-1/2 md:translate-x-0 w-4 h-4 bg-purple-600 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
