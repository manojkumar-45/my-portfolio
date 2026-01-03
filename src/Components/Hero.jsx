import React, { useEffect } from "react";
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
      className="hero-sec  relative min-h-screen overflow-hidden"
      id="home"
    >
      <div className="hero-container relative z-10 max-w-[90%] mx-auto px-6 flex flex-col md:flex-row items-center justify-between min-h-screen">
        <div
          className="
            hero-about w-full md:w-1/2
            space-y-1 md:space-y-1
            px-12 text-center md:text-left mt-12 ml-3
          "
        >
          <h1 className="hero-name text-[40px]  font-medium">
            <span className="text-white/80 text-outfit-regular font-semibold">
              Manoj Kumar V
            </span>
          </h1>

          <h2 className="typewritter-text text-[28px] text-gray-300">
            I’m a{" "}
            <span
              className="
      inline-block
      font-bold text-outfit-regular
      bg-gradient-to-r from-[#34d399] via-[#5eead4] to-[#d1fae5]
      bg-clip-text text-transparent
      
    "
            >
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

          <h2
            className=" hero-role md:hidden
  mt-1
  text-lg font-semibold
 bg-gradient-to-r from-[#34d399] via-[#5eead4] to-[#d1fae5]
 bg-clip-text text-transparent
  drop-shadow-[0_0_2px_rgba(28,151,114,0.3)] "
          >
            Java Full Stack Developer
          </h2>

          <p className="hero-intro text-gray-400 text-justify max-w-[90%] leading-relaxed tracking-wide">
            I specialize in building scalable backend systems and modern,
            responsive web interfaces. I work with Java, Spring Boot, React,
            Tailwind CSS, and MySQL, focusing on clean code, performance, and
            intuitive user experiences.
          </p>

          <div className="hero-icons w-[30%] h-[35px] flex justify-center md:justify-start gap-4 pt-1">
            <a
              href="https://www.linkedin.com/in/manojkumar017"
              target="_blank"
              rel="noreferrer"
              className="text-white/90 text-2xl transition-all duration-300 hover:text-white hover:drop-shadow-[0_0_10px_rgba(28,151,114,0.8)] hover:scale-110"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://github.com/manojkumar-45"
              target="_blank"
              rel="noreferrer"
              className="text-white/90 text-2xl transition-all duration-300 hover:text-white hover:drop-shadow-[0_0_10px_rgba(28,151,114,0.8)] hover:scale-110"
            >
              <FaGithub />
            </a>

            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=vmanojkumar5105@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="text-white/90 text-2xl transition-all duration-300 hover:text-white hover:drop-shadow-[0_0_10px_rgba(28,151,114,0.8)] hover:scale-110"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>

        <div className="w-full md:w-1/2 flex justify-center mt-12 md:mt-9">
          <div className="hero-img-sec  relative ml-0 md:ml-18">
            <div
              className=" glow
        absolute -inset-8 rounded-full
        bg-gradient-to-tr from-[#1c9772]/35 via-cyan-400/25 to-emerald-500/35
        blur-3xl
        animate-gradientShift
      "
            ></div>

            <div
              className="
    borderbox absolute -inset-1.5 rounded-full
    bg-gradient-to-r from-[#34d399]/60 to-[#5eead4]/60
    p-[3px]
    animate-borderShiftSoft
  "
            >
              <div className="w-full h-full rounded-full bg-black"></div>
            </div>

            <img
              src="/profileimg.jpg"
              alt="Profile"
              className="
        hero-img relative
        w-52 h-52
        rounded-full
        object-cover
        border border-white/15
        transition-transform duration-500
        hover:scale-[1.03]
      "
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
