import React, { useEffect } from "react";
import "./Skills.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

import { VscCode } from "react-icons/vsc";
import { SiEclipseide } from "react-icons/si";
import { TbBrandThreejs } from "react-icons/tb";
import { FaGithub } from "react-icons/fa";
import { TbApi } from "react-icons/tb";


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
        { name: "Java", icon: <FaJava className="text-red-500" /> },
        {
          name: "JavaScript",
          icon: <SiJavascript className="text-yellow-400" />,
        },
        { name: "Python", icon: <SiPython className="text-blue-400" /> },
      ],
    },
    {
      title: "Databases",
      cols: 2,
      centerContent: true,
      items: [
        { name: "MySQL", icon: <SiMysql className="text-blue-500" /> },
        { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
      ],
    },
  ],

  center: [
    {
      title: "Frontend",
      cols: 3,
      items: [
        { name: "React", icon: <FaReact className="text-cyan-400" /> },
  { name: "HTML5", icon: <SiHtml5 className="text-orange-500" /> },
  { name: "CSS3", icon: <SiCss3 className="text-blue-500" /> },
  { name: "Tailwind", icon: <SiTailwindcss className="text-sky-400" /> },
  { name: "Bootstrap", icon: <SiBootstrap className="text-purple-500" /> },
  { name: "Framer Motion", icon: <SiFramer className="text-pink-500" /> },
  {
    name: "GSAP",
    icon: (
      <span className="text-green-300 font-bold text-lg tracking-wide">
        GSAP
      </span>
    ),
  },
  { name: "Three.js", icon: <TbBrandThreejs className="text-white/80" /> },
  { name: "React Bits", icon: <FaReact className="text-cyan-300 opacity-80" /> },
      ],
    },
    {
      title: "Tools",
      cols: 3,
      items: [
        { name: "Git", icon: <FaGitAlt className="text-orange-500" /> },
  { name: "Docker", icon: <FaDocker className="text-blue-400" /> },
  { name: "Postman", icon: <SiPostman className="text-orange-400" /> },
  { name: "IntelliJ", icon: <SiIntellijidea className="text-red-500" /> },
  { name: "Eclipse", icon: <SiEclipseide className="text-purple-500" /> },
  { name: "Firebase", icon: <SiFirebase className="text-yellow-500" /> },
      ],
    },
  ],

  right: [
    {
      title: "Backend",
      cols: 3,
      items: [
         { name: "Spring", icon: <SiSpring className="text-green-500" /> },
  { name: "Spring Boot", icon: <SiSpring className="text-green-500" /> },
  { name: "REST APIs", icon: <TbApi  className="text-blue-300 text-4xl"  /> },
      ],
    },
    {
      title: "Platforms & Cloud",
      cols: 3,
      items: [
         { name: "Google Cloud", icon: <SiGooglecloud className="text-blue-400" /> },
  { name: "VS Code", icon: <VscCode className="text-blue-500" /> },
  { name: "GitHub", icon: <FaGithub className="text-white" /> },
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
