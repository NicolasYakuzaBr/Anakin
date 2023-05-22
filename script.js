function createStars() {
    const numStars = 100; // Número de estrelas que serão criadas
  
    for (let i = 0; i < numStars; i++) {
      const star = document.createElement('div');
      star.classList.add('star');
      star.style.left = `${Math.random() * 100}%`;
      star.style.top = `${Math.random() * 100}%`;
      star.style.animationDelay = `${Math.random() * 10}s`;
      document.body.appendChild(star);
    }
  }
  
  createStars();
  