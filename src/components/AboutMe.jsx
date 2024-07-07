import React from "react";
import { Card, Image } from "@nextui-org/react";
import { motion } from "framer-motion";
import MyImage from "../assets/me.jpg";

const AboutMe = ({ data }) => {
  return (
    <div className="min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto flex flex-col items-center"
      >
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          About Me
        </h2>
        <div className="flex flex-col justify-around md:flex-row items-center gap-y-6 md:gap-y-0 ">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full p-10 md:w-1/3"
          >
            <Card className="w-full  rounded-full flex justify-center  items-center h-full">
              <Image
                isBlurred
                isLoading
                isZoomed
                src={MyImage} // Replace with your actual image URL
                alt="Profile Picture"
                className="object-cover w-full h-full"
              />
            </Card>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-full md:w-1/2"
          >
            <Card className="p-6">
              <h3 className="text-2xl font-semibold mb-4">
                Hello, I'm {data.name}
              </h3>
              <p className="text-gray-600 mb-4">{data.desc1}</p>
              <p className="text-gray-600 mb-4">{data.desc2}</p>
              <p className="text-gray-600 mb-4">{data.desc3}</p>
              {/* <div className="mt-6">
                <h4 className="text-xl font-semibold mb-2">My Skills</h4>
                <div className="flex flex-wrap gap-2">
                  {["Skill 1", "Skill 2", "Skill 3", "Skill 4", "Skill 5"].map(
                    (skill, index) => (
                      <motion.span
                        key={index}
                        className="bg-purple-500 text-white px-3 py-1 rounded-full text-sm"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {skill}
                      </motion.span>
                    )
                  )}
                </div>
              </div> */}
            </Card>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutMe;
