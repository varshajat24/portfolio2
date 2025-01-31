import React from "react";
import { TypeAnimation } from "react-type-animation";
import {FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn} from 'react-icons/fa'

const Main = () => {
  return (
    <div id="main">
      <img
        className="relative w-screen h-screen object-cover object-left bg-cover bg-center  bg-no-repeat scale-x-[-1]"
        src="https://source.unsplash.com/1600x900/?nature,water"
        alt=""
      />
      <div className="w-full h-screen absolute top-0 left-0 bg-white/50">
        <div className="max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center">
          <h1 className="sm:text-5xl text-4xl font-bold text-gray-800">I'm varsha jat</h1>
          <h2 className="flex sm:text-3xl text-2xl pt-4 text-gray-800"> 
            I'm a
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Front-End-Developer",
                2000, // wait 2s before replacing "Mice" with "Hamsters"
                "Coder",
                2000,
                "Tech Enthusiast",
                2000,
              ]}
              wrapper="span"
              speed={50}
              style={{
                fontSize: "1em",
                display: "inline-block",
                paddingLeft: "5px",
              }}
              repeat={Infinity}
            />
          </h2>
          <div className="flex justify-between pt-6 max-w-[200px] w-full">
            <FaTwitter className="curser-pointer" size={20}/>
            <FaFacebookF className="curser-pointer" size={20}/>
            <FaInstagram className="curser-pointer" size={20}/>
            <FaLinkedinIn className="curser-pointer" size={20}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
