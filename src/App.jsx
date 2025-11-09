import "./App.css";

function App() {
  return (
    <>
      <div className="Mazorcontainer border-2 cursor-default w-full">
        {/* frontDisplay */}
        <div className="subContainer bg-black flex flex-col border-2 p-2">
          <header className="header w-screen list-none text-white flex justify-center items-center fixed top-0 h-1/7  z-100 ">
            <li className="p-2 md:p-4 font-bold text-center">About</li>
            <li className="p-2 md:p-4 font-bold text-center">Experience</li>
            <li className="p-2 md:p-4 font-bold text-center">Projects</li>
            <li className="p-2 md:p-4 font-bold text-center">Contacts</li>
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
        <div className="subContainer bg-black text-white  p-2 flex">
          <div className="content flex flex-col md:flex-row items-center">
            <div className="contentLeft flex flex-col justify-center w-full md:w-7/12 px-6 py-10 md:pl-60">
              <div className="serial relative text-left w-1/2 pl-14 text-2xl font-bold mb-4">
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
            <div className="contentRight flex justify-center relative items-center w-full md:w-5/12 p-10 md:p-0">
              <div className="relative w-3/4 md:w-10/12 lg:w-8/12">
                <div className="absolute top-4 left-4 w-full aspect-square border-8 border-yellow-400"></div>
                <img className="w-full h-full" src="./public/love.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
        {/* ------------------------------ */}
        {/* My Experience */}
        <div className="subContainer bg-black border-2 p-2 ">
          <div className="content text-white flex-col grow relative justify-start items-center">
            <div className="contentLeft pt-10 md:pt-20 px-6 md:pl-60">
              <div className="serial relative text-left w-1/2 pl-14 text-2xl font-bold mb-4">
                02
              </div>
              <h1 className="text-left text-6xl pb-7">
                My <br /> Experience
              </h1>
              <div className="expContent relative pl-20">
                <ul>
                  <li className="exp-list relative p-5 flex flex-col">
                    <div className="exp-duration font-bold pt-8 w-max pl-4 pb-8 relative flex ">
                      <span className="cover"></span>
                      <h1 className="z-20 pr-4">2024-2025</h1>
                    </div>
                    <h1 className=" text-left text-2xl ">Frontend side ltd.</h1>
                    <p className="exp relative pl-11 text-yellow-400">
                      XYZ Intership
                    </p>
                    <ol className="list-disc pl-4">
                      <li>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Facilis, aliquid.
                      </li>
                      <li>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Facilis, aliquid.
                      </li>
                      <li>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Facilis, aliquid.
                      </li>
                    </ol>
                  </li>
                  <li className="exp-list relative flex flex-col p-5">
                    <div className="exp-duration font-bold w-max pt-8 pl-4 pb-8 relative flex ">
                      <span className="cover"></span>
                      <h1 className="z-20 pr-4">2024-2025</h1>
                    </div>
                    <h1 className=" text-left text-2xl ">Backend side ltd.</h1>
                    <p className="exp relative pl-11 text-yellow-400">
                      ABC Intership
                    </p>
                    <ol className="list-disc pl-4">
                      <li>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Facilis, aliquid.
                      </li>
                      <li>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Facilis, aliquid.
                      </li>
                      <li>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Facilis, aliquid.
                      </li>
                    </ol>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* ------------------------------ */}
        {/* My skills */}
        <div className="subContainer bg-black text-white p-2 ">
          <div className="content">
            <div className="contentLeft pt-10 md:pt-20 px-6 md:p-60">
              <div className="serial relative text-left w-1/2 pl-14 text-2xl font-bold mb-4">
                03
              </div>
              <h1 className="text-left text-5xl md:text-6xl pb-7">
                My <br /> Skills
              </h1>
              <div className="list-none  gap-4 grid grid-cols-2 md:grid-cols-3 relative p-5 mt-5">
                <div className="skills pl-12 w-full min-h-30 max-h-30 relative flex">
                  <span className="timeline"></span>
                  HTML
                </div>
                <div className="skills pl-12 w-full min-h-30 max-h-30 relative">
                  <span className="timeline"></span>
                  CSS
                </div>
                <div className="skills pl-12 w-full min-h-30 max-h-30 relative">
                  <span className="timeline"></span>
                  JavaScript
                </div>
                <div className="skills pl-12 w-full min-h-30 max-h-30 relative">
                  <span className="timeline"></span>
                  React JS
                </div>
                <div className="skills pl-12 w-full min-h-30 max-h-30 relative">
                  <span className="timeline"></span>
                  Node JS
                </div>
                <div className="skills pl-12 w-full min-h-30 max-h-30 relative">
                  <span className="timeline"></span>
                  Express JS
                </div>
                <div className="skills pl-12 w-full min-h-30 max-h-30 relative">
                  <span className="timeline"></span>
                  AndroidDev
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ------------------------------ */}
        {/* My Projects */}
        <div className="subContainer bg-black text-white  p-2 ">
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
                  <div className="aspect-video h-full relative bg-linear-to-r from-yellow-500 via-orange-500 to-red-500"></div>
                  <div className="aspect-video h-full  bg-linear-to-r from-green-500 via-emerald-500 to-teal-500"></div>
                  <div className="aspect-video h-full  bg-[linear-gradient(60deg,rgb(247,149,51),rgb(243,112,85),rgb(239,78,123),rgb(161,102,171),rgb(80,115,184),rgb(16,152,173),rgb(7,179,155),rgb(111,186,130))]  "></div>
                  <div className="aspect-video h-full relative bg-linear-to-r from-indigo-500 via-blue-500 to-cyan-500"></div>
                  <div className="aspect-video h-full relative bg-linear-to-r from-lime-500 via-green-500 to-emerald-500"></div>
                  <div className="aspect-video h-full relative bg-linear-to-r from-gray-300 via-yellow-500 to-amber-400"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ------------------------------ */}
        {/* Contact Me  */}
        <div className="subContainer bg-black text-white p-2 ">
          <div className="content  flex flex-col md:flex-row justify-around items-center">
            <div className="contentLeft w-full md:w-1/2 pt-10 md:pt-20 px-6 md:pl-60">
              <div className="serial relative text-left w-1/2 pl-14 text-2xl font-bold mb-4">
                05
              </div>
              <h1 className="text-left text-5xl md:text-6xl pb-7">Contact Me</h1>
              <div className="Contacts">
                <ul>
                  <li className="p-4 text-3xl">
                    Mobile Number
                    <br />
                    <span className="text-[16px]">7676878890</span>
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
                  <h1 className="pt-4 pb-4 text-2xl w-max">Social Networks</h1>
                  <div className="socialImages flex justify-around ml-4 w-full gap-2">
                    <a
                      href="https://www.instagram.com/l.0.v.e_16/"
                      className="flex justify-center items-center w-15"
                      target="blank"
                    >
                      <img
                        className="w-full flex justify-center items-center rounded-full"
                        src="./public/Instagram_icon.png"
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
                        src="./public/Github_icon.png"
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
                        src="./public/Linkedin_icon.png"
                        alt=""
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="contentRight w-full md:w-1/2 relative flex justify-center items-center p-10">
              <img
                src="./public/Contacts3.png"
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
