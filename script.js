/* ========================= */
/* LESSON DATA               */
/* ========================= */

const lessons = {

  /* ===== MODULE 1 ===== */

  1: {
    title: "What Are DNA and RNA?",
    description: "Fundamental molecules of genetics",
    video: "./videos/lesson1.mp4",

    overview: {
      about: "This lesson introduces the core molecules of genetics: DNA and RNA. You'll learn how genetic information is stored, transcribed, and used by cells to build proteins.",
      points: [
        "DNA is the body's instruction manual.",
        "Genetic information is first copied into RNA.",
        "The message is edited, introns removed, exons kept.",
        "mRNA carries the final instructions.",
        "Cells use these instructions to build proteins.",
        "Proteins power growth, development, and everyday function."
      ],
      tags: ["Foundational", "1.5 min", "Module 1"]
    },

    transcript: [
      { time: "0:00", text: "..." },
      { time: "0:18", text: "..." },
      { time: "0:45", text: "..." },
      { time: "1:12", text: "..." },
      { time: "1:38", text: "..." }
    ],

    readMore: {
      intro: "Want to learn more? Check out these resources:",
      links: [
        { icon: "📄", title: "...", sub: "...", url: "#" },
        { icon: "🔬", title: "...", sub: "...", url: "#" },
        { icon: "🧬", title: "...", sub: "...", url: "#" }
      ]
    },

    next: { id: 2, title: "How do Variants Affect Genes?", desc: "What happens when DNA instructions change? How genetic variants can affect protein function, and introduces three key ways this can impact health" }
  },

  /* ========================= */

  2: {
    title: "How do Variants Affect Genes?",
    description: "What happens when DNA instructions change? How genetic variants can affect protein function, and introduces three key ways this can impact health",
    video: "./videos/lesson2.mp4",

    overview: {
      about: "Sometimes, small changes in DNA, called variants, can alter how the body reads and uses genetic instructions. This video explains how these changes can affect the proteins our bodies make, and how that can impact health. It introduces three common ways genes can be affected: loss of function, gain of function, and dominant negative—helping you better understand the science behind certain genetic conditions.",
      points: [
        "Small DNA changes can affect how proteins are made",
        "Proteins may not work properly, or may work differently",
        "These changes can impact health",
        "Genetic conditions often follow specific “mechanisms”",
        "Three key types: loss of function, gain of function, dominant negative"
      ],
      tags: ["Foundational", "1 min", "Module 1"]
    },

    transcript: [
      { time: "0:00", text: "..." },
      { time: "0:22", text: "..." },
      { time: "0:55", text: "..." },
      { time: "1:20", text: "..." },
      { time: "1:50", text: "..." }
    ],

    readMore: {
      intro: "Want to learn more? Check out these resources:",
      links: [
        { icon: "🔭", title: "...", sub: "...", url: "#" },
        { icon: "📘", title: "...", sub: "...", url: "#" },
        { icon: "🎥", title: "...", sub: "...", url: "#" }
      ]
    },

    next: { id: null, title: "Module 1 Complete!", desc: "You've finished all lessons in this module." }
  },

  /* ===== MODULE 2 ===== */

  3: {
    title: "What are ASOs?",
    description: "A simple explanation of how ASO therapies work by targeting RNA to help correct or reduce harmful protein production in genetic conditions.",
    video: "./videos/mod2lesson1.mp4",

    overview: {
      about: "This video introduces antisense oligonucleotides (ASOs), a type of targeted therapy that works by interacting with RNA to influence how the body reads genetic instructions. By binding to specific RNA sequences, ASOs can block faulty messages, trigger their breakdown, or alter how they are processed, such as skipping certain sections. Through these mechanisms, ASOs can reduce, modify, or restore protein production, offering a promising approach to treating some genetic conditions by slowing or stopping disease progression.",
      points: [
        "ASOs are designed to target specific genetic messages",
        "They can stop harmful proteins from being made",
        "They work by breaking down or modifying RNA",
        "This approach can help manage certain genetic conditions",
        "ASOs offer a targeted way to influence how genes are used in the body"
      ],
      tags: ["Exploratory", "1 min", "Module 2"]
    },

    transcript: [
      { time: "0:00", text: "..." },
      { time: "0:20", text: "..." },
      { time: "0:50", text: "..." },
      { time: "1:15", text: "..." },
      { time: "1:45", text: "..." }
    ],

    readMore: {
      intro: "Want to learn more? Check out these resources:",
      links: [
        { icon: "📄", title: "...", sub: "...", url: "#" },
        { icon: "🔬", title: "...", sub: "...", url: "#" },
        { icon: "🧬", title: "...", sub: "...", url: "#" }
      ]
    },

    next: { id: 4, title: "What are the limitations of ASOs?", desc: "..." }
  },

  /* ========================= */

  4: {
    title: "What are the limitations of ASOs?",
    description: "Understanding the constraints of antisense oligonucleotides",
    video: "./videos/lesson4.mp4",

    overview: {
      about: "About text for this lesson...",
      points: [
        "Point one...",
        "Point two...",
        "Point three..."
      ],
      tags: ["Exploratory", "6 min", "Module 2"]
    },

    transcript: [
      { time: "0:00", text: "..." },
      { time: "0:22", text: "..." },
      { time: "0:55", text: "..." },
      { time: "1:20", text: "..." },
      { time: "1:50", text: "..." }
    ],

    readMore: {
      intro: "Want to learn more? Check out these resources:",
      links: [
        { icon: "🔭", title: "...", sub: "...", url: "#" },
        { icon: "📘", title: "...", sub: "...", url: "#" },
        { icon: "🎥", title: "...", sub: "...", url: "#" }
      ]
    },

    next: { id: null, title: "Module 2 Complete!", desc: "You've finished all lessons in this module." }
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
/* VIDEO PROGRESS            */
/* ========================= */

const video = document.getElementById('lessonVideo');

const savedTime = localStorage.getItem(`lesson-${id}-time`);
if (savedTime) video.currentTime = parseFloat(savedTime);

video.addEventListener('timeupdate', () => {
  if (!video.duration) return;

  const percent = (video.currentTime / video.duration) * 100;

  progressFill.style.width = percent + '%';
  progressText.textContent = Math.round(percent) + '% complete';

  localStorage.setItem(`lesson-${id}-time`, video.currentTime);
  localStorage.setItem(`lesson-${id}-percent`, Math.round(percent));

  if (percent >= 100) {
    completeBtn.classList.add('done');
    completeBtn.textContent = '✓ Completed';
    localStorage.setItem(`lesson-${id}-complete`, 'true');
  }
});


/* ========================= */
/* MARK COMPLETE             */
/* ========================= */

if (localStorage.getItem(`lesson-${id}-complete`) === 'true') {
  completeBtn.classList.add('done');
  completeBtn.textContent = '✓ Completed';
  progressFill.style.width = '100%';
  progressText.textContent = '100% complete';
}

completeBtn.addEventListener('click', () => {
  const done = completeBtn.classList.toggle('done');
  completeBtn.textContent = done ? '✓ Completed' : 'Mark Complete';
  progressFill.style.width = done ? '100%' : '0%';
  progressText.textContent = done ? '100% complete' : '0% complete';
  localStorage.setItem(`lesson-${id}-complete`, done ? 'true' : 'false');
});


/* ========================= */
/* RESTORE CARD PROGRESS     */
/* ========================= */

document.querySelectorAll('.card').forEach(card => {
  const href = card.getAttribute('href');
  const match = href.match(/id=(\d+)/);
  if (!match) return;

  const lessonId = match[1];
  const percent = localStorage.getItem(`lesson-${lessonId}-percent`) || 0;
  const complete = localStorage.getItem(`lesson-${lessonId}-complete`) === 'true';

  card.querySelector('.progress-fill').style.width = (complete ? 100 : percent) + '%';
});