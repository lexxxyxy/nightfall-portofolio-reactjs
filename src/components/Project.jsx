import React, { useEffect, useRef } from "react";
import anime from "animejs";

const Projects = () => {
  const projectsRef = useRef(null);
  const observerRef = useRef(null);

  const handleScrollEnter = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        anime({
          targets: ".projects h2",
          translateY: [-50, 0],
          opacity: [0, 1],
          easing: "easeOutCubic",
          duration: 1000,
        });

        // Animasi project cards (satu per satu)
        anime({
          targets: ".project-card",
          translateY: [50, 0],
          opacity: [0, 1],
          scale: [0.95, 1],
          delay: anime.stagger(200),
          easing: "easeOutCubic",
          duration: 800,
        });

        // Hentikan observasi setelah animasi selesai
        if (observerRef.current) {
          observerRef.current.unobserve(entry.target);
        }
      }
    });
  };

  useEffect(() => {
    observerRef.current = new IntersectionObserver(handleScrollEnter, {
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

  return (
    <section id="projects" className="projects" ref={projectsRef}>
      <h2>📁 Projects</h2>
      <div className="projects-list">
        <div className="project-card">
          <h3>Nightfall Portfolio</h3>
          <p>A personal portfolio built with elegance using React and CSS.</p>
        </div>

        <div className="project-card">
          <h3>Chill To-Do App</h3>
          <p>A minimalist to-do app with a chill UI and smooth animations.</p>
        </div>

        <div className="project-card">
          <h3>Portfolio V2</h3>
          <p>Second version of my portfolio with added scroll animation.</p>
        </div>

        <div className="project-card">
          <h3>Trading Dashboard</h3>
          <p>Dashboard for tracking trading data with clean and responsive design.</p>
        </div>
      </div>
    </section>
  );
};

export default Projects;