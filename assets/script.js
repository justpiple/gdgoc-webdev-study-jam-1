// Typing effect
const typingElement = document.getElementById("typing-text");

if (typingElement) {
  const texts = [
    "Information Technology Undergraduate",
    "Full-stack Developer",
    "Passionate about Digital Solutions",
  ];
  let textIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function type() {
    const currentText = texts[textIndex];

    if (isDeleting) {
      typingElement.textContent = currentText.substring(0, charIndex - 1);
      charIndex--;
    } else {
      typingElement.textContent = currentText.substring(0, charIndex + 1);
      charIndex++;
    }

    if (!isDeleting && charIndex === currentText.length) {
      setTimeout(() => {
        isDeleting = true;
      }, 2000);
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      textIndex = (textIndex + 1) % texts.length;
    }

    const speed = isDeleting ? 50 : 100;
    setTimeout(type, speed);
  }

  type();
}

// Form submission
const contactForm = document.getElementById("contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");

    const name = nameInput ? nameInput.value : "";
    const email = emailInput ? emailInput.value : "";
    const message = messageInput ? messageInput.value : "";

    alert(`Terima kasih, ${name}! Pesan Anda telah diterima.`);

    contactForm.reset();
  });
}
