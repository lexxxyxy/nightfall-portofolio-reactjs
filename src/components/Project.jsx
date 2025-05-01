import React, { useEffect, useRef, useState } from "react";
import anime from "animejs";

const Projects = () => {
  const projectsRef = useRef(null);
  const observerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setIsVisible(true);

        anime({
          targets: ".projects h2",
          translateX: [-100, 0],
          opacity: [0, 1],
          easing: "easeOutQuart",
          duration: 900,
        });

        anime({
          targets: ".project-card",
          translateX: [100, 0],
          opacity: [0, 1],
          delay: anime.stagger(250),
          easing: "easeOutExpo",
          duration: 800,
        });
      } else {
        setIsVisible(false);

        anime({
          targets: ".projects h2",
          translateX: [0, -50],
          opacity: [1, 0],
          easing: "easeInCubic",
          duration: 500,
        });

        anime({
          targets: ".project-card",
          translateX: [0, 100],
          opacity: [1, 0],
          delay: anime.stagger(100),
          easing: "easeInCubic",
          duration: 400,
        });
      }
    });
  };

  useEffect(() => {
    observerRef.current = new IntersectionObserver(handleScroll, {
      threshold: 0.3,
    });

    if (projectsRef.current) {
      observerRef.current.observe(projectsRef.current);
    }

    return () => {
      if (observerRef.current && projectsRef.current) {
        observerRef.current.unobserve(projectsRef.current);
      }
    };
  }, []);

  const projectData = [
    {
      title: "Portfolio V1",
      desc: "A personal portfolio built with elegance using React and CSS.",
      img: "https://xyxy-lex.vercel.app/images/project-3.png",
    },
    {
      title: "Portfolio V2",
      desc: "Second version of my portfolio with added scroll animation.",
      img: "https://xyxy-lex.vercel.app/images/project-1.png",
    },
    {
      title: "Rexus Store",
      desc: "A minimalist shop with a chill UI and smooth animations.",
      img: "https://xyxy-lex.vercel.app/images/project-2.png",
    },
    {
      title: "Trading Dashboard",
      desc: "Dashboard for tracking trading data with clean and responsive design.",
      img: "https://xyxy-lex.vercel.app/images/project-4.png",
    },
  ];

  return (
    <section id="projects" className="projects" ref={projectsRef}>
      <h2 style={{ opacity: 0 }}>📁 Projects</h2>
      <div className="projects-list">
        {projectData.map((project, index) => (
          <div
            className="project-card"
            key={index}
            style={{ opacity: 0, transform: "translateX(100px)" }}
          >
            <img
              src={project.img}
              alt={project.title}
              style={{ width: "100%", height: "auto", borderRadius: "12px" }}
            />
            <h3>{project.title}</h3>
            <p>{project.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
