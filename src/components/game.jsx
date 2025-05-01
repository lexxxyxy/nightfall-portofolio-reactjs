import React, { useEffect, useRef } from 'react';
import anime from 'animejs';

const Game = () => {
  const gameRef = useRef(null);

  const games = [
    {
      name: 'Assassin’s Creed II',
      description: 'Petualangan Ezio dimulai di Italia dengan gameplay yang legendaris.',
      image: 'https://cdn2.unrealengine.com/ac2-gamename-store-landscape-2560x1440-2560x1440-aa944fa0e8c6.jpg',
    },
    {
      name: 'Assassin’s Creed Brotherhood',
      description: 'Ezio membentuk Brotherhood di Roma dan melawan Ordo Templar.',
      image: 'https://images6.fanpop.com/image/photos/32600000/Assassin-s-Creed-Brotherhood-the-assassins-32617541-1366-768.jpg',
    },
    {
      name: 'Assassin’s Creed Revelations',
      description: 'Akhir kisah Ezio yang emosional di Konstantinopel.',
      image: 'https://gamecraves.com/wp-content/uploads/2023/09/Assassins-Creed-Revelations-Header.jpg',
    },
    {
      name: 'Assassin’s Creed III',
      description: 'Connor bertarung di masa Revolusi Amerika dengan gaya bertarung brutal.',
      image: 'https://gamingbolt.com/wp-content/uploads/2019/03/Assassin%E2%80%99s-Creed-3.jpg',
    },
    {
      name: 'Assassin’s Creed Syndicate',
      description: 'Dua protagonis di zaman Victoria: Jacob & Evie Frye.',
      image: 'https://static9.cdn.ubi.com/resource/en-US/game/assassins-creed/ac/acs-gi-bg1-new.jpg',
    },
    {
      name: 'Detroit: Become Human',
      description: 'Game interaktif penuh pilihan dan emosi di masa depan android.',
      image: 'https://static1.cbrimages.com/wordpress/wp-content/uploads/2020/02/quantic.jpg',
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            anime({
              targets: '.game-title',
              translateY: [-30, 0],
              opacity: [0, 1],
              duration: 600,
              easing: 'easeOutBack',
            });

            anime({
              targets: '.game-card',
              scale: [0.95, 1],
              opacity: [0, 1],
              delay: anime.stagger(150),
              duration: 500,
              easing: 'easeOutExpo',
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    if (gameRef.current) observer.observe(gameRef.current);

    return () => {
      if (gameRef.current) observer.unobserve(gameRef.current);
    };
  }, []);

  return (
    <section id="game" className="game-section" ref={gameRef}>
      <h2 className="game-title">🎮 Game Favorit</h2>
      <div className="game-container">
        {games.map((game, index) => (
          <div className="game-card" key={index}>
            <img src={game.image} alt={game.name} className="game-img" />
            <h3 className="game-name">{game.name}</h3>
            <p className="game-desc">{game.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Game;
