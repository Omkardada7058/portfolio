import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Lottie from "react-lottie";
import { initLocomotiveScroll } from "./components/locomotiveScroll";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import helloAnimation from "./assets/coder.json"; // Make sure this path is correct
import "./index.css";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

function App() {
  const [showIntro, setShowIntro] = useState(true);
  const data = {
    name: "Omkar Penshanwar",
    desc1:
      " I'm a passionate Full Stack Developer with a knack for bringing ideas to life using the MERN stack. My expertise lies in crafting dynamic web applications, and I've created numerous projects in React.js, complete with eye-catching animations that make user experiences unforgettable.",
    desc2:
      "But that's not all! I'm also delving into mobile app development with Flutter, creating smooth, cross-platform applications. Currently, I'm diving into the world of DevOps, learning to streamline development processes for seamless deployments. With strong problem-solving skills and a solid grasp of Linux, I'm always ready to tackle any challenge that comes my way.",
    desc3:
      "I'm driven by curiosity and a love for innovation. Whether it's debugging tricky issues or optimizing performance, I approach every task with enthusiasm and dedication.",
    skills: [
      {
        name: "React",
        icon: "https://api.iconify.design/logos:react.svg",
        color: "text-blue-500",
      },
      {
        name: "JavaScript",
        icon: "https://api.iconify.design/logos:javascript.svg",
        color: "text-yellow-400",
      },
      {
        name: "Node.js",
        icon: "https://api.iconify.design/logos:nodejs-icon.svg",
        color: "text-green-500",
      },
      {
        name: "Python",
        icon: "https://api.iconify.design/logos:python.svg",
        color: "text-blue-500",
      },
      {
        name: "Tailwind CSS",
        icon: "https://api.iconify.design/logos:tailwindcss-icon.svg",
        color: "text-teal-400",
      },
      {
        name: "MongoDB",
        icon: "https://api.iconify.design/logos:mongodb-icon.svg",
        color: "text-green-500",
      },
      {
        name: "SQL",
        icon: "https://api.iconify.design/vscode-icons:file-type-sql.svg",
        color: "text-blue-400",
      },
      {
        name: "Git",
        icon: "https://api.iconify.design/logos:git-icon.svg",
        color: "text-orange-500",
      },
      {
        name: "Redux",
        icon: "https://api.iconify.design/logos:redux.svg",
        color: "text-purple-500",
      },
      {
        name: "Docker",
        icon: "https://api.iconify.design/logos:docker-icon.svg",
        color: "text-blue-400",
      },
      {
        name: "Linux Ubuntu",
        icon: "https://api.iconify.design/logos:ubuntu.svg",
        color: "text-orange-500",
      },
      {
        name: "Postman",
        icon: "https://api.iconify.design/logos:postman.svg",
        color: "text-orange-500",
      },
      {
        name: "Flutter",
        icon: "https://api.iconify.design/logos:flutter.svg",
        color: "text-blue-400",
      },
      {
        name: "Java",
        icon: "https://api.iconify.design/logos:java.svg",
        color: "text-red-500",
      },
      {
        name: "C",
        icon: "https://api.iconify.design/logos:c.svg",
        color: "text-blue-500",
      },
      {
        name: "C++",
        icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTIwLjY2IDdhMS41MSAxLjUxIDAgMCAwLS41NS0uNTdsLTcuMzQtNC4yNGExLjY3IDEuNjcgMCAwIDAtMS41NCAwTDMuODkgNi40M2ExLjY4IDEuNjggMCAwIDAtLjc3IDEuMzN2OC40OGExLjU3IDEuNTcgMCAwIDAgLjIyLjc2YTEuNTEgMS41MSAwIDAgMCAuNTUuNTdsNy4zNCA0LjI0YTEuNjcgMS42NyAwIDAgMCAxLjU0IDBsNy4zNC00LjI0YTEuNTEgMS41MSAwIDAgMCAuNTUtLjU3YTEuNTcgMS41NyAwIDAgMCAuMjItLjc2VjcuNzZhMS41NyAxLjU3IDAgMCAwLS4yMi0uNzZNMTIgMTcuOTJBNS45MiA1LjkyIDAgMSAxIDE3LjEzIDlMMTYgOS43MWwtLjM2LjJsLTEgLjYxQTMgMyAwIDAgMCA5IDEyYTIuODggMi44OCAwIDAgMCAuNCAxLjQ4YTMgMyAwIDAgMCA1LjEzIDBsMi42IDEuNTJBNS45NCA1Ljk0IDAgMCAxIDEyIDE3LjkybTUuOTItNS41OWgtLjY2VjEzaC0uNjV2LS42NkgxNnYtLjY2aC42NlYxMWguNjV2LjY2aC42NnptMi40NyAwaC0uNjZWMTNoLS42NnYtLjY2aC0uNjV2LS42NmguNjVWMTFoLjY2di42NmguNjZ6Ii8+PC9zdmc+",
        color: "text-blue-500",
      },
      {
        name: "Dart",
        icon: "https://api.iconify.design/logos:dart.svg",
        color: "text-blue-400",
      },
      {
        name: "GitHub",
        icon: "https://api.iconify.design/logos:github-icon.svg",
        color: "text-gray-700",
      },
    ],
    experiences: [
      {
        company: "SIEMENS DISW, Pune",
        position: "Summer Intern",
        duration: "Jun 24 - Present",
        description:
          "Working with the team on the real-time project to digitalise the process and make the work easy.",
      },

      {
        company: "WCE ACM Student Chapter",
        position: "Mentor",
        duration: "2021 - Present",
        description:
          "Organized number of coding competitions, hackathons, seminars, and talks, enhancing technical and non-technical skills among members. Spearheaded various club services and activities, fostering a vibrant and collaborative community.",
      },
      {
        company: "Walchand Linux Users' Group",
        position: "Member",
        duration: "2021 - 2022",
        description:
          "Engaged in learning and promoting open-source technologies, Linux, Docker, and more. Participated in various club services, workshops, and activities to enhance technical knowledge and community involvement.",
      },
      {
        company: "Walchand College of Engineering, Sangli",
        position: "Undergrad",
        duration: "2021 - Present",
        description:
          "Acquired comprehensive skills in IT, actively participated in academic, social activities. Engaged in various technical workshops, projects, and community-building events to foster personal and professional growth.",
      },
    ],
    projects: [
      {
        title: "StudyNotion (EdTech Platform)",
        description:
          "Streamlined course creation and enrollment platform with interactive dashboards and efficient content management.",
        image:
          "https://i.pinimg.com/564x/ad/ad/a6/adada6e920e0a6027bb6e558b18f3ddd.jpg",
        tags: [
          "React.js",
          "Node.js",
          "Express.js",
          "Docker",
          "MongoDB",
          "Redux",
        ],
        link: "https://github.com/Om21610018/Studynotion-Containerized",
      },
      {
        title: "CodeLink (Collaborative Editor)",
        description:
          "Real-time code collaboration made simple with Socket.IO and React.js.",
        image:
          "https://i.pinimg.com/564x/25/58/85/2558857e7c311aff0a51464f75956565.jpg",
        tags: ["React.js", "Socket.io", "Express.js", "Node.js", "TaliwindCSS"],
        link: "https://github.com/Om21610018/CodeLink",
      },
      {
        title: "DigiComm (Ecomm. for College)",
        description:
          "Empowering college students with a seamless e-commerce experience for buying and selling academic materials.",
        image:
          "https://i.pinimg.com/564x/1a/66/ab/1a66abebb84a38befd458137248513c1.jpg",
        tags: ["React.js", "Firebase", "Redux", "TailwindCSS"],
        link: "https://github.com/Om21610018/DigiComm",
        url: "https://digicomm.netlify.app/",
      },
      {
        title: "WeFor (Weather Forecast Dashboard)",
        description:
          "An interactive weather dashboard using OpenWeatherMap API.",
        image:
          "https://i.pinimg.com/564x/d1/42/3d/d1423d932cc98004db9ce9224d7e738b.jpg",
        tags: ["HTML", "CSS", "Javascript"],
        link: "https://github.com/Om21610018/WeFor",
        url: "https://omwefor.netlify.app/",
      },
      {
        title: "OTS Platform (Online Testing System)",
        description:
          "Streamlined testing and performance evaluation: Secure authentication, automated scoring, and comprehensive historical analysis for educators and students.",
        image:
          "https://i.pinimg.com/564x/b3/72/1d/b3721d76e72132f2c5d104e95ea536d5.jpg",
        tags: ["HTML", "TailwindCSS", "Django"],
        link: "https://github.com/Om21610018/OTS",
      },
      {
        title: "Random GIF Generator",
        description:
          "Streamlined testing and performance evaluation: Secure authentication, automated scoring, and comprehensive historical analysis for educators and students.",
        image:
          "https://i.pinimg.com/236x/fc/3d/89/fc3d896df4658cabfcc7ea8d602eac48.jpg",
        tags: ["React.js", "TailwindCSS", "APIs"],
        link: "https://github.com/yourusername/weather-dashboard",
      },
      {
        title: "Password Generator App",
        description:
          "Streamlined testing and performance evaluation: Secure authentication, automated scoring, and comprehensive historical analysis for educators and students.",
        image:
          "https://i.pinimg.com/564x/98/8f/a2/988fa25c95f228d3e9cc2c7f4e31a936.jpg",
        tags: ["HTML", "TailwindCSS", "Javascript"],
        link: "https://github.com/yourusername/weather-dashboard",
      },
    ],
    footerdesc:
      "A passionate developer creating innovative solutions and bringing ideas to life through code.",
    navLinks: [
      { name: "Home", url: "#home", id: "home" },
      { name: "About", url: "#about" },
      { name: "Projects", url: "#projects" },
      { name: "Experience", url: "#experience" },
      { name: "Contact", url: "#contact" },
    ],
    socialLinks: [
      { icon: FaGithub, url: "https://github.com/Om21610018" },
      {
        icon: FaLinkedin,
        url: "https://www.linkedin.com/in/omkar-penshanwar-537373233",
      },
      { icon: FaTwitter, url: "https://twitter.com/yourusername" },
    ],
    email: "omkarwce18@gmail.com",
    phone: "-",
    address: "Pusad, Yavatmal",
  };
  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: helloAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 5000); // 5 seconds

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!showIntro) {
      const scroll = initLocomotiveScroll({
        smooth: true,
        smoothMobile: true,
        multiplier: 5, // Adjust this value to make scrolling slower
        lerp: 1.5, // Adjust this value to make scrolling smoother
      });
      return () => {
        scroll.destroy();
      };
    }
  }, [showIntro]);

  return (
    <AnimatePresence>
      {showIntro ? (
        <motion.div
          key="intro"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="fixed w-screen h-screen inset-0 flex items-center justify-center bg-black text-white z-50"
        >
          <div
            style={{ width: "500px", height: "500px" }}
            className=" flex flex-col justify-center items-center gap-y-4"
          >
            {/* Adjust size as needed */}
            <Lottie options={defaultOptions} height="100%" width="100%" />
          </div>
        </motion.div>
      ) : (
        <motion.div
          key="content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          data-scroll-container
          className="w-full overflow-x-hidden flex flex-col justify-center items-center"
        >
          <Hero />
          <AboutMe data={data} />
          <Skills data={data} />
          <Experience data={data} />
          <Projects data={data} />
          <Contact />
          <Footer data={data} />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default App;
