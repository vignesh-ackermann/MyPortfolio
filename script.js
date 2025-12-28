/* ================= NAVBAR SCROLL EFFECT ================= */
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
  navbar.classList.toggle("scrolled", window.scrollY > 50);
});

/* ================= TYPED TEXT EFFECT ================= */
new Typed(".typed-text", {
  strings: [
    "Python Full Stack Developer",
    "Frontend & Backend Engineer",
    "Cloud & AI Enthusiast",
    "Open to Software Developer Roles"
  ],
  typeSpeed: 70,
  backSpeed: 45,
  loop: true
});

/* ================= SCROLL REVEAL ANIMATIONS ================= */
ScrollReveal().reveal(".home-text", {
  origin: "left",
  distance: "40px",
  duration: 900
});

ScrollReveal().reveal(".home-image", {
  origin: "right",
  distance: "40px",
  duration: 900
});

ScrollReveal().reveal(".skill-card, .project-card", {
  interval: 120
});

/* ================= PROJECT DATA (LINKEDIN) ================= */
const githubProjects = document.getElementById("github-projects");

const linkedinProjects = [
  {
    title: "AI-Based Deepfake Detection System",
    description: "Detection of manipulated videos using deep learning and computer vision.",
    tech: "Python, CNN, OpenCV",
    link: "https://www.linkedin.com/in/vigneshkumar03/"
  },
  {
    title: "Full Stack Web Application",
    description: "Responsive web application with authentication and REST APIs.",
    tech: "React, Node.js, MongoDB",
    link: "https://www.linkedin.com/in/vigneshkumar03/"
  }
];

/* Render LinkedIn projects */
linkedinProjects.forEach(project => {
  const card = document.createElement("a");
  card.href = project.link;
  card.target = "_blank";
  card.className = "project-card";

  card.innerHTML = `
    <h3>${project.title}</h3>
    <p>${project.description}</p>
    <small><strong>Tech:</strong> ${project.tech}</small>
    <span class="project-tag linkedin">LinkedIn Project</span>
  `;

  githubProjects.appendChild(card);
});

/* ================= FETCH GITHUB REPOSITORIES ================= */
fetch("https://api.github.com/users/vignesh-ackermann/repos")
  .then(res => res.json())
  .then(data => {
    data
      .filter(repo => !repo.fork)
      .slice(0, 6)
      .forEach(repo => {
        const card = document.createElement("a");
        card.href = repo.html_url;
        card.target = "_blank";
        card.className = "project-card";

        card.innerHTML = `
          <h3>${repo.name}</h3>
          <p>${repo.description || "Project demonstrating hands-on development experience."}</p>
          <small><strong>Tech:</strong> ${repo.language || "Multiple"}</small>
          <span class="project-tag github">GitHub</span>
        `;

        githubProjects.appendChild(card);
      });
  });
