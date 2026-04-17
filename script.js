/* ========================= */
/* LESSON DATA               */
/* ========================= */
/* To add a new lesson, copy one of the blocks below
   and add it to the lessons object with a new id.    */

const lessons = {

  1: {
    title: "What Are DNA and RNA?",
    description: "Fundamental molecules of genetics",
    video: "./videos/lesson1.mp4",

    overview: {
      about: "This lesson introduces the core molecules of genetics — DNA and RNA. You'll learn how genetic information is stored, transcribed, and used by cells to build proteins.",
      points: [
        "DNA is the body’s instruction manual.",
        "Genetic information is first copied into RNA.",
        "The message is edited — introns removed, exons kept.",
        "mRNA carries the final instructions.",
        "Cells use these instructions to build proteins.",
        "Proteins power growth, development, and everyday function."
      ],
      tags: ["Beginner", "1.5 min", "Module 1"]
    },

    transcript: [
      { time: "0:00", text: "..." },
      { time: "0:18", text: "..." },
      { time: "0:45", text: "..." },
      { time: "1:12", text: "..." },
      { time: "1:38", text: "..." }
    ],

    readMore: {
      intro: "Deepen your understanding of DNA and RNA ....",
      links: [
        { icon: "📄", title: "...", sub: "...", url: "#" },
        { icon: "🔬", title: "...", sub: "...", url: "#" },
        { icon: "🧬", title: "NIH: What is DNA?", sub: "...", url: "#" }
      ]
    },

    next: { id: 2, title: "How do Variants Affect Genes?", desc: "..." }
  },

  /* ========================= */

  2: {
    title: "How do Variants Affect Genes?",
    description: "...",
    video: "videos/structure.mp4",

    overview: {
      about: "...",
      points: [
        "Point.."
      ],
      tags: ["Beginner", "6 min", "Module 1"]
    },

    transcript: [
      { time: "0:00", text: "..." },
      { time: "0:22", text: "..." },
      { time: "0:55", text: "..." },
      { time: "1:20", text: "..." },
      { time: "1:50", text: "..." }
    ],

    readMore: {
      intro: "Go further with these resources on ...",
      links: [
        { icon: "🔭", title: "...", sub: "...", url: "#" },
        { icon: "📘", title: "...", sub: "...", url: "#" },
        { icon: "🎥", title: "...", sub: "...", url: "#" }
      ]
    },

    next: { id: null, title: "Module 1 Complete!", desc: "You've finished all lessons in this module." }
  },

  /* ========================= */

  3: {
    title: "Base Pairing Rules",
    description: "How DNA encodes information",
    video: "videos/basepair.mp4",

    overview: {
      about: "This lesson focuses on Chargaff's rules and how the specific pairing of nitrogenous bases allows DNA to store and faithfully replicate genetic information.",
      points: [
        "Points about the lesson..."
      ],
      tags: ["Beginner", "4 min", "Module 1"]
    },

    transcript: [
      { time: "0:00", text: "..." },
      { time: "0:25", text: "..." },
      { time: "0:52", text: "..." },
      { time: "1:18", text: "..." },
      { time: "1:45", text: "..." }
    ],

    readMore: {
      intro: "Explore more...",
      links: [
        { icon: "📄", title: "...", sub: "...", url: "#" },
        { icon: "🧪", title: "...", sub: "...", url: "#" },
        { icon: "📗", title: "...", sub: "...", url: "#" }
      ]
    },

    next: { id: null, title: "Module 1 Complete!", desc: "You've finished all lessons in this module." }
  }

};


/* ========================= */
/* LOAD LESSON               */
/* ========================= */

const params = new URLSearchParams(window.location.search);
const id = parseInt(params.get("id")) || 1;
const lesson = lessons[id];

if (!lesson) {
  document.querySelector('.lesson-title').textContent = "Lesson not found.";
} else {

  // --- Header ---
  document.querySelector('.lesson-title').textContent = lesson.title;
  document.querySelector('.subtitle').textContent = lesson.description;

  // --- Video ---
  document.querySelector('#lessonVideo').src = lesson.video;

  // --- Sidebar active state ---
  document.querySelectorAll('nav a').forEach(link => {
    link.classList.remove('active');
    if (parseInt(link.dataset.id) === id) link.classList.add('active');
  });

  // --- Overview ---
  document.querySelector('#overview-about').textContent = lesson.overview.about;

  const pointsList = document.querySelector('#overview-points');
  pointsList.innerHTML = lesson.overview.points
    .map(p => `<li>${p}</li>`)
    .join('');

  const tagsEl = document.querySelector('#overview-tags');
  tagsEl.innerHTML = lesson.overview.tags
    .map(t => `<span class="tag">${t}</span>`)
    .join('');

  // --- Transcript ---
  const transcriptBody = document.querySelector('#transcript-body');
  transcriptBody.innerHTML = lesson.transcript
    .map(line => `<p><span class="ts">${line.time}</span> ${line.text}</p>`)
    .join('');

  // --- Read More ---
  document.querySelector('#readmore-intro').textContent = lesson.readMore.intro;

  const readList = document.querySelector('#read-list');
  readList.innerHTML = lesson.readMore.links
    .map(item => `
      <a href="${item.url}" class="read-card">
        <div class="read-icon">${item.icon}</div>
        <div>
          <p class="read-title">${item.title}</p>
          <p class="read-sub">${item.sub}</p>
        </div>
      </a>
    `)
    .join('');

  // --- Next Lesson ---
  document.querySelector('#nextTitle').textContent = lesson.next.title;
  document.querySelector('#nextDesc').textContent = lesson.next.desc;

  const nextLink = document.querySelector('#nextLink');
  if (lesson.next.id) {
    nextLink.href = `lesson.html?id=${lesson.next.id}`;
    nextLink.textContent = "Continue →";
  } else {
    nextLink.removeAttribute('href');
    nextLink.textContent = "All done!";
    nextLink.style.opacity = "0.5";
    nextLink.style.cursor = "default";
  }

}


/* ========================= */
/* TAB SWITCHING             */
/* ========================= */

document.querySelectorAll('.tab').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById('tab-' + btn.dataset.tab).classList.add('active');
  });
});


/* ========================= */
/* MARK COMPLETE             */
/* ========================= */

const completeBtn = document.getElementById('completeBtn');
const progressFill = document.getElementById('progressFill');
const progressText = document.getElementById('progressText');

completeBtn.addEventListener('click', () => {
  const done = completeBtn.classList.toggle('done');
  completeBtn.textContent = done ? '✓ Completed' : 'Mark Complete';
  progressFill.style.width = done ? '100%' : '0%';
  progressText.textContent = done ? '100% complete' : '0% complete';
});

/* ========================= */
/* VIDEO PROGRESS            */
/* ========================= */

const video = document.getElementById('lessonVideo');

video.addEventListener('timeupdate', () => {
  if (!video.duration) return;

  const percent = (video.currentTime / video.duration) * 100;

  progressFill.style.width = percent + '%';
  progressText.textContent = Math.round(percent) + '% complete';

  // Auto mark complete when video finishes
  if (percent >= 100) {
    completeBtn.classList.add('done');
    completeBtn.textContent = '✓ Completed';
  }
});