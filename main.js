// ============================================
// KONFIGURASI — GANTI DI SINI SAJA
// ============================================
const CONFIG = {
  // Nomor WA: pakai kode negara 62, tanpa + dan tanpa strip/spasi
  // Contoh: 0812-3456-7890 → 6281234567890
  waNumber: "6288217117295",

  // Username Instagram (tanpa @)
  instagram: "rakitriset",

  // Email
  email: "rakitriset@gmail.com",

  // Pesan default saat klik WA
  waMessage: "Halo RakitRiset! Saya ingin konsultasi projek.",
};

// ============================================
// AUTO-INJECT LINKS KE SEMUA ELEMEN WA/IG/EMAIL
// ============================================
function applyConfig() {
  const waURL = `https://wa.me/${CONFIG.waNumber}?text=${encodeURIComponent(CONFIG.waMessage)}`;
  const igURL = `https://www.instagram.com/rakitriset_?igsh=NjJoc3Q3eG80OXR1&utm_source=qr`;
  const mailURL = `mailto:${CONFIG.email}`;

  // WA links
  document.querySelectorAll("[data-wa]").forEach((el) => {
    el.href = waURL;
    if (el.dataset.wa === "number") el.textContent = `+${CONFIG.waNumber}`;
  });

  // IG links
  document.querySelectorAll("[data-ig]").forEach((el) => {
    el.href = igURL;
    if (el.dataset.ig === "handle") el.textContent = `@${CONFIG.instagram}`;
  });

  // Email links
  document.querySelectorAll("[data-email]").forEach((el) => {
    el.href = mailURL;
    if (el.dataset.email === "address") el.textContent = CONFIG.email;
  });
}

// ============================================
// SCROLL REVEAL ANIMATION
// ============================================
function initScrollReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  document.querySelectorAll(".fade-up").forEach((el) => observer.observe(el));
}

// ============================================
// SMOOTH MOBILE MENU TOGGLE (jika diperlukan)
// ============================================
function initNav() {
  const nav = document.querySelector("nav");
  let lastScroll = 0;

  window.addEventListener("scroll", () => {
    const current = window.scrollY;
    if (current > 80) {
      nav.style.padding = "12px 48px";
    } else {
      nav.style.padding = "18px 48px";
    }
    lastScroll = current;
  });
}

// ============================================
// INIT
// ============================================
document.addEventListener("DOMContentLoaded", () => {
  applyConfig();
  initScrollReveal();
  initNav();
});