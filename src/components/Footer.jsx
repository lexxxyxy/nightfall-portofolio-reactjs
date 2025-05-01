import React, { useEffect } from 'react';
import anime from 'animejs';

const Footer = () => {
  useEffect(() => {
    // Menambahkan efek animasi saat footer terlihat di viewport
    const handleScroll = () => {
      const footer = document.querySelector('.footer');
      const footerPosition = footer.getBoundingClientRect().top;

      // Jika footer masuk ke dalam viewport, jalankan animasi
      if (footerPosition < window.innerHeight) {
        anime({
          targets: '.footer-content',
          opacity: [0, 1],  // Fade-in effect
          translateY: [20, 0], // Efek pergeseran vertikal dari bawah ke atas
          duration: 1200,   // Durasi animasi dalam milidetik
          easing: 'easeOutQuad',
        });
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="jp-text">ポートフォリオをご覧いただきありがとうございます。</p>
        <p className="footer-name">夜の影 (Yoru no Kage) &copy; {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
};

export default Footer;
