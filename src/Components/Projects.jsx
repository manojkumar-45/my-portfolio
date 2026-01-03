import React, { useEffect } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { SiReact, SiSpringboot, SiMysql, SiTailwindcss } from "react-icons/si";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".projects-box",
        start: "top 80%",
      },
      ease: "power2.out",
    });

    tl.fromTo(
      ".projects-title",
      { opacity: 0, y: 60 },
      { opacity: 1, y: 0, duration: 0.5 }
    );

    tl.fromTo(
      ".project-card",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.4, stagger: 0.15 },
      "-=0.2"
    );
  }, []);

  const projects = [
    {
      title: "Delicious – Responsive Food Delivery Web Application",
      desc: "Delicious is a modern food delivery application where users can browse items, manage their cart, and place orders.",
      image: "/delicious.png",
      tech: [
        { Icon: SiReact, color: "text-cyan-400" },
        { Icon: SiTailwindcss, color: "text-sky-400" },
        { Icon: SiSpringboot, color: "text-green-400" },
        { Icon: SiMysql, color: "text-blue-500" },
      ],
      live: true,
      liveUrl: "https://delicious-food-delivery-app.netlify.app/",
      githubUrl: null,
    },
    {
      title: "QuickCart – Modern eCommerce Platform with Responsive UI",
      desc: "QuickCart is offering a fast, intuitive shopping experience with login authentication, cart items, and secure ordering.",
      image: "/quickcart.png",
      tech: [
        { Icon: SiReact, color: "text-cyan-400" },
        { Icon: SiSpringboot, color: "text-green-500" },
        { Icon: SiMysql, color: "text-blue-500" },
        { Icon: SiTailwindcss, color: "text-sky-400" },
      ],
      live: false,
      githubUrl: "https://github.com/manojkumar-45/quickcart-fullstack.git",
    },
    {
      title: "WorkSphere – JWT based EMS Secure Web Application",
      desc: "WorkSphere is a secure EMS platform offering secure handling with CRUD functionality through a clean interface.",
      image: "/ems.png",
      tech: [
        { Icon: SiReact, color: "text-cyan-400" },
        { Icon: SiTailwindcss, color: "text-sky-400" },
        { Icon: SiSpringboot, color: "text-green-500" },
        { Icon: SiMysql, color: "text-blue-500" },
      ],
      live: false,
      githubUrl:
        "https://github.com/manojkumar-45/worksphere-employee-management.git",
    },
  ];

  return (
    <section
      id="projects"
      className="projects-box w-full min-h-screen text-gray-100 flex flex-col justify-center items-center px-4 md:px-6"
    >
      <h2 className="projects-title text-3xl md:text-4xl font-bold text-outfit-regular text-center mb-10">
        Featured{" "}
        <span className="text-[#1c9772] font-bold text-outfit-regular">
          Projects
        </span>
      </h2>

      <div className="projects-box grid grid-cols-1 place-items-center sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-6 w-full max-w-6xl">
        {projects.map((proj, idx) => (
          <div
            key={idx}
            className="
              project-card group relative rounded-2xl overflow-hidden
              bg-white/5 backdrop-blur-xl
              border border-white/10
              hover:border-[#1c9772]/60
              hover:shadow-[0_0_35px_rgba(28,151,114,0.35)]
              transition-all duration-500
            "
          >
            <div className="relative h-40 md:h-45 overflow-hidden">
              <img
                src={proj.image}
                alt={proj.title}
                className="
                  w-full h-full object-cover
                  md:group-hover:scale-110 transition-transform duration-700
                "
              />
            </div>

            <div className="p-2 md:p-3 space-y-0 md:space-y-2">
              <h3 className="text-base md:text-md font-semibold text-white">
                {proj.title}
              </h3>

              <p className="project-desc text-sm md:text-[13px] mb-3 text-gray-400 leading-snug md:leading-relaxed">
                {proj.desc}
              </p>

              {/* Mobile */}
              <div className="flex items-center justify-between md:hidden pt-1">
                <div className="flex gap-2 text-base">
                  {proj.tech.map(({ Icon, color }, i) => (
                    <Icon key={i} className={color} />
                  ))}
                </div>

                <div className="flex gap-2">
                  {proj.githubUrl && (
                    <a
                      href={proj.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[13px] px-2 py-2 rounded-md bg-[#1c9772]/25 text-[#1c9772]"
                    >
                      <FaGithub />
                    </a>
                  )}

                  {proj.live && (
                    <a
                      href={proj.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[13px] px-2 py-2 rounded-md bg-white/15"
                    >
                      <FaExternalLinkAlt />
                    </a>
                  )}
                </div>
              </div>

              {/* Desktop */}
              <div className="hidden md:flex items-center gap-3 text-lg">
                {proj.tech.map(({ Icon, color }, i) => (
                  <Icon key={i} className={color} />
                ))}
              </div>
            </div>

            <div
              className="
                hidden md:flex
                absolute inset-0 items-end justify-end
                pb-2 pr-3 gap-3
                opacity-0 group-hover:opacity-100
                transition-opacity duration-300
              "
            >
              {proj.githubUrl && (
                <a
                  href={proj.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-sm px-[10px] py-[6px] rounded-full
                    bg-[#1c9772]/25 text-[#1c9772] hover:bg-[#1c9772]/40"
                >
                  <FaGithub /> Code
                </a>
              )}

              {proj.live && (
                <a
                  href={proj.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm px-[10px] py-[6px] rounded-full
                    bg-white/15 hover:bg-white/25"
                >
                  <FaExternalLinkAlt /> Live
                </a>
              )}
            </div>

            <div
              className="
                hidden md:block pointer-events-none absolute inset-0
                opacity-0 group-hover:opacity-100 transition-opacity duration-500
                shadow-[0_0_45px_rgba(28,151,114,0.25)]
              "
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
