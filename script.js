/* ========================= */
/* LESSON DATA               */
/* ========================= */
/* To add a new lesson, copy one of the blocks below
   and add it to the lessons object with a new id.    */

const lessons = {

  1: {
    title: "What Are DNA and RNA?",
    description: "Fundamental molecules of genetics",
    video: "videos/dna.mp4",

    overview: {
      about: "This lesson introduces the core molecules of genetics — DNA and RNA. You'll learn how genetic information is stored, transcribed, and used by cells to build proteins.",
      points: [
        "What is a nucleotide?",
        "The structure of DNA vs RNA",
        "How genes encode proteins",
        "The central dogma of molecular biology"
      ],
      tags: ["Beginner", "5 min", "Module 1"]
    },

    transcript: [
      { time: "0:00", text: "Welcome to Decoding Genetics. In this lesson, we'll explore the two molecules at the heart of all life on Earth — DNA and RNA." },
      { time: "0:18", text: "DNA, or deoxyribonucleic acid, carries the genetic blueprint of every living organism. Its double helix structure was first described by Watson and Crick in 1953." },
      { time: "0:45", text: "RNA, or ribonucleic acid, acts as the messenger. It carries instructions from DNA out of the nucleus and to the ribosome, where proteins are assembled." },
      { time: "1:12", text: "Together, this flow of information — from DNA to RNA to protein — is called the central dogma of molecular biology." },
      { time: "1:38", text: "In the next lesson, we'll zoom into the physical structure of DNA itself, examining the double helix and the base pairs that hold it together." }
    ],

    readMore: {
      intro: "Deepen your understanding of DNA and RNA with these curated resources.",
      links: [
        { icon: "📄", title: "The Double Helix — James Watson", sub: "A first-person account of the discovery of DNA's structure", url: "#" },
        { icon: "🔬", title: "Khan Academy: DNA Basics", sub: "Free interactive lessons covering nucleotides and replication", url: "#" },
        { icon: "🧬", title: "NIH: What is DNA?", sub: "Authoritative overview from the National Human Genome Research Institute", url: "#" }
      ]
    },

    next: { id: 2, title: "Structure of DNA", desc: "The double helix explained" }
  },

  /* ========================= */

  2: {
    title: "Structure of DNA",
    description: "The double helix explained",
    video: "videos/structure.mp4",

    overview: {
      about: "Dive deep into the physical structure of DNA. This lesson covers the double helix model, how the two strands are held together, and why the structure is so elegantly suited to its function.",
      points: [
        "The double helix model",
        "Sugar-phosphate backbone",
        "Complementary base pairing (A-T, G-C)",
        "Major and minor grooves",
        "Antiparallel strand orientation"
      ],
      tags: ["Beginner", "6 min", "Module 1"]
    },

    transcript: [
      { time: "0:00", text: "In this lesson we'll look closely at the physical architecture of DNA — the molecule that stores the blueprint for all living things." },
      { time: "0:22", text: "DNA is made of two strands twisted around each other in a double helix. Think of it like a spiral staircase — the rails are the sugar-phosphate backbone, and the steps are the base pairs." },
      { time: "0:55", text: "Each base pair consists of two complementary nucleotides: adenine always pairs with thymine, and guanine always pairs with cytosine." },
      { time: "1:20", text: "The two strands run in opposite directions — this is called antiparallel orientation — and they're held together by hydrogen bonds between the base pairs." },
      { time: "1:50", text: "Next, we'll explore what these base pairs actually encode, and how the sequence of bases carries biological information." }
    ],

    readMore: {
      intro: "Go further with these resources on DNA structure and the double helix.",
      links: [
        { icon: "🔭", title: "Rosalind Franklin & X-ray Crystallography", sub: "The hidden story behind the discovery of the double helix", url: "#" },
        { icon: "📘", title: "Scitable: DNA Structure", sub: "Nature Education's overview of nucleotide structure and bonding", url: "#" },
        { icon: "🎥", title: "HHMI BioInteractive: DNA Model", sub: "Animated 3D walkthrough of the double helix", url: "#" }
      ]
    },

    next: { id: 3, title: "Base Pairing Rules", desc: "How DNA encodes information" }
  },

  /* ========================= */

  3: {
    title: "Base Pairing Rules",
    description: "How DNA encodes information",
    video: "videos/basepair.mp4",

    overview: {
      about: "This lesson focuses on Chargaff's rules and how the specific pairing of nitrogenous bases allows DNA to store and faithfully replicate genetic information.",
      points: [
        "Chargaff's rules (A=T, G=C)",
        "Purine vs pyrimidine bases",
        "Why base pairing enables replication",
        "How sequence encodes genetic information"
      ],
      tags: ["Beginner", "4 min", "Module 1"]
    },

    transcript: [
      { time: "0:00", text: "Every piece of genetic information you carry is encoded in the sequence of just four chemical bases: adenine, thymine, guanine, and cytosine." },
      { time: "0:25", text: "Erwin Chargaff discovered in the 1950s that in any DNA sample, the amount of adenine always equals thymine, and guanine always equals cytosine. This is now known as Chargaff's rules." },
      { time: "0:52", text: "These pairings aren't random — they're dictated by the shape and chemistry of the molecules. Adenine and thymine form two hydrogen bonds; guanine and cytosine form three." },
      { time: "1:18", text: "This specificity is what makes DNA replication so accurate. Each strand acts as a template, and the rules ensure the new strand is an exact complement of the original." },
      { time: "1:45", text: "In the next module, we'll see how this sequence of base pairs gets read and converted into proteins through transcription and translation." }
    ],

    readMore: {
      intro: "Explore base pairing, Chargaff's rules, and DNA replication in more depth.",
      links: [
        { icon: "📄", title: "Chargaff's Rules — Original Paper", sub: "The 1950 paper that revealed the A=T, G=C relationship", url: "#" },
        { icon: "🧪", title: "Visible Body: Base Pair Interactions", sub: "Interactive 3D model of hydrogen bonding between bases", url: "#" },
        { icon: "📗", title: "OpenStax Biology: DNA Replication", sub: "Free textbook chapter on how base pairing drives replication", url: "#" }
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