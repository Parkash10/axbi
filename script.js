const features = [
  {
    icon: "⬆️",
    title: "Upload First",
    description:
      "Contribute your notes to unlock the entire library. Quality contributions earn you credits and recognition.",
    tint: "linear-gradient(135deg, rgba(91,107,255,.2), rgba(168,85,247,.2))",
  },
  {
    icon: "🛡️",
    title: "Community Verified",
    description: "Every note is reviewed and approved by our community, ensuring high-quality content for everyone.",
    tint: "linear-gradient(135deg, rgba(168,85,247,.2), rgba(34,197,94,.15))",
  },
  {
    icon: "⬇️",
    title: "Unlimited Downloads",
    description: "Once approved, access unlimited downloads from our vast collection of student-curated resources.",
    tint: "linear-gradient(135deg, rgba(34,197,94,.2), rgba(91,107,255,.2))",
  },
  {
    icon: "⭐",
    title: "Rating System",
    description: "Rate and review notes to help others find the best content. Top contributors get featured.",
    tint: "linear-gradient(135deg, rgba(91,107,255,.2), rgba(168,85,247,.2))",
  },
  {
    icon: "👥",
    title: "Study Groups",
    description: "Join subject-specific communities, collaborate with peers, and share insights on difficult topics.",
    tint: "linear-gradient(135deg, rgba(168,85,247,.2), rgba(34,197,94,.15))",
  },
  {
    icon: "🏆",
    title: "Earn Rewards",
    description: "Gain badges, climb leaderboards, and earn credits that can be used for premium features.",
    tint: "linear-gradient(135deg, rgba(34,197,94,.2), rgba(91,107,255,.2))",
  },
]

const steps = [
  { step: "01", title: "Sign Up", description: "Create your free account with your institutional email" },
  { step: "02", title: "Upload Notes", description: "Share your quality notes to contribute to the community" },
  { step: "03", title: "Get Approved", description: "Community reviews ensure quality standards are met" },
  { step: "04", title: "Unlock Access", description: "Download unlimited notes from our entire library" },
]

const stats = [
  { value: 125000, suffix: "+", label: "Notes Shared" },
  { value: 50000, suffix: "+", label: "Active Students" },
  { value: 2500000, suffix: "+", label: "Downloads" },
  { value: 4.9, suffix: "/5", label: "Average Rating", decimals: 1 },
]

const notes = [
  {
    id: "1",
    title: "Advanced Calculus - Derivatives & Integrals",
    subject: "Mathematics",
    author: "Sarah Chen · MIT",
    rating: 4.9,
    reviews: 128,
    downloads: 3420,
    thumbnail: "./public/calculus-notes-derivations.jpg",
    tags: ["Calculus", "Derivatives", "Integrals"],
    date: "2 days ago",
    pages: 24,
    fileType: "PDF",
    level: "undergrad",
    type: "pdf",
  },
  {
    id: "2",
    title: "Organic Chemistry - Reaction Mechanisms",
    subject: "Chemistry",
    author: "Marcus Johnson · Stanford",
    rating: 4.8,
    reviews: 95,
    downloads: 2180,
    thumbnail: "./public/chemistry-organic-reactions.jpg",
    tags: ["Organic Chemistry", "Reactions", "Mechanisms"],
    date: "5 days ago",
    pages: 32,
    fileType: "PDF",
    level: "undergrad",
    type: "pdf",
  },
  {
    id: "3",
    title: "Data Structures & Algorithms Cheat Sheet",
    subject: "Computer Science",
    author: "Emily Rodriguez · Berkeley",
    rating: 4.95,
    reviews: 256,
    downloads: 5890,
    thumbnail: "./public/data-structures-algorithms-code.png",
    tags: ["DSA", "Algorithms", "Programming"],
    date: "1 week ago",
    pages: 18,
    fileType: "PDF",
    level: "undergrad",
    type: "pdf",
  },
  {
    id: "4",
    title: "Quantum Mechanics - Wave Functions",
    subject: "Physics",
    author: "David Kim · Caltech",
    rating: 4.7,
    reviews: 67,
    downloads: 1540,
    thumbnail: "./public/quantum-physics-wave-equations.jpg",
    tags: ["Quantum", "Physics", "Wave Functions"],
    date: "3 days ago",
    pages: 28,
    fileType: "PDF",
    level: "grad",
    type: "pdf",
  },
  {
    id: "5",
    title: "Machine Learning Fundamentals",
    subject: "Computer Science",
    author: "Alex Rivera · CMU",
    rating: 4.85,
    reviews: 189,
    downloads: 4230,
    thumbnail: "./public/machine-learning-neural-networks.jpg",
    tags: ["ML", "AI", "Neural Networks"],
    date: "4 days ago",
    pages: 45,
    fileType: "PDF",
    level: "grad",
    type: "pdf",
  },
  {
    id: "6",
    title: "Microeconomics - Supply & Demand",
    subject: "Economics",
    author: "Jessica Park · NYU",
    rating: 4.6,
    reviews: 72,
    downloads: 1890,
    thumbnail: "./public/economics-supply-demand-graphs.jpg",
    tags: ["Economics", "Microeconomics", "Markets"],
    date: "1 week ago",
    pages: 22,
    fileType: "PDF",
    level: "undergrad",
    type: "pdf",
  },
]

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Computer Science, MIT",
    avatar: "./public/young-asian-woman-student-portrait.jpg",
    content:
      "StudySync transformed how I prepare for exams. The quality of notes here is incredible, and contributing my own work feels rewarding.",
  },
  {
    name: "Marcus Johnson",
    role: "Pre-Med, Stanford",
    avatar: "./public/young-black-man-student-portrait.jpg",
    content:
      "As a pre-med student, having access to well-organized anatomy notes is a lifesaver. The community here is supportive and the peer review system ensures top-quality content.",
  },
  {
    name: "Emily Rodriguez",
    role: "Business, NYU",
    avatar: "./public/young-latina-woman-student-portrait.jpg",
    content:
      "The gamification elements keep me motivated to contribute. I've earned enough credits to access premium features just by sharing my marketing notes.",
  },
  {
    name: "David Kim",
    role: "Engineering, Berkeley",
    avatar: "./public/young-asian-student.png",
    content:
      "The upload-to-unlock system creates such a positive cycle of sharing. Everyone contributes, everyone benefits.",
  },
]

const trendingSearches = ["Calculus derivatives", "Organic Chemistry", "Data Structures", "Linear Algebra", "Machine Learning"]
const recentSearches = ["Physics mechanics", "Economics 101", "Python programming"]

const filterOptions = {
  subjects: [
    { id: "Computer Science", label: "Computer Science", count: 2450 },
    { id: "Mathematics", label: "Mathematics", count: 1820 },
    { id: "Physics", label: "Physics", count: 1540 },
    { id: "Chemistry", label: "Chemistry", count: 980 },
    { id: "Biology", label: "Biology", count: 760 },
    { id: "Engineering", label: "Engineering", count: 1230 },
    { id: "Business", label: "Business", count: 890 },
    { id: "Economics", label: "Economics", count: 650 },
  ],
  types: [
    { id: "pdf", label: "PDF", count: 8500 },
    { id: "doc", label: "Document", count: 2300 },
    { id: "images", label: "Images", count: 1200 },
  ],
  levels: [
    { id: "undergrad", label: "Undergraduate" },
    { id: "grad", label: "Graduate" },
    { id: "professional", label: "Professional" },
  ],
}

const comments = [
  {
    author: "Alex Kim",
    avatar: "./public/young-asian-student.png",
    content: "These notes are incredibly well-organized! The diagrams really helped me understand the concepts.",
    date: "2 days ago",
  },
  {
    author: "Emma Wilson",
    avatar: "./public/placeholder.jpg",
    content: "Saved me during finals week. Thank you for sharing!",
    date: "1 week ago",
  },
]

