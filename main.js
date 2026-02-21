const htmlContent = {
  skills: `<p><span>Skill Category:</span> Click on this text to edit or remove it completely</p>`,
  projects: `<div class="project-item">
            <h4>UniVaal API – Java-based e-commerce backend </h4>
            <a href="${"#"}">Github: <span class="project-link">https://github.com/MalindiFrank/univaal-api</span></a>
            <p>Designing using contract-first REST APIs with OpenAPI, featuring clear domain boundaries, structured data flow, and versioned endpoints for products, orders, payments, and admin operations; integrated PostgreSQL persistence and refined schemas to support maintainable system integration.</p>
            <p>Tech: Java, Spring Boot, PostgreSQL, REST, OpenAPI</p>
        </div>`,
  work: `<div class="work-item">
            <h4>Help Desk Technical Support — Plug N Play, Inc. | Feb 2021 – Dec 2021</h4>
            <p>Click on any text to make changes or remove it completely.</p>
        </div>`,
  volunteer: `<div class="volunteer-item">
            <h4>Tech Mentor — WeThinkCode_ | Sep 2025 – Present</h4>
            <p>Click on any text to make changes and add your details.</p>
        </div>`,
  education: `<div class="education-item">
            <p>Diploma in Software Engineering | WeThinkCode_ — Graduating 2026</p>
        </div>`,
  certificates: `<li>Name of Certificate — From where (add year)</li>`,

};


function setEventListener() {
  document.querySelectorAll(".add-btn").forEach((el) => {
  el.addEventListener("click", () => {
    attributeId = el.getAttribute("id");
    const targetEl = document.querySelector("." + attributeId);
    targetEl.lastElementChild.insertAdjacentHTML(
      "beforebegin",
      htmlContent[attributeId]
    );
  });
});
}

function insertButtons() {
  document.querySelectorAll(".add").forEach((section) => {
    const buttonAtrr = section.getAttribute('class');
    console.log(buttonAtrr)
    section.lastElementChild.insertAdjacentHTML(
      "beforeend",
      `<button class="add-btn" id=${buttonAtrr} contenteditable="false">Add Another</button>`
    )});
};

document.addEventListener("DOMContentLoaded", () => {
  insertButtons();
  setEventListener();
});
