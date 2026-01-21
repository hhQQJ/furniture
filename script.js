/* Intersection Observer for reveal animations */
const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      } else {
        entry.target.classList.remove("active");
      }
    });
  },
  { threshold: 0.1 }
);

reveals.forEach((reveal) => observer.observe(reveal));

/* Download Button Functionality */
const btn = document.getElementById("downloadBtn");
btn.addEventListener("click", () => {
  btn.innerText = "Downloading...";
  btn.disabled = true;

  setTimeout(() => {
    const link = document.createElement("a");
    link.href = "file/javascript.pdf";
    link.download = "javascript.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    btn.innerText = "Downloaded";
  }, 800);
});

/* Submission Handling */
const form = document.querySelector("form");
const card_1 = document.querySelector(".content-right");
const card_2 = document.querySelector(".content-right-success");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  card_1.classList.add("hidden");
  card_2.classList.remove("hidden");
});
