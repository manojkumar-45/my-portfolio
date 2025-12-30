import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useEffect(() => {
    gsap.fromTo(
      ".about-animate",
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: "#about",
          start: "top 75%",
        },
      }
    );
  }, []);

  return (
    <section
      id="about"
      className="about-container w-full  min-h-screen text-gray-100 flex items-center px-10"
    >
      <div className="max-w-6xl  mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="about-left-spec relative about-animate ">
          <div
            className="absolute  left-0 top-0 h-full w-[2px] bg-gradient-to-b 
            from-[#1c9772] to-transparent opacity-60"
          />

          <div className="pl-8 space-y-10 ">
            <div>
              <h3 className="text-xl  font-semibold mb-2">Web Development</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Building modern, responsive, and visually engaging user
                interfaces using React.js and Tailwind CSS.
              </p>
            </div>

            <div>
              <h3 className="text-xl  font-semibold mb-2">
                Full-Stack Applications
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Designing complete end-to-end applications with seamless
                frontend and backend integration.
              </p>
            </div>

            <div>
              <h3 className="text-xl  font-semibold mb-2">
                Scalable Backend APIs
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Developing secure and scalable RESTful APIs using Java, Spring
                Boot, and MySQL.
              </p>
            </div>
          </div>
        </div>

        <div className="about-me-sec  mx-auto space-y-8 mt-6 ">
          <div className="about-set about-animate ">
            <h2 className="about-me-title text-4xl text-outfit-regular font-bold">
              About <span className="text-[#1c9772]">Me</span>
            </h2>
            <p className="about-para mt-4 text-gray-300 leading-relaxed text-justify max-w-xl">
              I’m <span className="text-white font-medium">Manoj Kumar V</span>,
              a motivated{" "}
              <span className="about-highlights text-[#1c9772] font-semibold">
                Java Full-Stack Developer
              </span>{" "}
              with a strong foundation in building scalable, secure, and
              responsive web applications. I specialize in modern frontend
              development using{" "}
              <span className="text-[#1c9772] font-semibold">React.js</span> and{" "}
              <span className="text-[#1c9772] font-semibold">Tailwind CSS</span>
              , along with robust backend systems built using{" "}
              <span className="text-[#1c9772] font-semibold">Java </span>,
              <span className="text-[#1c9772] font-semibold">Spring Boot </span>
              ,<span className="text-[#1c9772] font-semibold">MySQL </span>, and{" "}
              <span className="text-[#1c9772] font-semibold">RESTful APIs</span>
              . I enjoy turning complex requirements into clean, efficient
              solutions while continuously improving my technical skills.
            </p>
          </div>

          <div className="about-stats  grid grid-cols-3 gap-0 max-w-[75%] about-animate text-center mx-auto justify-items-center ">
            <div>
              <h3 className="text-3xl font-bold text-[#1c9772]">3+</h3>
              <p className="text-sm text-gray-400">Projects Built</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-[#1c9772]">B.E</h3>
              <p className="text-sm text-gray-400">Bachelor of CSE</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-[#1c9772]">2025</h3>
              <p className="text-sm text-gray-400">Graduate</p>
            </div>
          </div>

          <div className="intern-sec about-animate ">
            <h3 className="ex-title text-xl font-semibold mb-2">Experience</h3>
            <p className="text-gray-300">
              <span className="font-medium text-white">
                AI Intern — Fantasy Solutions
              </span>{" "}
              <span className="text-white">(May 2024 – Jun 2024)</span>
            </p>
            <p className="text-gray-300 text-justify mt-1  max-w-xl">
              Worked on Neural Networks, data pre-processing, and AI model
              optimization in an Agile environment using{" "}
              <span className="text-[#1c9772] font-semibold">Git & GitHub</span>
              .
            </p>
            <p className="text-gray-300 font-normal text-justify mt-1 max-w-xl">
              Collaborated in an{" "}
              <span className="text-[#1c9772] font-semibold">
                Agile environment
              </span>{" "}
              using Git & GitHub and assisted in building and testing AI-driven
              solutions to improve performance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
