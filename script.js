// script.js
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contactForm");
    form.addEventListener("submit", e => {
      e.preventDefault();
      alert("Merci, votre message a été envoyé ! Nous vous contacterons bientôt.");
      form.reset();
    });
  });
  