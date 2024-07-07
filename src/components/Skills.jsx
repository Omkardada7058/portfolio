import React from "react";
import { motion } from "framer-motion";

const Skills = ({ data }) => {
  return (
    <section className="py-16 bg-slate-800 w-full">
      <div className="max-w-6xl mx-auto gap-y-10 flex flex-col px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-extrabold text-white text-center mb-8">
            My Skills
          </h2>
        </motion.div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {data.skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <motion.div
                className={`w-16 h-16 flex  items-center justify-center ${skill.color} mb-4`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <div className=" bg-white  py-2 px-4 scale-125  rounded-full">
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="w-12 h-12 content-center object-fill"
                  />
                </div>
              </motion.div>
              <p className="text-sm text-gray-300 text-center">{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
