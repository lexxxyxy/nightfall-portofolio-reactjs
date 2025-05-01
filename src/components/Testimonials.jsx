import React, { useEffect } from 'react';

const testimonials = [
  {
    name: "Ariana L.",
    feedback: "Website ini sangat membantu dan tampilannya keren banget! 💖",
    job: "UI Designer",
  },
  {
    name: "Kevin R.",
    feedback: "Navigasinya smooth, animasinya halus, dan loadingnya cepat!",
    job: "Web Developer",
  },
  {
    name: "Maya T.",
    feedback: "Sangat inspiratif dan informatif, cocok buat pemula belajar coding.",
    job: "Tech Content Creator",
  },
];

const Testimonials = () => {
  useEffect(() => {
    const handleScroll = () => {
      const testimonialsCards = document.querySelectorAll('.testimonial-card');
      
      testimonialsCards.forEach((card, index) => {
        const cardPosition = card.getBoundingClientRect().top;

        // Animasi jika card testimoni masuk ke dalam viewport
        if (cardPosition < window.innerHeight && cardPosition > 0) {
          card.classList.add('fade-in');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    // Menghapus event listener saat komponen di-unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="testimonials">
      <h2 className="section-title">💬 Testimonials</h2>
      <div className="testimonial-container">
        {testimonials.map((t, index) => (
          <div key={index} className="testimonial-card">
            <p className="testimonial-text">"{t.feedback}"</p>
            <h4 className="testimonial-name">— {t.name}</h4>
            <span className="testimonial-job">{t.job}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
