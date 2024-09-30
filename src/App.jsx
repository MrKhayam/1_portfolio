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
      <div className="hidden lg:flex lg:flex-col w-full overflow-hidden h-[100vh] bg-zinc-900  border-zinc-900">
        <Navbar />
        <div className="flex gap-2 w-[95%] mx-auto h-[90vh]">
          <div className="left w-[65%] h-full gap-5 flex flex-col">
            <div className="top w-full items-center h-[55%] flex gap-3">
              <Intro />
              <Profile />
            </div>
            <div className="top w-full h-[45%] items-center flex gap-3 xl:pb-0 lg:pb-5">
              <About />
              <Contact />
            </div>
          </div>
          <div className="right w-[35%] h-full flex flex-col justify-between gap-3">
            <Projects />
            <Links />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
