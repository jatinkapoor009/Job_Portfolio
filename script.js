// ----------- Cover Screen Hide ------------
function enterSite() {
  const cover = document.getElementById("coverScreen");
  cover.classList.add("fade-out");
}

// ----------- Typing Effect ------------
const phrases = [
  "Cloud & DevOps Engineer",
  "AWS | EC2 | S3 | IAM",
  "Docker | Kubernetes | Jenkins",
  "Terraform | Git & Github | Linux"
];
let currentPhrase = 0;
let charIndex = 0;
let isDeleting = false;
const typingEl = document.getElementById("typing");

function typeEffect() {
  const phrase = phrases[currentPhrase];
  typingEl.innerHTML = phrase.substring(0, charIndex) + "<span>|</span>";

  if (!isDeleting && charIndex < phrase.length) {
    charIndex++;
    setTimeout(typeEffect, 100);
  } else if (isDeleting && charIndex > 0) {
    charIndex--;
    setTimeout(typeEffect, 50);
  } else {
    isDeleting = !isDeleting;
    if (!isDeleting) currentPhrase = (currentPhrase + 1) % phrases.length;
    setTimeout(typeEffect, 1000);
  }
}

// ----------- Dark Mode Toggle ------------
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
  localStorage.setItem("theme", document.body.classList.contains("dark-mode") ? "dark" : "light");
}

// ----------- Load Theme & Init Typing ------------
window.onload = () => {
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
  }
  typeEffect();
  revealOnScroll();
};

// ----------- Resume Download ------------
function downloadResume() {
  const link = document.createElement("a");
  link.href = "resume.pdf/Jatin%20Kapoor_Cloud%2BDevOps_resume.pdf"; // Make sure this path is correct
  link.download = "Jatin-Kapoor-Resume.pdf";
  link.click();
}

// ----------- Toast Notification ------------
const toastLinks = document.querySelectorAll(".toast-link");
const toast = document.getElementById("toast");

toastLinks.forEach(link => {
  link.addEventListener("click", () => {
    showToast("Opening external link...");
  });
});

function showToast(message) {
  toast.innerText = message;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 3000);
}

// ----------- Scroll Reveal ------------
function revealOnScroll() {
  const reveals = document.querySelectorAll(".reveal");
  reveals.forEach(section => {
    const windowHeight = window.innerHeight;
    const elementTop = section.getBoundingClientRect().top;
    if (elementTop < windowHeight - 100) {
      section.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
