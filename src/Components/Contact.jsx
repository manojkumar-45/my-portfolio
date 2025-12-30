import React, { useEffect } from "react";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  useEffect(() => {
    gsap.fromTo(
      ".contact-animate",
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: "power2.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: "#contact",
          start: "top 85%",
        },
      }
    );
  }, []);

  return (
    <section
      id="contact"
      className="
        w-full min-h-screen
        flex items-center justify-center
        px-4 sm:px-8 
        py-16 sm:py-16
      "
    >
      <div className="contact-sec w-full max-w-4xl text-center place-items-center">
        <h2 className="contact-title contact-animate text-2xl text-outfit-regular sm:text-4xl font-bold text-white mb-3 sm:mb-2">
          Contact <span className="text-[#1c9772]">Me</span>
        </h2>

        <p className="contact-animate text-gray-400 max-w-xl mx-auto mb-8 sm:mb-5 text-sm sm:text-base leading-relaxed">
          I'm open to full-time roles, freelance work, and meaningful
          collaborations. If you have an idea, let's talk.
        </p>

        <div className=" contact-cards grid grid-cols-1 max-w-3xl min-w-2xl sm:grid-cols-2  gap-5 sm:gap-6 mb-10 sm:mb-12">
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=vmanojkumar5105@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="
    contact-animate
    flex items-start sm:items-center
    gap-4
    p-4 sm:p-6
    rounded-2xl
    bg-white/5 backdrop-blur
    border border-white/10
    hover:border-[#1c9772]/50
    transition
  "
          >
            <FaEnvelope className="text-[#1c9772] text-2xl sm:text-2xl shrink-0 mt-3 sm:mt-0" />
            <div className="text-left">
              <p className="text-white font-semibold">Email</p>
              <p className="text-gray-400 text-base break-all">
                vmanojkumar5105@gmail.com
              </p>
            </div>
          </a>

          <a
            href="tel:+919345360767"
            onClick={(e) => {
              if (window.innerWidth >= 768) {
                e.preventDefault();
              }
            }}
            className="
    phone-box
    contact-animate
    flex items-start sm:items-center
    gap-4
    p-4 sm:p-6
    rounded-2xl
    bg-white/5 backdrop-blur
    border border-white/10
    hover:border-[#1c9772]/50
    transition
  "
          >
            <FiPhone className="text-[#1c9772] text-2xl sm:text-2xl shrink-0 mt-3 sm:mt-0" />
            <div className="text-left">
              <p className="text-white font-semibold">Phone</p>
              <p className="text-gray-400 text-base">+91 9345360767</p>
            </div>
          </a>
        </div>

        <div className="contact-animate flex justify-center gap-6 sm:gap-8 mb-10 sm:mb-12">
          <a
            href="https://www.linkedin.com/in/manojkumar017 "
            target="_blank"
            rel="noreferrer"
            className="text-[#1c9772] text-3xl sm:text-3xl hover:text-white transition transform hover:scale-110"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://github.com/manojkumar-45"
            target="_blank"
            rel="noreferrer"
            className="text-[#1c9772] text-3xl sm:text-3xl hover:text-white transition transform hover:scale-110"
          >
            <FaGithub />
          </a>
        </div>

        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=vmanojkumar5105@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="
            contact-send-btn
            contact-animate
            inline-block
            w-full sm:w-auto
            px-7 sm:px-7
            py-3
            rounded-xl
            bg-[#1c9772]/60
            text-white font-semibold
            hover:shadow-[0_0_15px_rgba(28,151,114,0.85)]
            transition transform hover:scale-105
          "
        >
          Send a Message
        </a>
      </div>
    </section>
  );
};

export default Contact;
