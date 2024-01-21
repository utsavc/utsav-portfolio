import React, { useState, useEffect } from "react";
import Typist from "react-typist-component";
import { Link } from "react-scroll";
import profileImg from "../images/my_profile.jpg"

const Startup = () => {
  const [showNextComponent, setShowNextComponent] = useState(false);

  const handleTypingStart = () => {
    // Delay the appearance of the next component by 5 seconds
    setTimeout(() => {
      setShowNextComponent(true);
    }, 10);
  };

  const handleTypingDone = () => {
    // You can perform any additional actions when typing is done
  };

  useEffect(() => {
    // Start the typing animation and initiate the 5-second delay
    handleTypingStart();
  }, []);

  return (
    <>
      <div className="bg-black min-h-screen flex flex-col justify-center items-center p-6 md:p-12 lg:p-24 h-screen">
        <div className="mb-8">
         
          <img src={profileImg} alt="Your Image" class="w-50 rounded-full hover:opacity-55 mx-auto w-64 h-64 sm:w-96 sm:h-96 lg:w-128 lg:h-128" />
          Hi, I am &nbsp;

        </div>
        <div className="text-center text-white text-2xl md:text-3xl lg:text-4xl mb-6">
          Hi, I am &nbsp;
          <Typist
            loop={true}
            typingDelay={200}
            onTypingDone={handleTypingDone}
            onStartTyping={handleTypingStart}
            cursor={<span className="cursor">|</span>}
          >
            Utsav Mahato
            <Typist.Backspace count={12} />
            <Typist.Delay ms={100} />
            a Software Vel
            <Typist.Backspace count={3} />
            <Typist.Delay ms={100} />
            Developer
            <Typist.Backspace count={18} />
            <Typist.Delay ms={0} />
            Full Stack Engineer
            <Typist.Backspace count={22} />
            <Typist.Delay ms={0} />
          </Typist>
        </div>

        <div id="aboutPara" className="text-white text-center md:text-left">
          I am a passionate and results-driven full-stack developer with a focus on creating innovative and efficient solutions. With a background in software engineering, I bring expertise in both front-end and back-end development to the table. Explore my portfolio to discover my skills, projects, and commitment to delivering high-quality software. 
          
        </div>

      </div>
    </>
  );
};

    
export default Startup;