// Leaderboard data
const leaderboardData = {
  weekly: [
    {
      rank: 1,
      name: "Sarah Chen",
      university: "MIT",
      avatar: "./public/young-asian-woman-student-portrait.jpg",
      score: 3420,
      change: "up",
      changeAmount: 120,
      subjects: ["Computer Science", "Mathematics"],
      notesUploaded: 24,
      avgRating: 4.9
    },
    {
      rank: 2,
      name: "Marcus Johnson",
      university: "Stanford",
      avatar: "./public/young-black-man-student-portrait.jpg",
      score: 2890,
      change: "up",
      changeAmount: 85,
      subjects: ["Chemistry", "Biology"],
      notesUploaded: 18,
      avgRating: 4.8
    },
    {
      rank: 3,
      name: "Emily Rodriguez",
      university: "Berkeley",
      avatar: "./public/young-latina-woman-student-portrait.jpg",
      score: 2560,
      change: "down",
      changeAmount: 15,
      subjects: ["Computer Science", "Engineering"],
      notesUploaded: 21,
      avgRating: 4.95
    },
    {
      rank: 4,
      name: "David Kim",
      university: "Caltech",
      avatar: "./public/young-asian-student.png",
      score: 2180,
      change: "up",
      changeAmount: 210,
      subjects: ["Physics", "Mathematics"],
      notesUploaded: 16,
      avgRating: 4.7
    },
    {
      rank: 5,
      name: "Alex Rivera",
      university: "CMU",
      avatar: "./public/placeholder.jpg",
      score: 1890,
      change: "up",
      changeAmount: 90,
      subjects: ["Computer Science", "AI"],
      notesUploaded: 14,
      avgRating: 4.85
    },
    {
      rank: 6,
      name: "Jessica Park",
      university: "NYU",
      avatar: "./public/placeholder.jpg",
      score: 1540,
      change: "up",
      changeAmount: 45,
      subjects: ["Economics", "Business"],
      notesUploaded: 12,
      avgRating: 4.6
    },
    {
      rank: 7,
      name: "Michael Zhang",
      university: "Harvard",
      avatar: "./public/placeholder.jpg",
      score: 1320,
      change: "down",
      changeAmount: 20,
      subjects: ["Mathematics", "Physics"],
      notesUploaded: 11,
      avgRating: 4.75
    },
    {
      rank: 8,
      name: "Olivia Martinez",
      university: "Columbia",
      avatar: "./public/placeholder.jpg",
      score: 1180,
      change: "up",
      changeAmount: 60,
      subjects: ["Biology", "Chemistry"],
      notesUploaded: 10,
      avgRating: 4.65
    }
  ],
  monthly: [
    {
      rank: 1,
      name: "Marcus Johnson",
      university: "Stanford",
      avatar: "./public/young-black-man-student-portrait.jpg",
      score: 12500,
      change: "up",
      changeAmount: 420,
      subjects: ["Chemistry", "Biology"],
      notesUploaded: 72,
      avgRating: 4.8
    },
    {
      rank: 2,
      name: "Sarah Chen",
      university: "MIT",
      avatar: "./public/young-asian-woman-student-portrait.jpg",
      score: 11890,
      change: "up",
      changeAmount: 380,
      subjects: ["Computer Science", "Mathematics"],
      notesUploaded: 68,
      avgRating: 4.9
    },
    {
      rank: 3,
      name: "David Kim",
      university: "Caltech",
      avatar: "./public/young-asian-student.png",
      score: 10240,
      change: "up",
      changeAmount: 510,
      subjects: ["Physics", "Mathematics"],
      notesUploaded: 64,
      avgRating: 4.7
    },
    {
      rank: 4,
      name: "Emily Rodriguez",
      university: "Berkeley",
      avatar: "./public/young-latina-woman-student-portrait.jpg",
      score: 9870,
      change: "up",
      changeAmount: 210,
      subjects: ["Computer Science", "Engineering"],
      notesUploaded: 61,
      avgRating: 4.95
    },
    {
      rank: 5,
      name: "Alex Rivera",
      university: "CMU",
      avatar: "./public/placeholder.jpg",
      score: 8450,
      change: "up",
      changeAmount: 180,
      subjects: ["Computer Science", "AI"],
      notesUploaded: 56,
      avgRating: 4.85
    }
  ],
  allTime: [
    {
      rank: 1,
      name: "Sarah Chen",
      university: "MIT",
      avatar: "./public/young-asian-woman-student-portrait.jpg",
      score: 125000,
      change: "up",
      changeAmount: 1200,
      subjects: ["Computer Science", "Mathematics"],
      notesUploaded: 245,
      avgRating: 4.9
    },
    {
      rank: 2,
      name: "Emily Rodriguez",
      university: "Berkeley",
      avatar: "./public/young-latina-woman-student-portrait.jpg",
      score: 118900,
      change: "up",
      changeAmount: 850,
      subjects: ["Computer Science", "Engineering"],
      notesUploaded: 218,
      avgRating: 4.95
    },
    {
      rank: 3,
      name: "Marcus Johnson",
      university: "Stanford",
      avatar: "./public/young-black-man-student-portrait.jpg",
      score: 102400,
      change: "up",
      changeAmount: 920,
      subjects: ["Chemistry", "Biology"],
      notesUploaded: 189,
      avgRating: 4.8
    },
    {
      rank: 4,
      name: "David Kim",
      university: "Caltech",
      avatar: "./public/young-asian-student.png",
      score: 98700,
      change: "up",
      changeAmount: 710,
      subjects: ["Physics", "Mathematics"],
      notesUploaded: 176,
      avgRating: 4.7
    },
    {
      rank: 5,
      name: "Alex Rivera",
      university: "CMU",
      avatar: "./public/placeholder.jpg",
      score: 84500,
      change: "up",
      changeAmount: 680,
      subjects: ["Computer Science", "AI"],
      notesUploaded: 154,
      avgRating: 4.85
    }
  ]
};

// Categories data
const categoryData = {
  computerScience: [
    { rank: 1, name: "Sarah Chen", university: "MIT", score: 3420 },
    { rank: 2, name: "Emily Rodriguez", university: "Berkeley", score: 2890 },
    { rank: 3, name: "Alex Rivera", university: "CMU", score: 2180 }
  ],
  mathematics: [
    { rank: 1, name: "David Kim", university: "Caltech", score: 2980 },
    { rank: 2, name: "Sarah Chen", university: "MIT", score: 2650 },
    { rank: 3, name: "Michael Zhang", university: "Harvard", score: 1870 }
  ],
  physics: [
    { rank: 1, name: "David Kim", university: "Caltech", score: 3120 },
    { rank: 2, name: "Michael Zhang", university: "Harvard", score: 2340 },
    { rank: 3, name: "Emma Wilson", university: "Princeton", score: 1760 }
  ],
  chemistry: [
    { rank: 1, name: "Marcus Johnson", university: "Stanford", score: 2890 },
    { rank: 2, name: "Olivia Martinez", university: "Columbia", score: 1980 },
    { rank: 3, name: "James Lee", university: "UCLA", score: 1540 }
  ]
};

// Achievement data
const achievementData = [
  {
    title: "Upload Master",
    description: "Upload 50+ notes with 4.5+ average rating",
    icon: "📚",
    earned: "125 users"
  },
  {
    title: "Community Star",
    description: "Receive 500+ downloads across all notes",
    icon: "⭐",
    earned: "89 users"
  },
  {
    title: "Quality Contributor",
    description: "Maintain 4.8+ average rating for 3 months",
    icon: "🏆",
    earned: "42 users"
  },
  {
    title: "Rising Star",
    description: "Top 10 in weekly leaderboard",
    icon: "🚀",
    earned: "210 users"
  }
];

// Current user data for leaderboard
const currentLeaderboardUser = {
  rank: 5,
  name: "Alex Rivera",
  university: "CMU",
  avatar: "./public/placeholder.jpg",
  score: 1890,
  change: "up",
  changeAmount: 90,
  subjects: ["Computer Science", "AI"],
  notesUploaded: 14,
  avgRating: 4.85,
  weeklyRank: 5,
  monthlyRank: 5,
  allTimeRank: 5
};

document.addEventListener("DOMContentLoaded", () => {
  const yearEl = document.getElementById("year")
  if (yearEl) yearEl.textContent = new Date().getFullYear().toString()

  // Initialize sidebar active state
  if (document.querySelector(".sidebar")) {
    initSidebar()
  }
  
  // Update profile info in navbar
  if (document.getElementById("profile-name")) {
    updateProfileInfo()
  }

  initNav()
  
  // Check if we're on the leaderboard page
  const isLeaderboardPage = document.getElementById('leaderboard-search') !== null
  
  if (isLeaderboardPage) {
    // Initialize leaderboard page
    initLeaderboardPage()
  } else {
    // Initialize other pages
    if (document.getElementById("feature-grid")) renderFeatures()
    if (document.getElementById("steps")) renderSteps()
    if (document.querySelector("[data-counter]")) initHeroCounter()
    if (document.getElementById("stats-grid")) renderStats()
    if (document.getElementById("search")) {
      initSearch()
      initFilters()
      initNotes()
    }
    if (document.getElementById("testimonials-grid")) initTestimonials()
    if (document.querySelector(".profile-header")) initProfile()
    initCTA()
    if (document.getElementById("signup-form") || document.getElementById("signin-form")) initAuth()
  }
})

// Additional UI enhancements for signup page
document.addEventListener("DOMContentLoaded", () => {
  if (document.getElementById("signup-form")) initPasswordToggle()
})

