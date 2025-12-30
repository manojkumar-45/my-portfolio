import React, { useEffect } from "react";
import "./Skills.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

import { VscCode } from "react-icons/vsc";
import { SiEclipseide } from "react-icons/si";
import { TbBrandThreejs } from "react-icons/tb";
import { FaGithub } from "react-icons/fa";

import {
  SiPython,
  SiMongodb,
  SiGooglecloud,
  SiFramer,
  SiIntellijidea,
  SiJavascript,
  SiTailwindcss,
  SiMysql,
  SiBootstrap,
  SiFirebase,
  SiSpring,
  SiHtml5,
  SiCss3,
  SiPostman,
} from "react-icons/si";

import { FaReact, FaGitAlt, FaDocker, FaJava } from "react-icons/fa";

const skillsData = {
  left: [
    {
      title: "Programming Languages",
      cols: 3,
      centerContent: true,
      items: [
        { name: "Java", icon: <FaJava /> },
        {
          name: "JavaScript",
          icon: <SiJavascript />,
        },
        { name: "Python", icon: <SiPython /> },
      ],
    },
    {
      title: "Databases",
      cols: 2,
      centerContent: true,
      items: [
        { name: "MySQL", icon: <SiMysql /> },
        { name: "MongoDB", icon: <SiMongodb /> },
      ],
    },
  ],

  center: [
    {
      title: "Frontend",
      cols: 3,
      items: [
        { name: "React", icon: <FaReact /> },
        { name: "HTML5", icon: <SiHtml5 /> },
        { name: "CSS3", icon: <SiCss3 /> },
        { name: "Tailwind", icon: <SiTailwindcss /> },
        {
          name: "Bootstrap",
          icon: <SiBootstrap />,
        },
        { name: "Framer Motion", icon: <SiFramer /> },

        {
          name: "GSAP",
          icon: <span className="text-[#1c9772] font-bold text-lg">GSAP</span>,
        },
        { name: "Three.js", icon: <TbBrandThreejs /> },
        {
          name: "React Bits",
          icon: <FaReact className="text-3xl opacity-80" />,
        },
      ],
    },
    {
      title: "Tools",
      cols: 3,
      items: [
        { name: "Git", icon: <FaGitAlt /> },
        { name: "Docker", icon: <FaDocker /> },
        { name: "Postman", icon: <SiPostman /> },
        {
          name: "IntelliJ",
          icon: <SiIntellijidea />,
        },
        { name: "Eclipse", icon: <SiEclipseide /> },
        { name: "Firebase", icon: <SiFirebase /> },
      ],
    },
  ],

  right: [
    {
      title: "Backend",
      cols: 3,
      items: [
        { name: "Spring", icon: <SiSpring /> },
        { name: "Spring Boot", icon: <SiSpring /> },
        { name: "REST APIs", icon: <FaDocker /> },
      ],
    },
    {
      title: "Platforms & Cloud",
      cols: 3,
      items: [
        {
          name: "Google Cloud",
          icon: <SiGooglecloud />,
        },
        { name: "VS Code", icon: <VscCode /> },
        { name: "GitHub", icon: <FaGithub /> },
      ],
    },
  ],
};

const Skills = () => {
  useEffect(() => {
    gsap.fromTo(
      ".skills-title",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".skills-section",
          start: "top 80%",
        },
      }
    );

    gsap.fromTo(
      ".skill-box",
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".skills-layout",
          start: "top 85%",
        },
      }
    );
  }, []);

  return (
    <section id="skills" className="skills-section">
      <h2 className="skills-title text-4xl text-outfit-regular">
        My <span>Skills</span>
      </h2>

      <div className="skills-layout  ">
        {["left", "center", "right"].map((col) => (
          <div
            key={col}
            className={`skills-col flex flex-col justify-center ${
              col === "center" ? "center" : ""
            }`}
          >
            {skillsData[col].map((group, i) => (
              <div
                key={i}
                className={`skill-box group relative rounded-xl
    bg-white/5 backdrop-blur-xl
    border border-white/10
    hover:border-[#1c9772]/60
    hover:shadow-[0_0_30px_rgba(28,151,114,0.35)]
    transition-all duration-300
    ${group.title === "Frontend" ? "frontend-box" : ""}
  `}
              >
                <h3>{group.title}</h3>

                <div
                  className="icon-grid "
                  style={{ gridTemplateColumns: `repeat(${group.cols}, 1fr)` }}
                >
                  {group.items.map((skill, idx) => (
                    <div key={idx} className="skill-item">
                      <div className="skill-icon">{skill.icon}</div>
                      <span className="skill-name  font-bold">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
