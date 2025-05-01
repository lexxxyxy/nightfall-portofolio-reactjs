import React, { useEffect } from "react";
import anime from "animejs/lib/anime.es.js";

const Hero = () => {
  useEffect(() => {
    anime
      .timeline({ easing: "easeOutExpo", duration: 1000 })
      .add({
        targets: ".hero h1",
        translateY: [-50, 0],
        opacity: [0, 1],
      })
      .add({
        targets: ".hero .subtitle",
        translateY: [-30, 0],
        opacity: [0, 1],
        offset: "-=600",
      })
      .add({
        targets: ".hero p:not(.subtitle)",
        translateY: [-20, 0],
        opacity: [0, 1],
        offset: "-=500",
      });
  }, []);

  return (
    <section className="hero">
      <video autoPlay muted loop playsInline className="hero-video">
        <source src="/Videos/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="overlay"></div>
      <div className="hero-content">
        <div className="hero-text">
          <h1>
            Hi,Saya <span>Nightfall</span>
          </h1>
          <p className="subtitle">
          Halo! Saya Nightfall, seorang front-end developer yang suka ngulik React, Tailwind, dan animasi interaktif.  
          </p>
          <p>
          Saya juga suka ngoprek game, terutama seri Assassin's Creed dan Detroit: Become Human.  
          Tujuan saya adalah membangun website yang interaktif, cepat, dan enak dilihat.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
