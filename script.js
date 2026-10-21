// ============================================================
// RUSTHY JADE IMPON — PORTFOLIO · SCRIPT.JS
// ============================================================

// ---------- Update Date & Time ----------
function updateDateTime() {
  const now = new Date();
  const options = {
    weekday: 'short',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true
  };
  const formatted = now.toLocaleString('en-US', options);
  const el = document.getElementById('dateTime');
  if (el) el.textContent = formatted;
}
updateDateTime();
setInterval(updateDateTime, 1000);

// ---------- Theme Toggle ----------
const themeToggle = document.getElementById('themeToggle');
if (themeToggle) {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
    themeToggle.textContent = '☀';
  }
  themeToggle.addEventListener('click', () => {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    if (isDark) {
      document.documentElement.removeAttribute('data-theme');
      localStorage.setItem('theme', 'light');
      themeToggle.textContent = '◐';
    } else {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
      themeToggle.textContent = '☀';
    }
  });
}

// ---------- Mobile Menu ----------
const burger = document.getElementById('hamburger');
const menu = document.getElementById('menu');
if (burger && menu) {
  burger.addEventListener('click', () => {
    burger.classList.toggle('open');
    menu.classList.toggle('open');
    menu.setAttribute('aria-hidden', menu.classList.contains('open') ? 'false' : 'true');
    burger.setAttribute('aria-expanded', menu.classList.contains('open') ? 'true' : 'false');
  });
  // Close menu when clicking a link
  menu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      burger.classList.remove('open');
      menu.classList.remove('open');
      menu.setAttribute('aria-hidden', 'true');
      burger.setAttribute('aria-expanded', 'false');
    });
  });
}

// ---------- Skill Modal Dialog ----------
const skillItems = document.querySelectorAll('.skill-item');
const skillDialog = document.getElementById('skillDialog');
const skillModalTag = document.getElementById('skillModalTag');
const skillModalTitle = document.getElementById('skillModalTitle');
const skillModalDesc = document.getElementById('skillModalDesc');
const skillModalClose = document.getElementById('skillModalClose');

if (skillItems.length && skillDialog) {
  skillItems.forEach(item => {
    item.addEventListener('click', () => {
      const title = item.getAttribute('data-title') || 'Skill';
      const desc = item.getAttribute('data-desc') || 'Details not available.';
      const type = item.getAttribute('data-type') || 'SKILL';
      skillModalTag.textContent = type + ' SKILL';
      skillModalTitle.textContent = title;
      skillModalDesc.textContent = desc;
      skillDialog.showModal();
    });
  });
  if (skillModalClose) {
    skillModalClose.addEventListener('click', () => {
      skillDialog.close();
    });
  }
  skillDialog.addEventListener('click', (e) => {
    if (e.target === skillDialog) skillDialog.close();
  });
}

// ---------- Back to Top Button ----------
const backToTop = document.getElementById('backToTop');
if (backToTop) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      backToTop.classList.add('show');
    } else {
      backToTop.classList.remove('show');
    }
  });
  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// ---------- Active Navigation Link Highlight ----------
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.topbar__nav .navlink');

function setActiveLink() {
  let currentId = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;
    if (window.scrollY >= sectionTop) {
      currentId = section.getAttribute('id');
    }
  });
  navLinks.forEach(link => {
    link.classList.remove('is-active');
    if (link.getAttribute('href') === `#${currentId}`) {
      link.classList.add('is-active');
    }
  });
}
window.addEventListener('scroll', setActiveLink);
setActiveLink();

// ---------- Project Info Buttons (placeholder functionality) ----------
const projectBtns = document.querySelectorAll('.project-info-btn');
projectBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const projectName = btn.getAttribute('data-project');
    alert(`Project: ${projectName}\n\nThis section will be updated with project details soon.`);
  });
});