const menuIcon = document.getElementById('menuIcon');
  const navLinks = document.getElementById('navLinks');
  if(menuIcon) menuIcon.addEventListener('click', () => navLinks.classList.toggle('show'));
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === "#" || targetId === "") return;
      const targetElem = document.querySelector(targetId);
      if (targetElem) {
        e.preventDefault();
        targetElem.scrollIntoView({ behavior: 'smooth', block: 'start' });
        if (navLinks.classList.contains('show')) navLinks.classList.remove('show');
      }
    });
  });
  const bookBtn = document.getElementById('luxuryBookBtn');
  const feedbackDiv = document.getElementById('luxuryFeedback');
  bookBtn.addEventListener('click', () => {
    const name = document.getElementById('luxuryName').value.trim();
    const email = document.getElementById('luxuryEmail').value.trim();
    if (!name || !email) {
      feedbackDiv.innerHTML = "✨ Please provide both name and email for a private response.";
      setTimeout(() => feedbackDiv.innerHTML = "", 3000);
      return;
    }
    if (!email.includes('@')) {
      feedbackDiv.innerHTML = "📧 A valid email is required for our concierge team.";
      setTimeout(() => feedbackDiv.innerHTML = "", 3000);
      return;
    }
    feedbackDiv.innerHTML = `⭐ Honored, ${name}. Dr. Hartman's personal liaison will contact you at ${email} within the hour.`;
    document.getElementById('luxuryName').value = "";
    document.getElementById('luxuryEmail').value = "";
    setTimeout(() => feedbackDiv.innerHTML = "", 5000);
  });
  new Swiper('.testimonialSwiper', {
    loop: true,
    autoplay: { delay: 4800, disableOnInteraction: false, pauseOnMouseEnter: true },
    pagination: { el: '.swiper-pagination', clickable: true, dynamicBullets: true },
    slidesPerView: 1,
    spaceBetween: 30,
    breakpoints: { 640: { slidesPerView: 1.2 }, 768: { slidesPerView: 2 }, 1024: { slidesPerView: 2.2 } }
  });
  const heroImg = document.querySelector('.hero-image img');
  if(heroImg) {
    heroImg.addEventListener('mousemove', (e) => {
      const rect = heroImg.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      heroImg.style.transform = `perspective(600px) rotateY(${x * 6}deg) rotateX(${y * -4}deg)`;
    });
    heroImg.addEventListener('mouseleave', () => heroImg.style.transform = `perspective(600px) rotateY(0deg) rotateX(0deg)`);
}
let whatsapp = document.querySelector('.whatsapp a');
whatsapp.addEventListener('click', (e) => {
  e.preventDefault();
  const phone = '+919657633666';
  const message = encodeURIComponent('Hello Aaditya Healthtech Solutions, I would like to inquire about your digital solutions for clinics and hospitals.');
  const url = `https://wa.me/${phone}?text=${message}`;
  window.open(url, '_blank');
});