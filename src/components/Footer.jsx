import React from "react";
import { motion } from "framer-motion";

const Footer = ({ data }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 w-full text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-2xl font-bold mb-4">{data.name}</h3>
            <p className="text-gray-400 mb-4">{data.footerdesc}</p>
            <div className="flex space-x-4">
              {data.socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <link.icon className="text-2xl text-gray-400 hover:text-white transition-colors duration-300" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {data.navLinks.map((link, index) => (
                <motion.li key={index} whileHover={{ x: 2 }}>
                  <a
                    href={link.url}
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact</h3>
            <p className="text-gray-400 mb-2">Email: {data.email}</p>
            <p className="text-gray-400 mb-2">Phone: {data.phone}</p>
            <p className="text-gray-400">Location: {data.address}</p>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t  border-gray-800 text-center">
          <p className="text-gray-400">Made with ❤️ by Omkar</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
