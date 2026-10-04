const content = {
  projects: [
    { number: "01", title: "A little more\nwonder.", type: "Brand film / Lumen", theme: "project-sand" },
    { number: "02", title: "Built for the\nrestless.", type: "Launch campaign / Onda", theme: "project-night" },
    { number: "03", title: "The future\nlooks bright.", type: "Digital campaign / Solara", theme: "project-lime" }
  ],
  services: [
    ["01", "Brand & Campaigns", "Big ideas, beautifully built."],
    ["02", "Social & Content", "Content with a point of view."],
    ["03", "Motion & Design", "Still, moving, or somewhere in between."],
    ["04", "Production", "From first frame to final export."]
  ],
  process: [
    ["01", "Listen", "We start with questions, not assumptions."],
    ["02", "Think", "We find the sharpest version of the idea."],
    ["03", "Make", "We bring it to life with care and conviction."],
    ["04", "Move", "We launch it into the world and learn."]
  ]
};

document.querySelector("#project-grid").innerHTML = content.projects.map((project) => `
  <article class="project-card ${project.theme}">
    <div class="project-visual"></div>
    <span class="project-number">${project.number}</span>
    <h3>${project.title.replace("\n", "<br>")}</h3>
    <p>${project.type}</p>
  </article>
`).join("");

document.querySelector("#services-list").innerHTML = content.services.map(([number, title, description]) => `
  <div class="service-row">
    <span class="service-number">${number}</span>
    <h3>${title}</h3>
    <p>${description}</p>
    <span class="service-arrow">↗</span>
  </div>
`).join("");

document.querySelector("#process-grid").innerHTML = content.process.map(([number, title, description]) => `
  <article class="process-step">
    <span>${number}</span>
    <h3>${title}</h3>
    <p>${description}</p>
  </article>
`).join("");

const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".desktop-nav");
menuButton.addEventListener("click", () => {
  const isOpen = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", String(!isOpen));
  nav.classList.toggle("mobile-open", !isOpen);
});