function initPasswordToggle() {
  const passInput = document.getElementById("su-password")
  const passToggle = document.getElementById("toggle-su-password")
  const confirmInput = document.getElementById("su-confirm")
  const confirmToggle = document.getElementById("toggle-su-confirm")
  if (passToggle && passInput) {
    passToggle.addEventListener("click", () => {
      const isText = passInput.getAttribute("type") === "text"
      passInput.setAttribute("type", isText ? "password" : "text")
      passToggle.textContent = isText ? "Show" : "Hide"
    })
  }
  if (confirmToggle && confirmInput) {
    confirmToggle.addEventListener("click", () => {
      const isText = confirmInput.getAttribute("type") === "text"
      confirmInput.setAttribute("type", isText ? "password" : "text")
      confirmToggle.textContent = isText ? "Show" : "Hide"
    })
  }
}

function initNav() {
  const toggle = document.querySelector(".nav__toggle")
  const mobile = document.querySelector(".nav__mobile")
  const nav = document.querySelector(".nav")

  toggle?.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open")
    if (isOpen) {
      mobile.removeAttribute("hidden")
    } else {
      mobile.setAttribute("hidden", "true")
    }
    toggle.setAttribute("aria-expanded", String(isOpen))
  })

  mobile?.querySelectorAll("a").forEach((link) =>
    link.addEventListener("click", () => {
      mobile.setAttribute("hidden", "true")
      nav.classList.remove("is-open")
      toggle?.setAttribute("aria-expanded", "false")
    }),
  )
}

function renderFeatures() {
  const grid = document.getElementById("feature-grid")
  grid.innerHTML = features
    .map(
      (f) => `
      <article class="feature">
        <div class="feature__icon" style="background:${f.tint}">${f.icon}</div>
        <h3>${f.title}</h3>
        <p class="muted">${f.description}</p>
      </article>
    `,
    )
    .join("")
}

function renderSteps() {
  const wrap = document.getElementById("steps")
  wrap.innerHTML = steps
    .map(
      (s) => `
      <div class="step">
        <div class="step__badge">${s.step}</div>
        <h4>${s.title}</h4>
        <p class="muted">${s.description}</p>
      </div>
    `,
    )
    .join("")
}

function animateValue(el, target, decimals = 0, duration = 2000) {
  let start = 0
  const stepTime = Math.max(Math.floor(duration / 60), 16)
  const increment = target / (duration / stepTime)
  const timer = setInterval(() => {
    start += increment
    if (start >= target) {
      start = target
      clearInterval(timer)
    }
    el.textContent = decimals ? start.toFixed(decimals) : Math.floor(start).toLocaleString()
  }, stepTime)
}

function initHeroCounter() {
  const badge = document.querySelector("[data-counter]")
  if (!badge) return
  animateValue(badge, Number(badge.dataset.counter || 0), 0, 1800)
}

function renderStats() {
  const grid = document.getElementById("stats-grid")
  grid.innerHTML = stats
    .map(
      (s) => `
      <div class="stat">
        <div class="muted">${s.label}</div>
        <strong data-stat data-value="${s.value}" data-decimals="${s.decimals || 0}">
          0${s.suffix}
        </strong>
      </div>
    `,
    )
    .join("")

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target
          const val = Number(el.dataset.value)
          const decimals = Number(el.dataset.decimals || 0)
          animateValue(el, val, decimals)
          obs.unobserve(el)
        }
      })
    },
    { threshold: 0.2 },
  )

  document.querySelectorAll("[data-stat]").forEach((el) => observer.observe(el))
}

function initSearch() {
  const input = document.getElementById("search-input")
  const dropdown = document.getElementById("search-dropdown")
  const clearBtn = document.getElementById("clear-search")
  const submit = document.getElementById("search-submit")

  const renderSuggestions = (value) => {
    const term = value.trim().toLowerCase()
    const matches = term
      ? trendingSearches.filter((t) => t.toLowerCase().includes(term))
      : []

    dropdown.innerHTML = ""

    if (term && matches.length) {
      dropdown.innerHTML = `
        <div class="search__group">
          <h5>Suggestions</h5>
          ${matches.map((m) => `<button class="search__suggestion" data-fill="${m}">${m}</button>`).join("")}
        </div>`
    } else {
      dropdown.innerHTML = `
        <div class="search__group">
          <h5>Recent Searches</h5>
          ${recentSearches.map((m) => `<button class="search__suggestion" data-fill="${m}">${m}</button>`).join("")}
        </div>
        <div class="search__group">
          <h5>Trending Now</h5>
          ${trendingSearches.slice(0, 3).map((m) => `<button class="search__suggestion" data-fill="${m}">${m}</button>`).join("")}
        </div>`
    }

    dropdown.querySelectorAll("[data-fill]").forEach((btn) =>
      btn.addEventListener("click", (e) => {
        input.value = e.currentTarget.dataset.fill
        dropdown.setAttribute("hidden", "true")
        applyFilters()
      }),
    )
  }

  input.addEventListener("input", (e) => {
    renderSuggestions(e.target.value)
    dropdown.toggleAttribute("hidden", !e.target.value && !dropdown.innerHTML.trim())
  })

  input.addEventListener("focus", () => {
    renderSuggestions(input.value)
    dropdown.removeAttribute("hidden")
  })

  input.addEventListener("blur", () => setTimeout(() => dropdown.setAttribute("hidden", "true"), 150))

  clearBtn.addEventListener("click", () => {
    input.value = ""
    applyFilters()
  })

  submit.addEventListener("click", (e) => {
    e.preventDefault()
    applyFilters()
  })
}

const filterState = {
  subjects: new Set(),
  types: new Set(),
  levels: new Set(),
  rating: 3,
}

let viewMode = "grid"
let notesShown = 6

function initFilters() {
  if (!document.querySelector('[data-section="subjects"]')) return
  const subjectsEl = document.querySelector('[data-section="subjects"]')
  const typesEl = document.querySelector('[data-section="types"]')
  const levelsEl = document.querySelector('[data-section="levels"]')
  const ratingRange = document.getElementById("rating-range")
  const ratingValue = document.getElementById("rating-value")

  subjectsEl.innerHTML = filterOptions.subjects
    .map(
      (o) => `
      <label>
        <span>${o.label}</span>
        <span>${o.count.toLocaleString()}</span>
        <input type="checkbox" data-filter="subjects" value="${o.id}">
      </label>`,
    )
    .join("")

  typesEl.innerHTML = filterOptions.types
    .map(
      (o) => `
      <label>
        <span>${o.label}</span>
        <span>${o.count.toLocaleString()}</span>
        <input type="checkbox" data-filter="types" value="${o.id}">
      </label>`,
    )
    .join("")

  levelsEl.innerHTML = filterOptions.levels
    .map(
      (o) => `
      <label>
        <span>${o.label}</span>
        <input type="checkbox" data-filter="levels" value="${o.id}">
      </label>`,
    )
    .join("")

  document.querySelectorAll("[data-filter]").forEach((input) =>
    input.addEventListener("change", (e) => {
      const target = e.target
      const set = filterState[target.dataset.filter]
      target.checked ? set.add(target.value) : set.delete(target.value)
      applyFilters()
    }),
  )

  ratingRange.addEventListener("input", (e) => {
    const val = Number(e.target.value)
    filterState.rating = val
    ratingValue.textContent = val
    applyFilters()
  })

  document.getElementById("filters-clear").addEventListener("click", () => {
    filterState.subjects.clear()
    filterState.types.clear()
    filterState.levels.clear()
    filterState.rating = 3
    ratingRange.value = 3
    ratingValue.textContent = "3"
    document.querySelectorAll("[data-filter]").forEach((c) => (c.checked = false))
    applyFilters()
  })

  document.querySelectorAll(".filters__toggle").forEach((btn) =>
    btn.addEventListener("click", () => {
      const section = document.querySelector(`[data-section="${btn.dataset.target}"]`)
      section.classList.toggle("hidden")
    }),
  )
}

function initNotes() {
  if (!document.getElementById("notes-grid")) return
  document.querySelectorAll(".view-toggle button").forEach((btn) =>
    btn.addEventListener("click", () => {
      document.querySelectorAll(".view-toggle button").forEach((b) => b.classList.remove("is-active"))
      btn.classList.add("is-active")
      viewMode = btn.dataset.view
      renderNotes()
    }),
  )

  document.getElementById("sort-select").addEventListener("change", renderNotes)
  document.getElementById("load-more").addEventListener("click", () => {
    notesShown = Math.min(notesShown + 3, notes.length)
    renderNotes()
  })

  applyFilters()
}

let filteredNotes = [...notes]

