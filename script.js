// =========================
// LESSON DATA (DATABASE)
// =========================
// Add new lessons here instead of new pages

const lessons = {
  1: {
    title: "What Are DNA and RNA?",
    description: "Learn how genetic information is stored.",
    video: "videos/dna.mp4",
    duration: "5 min",
    level: "Beginner",
    next: 2
  },
  2: {
    title: "Structure of DNA",
    description: "Explore the double helix.",
    video: "videos/structure.mp4",
    duration: "6 min",
    level: "Beginner",
    next: 3
  },
  3: {
    title: "Base Pairing Rules",
    description: "How nucleotides interact.",
    video: "videos/basepair.mp4",
    duration: "4 min",
    level: "Beginner",
    next: null
  }
};

// =========================
// GET LESSON ID FROM URL
// =========================
// Example: lesson.html?id=2

const params = new URLSearchParams(window.location.search);
const lessonId = params.get("id");

// =========================
// LESSON PAGE LOGIC
// =========================

if (lessonId) {

  const lesson = lessons[lessonId];

  // Set title
  document.querySelector("h2").textContent = lesson.title;

  // Set description
  document.querySelector(".subtitle").textContent = lesson.description;

  // Set video source
  const video = document.querySelector("video");
  video.src = lesson.video;

  // Fill info card
  document.querySelector(".info-card").innerHTML = `
    <h4>Lesson Info</h4>
    <p><strong>Level:</strong> ${lesson.level}</p>
    <p><strong>Duration:</strong> ${lesson.duration}</p>
  `;

  // NEXT LESSON BUTTON
  const nextBtn = document.querySelector(".next-btn");

  if (lesson.next) {
    nextBtn.href = `lesson.html?id=${lesson.next}`;
  } else {
    nextBtn.style.display = "none";
  }

  // AUTOPLAY NEXT LESSON
  video.addEventListener("ended", () => {
    if (lesson.next) {
      window.location.href = `lesson.html?id=${lesson.next}`;
    }
  });

  // MARK COMPLETE BUTTON
  const btn = document.querySelector(".complete-btn");

  // Check if already completed
  if (localStorage.getItem(`lesson-${lessonId}`)) {
    btn.textContent = "Completed ✓";
  }

  // Save progress
  btn.addEventListener("click", () => {
    localStorage.setItem(`lesson-${lessonId}`, "complete");
    btn.textContent = "Completed ✓";
  });
}

// =========================
// HOMEPAGE PROGRESS
// =========================

document.querySelectorAll(".card").forEach((card, index) => {

  const id = index + 1;

  if (localStorage.getItem(`lesson-${id}`)) {

    const bar = card.querySelector(".progress-fill");

    if (bar) {
      bar.style.width = "100%";
    }
  }
});