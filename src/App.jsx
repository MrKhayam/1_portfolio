import React from "react";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import Intro from "./components/Intro";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Links from "./components/Links";

const App = () => {
  return (
    <>
      {/* For Mobile Devices  */}
      <div className="md:hidden w-full h-auto bg-zinc-900 border border-zinc-900">
        <Navbar />
        <Profile />
        <Intro />
        <About />
        <Projects />
        <Contact />
        <Links />
      </div>

      {/* For Tablet Devices  */}
      <div className="md:flex lg:hidden md:flex-col hidden w-full h-auto bg-zinc-900 border border-zinc-900">
        <Navbar />
        <div className="w-[95%] mx-auto flex gap-3">
          <div className="flex flex-col w-1/2 gap-2">
            <Intro />
            <About />
          </div>
          <div className="flex flex-col w-1/2 justify-between">
            <Profile />
            <Links />
          </div>
        </div>
        <div className="w-[95%] mx-auto flex gap-3">
          <Contact />
          <Projects />
        </div>
      </div>

      {/* For Desktop Devices  */}
      <div className="hidden lg:flex lg:flex-col w-full overflow-hidden h-[100vh] bg-zinc-900 items-center justify-center border-zinc-900">
        <div className="w-[95%] h-[95%] flex flex-col gap-2">
          <Navbar />
          <div className="w-full h-[91%] flex gap-2">
            <div className="left w-[70%] h-full flex flex-col gap-2">
              <div className="top h-[55%] w-full flex gap-2">
                <Intro />
                <Profile />
              </div>
              <div className="bottom h-[45%] w-full flex gap-2">
                <About />
                <Contact />
              </div>
            </div>
            <div className="right w-[30%] h-full flex flex-col gap-2 justify-between">
              <Projects />
              <Links />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