function applyFilters() {
  if (!document.getElementById("notes-grid")) return
  const query = document.getElementById("search-input").value.trim().toLowerCase()
  filteredNotes = notes.filter((n) => {
    const matchesQuery =
      !query ||
      n.title.toLowerCase().includes(query) ||
      n.subject.toLowerCase().includes(query) ||
      n.tags.some((t) => t.toLowerCase().includes(query))

    const matchesSubject = filterState.subjects.size === 0 || filterState.subjects.has(n.subject)
    const matchesType = filterState.types.size === 0 || filterState.types.has(n.type)
    const matchesLevel = filterState.levels.size === 0 || filterState.levels.has(n.level)
    const matchesRating = n.rating >= filterState.rating

    return matchesQuery && matchesSubject && matchesType && matchesLevel && matchesRating
  })

  notesShown = Math.min(notesShown, filteredNotes.length) || Math.min(6, filteredNotes.length)
  renderNotes()
}

function renderNotes() {
  if (!document.getElementById("notes-grid")) return
  const grid = document.getElementById("notes-grid")
  const sort = document.getElementById("sort-select").value
  const resultsCount = document.getElementById("results-count")

  const sorted = [...filteredNotes].sort((a, b) => {
    if (sort === "recent") return a.date.localeCompare(b.date)
    if (sort === "rating") return b.rating - a.rating
    if (sort === "downloads") return b.downloads - a.downloads
    return b.reviews - a.reviews
  })

  const display = sorted.slice(0, notesShown)
  resultsCount.textContent = `${filteredNotes.length.toLocaleString()} notes found`

  grid.classList.toggle("list-view", viewMode === "list")
  grid.innerHTML = display
    .map(
      (n) => `
      <article class="note ${viewMode === "list" ? "note--list" : ""}" data-id="${n.id}">
        <div class="note__image">
          <img src="${n.thumbnail}" alt="${n.title}">
          <span class="note__badge">${n.subject}</span>
        </div>
        <div class="note__content">
          <h3 class="note__title">${n.title}</h3>
          <div class="note__meta">
            <span>${n.author}</span>
            <span>⭐ ${n.rating.toFixed(2)} • ${formatDownloads(n.downloads)} downloads</span>
          </div>
          <div class="note__meta">
            <span>${n.fileType} • ${n.pages} pages</span>
            <span>${n.date}</span>
          </div>
          <div class="note__tags">
            ${n.tags.slice(0, 3).map((t) => `<span class="tag">${t}</span>`).join("")}
          </div>
        </div>
      </article>`,
    )
    .join("")

  grid.querySelectorAll(".note").forEach((card) =>
    card.addEventListener("click", () => {
      const note = notes.find((n) => n.id === card.dataset.id)
      openModal(note)
    }),
  )
}

function formatDownloads(val) {
  if (val >= 1000) return `${(val / 1000).toFixed(1)}K`
  return val.toString()
}

function initTestimonials() {
  if (!document.getElementById("testimonials-grid")) return
  const grid = document.getElementById("testimonials-grid")
  grid.innerHTML = testimonials
    .map(
      (t) => `
      <article class="testimonial">
        <div class="muted">"${t.content}"</div>
        <div>
          <strong>${t.name}</strong>
          <div class="muted">${t.role}</div>
        </div>
      </article>`,
    )
    .join("")

  const slide = document.getElementById("testimonial-slide")
  const dots = document.getElementById("testimonial-dots")
  let idx = 0

  const renderSlide = () => {
    const t = testimonials[idx]
    slide.innerHTML = `
      <p class="muted">"${t.content}"</p>
      <strong>${t.name}</strong>
      <div class="muted">${t.role}</div>
    `
    dots.innerHTML = testimonials
      .map((_, i) => `<button class="${i === idx ? "is-active" : ""}" data-dot="${i}"></button>`)
      .join("")
    dots.querySelectorAll("[data-dot]").forEach((d) =>
      d.addEventListener("click", () => {
        idx = Number(d.dataset.dot)
        renderSlide()
      }),
    )
  }

  renderSlide()

  document.querySelector('[data-action="prev"]').addEventListener("click", () => {
    idx = (idx - 1 + testimonials.length) % testimonials.length
    renderSlide()
  })
  document.querySelector('[data-action="next"]').addEventListener("click", () => {
    idx = (idx + 1) % testimonials.length
    renderSlide()
  })
}

function initCTA() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (e) => {
      const targetId = anchor.getAttribute("href")
      if (targetId.startsWith("#") && document.querySelector(targetId)) {
        e.preventDefault()
        document.querySelector(targetId).scrollIntoView({ behavior: "smooth" })
      }
    })
  })
}

let currentNote = null
let currentPage = 1

function openModal(note) {
  if (!note) return
  const modal = document.getElementById("note-modal")
  if (!modal) return
  currentNote = note
  currentPage = 1
  modal.classList.add("is-open")
  modal.setAttribute("aria-hidden", "false")

  document.getElementById("modal-image").src = note.thumbnail
  document.getElementById("modal-subject").textContent = note.subject
  document.getElementById("modal-title").textContent = note.title
  document.getElementById("modal-meta").innerHTML = `
    <div><strong>${note.rating.toFixed(2)}</strong><div class="muted">Rating</div></div>
    <div><strong>${formatDownloads(note.downloads)}</strong><div class="muted">Downloads</div></div>
    <div><strong>${note.pages}</strong><div class="muted">Pages</div></div>
    <div><strong>${note.date}</strong><div class="muted">Added</div></div>
  `
  document.getElementById("modal-tags").innerHTML = note.tags.map((t) => `<span class="tag">${t}</span>`).join("")
  document.getElementById("page-indicator").textContent = `${currentPage} / ${note.pages}`
  renderStars(0)
  renderComments()
}

function closeModal() {
  const modal = document.getElementById("note-modal")
  modal.classList.remove("is-open")
  modal.setAttribute("aria-hidden", "true")
}

function renderStars(active) {
  const wrap = document.getElementById("rating-stars")
  wrap.innerHTML = ""
  for (let i = 1; i <= 5; i++) {
    const btn = document.createElement("button")
    btn.className = `star ${i <= active ? "is-active" : ""}`
    btn.innerHTML = "★"
    btn.addEventListener("mouseenter", () => renderStars(i))
    btn.addEventListener("mouseleave", () => renderStars(active))
    btn.addEventListener("click", () => {
      renderStars(i)
      document.getElementById("rating-thanks").hidden = false
    })
    wrap.appendChild(btn)
  }
}

function renderComments() {
  if (!document.getElementById("comment-list")) return
  const list = document.getElementById("comment-list")
  list.innerHTML = comments
    .map(
      (c) => `
      <div class="comment">
        <strong>${c.author}</strong>
        <div class="muted small">${c.date}</div>
        <p>${c.content}</p>
      </div>
    `,
    )
    .join("")
}

function initModalControls() {
  const backdrop = document.querySelector(".modal__backdrop")
  const closeBtn = document.querySelector(".modal__close")
  if (!backdrop || !closeBtn) return
  backdrop.addEventListener("click", closeModal)
  closeBtn.addEventListener("click", closeModal)
  const prev = document.getElementById("page-prev")
  const next = document.getElementById("page-next")
  const submit = document.getElementById("comment-submit")
  const download = document.getElementById("download-btn")
  if (prev)
    prev.addEventListener("click", () => {
      if (!currentNote) return
      currentPage = Math.max(1, currentPage - 1)
      document.getElementById("page-indicator").textContent = `${currentPage} / ${currentNote.pages}`
    })
  if (next)
    next.addEventListener("click", () => {
      if (!currentNote) return
      currentPage = Math.min(currentNote.pages, currentPage + 1)
      document.getElementById("page-indicator").textContent = `${currentPage} / ${currentNote.pages}`
    })
  if (submit)
    submit.addEventListener("click", () => {
      const input = document.getElementById("comment-input")
      if (!input.value.trim()) return
      comments.unshift({
        author: "You",
        avatar: "",
        content: input.value.trim(),
        date: "Just now",
      })
      input.value = ""
      renderComments()
    })
  if (download) download.addEventListener("click", () => alert("Download started! (demo)"))
}

initModalControls()

