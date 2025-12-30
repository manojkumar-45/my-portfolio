import React, { useEffect } from "react";
import { useRef } from "react";

import { Typewriter } from "react-simple-typewriter";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import gsap from "gsap";

const Hero = () => {
  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { ease: "power3.out" },
    });

    tl.fromTo(
      ".hero-name",
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.8 }
    )
      .fromTo(
        ".typewritter-text",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.5 },
        "-=0.4"
      )
      .fromTo(
        ".hero-role",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.4 },
        "-=0.4"
      )

      .fromTo(
        ".hero-img-sec",
        { opacity: 0, scale: 0.85 },
        { opacity: 1, scale: 1, duration: 0.6 },
        "-=0.6"
      )

      .fromTo(
        ".hero-intro",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.4 },
        "-=0.3"
      )

      .fromTo(
        ".hero-icons a",
        { opacity: 0, scale: 0.6 },
        {
          opacity: 1,
          scale: 1,
          stagger: 0.15,
          duration: 0.3,
        },
        "-=0.3"
      );
  }, []);

  return (
    <section
      className="hero-sec relative min-h-screen overflow-hidden"
      id="home"
    >
      <div className="hero-container  relative z-10 max-w-[90%] mx-auto px-6 flex flex-col md:flex-row items-center justify-between min-h-screen">
        <div
          className="
            hero-about w-full md:w-1/2
            space-y-1 md:space-y-3
            px-12 text-center md:text-left mt-12
          "
        >
          <h1 className="hero-name text-5xl font-medium">
            <span className="text-[#F3F4F6] text-outfit-regular font-semibold">
              Manoj Kumar V
            </span>
          </h1>

          <h2 className="typewritter-text text-3xl text-gray-300">
            I’m a{" "}
            <span className="text-[#1c9772] font-bold text-outfit-regular">
              <Typewriter
                words={[
                  "Java Full Stack Developer",
                  "React Developer",
                  "Backend Developer",
                ]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={80}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </span>
          </h2>

          <h2 className="hero-role text-[#1c9772]/60 md:hidden">
            Java Full Stack Developer
          </h2>

          <p className="hero-intro text-gray-400 text-justify max-w-[90%]">
            I specialize in building scalable backend systems and modern,
            responsive web interfaces. I work with Java, Spring Boot, React,
            Tailwind CSS, and MySQL, focusing on clean code, performance, and
            intuitive user experiences.
          </p>

          <div className="hero-icons w-[30%] h-[35px] flex justify-center md:justify-start gap-4 pt-1">
            <a
               href="https://www.linkedin.com/in/manojkumar017 "
              target="_blank"
              rel="noreferrer"
              className="text-[#1c9772] text-2xl hover:text-white transition transform hover:scale-110"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://github.com/manojkumar-45"
              target="_blank"
              rel="noreferrer"
              className="text-[#1c9772] text-2xl hover:text-white transition transform hover:scale-110"
            >
              <FaGithub />
            </a>

            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=vmanojkumar5105@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="text-[#1c9772] text-2xl hover:text-white transition transform hover:scale-110"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>


        <div className="w-full md:w-1/2 flex justify-center mt-12 md:mt-9">
          <div className="hero-img-sec relative ml-0 md:ml-18 ">
            
            <div
              className="
        absolute -inset-2
        rounded-full
        border-4 border-[#1c9772]/60
      "
            ></div>

            <img
              src="/myphoto.jpg"
              alt="Profile"
              className="
        hero-img relative
        w-54 h-54
        rounded-full
        object-cover
        border border-white/20
        
      "
            />
          </div>
         </div>
      </div> 


    </section>
  );
};

export default Hero;
