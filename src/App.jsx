import { useEffect, useState } from "react";
import project1 from "./assets/project1.png";
import project2 from "./assets/project2.png";
import project3 from "./assets/project3.png";
import "./App.css";

function App() {
  const [activeSession, setactiveSession] = useState("");
  const [isScrolled, setIsScrolled] = useState("");

  // This useEffect hook runs once when the component mounts
  useEffect(() => {
    // This is the function that runs when a section enters or leaves the view
    const activeScreen = (entries) => {
      entries.forEach((entry) => {
        // isIntersecting means the section is (at least partially) visible
        if (entry.isIntersecting) {
          // Update our state with the ID of the visible section
          setactiveSession(entry.target.id);
        }
      });
    };

    // --- Observer Options ---
    // root: null means we watch relative to the main browser viewport
    // rootMargin: '-50% 0px -50% 0px' is the magic. It creates a horizontal
    // "line" in the middle of the screen. A section is only "intersecting"
    // when it crosses this line.
    // threshold: 0 means as soon as any part crosses, trigger the callback.

    const options = {
      root: null,
      rootMargin: "-50% 0px -50% 0px",
      threshold: 0,
    };

    // Create the "spy"
    const spy = new IntersectionObserver(activeScreen, options);

    // Tell the "spy" which elements to watch
    // We select ALL elements that have the 'subContainer' class
    const sections = document.querySelectorAll(".subContainer");
    sections.forEach((section) => {
      spy.observe(section);
    });
    // Cleanup: When the component unmounts, stop watching
    return () => {
      sections.forEach((section) => {
        spy.unobserve(section);
      });
    };
  }, []);

  useEffect(() => {
    const animateScreen = (screens) => {
      screens.forEach((screen) => {
        if (screen.isIntersecting) {
          screen.target.classList.add("is-visible");

          observer.unobserve(screen.target);
        }
      });
    };

    const options = {
      root: null,
      rootMargin: "0px 0px -100px 0px",
      threshold: 0,
    };

    const observer = new IntersectionObserver(animateScreen, options);

    const targets = document.querySelectorAll(".animate-on-scroll");
    const targetLeft = document.querySelectorAll(".animate-on-scroll-left");
    const targetRight = document.querySelectorAll(".animate-on-scroll-right");

    targets.forEach((target) => {
      observer.observe(target);
    });
    targetLeft.forEach((target) => {
      observer.observe(target);
    });
    targetRight.forEach((target) => {
      observer.observe(target);
    });

    return () => {
      targets.forEach((target) => {
        observer.unobserve(target);
      });
      targetLeft.forEach((target) => {
        observer.unobserve(target);
      });
      targetRight.forEach((target) => {
        observer.unobserve(target);
      });
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="Mazorcontainer border-2 cursor-default w-full">
        {/* frontDisplay */}
        <div
          id="home"
          className="subContainer bg-black flex flex-col border-2 p-2"
        >
          <header
            className={`header w-screen list-none text-white flex justify-center items-center fixed top-0 left-0 h-1/7  z-100 transition-all duration-300 ${
              isScrolled
                ? "border-b h-1/11 border-yellow-300 "
                : "border-b-2 border-transparent"
            }`}
          >
            <li className="p-2 md:p-4 font-bold text-center hover:text-yellow-300">
              <a
                href="#about"
                className={activeSession === "about" ? "text-yellow-400" : ""}
              >
                About
              </a>
            </li>
            <li className="p-2 md:p-4 font-bold text-center hover:text-yellow-300">
              <a
                href="#myExp"
                className={activeSession === "myExp" ? "text-yellow-400" : ""}
              >
                Experience
              </a>
            </li>
            <li className="p-2 md:p-4 font-bold text-center hover:text-yellow-300">
              <a
                href="#mySkills"
                className={
                  activeSession === "mySkills" ? "text-yellow-400" : ""
                }
              >
                Skills
              </a>
            </li>
            <li className="p-2 md:p-4 font-bold text-center hover:text-yellow-300">
              <a
                href="#myProjects"
                className={
                  activeSession === "myProjects" ? "text-yellow-400" : ""
                }
              >
                Projects
              </a>
            </li>
            <li className="p-2 md:p-4 font-bold text-center hover:text-yellow-300">
              <a
                href="#contactMe"
                className={
                  activeSession === "contactMe" ? "text-yellow-400" : ""
                }
              >
                Contacts
              </a>
            </li>
          </header>
          <div className="content text-white flex grow relative justify-start min-h-screen items-center ">
            <div className="contentLeft absolute md:pl-60  md:pt-0 pl-6 mt-23 md:text-left mx-auto md:mx-0">
              <div className="name relative text-xl text-yellow-300 w-fit p-2">
                Love Mishra
              </div>
              <div className="role text-5xl md:text-7xl">
                FullStack
                <br />
                Developer
              </div>
            </div>
          </div>
        </div>
        {/* ------------------------------ */}
        {/* About me  */}
        <div id="about" className="subContainer bg-black text-white  p-2 flex">
          <div className="content flex flex-col md:flex-row items-center">
            <div className="contentLeft animate-on-scroll flex flex-col justify-center w-full md:w-7/12 px-6 py-10 md:pl-60">
              <div className="serial  relative text-left w-1/2 pl-14 text-2xl font-bold mb-4">
                01
              </div>
              <div className="w-full md:w-1/2">
                <h1 className="text-left text-5xl md:text-6xl pb-7">
                  Know <br />
                  About me
                </h1>
              </div>
              <div className="text-left w-full md:w-16/20 text-wrap">
                Hello! I'm Love Mishra, a developer and creator driven by a
                passion for building things that work in both the digital and
                physical worlds. My expertise includes full-stack JavaScript
                development, where I use the MERN stack (MongoDB, Express.js,
                React, Node.js) to build seamless web applications and React
                Native for cross-platform mobile experiences. Beyond the screen,
                I have a deep fascination with the Internet of Things. I love
                the challenge of programming hardware like Arduino and ESP32 to
                bring ideas to real life. Currently my ongoing journey is
                leading me toward the exciting world of Artificial Intelligence,
                where I aim to combine my software and hardware skills to build
                smart, connected devices.
              </div>
            </div>
            <div className="contentRight animate-on-scroll-left flex justify-center relative items-center w-full md:w-5/12 p-10 md:p-0">
              <div className="relative w-3/4 md:w-10/12 lg:w-8/12">
                <div className="absolute animate-on-scroll-right top-4 left-4 w-full aspect-square border-8 border-yellow-400"></div>
                <img className="w-full h-full" src="/love.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
        {/* ------------------------------ */}
        {/* My Experience */}
        <div id="myExp" className="subContainer bg-black border-2 p-2 ">
          <div className="content text-white flex-col grow relative justify-start items-center">
            <div className="contentLeft pt-10 md:pt-20 px-6 md:pl-60">
              <div className="serial relative text-left w-1/2 pl-14 text-2xl font-bold mb-4">
                02
              </div>
              <h1 className="text-left text-6xl pb-7">
                My <br /> Experience
              </h1>
              <div className="expContent relative pl-20">
                <ol>
                  <li className="exp-list animate-on-scroll relative p-5 flex flex-col">
                    <div className="exp-duration font-bold pt-8 w-max pl-4 pb-8 relative flex ">
                      <span className="cover"></span>
                      <h1 className="z-20 pr-4">2024-2025</h1>
                    </div>
                    <h1 className=" text-left text-2xl ">Frontendend Part</h1>
                    <p className="exp relative pl-11 text-yellow-400">
                      College Projects
                    </p>
                    <ol className="list-disc pl-4 md:w-7/10">
                      <li className="wrap-normal">
                        Developed and maintained responsive, user-friendly
                        interfaces for a client-facing web application using
                        React.js and Tailwind CSS.
                      </li>
                      <li className="wrap-normal">
                        Integrated third-party REST APIs to fetch and display
                        dynamic data, managing complex application state using
                        React's Context API.
                      </li>
                      <li className="wrap-normal">
                        Collaborated closely with UI/UX designers to translate
                        Figma mockups into pixel-perfect, interactive
                        components.
                      </li>
                    </ol>
                  </li>
                  <li className="exp-list animate-on-scroll relative flex flex-col p-5">
                    <div className="exp-duration font-bold w-max pt-8 pl-4 pb-8 relative flex ">
                      <span className="cover"></span>
                      <h1 className="z-20 pr-4">2025-2026</h1>
                    </div>
                    <h1 className=" text-left text-2xl ">Backend Part</h1>
                    <p className="exp relative pl-11 text-yellow-400">
                      Slef Learning
                    </p>
                    <ol className="list-disc pl-4 md:w-7/10">
                      <li className="wrap-normal">
                        Built and maintained secure, scalable RESTful APIs using
                        Node.js and Express.js to support new features for the
                        main platform.
                      </li>
                      <li className="wrap-normal">
                        Designed and implemented MongoDB database schemas,
                        writing efficient aggregation pipelines for complex data
                        retrieval.
                      </li>
                      <li className="wrap-normal">
                        Implemented user authentication and authorization flows
                        using JSON Web Tokens (JWT) to secure critical
                        application endpoints.
                      </li>
                    </ol>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
        {/* ------------------------------ */}
        {/* My skills */}
        <div id="mySkills" className="subContainer bg-black text-white p-2 ">
          <div className="content">
            <div className="contentLeft pt-10 md:pt-20 px-6 md:p-60">
              <div className="serial relative text-left w-1/2 pl-14 text-2xl font-bold mb-4">
                03
              </div>
              <h1 className="text-left text-5xl md:text-6xl pb-7">
                My <br /> Skills
              </h1>
              <div className="list-none  gap-4 grid grid-cols-2 md:grid-cols-3 relative p-5 mt-5">
                <div className="skills animate-on-scroll pl-12 w-full min-h-30 max-h-30 relative flex">
                  <span className="timeline"></span>
                  HTML
                </div>
                <div className="skills animate-on-scroll pl-12 w-full min-h-30 max-h-30 relative">
                  <span className="timeline"></span>
                  CSS
                </div>
                <div className="skills animate-on-scroll pl-12 w-full min-h-30 max-h-30 relative">
                  <span className="timeline"></span>
                  JavaScript
                </div>
                <div className="skills animate-on-scroll pl-12 w-full min-h-30 max-h-30 relative">
                  <span className="timeline"></span>
                  React JS
                </div>
                <div className="skills animate-on-scroll pl-12 w-full min-h-30 max-h-30 relative">
                  <span className="timeline"></span>
                  Node JS
                </div>
                <div className="skills animate-on-scroll pl-12 w-full min-h-30 max-h-30 relative">
                  <span className="timeline"></span>
                  Express JS
                </div>
                <div className="skills animate-on-scroll pl-12 w-full min-h-30 max-h-30 relative">
                  <span className="timeline"></span>
                  Next JS
                </div>
                
              </div>
            </div>
          </div>
        </div>
        {/* ------------------------------ */}
        {/* My Projects */}
        <div id="myProjects" className="subContainer bg-black text-white  p-2 ">
          <div className="content">
            <div className="contentLeft flex flex-col pt-10 md:pt-20 px-6 md:pl-60">
              <div className="serial relative text-left w-1/2 pl-14 text-2xl font-bold mb-4">
                04
              </div>
              <h1 className="text-left text-5xl md:text-6xl pb-7">
                My <br /> Projects
              </h1>
              <div className="w-full pt-10 md:pt-20 flex justify-start items-center">
                <div className="Projects grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full md:w-5/6 gap-2 ">
                  <div className="aspect-video animate-on-scroll overflow-hidden h-full relative bg-linear-to-r from-yellow-500 via-orange-500 to-red-500">
                    <a
                      href="https://joon-trk4.vercel.app/"
                      className="block w-full h-full relative group"
                      target="_blank"
                    >
                      <div
                        className="w-full h-full bg-cover transition-transform duration-300 group-hover:scale-110 blur-sm"
                        style={{ backgroundImage: `url(${project1})` }}
                      ></div>
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 p-4 bg-black/60 rounded-xl text-2xl w-max font-semibold text-white text-center shadow-lg">
                        Joon <br /> ecommerce website
                      </div>
                    </a>
                  </div>
                  <div className="aspect-video animate-on-scroll overflow-hidden h-full relative bg-linear-to-r from-yellow-500 via-orange-500 to-red-500">
                    <a
                      href="https://campus-share-topaz.vercel.app/"
                      className="block w-full h-full relative group"
                      target="_blank"
                    >
                      <div
                        className="w-full h-full bg-cover transition-transform duration-300 group-hover:scale-110 blur-sm"
                        style={{ backgroundImage: `url(${project3})` }}
                      ></div>
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 p-4 bg-black/60 rounded-xl text-2xl w-max font-semibold text-white text-center shadow-lg">
                        CampurShare <br /> Sharing is caring
                      </div>
                    </a>
                  </div>
                  <div className="aspect-video animate-on-scroll overflow-hidden h-full relative bg-linear-to-r from-yellow-500 via-orange-500 to-red-500">
                    <a
                      href="https://secure-vault-one-phi.vercel.app/"
                      className="block w-full h-full relative group"
                      target="_blank"
                    >
                      <div
                        className="w-full h-full bg-cover transition-transform duration-300 group-hover:scale-110 blur-sm"
                        style={{ backgroundImage: `url(${project2})` }}
                      ></div>
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 p-4 bg-black/60 rounded-xl text-2xl w-max font-semibold text-white text-center shadow-lg">
                        Secure-vault <br /> Password Manager
                      </div>
                    </a>
                  </div>
                  {/* <div className="aspect-video animate-on-scroll h-full  bg-linear-to-r from-green-500 via-emerald-500 to-teal-500"></div> */}
                  {/* <div className="aspect-video animate-on-scroll h-full  bg-[linear-gradient(60deg,rgb(247,149,51),rgb(243,112,85),rgb(239,78,123),rgb(161,102,171),rgb(80,115,184),rgb(16,152,173),rgb(7,179,155),rgb(111,186,130))]  "></div> */}
                  <div className="aspect-video animate-on-scroll h-full relative bg-linear-to-r from-indigo-500 via-blue-500 to-cyan-500"></div>
                  <div className="aspect-video animate-on-scroll h-full relative bg-linear-to-r from-lime-500 via-green-500 to-emerald-500"></div>
                  <div className="aspect-video animate-on-scroll h-full relative bg-linear-to-r from-gray-300 via-yellow-500 to-amber-400"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ------------------------------ */}
        {/* Contact Me  */}
        <div id="contactMe" className="subContainer bg-black text-white p-2 ">
          <div className="content  flex flex-col md:flex-row justify-around items-center">
            <div className="contentLeft w-full md:w-1/2 pt-10 md:pt-20 px-6 md:pl-60">
              <div className="serial relative text-left w-1/2 pl-14 text-2xl font-bold mb-4">
                05
              </div>
              <h1 className="text-left text-5xl md:text-6xl pb-7">
                Contact Me
              </h1>
              <div className="Contacts">
                <ul className="animate-on-scroll">
                  <li className="p-4 text-3xl">
                    Mobile Number
                    <br />
                    <span className="text-[16px]">(+91) 7676878890</span>
                  </li>
                  <li className="p-4 text-3xl">
                    Email
                    <br />
                    <span className="text-[16px]">
                      lovemishra1606@gmail.com
                    </span>
                  </li>
                </ul>
                <div className="flex flex-col items-baseline w-1/4">
                  <h1 className="animate-on-scroll pt-4 pb-4 text-2xl w-max">
                    Social Networks
                  </h1>
                  <div className="socialImages animate-on-scroll flex justify-around ml-4 w-full gap-2">
                    <a
                      href="https://www.instagram.com/truelove.006/"
                      className="flex justify-center items-center w-15"
                      target="blank"
                    >
                      <img
                        className="w-full flex justify-center items-center rounded-full"
                        src="/Instagram_icon.png"
                        alt=""
                      />
                    </a>
                    <a
                      href="https://github.com/lovemishra28"
                      className="flex justify-center items-center w-15"
                      target="blank"
                    >
                      {" "}
                      <img
                        className="w-full flex justify-center items-center rounded-full"
                        src="/Github_icon.png"
                        alt=""
                      />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/love-mishra-8aa7b5332/ "
                      className="flex justify-center items-center w-15"
                      target="blank"
                    >
                      <img
                        className="w-full flex justify-center items-center rounded-full"
                        src="/Linkedin_icon.png"
                        alt=""
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="contentRight animate-on-scroll w-full md:w-1/2 relative flex justify-center items-center p-10">
              <img
                src="/Contacts3.png"
                alt=""
                className="w-1/2 left-3/10 top-18/20"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
