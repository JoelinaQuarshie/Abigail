// ---------------------------
// Data: List of Courses
// ---------------------------
const courses = [
  {
    id: 1,
    title: "Introduction to HTML",
    description: "Learn the basics of HTML.",
    lessons: ["HTML Syntax", "Tags and Elements", "Forms and Inputs"]
  },
  {
    id: 2,
    title: "CSS Fundamentals",
    description: "Style your web pages with CSS.",
    lessons: ["Selectors", "Box Model", "Flexbox", "Grid"]
  },
  {
    id: 3,
    title: "JavaScript Essentials",
    description: "Make your web pages interactive.",
    lessons: ["Variables", "Functions", "DOM Manipulation", "Events"]
  }
];

// ---------------------------
// Progress Tracking with localStorage
// ---------------------------
function getCompletedCourses() {
  return JSON.parse(localStorage.getItem('completedCourses') || "[]");
}

function markCourseAsCompleted(id) {
  const completed = getCompletedCourses();
  if (!completed.includes(id)) {
    completed.push(id);
    localStorage.setItem('completedCourses', JSON.stringify(completed));
  }
}

function isCourseCompleted(id) {
  return getCompletedCourses().includes(id);
}

// ---------------------------
// DOM Elements
// ---------------------------
const app = document.getElementById("app");

// ---------------------------
// Render Home Page
// ---------------------------
function renderHomePage() {
  app.innerHTML = `<h2>Available Courses</h2><div class="course-list"></div>`;
  const courseList = app.querySelector('.course-list');

  courses.forEach(course => {
    const card = document.createElement('div');
    card.className = 'course-card';
    card.innerHTML = `
      <h3>${course.title}</h3>
      <p>${course.description}</p>
      ${isCourseCompleted(course.id) ? '<p style="color: green;"><strong>✅ Completed</strong></p>' : ''}
    `;
    card.onclick = () => renderCourseDetail(course.id);
    courseList.appendChild(card);
  });
}

// ---------------------------
// Render Course Detail Page
// ---------------------------
function renderCourseDetail(courseId) {
  const course = courses.find(c => c.id === courseId);
  if (!course) return;

  app.innerHTML = `
    <button class="back-btn" onclick="renderHomePage()">← Back to Courses</button>
    <h2>${course.title}</h2>
    <p>${course.description}</p>
    <h3>Lessons</h3>
    <div class="lesson-list">
      ${course.lessons.map(lesson => `
        <div class="lesson-card">${lesson}</div>
      `).join('')}
    </div>
    <button id="completeBtn">${isCourseCompleted(course.id) ? "✅ Course Completed" : "Mark as Completed"}</button>
  `;

  const completeBtn = document.getElementById('completeBtn');
  if (isCourseCompleted(course.id)) {
    completeBtn.classList.add("completed");
    completeBtn.disabled = true;
  }

  completeBtn.addEventListener("click", () => {
    markCourseAsCompleted(course.id);
    renderCourseDetail(course.id); // Re-render to reflect status
  });
}

// ---------------------------
// Initial Render
// ---------------------------
renderHomePage();