function initAuth() {
  const uniDomains = ["edu", "ac.uk", "edu.au", "ac.in", "edu.cn", "uni.de"]
  const form = document.getElementById("signup-form")
  const stepBodies = form.querySelectorAll(".auth__body")
  const dots = form.querySelectorAll("[data-step-dot]")
  const errorBox = document.getElementById("signup-error")
  const nextBtn = document.getElementById("signup-next")
  const backBtn = document.getElementById("signup-back")
  const emailInput = document.getElementById("su-email")
  const suggestionBox = document.getElementById("email-suggestions")
  const passInput = document.getElementById("su-password")
  const confirmInput = document.getElementById("su-confirm")
  const strengthBars = document.querySelectorAll("#password-strength span")
  const reqs = document.querySelectorAll("#password-reqs li")
  let step = 1
  const saveUser = (user) => localStorage.setItem("studysync:user", JSON.stringify(user))
  const loadUser = () => {
    try {
      return JSON.parse(localStorage.getItem("studysync:user") || "null")
    } catch {
      return null
    }
  }

  const showStep = () => {
    stepBodies.forEach((el) => el.setAttribute("hidden", el.dataset.step !== String(step)))
    dots.forEach((d) => d.classList.toggle("is-active", d.dataset.stepDot === String(step)))
    backBtn.disabled = step === 1
    nextBtn.textContent = step === 1 ? "Continue" : "Create Account"
    errorBox.hidden = true
  }

  emailInput.addEventListener("input", () => {
    const val = emailInput.value
    const [, domain] = val.split("@")
    if (domain && !domain.includes(".")) {
      suggestionBox.innerHTML = uniDomains.map((d) => `<button data-suggestion="${val.split("@")[0]}@${d}">${val.split("@")[0]}@${d}</button>`).join("")
      suggestionBox.hidden = false
      suggestionBox.querySelectorAll("[data-suggestion]").forEach((btn) =>
        btn.addEventListener("click", () => {
          emailInput.value = btn.dataset.suggestion
          suggestionBox.hidden = true
        }),
      )
    } else {
      suggestionBox.hidden = true
    }
  })

  const validatePassword = () => {
    const val = passInput.value
    const checks = [
      { id: "len", ok: val.length >= 8 },
      { id: "upper", ok: /[A-Z]/.test(val) },
      { id: "lower", ok: /[a-z]/.test(val) },
      { id: "num", ok: /\d/.test(val) },
    ]
    const score = checks.filter((c) => c.ok).length
    strengthBars.forEach((bar, i) => {
      bar.style.background = i < score ? (score <= 2 ? "#ef4444" : score === 3 ? "#f59e0b" : "#22c55e") : "#e5e7eb"
    })
    reqs.forEach((li) => {
      const ok = checks.find((c) => li.dataset.req === c.id)?.ok
      li.classList.toggle("ok", ok)
    })
    return score === checks.length && passInput.value === confirmInput.value && passInput.value.length >= 8
  }

  passInput.addEventListener("input", validatePassword)
  confirmInput.addEventListener("input", validatePassword)

  backBtn.addEventListener("click", () => {
    if (step === 2) {
      step = 1
      showStep()
    }
  })

  form.addEventListener("submit", (e) => {
    e.preventDefault()
    errorBox.hidden = true
    if (step === 1) {
      const required = ["su-name", "su-email", "su-uni"]
      const missing = required.some((id) => !document.getElementById(id).value.trim())
      if (missing) {
        errorBox.textContent = "Please fill in all fields"
        errorBox.hidden = false
        return
      }
      step = 2
      showStep()
      return
    }

    const passwordsOk = validatePassword()
    if (!passwordsOk) {
      errorBox.textContent = "Please use a stronger password and confirm it."
      errorBox.hidden = false
      return
    }
    if (!document.getElementById("su-terms").checked) {
      errorBox.textContent = "Please agree to the terms."
      errorBox.hidden = false
      return
    }
    const userId = `user-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
    const user = {
      id: userId,
      name: document.getElementById("su-name").value.trim(),
      email: document.getElementById("su-email").value.trim(),
      university: document.getElementById("su-uni").value.trim(),
      password: passInput.value,
      createdAt: new Date().toISOString(),
      stats: { notesUploaded: 0, totalDownloads: 0, avgRating: 0 },
    }
    const allUsersJson = localStorage.getItem("studysync:users")
    const allUsers = allUsersJson ? JSON.parse(allUsersJson) : []
    const singleUserJson = localStorage.getItem("studysync:user")
    const singleUser = singleUserJson ? JSON.parse(singleUserJson) : null
    const emailExists = allUsers.some(u => u.email.toLowerCase() === user.email.toLowerCase()) || (singleUser && singleUser.email.toLowerCase() === user.email.toLowerCase())
    if (emailExists) {
      errorBox.textContent = "An account with this email already exists. Please sign in."
      errorBox.hidden = false
      return
    }
    nextBtn.textContent = "Creating..."
    setTimeout(() => {
      allUsers.push(user)
      localStorage.setItem("studysync:users", JSON.stringify(allUsers))
      saveUser({ name: user.name, email: user.email, university: user.university, password: user.password })
      localStorage.setItem("studysync:isAuthenticated", "true")
      localStorage.setItem("studysync:currentUser", JSON.stringify({ name: user.name, email: user.email, id: user.id }))
      nextBtn.textContent = "Created!"
      setTimeout(() => {
        window.location.href = "dashboard.html"
      }, 500)
    }, 600)
  })

  showStep()

  // Sign in
  const signinForm = document.getElementById("signin-form")
  const signinError = document.getElementById("signin-error")
  signinForm.addEventListener("submit", (e) => {
    e.preventDefault()
    signinError.hidden = true
    const email = document.getElementById("si-email").value.trim()
    const pass = document.getElementById("si-password").value.trim()
    const saved = loadUser()
    const remember = document.getElementById("si-remember")?.checked
    const submitBtn = e.target.querySelector("button[type=submit]")
    if (!email || pass.length < 6) {
      signinError.textContent = "Please enter a valid email and a password (6+ characters)."
      signinError.hidden = false
      return
    }
    submitBtn.textContent = "Signing in..."
    setTimeout(() => {
      const validSaved = saved && saved.email === email && saved.password === pass
      const users = JSON.parse(localStorage.getItem("studysync:users") || "[]")
      const approvedUser = users.find(u => u.email === email && u.password === pass && u.approved)
      const allowFallback = !saved && !users.length
      if (approvedUser || validSaved || allowFallback) {
        const current = approvedUser || saved
        if (remember) localStorage.setItem("studysync:session", email)
        if (current) localStorage.setItem("studysync:currentUser", JSON.stringify({ name: current.name, email: current.email, id: current.id }))
        localStorage.setItem("studysync:isAuthenticated", "true")
        signinError.hidden = true
        window.location.href = "dashboard.html"
      } else {
        const pending = JSON.parse(localStorage.getItem("studysync:pendingUsers") || "[]")
        const isPending = pending.some(u => u.email === email)
        signinError.textContent = isPending ? "Your account is awaiting approval by an existing user." : "Invalid credentials or not approved yet."
        signinError.hidden = false
      }
      submitBtn.textContent = "Sign In"
    }, 700)
  })
}

// Authentication utility functions
function checkAuth() {
  const isAuthenticated = localStorage.getItem("studysync:isAuthenticated") === "true"
  const currentUser = localStorage.getItem("studysync:currentUser")
  const session = localStorage.getItem("studysync:session")
  return isAuthenticated || !!currentUser || !!session
}

function getCurrentUser() {
  try {
    const userJson = localStorage.getItem("studysync:currentUser")
    if (userJson) return JSON.parse(userJson)
    
    // Fallback: check session email
    const session = localStorage.getItem("studysync:session")
    if (session) {
      const allUsersJson = localStorage.getItem("studysync:users")
      const allUsers = allUsersJson ? JSON.parse(allUsersJson) : []
      const singleUserJson = localStorage.getItem("studysync:user")
      const singleUser = singleUserJson ? JSON.parse(singleUserJson) : null
      
      const foundUser = singleUser?.email === session 
        ? singleUser 
        : allUsers.find(u => u.email === session)
      
      if (foundUser) {
        return {
          name: foundUser.name || foundUser.fullName,
          email: foundUser.email,
          id: foundUser.id
        }
      }
    }
    return null
  } catch {
    return null
  }
}

function logout() {
  localStorage.removeItem("studysync:isAuthenticated")
  localStorage.removeItem("studysync:currentUser")
  localStorage.removeItem("studysync:session")
  window.location.href = "sign-in.html"
}

// Initialize sidebar active state
function initSidebar() {
  const currentPage = window.location.pathname.split('/').pop() || 'dashboard.html'
  const pageMap = {
    'dashboard.html': 'dashboard',
    'browse.html': 'browse',
    'uploads.html': 'uploads',
    'leaderboard.html': 'leaderboard',
    'profile.html': 'profile',
    'approvals.html': 'approvals',
    'settings.html': 'settings',
    'admin.html': 'admin'
  }
  
  const pageKey = pageMap[currentPage] || 'dashboard'
  document.querySelectorAll('.sidebar__item').forEach(item => {
    item.classList.remove('active')
    if (item.dataset.page === pageKey) {
      item.classList.add('active')
    }
  })
}

// Update profile info in navbar
function updateProfileInfo() {
  try {
    const currentUser = getCurrentUser()
    if (currentUser) {
      const nameEl = document.getElementById("profile-name")
      const emailEl = document.getElementById("profile-email")
      const mainNameEl = document.getElementById("profile-display-name-main")
      if (nameEl) nameEl.textContent = currentUser.name || "User"
      if (emailEl) emailEl.textContent = currentUser.email || "user@example.com"
      if (mainNameEl) mainNameEl.textContent = currentUser.name || mainNameEl.textContent
    }
  } catch (e) {
    console.log("Could not load user info:", e)
  }
}

function initProfile() {
  const uploadsTab = document.getElementById('uploads-tab');
  const savedTab = document.getElementById('saved-tab');
  const profileTabs = document.querySelectorAll('.profile-tab');
  
  if (!uploadsTab || !savedTab) return;

  // Tab Switching Logic
  profileTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      profileTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      
      uploadsTab.classList.add('hidden');
      savedTab.classList.add('hidden');
      
      const targetId = tab.textContent.includes('Uploads') ? 'uploads-tab' : 'saved-tab';
      const target = document.getElementById(targetId);
      if(target) target.classList.remove('hidden');
    });
  });

  const demoName = "Alex Rivera"; 
  
  const myUploads = notes.filter(n => n.author.includes(demoName));
  const savedNotes = notes.filter(n => !n.author.includes(demoName)).slice(0, 2);

  const renderCard = (n) => `
      <article class="note" data-id="${n.id}">
        <div class="note__image">
          <img src="${n.thumbnail}" alt="${n.title}">
          <span class="note__badge">${n.subject}</span>
        </div>
        <div class="note__content">
          <h3 class="note__title">${n.title}</h3>
          <div class="note__meta">
            <span>${n.author.split(' · ')[0]}</span>
            <span>⭐ ${n.rating.toFixed(2)} • ${formatDownloads(n.downloads)} downloads</span>
          </div>
          <div class="note__meta">
            <span>${n.fileType} • ${n.pages} pages</span>
            <span>${n.date}</span>
          </div>
          <div class="note__tags">
            ${n.tags.slice(0, 3).map(t => `<span class="tag">${t}</span>`).join("")}
          </div>
        </div>
      </article>
  `;

  if (myUploads.length > 0) {
      uploadsTab.innerHTML = myUploads.map(renderCard).join('');
  } else {
      uploadsTab.innerHTML = '<div class="empty-state"><p class="muted">No uploads yet.</p></div>';
  }
  
  if (savedNotes.length > 0) {
      savedTab.innerHTML = savedNotes.map(renderCard).join('');
  } else {
      savedTab.innerHTML = '<div class="empty-state"><p class="muted">No saved notes.</p></div>';
  }

  [uploadsTab, savedTab].forEach(container => {
    container.querySelectorAll('.note').forEach(card => {
      card.addEventListener('click', () => {
        const note = notes.find(n => n.id === card.dataset.id);
        if(typeof openModal === 'function') openModal(note);
      });
    });
  });
}

// LEADERBOARD PAGE FUNCTIONS

// Format numbers for leaderboard
function formatNumber(num) {
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'K';
  }
  return num.toString();
}

// Render leaderboard table
function renderLeaderboard(data, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = data.map(user => `
    <tr class="leaderboard-row ${user.rank === currentLeaderboardUser.rank ? 'current-user' : ''}">
      <td>
        <div class="rank-badge rank-${user.rank}">${user.rank}</div>
      </td>
      <td>
        <div class="user-info">
          <img src="${user.avatar}" alt="${user.name}" class="avatar">
          <div>
            <strong>${user.name}</strong>
            <div class="muted">${user.university}</div>
          </div>
        </div>
      </td>
      <td>
        <div class="score-value">${formatNumber(user.score)}</div>
      </td>
      <td>
        <div class="change-indicator ${user.change}">
          ${user.change === 'up' ? '↑' : '↓'} ${user.changeAmount}
        </div>
      </td>
      <td>
        <div class="subjects">
          ${user.subjects.map(subject => `<span class="subject-tag">${subject}</span>`).join('')}
        </div>
      </td>
      <td>
        <div class="stats">
          <div>${user.notesUploaded} notes</div>
          <div class="muted">⭐ ${user.avgRating}</div>
        </div>
      </td>
    </tr>
  `).join('');
}

// Render category leaderboards
function renderCategoryLeaderboards() {
  const container = document.getElementById('category-leaderboards');
  if (!container) return;

  container.innerHTML = Object.entries(categoryData).map(([category, users]) => `
    <div class="category-card">
      <h3>${category.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}</h3>
      <div class="category-leaderboard">
        ${users.map(user => `
          <div class="category-user ${user.name === currentLeaderboardUser.name ? 'current-user' : ''}">
            <div class="category-rank">${user.rank}</div>
            <div class="category-user-info">
              <strong>${user.name}</strong>
              <div class="muted">${user.university}</div>
            </div>
            <div class="category-score">${formatNumber(user.score)}</div>
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');
}

// Render achievements
function renderAchievements() {
  const container = document.getElementById('achievements-container');
  if (!container) return;

  container.innerHTML = achievementData.map(achievement => `
    <div class="achievement-card">
      <div class="achievement-icon">${achievement.icon}</div>
      <div class="achievement-content">
        <h4>${achievement.title}</h4>
        <p class="muted">${achievement.description}</p>
        <div class="achievement-meta">
          <span>🏅 ${achievement.earned}</span>
        </div>
      </div>
    </div>
  `).join('');
}

// Render user stats
function renderUserStats() {
  const container = document.getElementById('user-stats');
  if (!container) return;

  container.innerHTML = `
    <div class="user-stats-card">
      <div class="user-header">
        <img src="${currentLeaderboardUser.avatar}" alt="${currentLeaderboardUser.name}" class="user-avatar">
        <div>
          <h3>${currentLeaderboardUser.name}</h3>
          <div class="muted">${currentLeaderboardUser.university}</div>
        </div>
      </div>
      
      <div class="user-rank-info">
        <div class="rank-badge rank-${currentLeaderboardUser.rank} large">${currentLeaderboardUser.rank}</div>
        <div>
          <div class="score-value">${formatNumber(currentLeaderboardUser.score)} points</div>
          <div class="change-indicator ${currentLeaderboardUser.change}">
            ${currentLeaderboardUser.change === 'up' ? '↑' : '↓'} ${currentLeaderboardUser.changeAmount} this week
          </div>
        </div>
      </div>
      
      <div class="user-details">
        <div class="detail-item">
          <span class="detail-label">Notes Uploaded</span>
          <span class="detail-value">${currentLeaderboardUser.notesUploaded}</span>
        </div>
        <div class="detail-item">
          <span class="detail-label">Average Rating</span>
          <span class="detail-value">⭐ ${currentLeaderboardUser.avgRating}</span>
        </div>
        <div class="detail-item">
          <span class="detail-label">Weekly Rank</span>
          <span class="detail-value">#${currentLeaderboardUser.weeklyRank}</span>
        </div>
        <div class="detail-item">
          <span class="detail-label">Monthly Rank</span>
          <span class="detail-value">#${currentLeaderboardUser.monthlyRank}</span>
        </div>
      </div>
      
      <div class="user-subjects">
        <h4>Top Subjects</h4>
        <div class="subject-tags">
          ${currentLeaderboardUser.subjects.map(subject => `<span class="subject-tag">${subject}</span>`).join('')}
        </div>
      </div>
    </div>
  `;
}

// Tab switching functionality
function initLeaderboardTabs() {
  const tabs = document.querySelectorAll('.tab-button');
  const tabContents = document.querySelectorAll('.tab-content');
  
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      // Remove active class from all tabs
      tabs.forEach(t => t.classList.remove('active'));
      tabContents.forEach(content => content.classList.add('hidden'));
      
      // Add active class to clicked tab
      tab.classList.add('active');
      
      // Show corresponding content
      const tabId = tab.dataset.tab;
      const content = document.getElementById(`${tabId}-tab`);
      if (content) {
        content.classList.remove('hidden');
      }
      
      // Update leaderboard based on tab
      if (tabId === 'weekly') {
        renderLeaderboard(leaderboardData.weekly, 'weekly-leaderboard');
      } else if (tabId === 'monthly') {
        renderLeaderboard(leaderboardData.monthly, 'monthly-leaderboard');
      } else if (tabId === 'alltime') {
        renderLeaderboard(leaderboardData.allTime, 'alltime-leaderboard');
      }
    });
  });
}

// Search functionality for leaderboard
function initLeaderboardSearch() {
  const searchInput = document.getElementById('leaderboard-search');
  const searchButton = document.getElementById('search-button');
  
  if (!searchInput || !searchButton) return;
  
  function performSearch() {
    const searchTerm = searchInput.value.toLowerCase().trim();
    
    // Search in all leaderboards
    const allUsers = [
      ...leaderboardData.weekly,
      ...leaderboardData.monthly,
      ...leaderboardData.allTime
    ];
    
    const results = allUsers.filter(user => 
      user.name.toLowerCase().includes(searchTerm) ||
      user.university.toLowerCase().includes(searchTerm) ||
      user.subjects.some(subject => subject.toLowerCase().includes(searchTerm))
    );
    
    // Display search results
    displaySearchResults(results, searchTerm);
  }
  
  function displaySearchResults(results, searchTerm) {
    const resultsContainer = document.getElementById('search-results');
    if (!resultsContainer) return;
    
    if (searchTerm === '') {
      resultsContainer.classList.add('hidden');
      return;
    }
    
    if (results.length === 0) {
      resultsContainer.innerHTML = `
        <div class="empty-state">
          <p class="muted">No results found for "${searchTerm}"</p>
        </div>
      `;
      resultsContainer.classList.remove('hidden');
      return;
    }
    
    resultsContainer.innerHTML = `
      <h3>Search Results</h3>
      <div class="search-results-list">
        ${results.slice(0, 5).map(user => `
          <div class="search-result-item">
            <img src="${user.avatar}" alt="${user.name}" class="avatar">
            <div>
              <strong>${user.name}</strong>
              <div class="muted">${user.university}</div>
              <div class="result-subjects">
                ${user.subjects.map(subject => `<span class="subject-tag small">${subject}</span>`).join('')}
              </div>
            </div>
            <div class="result-rank">
              <span class="rank-badge rank-${user.rank}">${user.rank}</span>
              <div class="muted">${formatNumber(user.score)} pts</div>
            </div>
          </div>
        `).join('')}
      </div>
    `;
    
    resultsContainer.classList.remove('hidden');
  }
  
  searchButton.addEventListener('click', performSearch);
  searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      performSearch();
    }
  });
}

// Initialize leaderboard page
function initLeaderboardPage() {
  // Initialize tabs
  initLeaderboardTabs();
  
  // Initialize search
  initLeaderboardSearch();
  
  // Render initial content
  renderLeaderboard(leaderboardData.weekly, 'weekly-leaderboard');
  renderCategoryLeaderboards();
  renderAchievements();
  renderUserStats();
}

// Dashboard functions
document.addEventListener('DOMContentLoaded', function() {
  const STAT_DATA = [
    { title: "Notes Uploaded", value: 24, indicator: "+3 this week", trend: 'up', color: 'var(--primary)', icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" /></svg>' },
    { title: "Downloads Received", value: 1248, indicator: "+158 this week", trend: 'up', color: 'var(--secondary)', icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>' },
    { title: "Average Rating", value: 4.8, indicator: "+0.2 this month", trend: 'up', color: '#22c55e', isRating: true, icon: '⭐' },
    { title: "Credits Earned", value: 3500, indicator: "+500 this week", trend: 'up', color: '#8b5cf6', icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 15.777l-4.135 2.179A1 1 0 015 17.072V5a2 2 0 012-2h10a2 2 0 012 2v12.072a1 1 0 01-1.865.884l-4.135-2.179z" /></svg>' }
  ]

  const SUBJECT_DATA = [
    { subject: "Computer Science", value: 8, color: 'var(--primary)' },
    { subject: "Mathematics", value: 6, color: 'var(--secondary)' },
    { subject: "Physics", value: 5, color: 'var(--accent)' },
    { subject: "Chemistry", value: 3, color: '#F97316' },
    { subject: "Biology", value: 2, color: '#EAB308' },
  ]

  const WEEKLY_DOWNLOADS = [
    { day: 'Mon', downloads: 45 },
    { day: 'Tue', downloads: 62 },
    { day: 'Wed', downloads: 38 },
    { day: 'Thu', downloads: 85 },
    { day: 'Fri', downloads: 72 },
    { day: 'Sat', downloads: 28 },
    { day: 'Sun', downloads: 15 },
  ]

  const ACTIVITY_LOG = [
    { type: 'download', user: 'Alex Kim', note: 'Advanced Calculus - Chapter 5', time: '5 minutes ago', isSystem: false },
    { type: 'rating', user: 'Emma Wilson', note: 'Organic Chemistry Summary', time: '32 minutes ago', isSystem: false },
    { type: 'approval', user: 'System', note: 'Data Structures Notes', time: '1 hour ago', isSystem: true },
    { type: 'comment', user: 'James Chen', note: 'Physics Lab Report', time: '2 hours ago', isSystem: false },
    { type: 'review', user: 'System', note: 'Linear Algebra Final Review', time: '3 hours ago', isSystem: true },
  ]

  function formatValue(num, isRating) {
    if (isRating) return num.toFixed(2)
    if (num >= 1000) return (num / 1000).toFixed(1) + 'K'
    return num.toString()
  }

  function renderStatCards() {
    const container = document.getElementById('stat-cards-container')
    if (!container) return
    container.innerHTML = STAT_DATA.map(stat => `
      <div class="stat-card">
        <div style="display: flex; justify-content: space-between; align-items: flex-start;">
          <div>
            <div class="stat-value" style="color:${stat.color}">${formatValue(stat.value, stat.isRating)}</div>
            <div class="muted" style="font-size: 14px;">${stat.title}</div>
          </div>
          <div class="stat-indicator ${stat.trend}" style="color: ${stat.trend === 'up' ? 'var(--accent)' : 'var(--muted)'};">
            ${stat.indicator}
          </div>
        </div>
        <div style="width: 36px; height: 36px; border-radius: 10px; display: grid; place-items: center; background: ${stat.color}1A; color: ${stat.color}; margin-top: 10px;">
          ${stat.icon.includes('<svg') ? stat.icon : stat.icon}
        </div>
      </div>
    `).join('')
  }

  function renderActivityChart() {
    const container = document.getElementById('activity-chart-container')
    if (!container) return
    const chartData = [50, 80, 400, 350, 550, 480]
    const maxVal = 600
    const yLabels = [0, 150, 300, 450, 600]
    const xLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']

    const points = chartData.map((d, i) => {
      const x = i * (100 / (chartData.length - 1))
      const y = 100 - (d / maxVal) * 100
      return `${x},${y}`
    }).join(' ')

    const areaPoints = `0,100 ${points} 100,100`

    container.innerHTML = `
      <div class="chart-header">
        <h3>Activity Overview</h3>
        <div class="chart-filters">
          <button>1M</button>
          <button>3M</button>
          <button class="active" style="background: var(--primary); color: white;">6M</button>
          <button>1Y</button>
        </div>
      </div>
      <p class="muted" style="margin: 0 0 20px 0; font-size: 14px;">Your uploads and downloads over time</p>
      <div style="position: relative; flex-grow: 1; height: 200px; margin-left: 30px; padding-bottom: 20px;">
        <div style="position: absolute; inset: 0; right: 0; display: grid; grid-template-rows: 1fr 1fr 1fr 1fr; content-visibility: auto; opacity: 0.5; font-size: 12px; color: var(--muted); padding-right: 5px;">
          ${yLabels.slice(1).reverse().map(label => `<div style="border-top: 1px dashed var(--border); display: flex; align-items: center; justify-content: flex-end; padding-top: 2px;">${label}</div>`).join('')}
          <div style="display: flex; align-items: flex-end; justify-content: flex-end; padding-top: 2px;">${yLabels[0]}</div>
        </div>
        <div style="position: absolute; inset: 0; right: 0;">
          <svg viewBox="0 0 100 100" preserveAspectRatio="none" style="width: 100%; height: 100%;">
            <defs>
              <linearGradient id="gradientArea" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style="stop-color: var(--primary); stop-opacity: 0.2" />
                <stop offset="100%" style="stop-color: var(--primary); stop-opacity: 0" />
              </linearGradient>
            </defs>
            <polyline fill="url(#gradientArea)" stroke="none" points="${areaPoints}" />
            <polyline fill="none" stroke="var(--primary)" stroke-width="2" points="${points}" />
          </svg>
        </div>
        <div style="position: absolute; bottom: 0; left: 0; right: 0; display: flex; justify-content: space-between; font-size: 12px; color: var(--muted); text-align: center;">
          ${xLabels.map(month => `<span>${month}</span>`).join('')}
        </div>
      </div>
    `
  }

  function renderSubjectDistribution() {
    const container = document.getElementById('subject-distribution-container')
    if (!container) return
    const total = SUBJECT_DATA.reduce((sum, item) => sum + item.value, 0)
    container.innerHTML = `
      <h3 style="font-size: 18px; font-weight: 600; margin: 0;">Notes by Subject</h3>
      <p class="muted" style="margin: 0 0 20px 0; font-size: 14px;">Distribution of your uploaded notes</p>
      <div style="display: flex; gap: 20px; align-items: center; flex-wrap: wrap;">
        <div style="width: 120px; height: 120px; border-radius: 50%; background: conic-gradient(
          ${SUBJECT_DATA.map((item, i) => `${item.color} 0% ${SUBJECT_DATA.slice(0, i + 1).reduce((s, c) => s + (c.value / total) * 360, 0)}deg`).join(', ')}
        ); flex-shrink: 0; position: relative; display: grid; place-items: center; margin: 10px 0;">
          <div style="width: 80px; height: 80px; border-radius: 50%; background: var(--card);"></div>
          <span style="position: absolute; font-family: var(--font-heading); font-weight: 700; font-size: 20px;">${total}</span>
        </div>
        <div style="flex-grow: 1;">
          ${SUBJECT_DATA.map(item => `
            <div style="margin-bottom: 12px;">
              <div style="display: flex; justify-content: space-between; font-size: 14px;">
                <span style="display: flex; align-items: center; gap: 8px; font-weight: 500;">
                  <div style="width: 10px; height: 10px; border-radius: 50%; background: ${item.color};"></div>
                  ${item.subject}
                </span>
                <span style="font-weight: 600;">${item.value} (${((item.value / total) * 100).toFixed(0)}%)</span>
              </div>
              <div style="width: 100%; height: 4px; background: var(--border); border-radius: 2px; margin-top: 4px;">
                <div style="width: ${((item.value / total) * 100).toFixed(0)}%; height: 100%; background: ${item.color}; border-radius: 2px;"></div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `
  }

  function renderWeeklyDownloads() {
    const container = document.getElementById('weekly-downloads-container')
    if (!container) return
    const maxVal = 100
    container.innerHTML = `
      <h3 style="font-size: 18px; font-weight: 600; margin: 0;">Weekly Download Activity</h3>
      <p class="muted" style="margin: 0 0 20px 0; font-size: 14px;">Number of times your notes were downloaded this week</p>
      <div style="display: flex; justify-content: space-between; align-items: flex-end; height: 160px; position: relative;">
        <div style="position: absolute; inset: 0; display: grid; grid-template-rows: 1fr 1fr 1fr 1fr; opacity: 0.5; font-size: 10px; color: var(--muted); padding-right: 5px; padding-bottom: 20px;">
          <div style="border-top: 1px dashed var(--border); display: flex; align-items: center; justify-content: flex-end; padding-top: 2px;">100</div>
          <div style="border-top: 1px dashed var(--border); display: flex; align-items: center; justify-content: flex-end; padding-top: 2px;">75</div>
          <div style="border-top: 1px dashed var(--border); display: flex; align-items: center; justify-content: flex-end; padding-top: 2px;">50</div>
          <div style="border-top: 1px dashed var(--border); display: flex; align-items: center; justify-content: flex-end; padding-top: 2px;">25</div>
          <div style="display: flex; align-items: flex-end; justify-content: flex-end; padding-top: 2px;">0</div>
        </div>
        ${WEEKLY_DOWNLOADS.map(item => `
          <div style="display: flex; flex-direction: column; align-items: center; flex-grow: 1; margin: 0 4px; z-index: 1;">
            <div style="height: ${((item.downloads / maxVal) * 100).toFixed(0)}%; width: 60%; background: var(--accent); border-radius: 4px 4px 0 0; transition: height 0.5s;" title="${item.downloads} downloads"></div>
            <span style="font-size: 12px; color: var(--muted); margin-top: 8px;">${item.day}</span>
          </div>
        `).join('')}
      </div>
    `
  }

  function renderRecentActivity() {
    const container = document.getElementById('recent-activity-container')
    if (!container) return
    container.innerHTML = `
      <h3 style="font-size: 18px; font-weight: 600; margin: 0;">Recent Activity</h3>
      <p class="muted" style="margin: 0 0 15px 0; font-size: 14px;">What's happening with your notes</p>
      <ul class="activity-list">
        ${ACTIVITY_LOG.map(activity => `
          <li class="activity-item">
            <div class="activity-icon-wrap ${activity.type}">
              ${activity.type === 'download' ? '⬇️' : activity.type === 'rating' ? '⭐' : activity.type === 'approval' ? '✅' : activity.type === 'comment' ? '💬' : '🕒'}
            </div>
            <div style="flex-grow: 1;">
              <div class="activity-item-title">${activity.type === 'download' ? 'Download:' : activity.type === 'rating' ? 'Rating:' : activity.type === 'comment' ? 'Comment on:' : activity.type === 'approval' ? 'Approved:' : 'Reviewing:'}
                <a href="#" style="color: var(--primary);">${activity.note}</a>
              </div>
              <div class="activity-item-meta">${activity.user} · ${activity.time}</div>
            </div>
            ${activity.isSystem ? '<div class="activity-item-badge system">System</div>' : ''}
          </li>
        `).join('')}
      </ul>
    `
  }

  function renderQuickActions() {
    const container = document.getElementById('quick-actions-container')
    if (!container) return
    container.innerHTML = `
      <h3 style="font-size: 18px; font-weight: 600; margin: 0;">Quick Actions</h3>
      <p class="muted" style="margin: 0 0 15px 0; font-size: 14px;">Common tasks at your fingertips</p>
      <div class="quick-actions-list">
        <a href="uploads.html">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" /></svg>
          <span>Upload New Notes</span>
          <span style="margin-left: auto; color: var(--muted);">></span>
        </a>
        <a href="browse.html">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13M3.75 6.253h16.5M12 17.253L12 17.253M12 13.253V13.253" /></svg>
          <span>Browse Notes</span>
          <span style="margin-left: auto; color: var(--muted);">></span>
        </a>
        <a href="leaderboard.html">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>
          <span>View Leaderboard</span>
          <span style="margin-left: auto; color: var(--muted);">></span>
        </a>
      </div>
    `
  }

  function renderProgressTracker() {
    const container = document.getElementById('progress-tracker-container')
    if (!container) return
    const currentXp = 3500
    const targetXp = 5000
    const level = 12
    const credits = 42
    const progressPercent = (currentXp / targetXp) * 100
    const xpNeeded = targetXp - currentXp
    container.innerHTML = `
      <h3 style="font-size: 18px; font-weight: 600; margin: 0;">Your Progress</h3>
      <p class="muted" style="margin: 0 0 15px 0; font-size: 14px;"></p>
      <div style="margin-bottom: 20px;">
        <div style="display: flex; justify-content: space-between; font-weight: 600; font-size: 14px; margin-bottom: 5px;">
          <span>Level ${level}</span>
          <span style="color: var(--primary);">${formatValue(currentXp, false)} / ${formatValue(targetXp, false)} XP</span>
        </div>
        <div class="progress-bar">
          <div class="progress-fill" style="width: ${progressPercent}%;"></div>
        </div>
        <p style="font-size: 12px; color: var(--muted); margin-top: 5px;">${formatValue(xpNeeded, false)} XP to reach Level ${level + 1}</p>
      </div>
      <div class="credits-box">
        <span style="font-size: 14px; font-weight: 600; color: var(--primary);">Download Credits</span>
        <span style="font-family: var(--font-heading); font-size: 32px; font-weight: 700; color: var(--primary); display: block;">${credits}</span>
        <p style="font-size: 12px; color: var(--primary); opacity: 0.8; margin: 0;">Earn more by uploading quality notes</p>
      </div>
      <div style="margin-top: 20px;">
        <h4 style="font-size: 14px; font-weight: 600; margin: 0 0 10px 0;">Recent Badges</h4>
        <div style="display: flex; gap: 10px; align-items: center;">
          <div style="width: 30px; height: 30px; border-radius: 8px; background: rgba(168, 85, 247, 0.1); display: grid; place-items: center; color: var(--secondary);">🏆</div>
          <div style="width: 30px; height: 30px; border-radius: 8px; background: rgba(168, 85, 247, 0.1); display: grid; place-items: center; color: var(--secondary);">🏆</div>
          <div style="width: 30px; height: 30px; border-radius: 8px; background: rgba(168, 85, 247, 0.1); display: grid; place-items: center; color: var(--secondary);">🏆</div>
          <span style="font-size: 14px; color: var(--muted);">+5</span>
        </div>
      </div>
    `
  }

  // Only run dashboard functions if we're on the dashboard page
  if (document.getElementById('stat-cards-container') && !document.getElementById('leaderboard-search')) {
    renderStatCards()
    renderActivityChart()
    renderSubjectDistribution()
    renderWeeklyDownloads()
    renderRecentActivity()
    renderQuickActions()
    renderProgressTracker()
  }
})