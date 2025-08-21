// Matrix Canvas Animation
const canvas = document.getElementById("matrixCanvas");
const ctx = canvas.getContext("2d");

// خلي حجم الكانفاس يغطي الشاشة كلها
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

const binary = "01";
const fontSize = 16;
const columns = canvas.width / fontSize;

// نبدأ بكل الأعمدة من أول الصف
const drops = Array(Math.floor(columns)).fill(1);

function drawMatrix() {
  ctx.fillStyle = "rgba(15, 23, 42, 0.05)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#00ffcc";
  ctx.font = fontSize + "px monospace";

  for (let i = 0; i < drops.length; i++) {
    const text = binary[Math.floor(Math.random() * binary.length)];
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);

    if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
      drops[i] = 0;
    }

    drops[i]++;
  }
}

setInterval(drawMatrix, 60);

// Smooth scroll for nav links
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll('nav ul li a[href^="#"]').forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
});

// Read More functionality
const readMoreBtn = document.getElementById("readMoreBtn");
const closeBtn = document.getElementById("closeBtn");
const aboutText = document.getElementById("aboutText");
const aboutContent = document.querySelector(".about-content");

if (readMoreBtn && closeBtn && aboutText && aboutContent) {
  readMoreBtn.onclick = function () {
    aboutText.classList.add("expanded");
    aboutContent.classList.add("hide-img");
    closeBtn.style.display = "flex";
    readMoreBtn.style.display = "none";
  };

  closeBtn.onclick = function () {
    aboutText.classList.remove("expanded");
    aboutContent.classList.remove("hide-img");
    closeBtn.style.display = "none";
    readMoreBtn.style.display = "block";
  };
}

// Modal Elements
const imgModal = document.getElementById("imgModal");
const imgModalImg = document.getElementById("imgModalImg");
const imgModalText = document.getElementById("imgModalText");
const imgModalClose = document.getElementById("imgModalClose");
const imgModalImages = document.getElementById("imgModalImages");
const imgModalPrev = document.getElementById("imgModalPrev");
const imgModalNext = document.getElementById("imgModalNext");

const faceImages = [
  "assets/face/face1.jpg",
  "assets/face/face2.jpg",
  "assets/face/face3.jpg",
  "assets/face/face4.jpg",
  "assets/face/face5.jpg",
  "assets/face/face6.jpg",
];
let currentFaceIndex = 0;

const moveImages = [
  "assets/moive/moive1.jpg",
  "assets/moive/moive2.jpg",
  "assets/moive/moive3.jpg",
  "assets/moive/moive4.jpg",
  "assets/moive/moive5.jpg",
  "assets/moive/moive6.jpg",
];
let currentMoveIndex = 0;

const garageImages = [
  "assets/garag/garag1.jpg",
  "assets/garag/garag2.jpg",
  "assets/garag/garag3.jpg",
  "assets/garag/garag4.jpg",
  "assets/garag/garag5.jpg",
  "assets/garag/garag6.jpg",
  "assets/garag/garag8.jpg",
  "assets/garag/garag9.jpg",
  "assets/garag/garag10.jpg",
];
let currentGarageIndex = 0;

const chatImages = [
  "assets/chat/chat1.jpg",
  "assets/chat/chat2.jpg",
  "assets/chat/chat3.jpg",
];
let currentChatIndex = 0;

const weatherImages = [
  "assets/weather/weather1.jpg",
  "assets/weather/weather2.jpg",
  "assets/weather/weather3.jpg",
  "assets/weather/weather4.jpg",
];
let currentWeatherIndex = 0;

const newsImages = [
  "assets/news/news1.jpg",
  "assets/news/news2.jpg",
  "assets/news/news3.jpg",
  "assets/news/news4.jpg",
  "assets/news/news5.jpg",
];
let currentNewsIndex = 0;

const notesImages = [
  "assets/note/note1.jpg",
  "assets/note/note2.jpg",
  "assets/note/note3.jpg",
  "assets/note/note4.jpg",
];
let currentNotesIndex = 0;

const aiChatImages = ["assets/ChatAi/chatai1.jpg"];
let currentAiChatIndex = 0;

// دوال عرض المودال لكل مشروع
function showFaceModal(index = 0) {
  imgModalImages.style.display = "none";
  imgModalImg.style.display = "block";
  imgModalPrev.style.display = "block";
  imgModalNext.style.display = "block";
  currentFaceIndex = index;

  imgModalImg.src = faceImages[currentFaceIndex];
  imgModalImg.alt = "Face Detection Example " + (currentFaceIndex + 1);
  imgModalImg.style.width = window.innerWidth < 700 ? "90vw" : "420px";
  imgModalImg.style.height = window.innerWidth < 700 ? "auto" : "420px";
  imgModalImg.style.objectFit = "contain";
  imgModalImg.style.borderRadius = "16px";
  imgModalImg.style.boxShadow = "0 0 24px #25d7e299";
  imgModalImg.style.border = "none";

  imgModalText.innerHTML = `
    <strong>Face Detection</strong><br>
    This Flutter application allows users to detect faces in images using machine learning. It provides an interactive and user-friendly interface with the following main features:<br><br>
    <strong> Key Features:</strong><br>
    • Pick Image from the gallery<br>
    • Capture Image using the camera<br>
    • Clear the image and results<br>
    Once the user selects or captures an image, the app uses Google ML Kit to detect faces and draws green rectangles around each detected face.<br><br>
    <strong> Technologies Used:</strong><br>
    • Flutter – for building the cross-platform UI<br>
    • Google ML Kit – for face detection using on-device machine learning<br>
    • Image Picker – for selecting images from the gallery or capturing from the camera<br>
    • CustomPainter – to draw bounding boxes over detected faces<br>
    • SnackBar – to show the number of faces detected in a user-friendly way<br><br>
    <strong>Skills:</strong> Responsive UI Design · User Experience (UX) · Image Picker Integration · Custom Painting in Flutter · Google ML Kit · Image Processing
  `;
  imgModal.style.display = "flex";
  document.body.style.overflow = "hidden";
}

function highlightFaceImage() {
  imgModalImg.src = faceImages[currentFaceIndex];
  imgModalImg.alt = "Face Detection Example " + (currentFaceIndex + 1);
}

function showMoveModal(index = 0) {
  imgModalImages.style.display = "none";
  imgModalImg.style.display = "block";
  imgModalPrev.style.display = "block";
  imgModalNext.style.display = "block";
  currentMoveIndex = index;

  imgModalImg.src = moveImages[currentMoveIndex];
  imgModalImg.alt = "Move App Example " + (currentMoveIndex + 1);
  imgModalImg.style.width = window.innerWidth < 700 ? "90vw" : "420px";
  imgModalImg.style.height = window.innerWidth < 700 ? "auto" : "420px";
  imgModalImg.style.objectFit = "contain";
  imgModalImg.style.borderRadius = "16px";
  imgModalImg.style.boxShadow = "0 0 24px #25d7e299";
  imgModalImg.style.border = "none";

  imgModalText.innerHTML = `
    <strong>Move App</strong><br>
    This Flutter application helps users discover and track movies. It features a beautiful UI, movie details, search functionality, and more.<br><br>
    <strong>Key Features:</strong><br>
    • Browse trending and popular movies<br>
    • Search for movies<br>
    • View detailed information and trailers<br>
    • Add movies to favorites<br><br>
    <strong>Technologies Used:</strong><br>
    • Flutter · REST API · Responsive UI · State Management
  `;
  imgModal.style.display = "flex";
  document.body.style.overflow = "hidden";
}

function highlightMoveImage() {
  imgModalImg.src = moveImages[currentMoveIndex];
  imgModalImg.alt = "Move App Example " + (currentMoveIndex + 1);
}

function showGarageModal(index = 0) {
  imgModalImages.style.display = "none";
  imgModalImg.style.display = "block";
  imgModalPrev.style.display = "block";
  imgModalNext.style.display = "block";
  currentGarageIndex = index;

  imgModalImg.src = garageImages[currentGarageIndex];
  imgModalImg.alt = "Smart Garage Example " + (currentGarageIndex + 1);
  imgModalImg.style.width = window.innerWidth < 700 ? "90vw" : "420px";
  imgModalImg.style.height = window.innerWidth < 700 ? "auto" : "420px";
  imgModalImg.style.objectFit = "contain";
  imgModalImg.style.borderRadius = "16px";
  imgModalImg.style.boxShadow = "0 0 24px #25d7e299";
  imgModalImg.style.border = "none";

  imgModalText.innerHTML = `
    <strong>Smart Garage</strong><br>
    This project provides a smart solution for managing parking spaces and reservations using a modern UI and real-time updates.<br><br>
    <strong>Key Features:</strong><br>
    • View available and occupied spaces<br>
    • Reserve and manage parking<br>
    • Payment integration<br>
    • User profile management<br><br>
    <strong>Technologies Used:</strong><br>
    • Flutter · Firebase · Responsive UI · State Management
  `;
  imgModal.style.display = "flex";
  document.body.style.overflow = "hidden";
}

function highlightGarageImage() {
  imgModalImg.src = garageImages[currentGarageIndex];
  imgModalImg.alt = "Smart Garage Example " + (currentGarageIndex + 1);
}

function showChatModal(index = 0) {
  imgModalImages.style.display = "none";
  imgModalImg.style.display = "block";
  imgModalPrev.style.display = "block";
  imgModalNext.style.display = "block";
  currentChatIndex = index;

  imgModalImg.src = chatImages[currentChatIndex];
  imgModalImg.alt = "Chat App Example " + (currentChatIndex + 1);
  imgModalImg.style.width = window.innerWidth < 700 ? "90vw" : "420px";
  imgModalImg.style.height = window.innerWidth < 700 ? "auto" : "420px";
  imgModalImg.style.objectFit = "contain";
  imgModalImg.style.borderRadius = "16px";
  imgModalImg.style.boxShadow = "0 0 24px #25d7e299";
  imgModalImg.style.border = "none";

  imgModalText.innerHTML = `
    <strong>Chat App</strong><br>
    A modern chat application built with Flutter, supporting real-time messaging, authentication, and media sharing.<br><br>
    <strong>Key Features:</strong><br>
    • Real-time chat<br>
    • User authentication<br>
    • Send images and files<br>
    • Responsive UI<br><br>
    <strong>Technologies Used:</strong><br>
    • Flutter · Firebase · Cloud Firestore · Authentication
  `;
  imgModal.style.display = "flex";
  document.body.style.overflow = "hidden";
}

function highlightChatImage() {
  imgModalImg.src = chatImages[currentChatIndex];
  imgModalImg.alt = "Chat App Example " + (currentChatIndex + 1);
}

function showWeatherModal(index = 0) {
  imgModalImages.style.display = "none";
  imgModalImg.style.display = "block";
  imgModalPrev.style.display = "block";
  imgModalNext.style.display = "block";
  currentWeatherIndex = index;

  imgModalImg.src = weatherImages[currentWeatherIndex];
  imgModalImg.alt = "Weather App Example " + (currentWeatherIndex + 1);
  imgModalImg.style.width = window.innerWidth < 700 ? "90vw" : "420px";
  imgModalImg.style.height = window.innerWidth < 700 ? "auto" : "420px";
  imgModalImg.style.objectFit = "contain";
  imgModalImg.style.borderRadius = "16px";
  imgModalImg.style.boxShadow = "0 0 24px #25d7e299";
  imgModalImg.style.border = "none";

  imgModalText.innerHTML = `
    <strong>Weather App</strong><br>
    A Flutter application to display weather information for different cities with a modern and responsive UI.<br><br>
    <strong>Key Features:</strong><br>
    • Real-time weather data<br>
    • Search for cities<br>
    • Attractive weather icons<br>
    • Responsive design<br><br>
    <strong>Technologies Used:</strong><br>
    • Flutter · REST API · Responsive UI · State Management
  `;
  imgModal.style.display = "flex";
  document.body.style.overflow = "hidden";
}

function highlightWeatherImage() {
  imgModalImg.src = weatherImages[currentWeatherIndex];
  imgModalImg.alt = "Weather App Example " + (currentWeatherIndex + 1);
}

function showNewsModal(index = 0) {
  imgModalImages.style.display = "none";
  imgModalImg.style.display = "block";
  imgModalPrev.style.display = "block";
  imgModalNext.style.display = "block";
  currentNewsIndex = index;

  imgModalImg.src = newsImages[currentNewsIndex];
  imgModalImg.alt = "News App Example " + (currentNewsIndex + 1);
  imgModalImg.style.width = window.innerWidth < 700 ? "90vw" : "420px";
  imgModalImg.style.height = window.innerWidth < 700 ? "auto" : "420px";
  imgModalImg.style.objectFit = "contain";
  imgModalImg.style.borderRadius = "16px";
  imgModalImg.style.boxShadow = "0 0 24px #25d7e299";
  imgModalImg.style.border = "none";

  imgModalText.innerHTML = `
    <strong>News App</strong><br>
    A Flutter application for browsing the latest news articles with categories, search, and a modern UI.<br><br>
    <strong>Key Features:</strong><br>
    • Browse news by category<br>
    • Search for articles<br>
    • Responsive design<br>
    • Save favorite articles<br><br>
    <strong>Technologies Used:</strong><br>
    • Flutter · REST API · Responsive UI · State Management
  `;
  imgModal.style.display = "flex";
  document.body.style.overflow = "hidden";
}

function highlightNewsImage() {
  imgModalImg.src = newsImages[currentNewsIndex];
  imgModalImg.alt = "News App Example " + (currentNewsIndex + 1);
}

function showNotesModal(index = 0) {
  imgModalImages.style.display = "none";
  imgModalImg.style.display = "block";
  imgModalPrev.style.display = "block";
  imgModalNext.style.display = "block";
  currentNotesIndex = index;

  imgModalImg.src = notesImages[currentNotesIndex];
  imgModalImg.alt = "Notes App Example " + (currentNotesIndex + 1);
  imgModalImg.style.width = window.innerWidth < 700 ? "90vw" : "420px";
  imgModalImg.style.height = window.innerWidth < 700 ? "auto" : "420px";
  imgModalImg.style.objectFit = "contain";
  imgModalImg.style.borderRadius = "16px";
  imgModalImg.style.boxShadow = "0 0 24px #25d7e299";
  imgModalImg.style.border = "none";

  imgModalText.innerHTML = `
    <strong>Notes App</strong><br>
    A Flutter application for creating, editing, and organizing notes with a simple and modern UI.<br><br>
    <strong>Key Features:</strong><br>
    • Create and edit notes<br>
    • Organize notes by category<br>
    • Responsive design<br>
    • Search notes<br><br>
    <strong>Technologies Used:</strong><br>
    • Flutter · Local Storage · Responsive UI
  `;
  imgModal.style.display = "flex";
  document.body.style.overflow = "hidden";
}

function highlightNotesImage() {
  imgModalImg.src = notesImages[currentNotesIndex];
  imgModalImg.alt = "Notes App Example " + (currentNotesIndex + 1);
}

function showAiChatModal(index = 0) {
  imgModalImages.style.display = "none";
  imgModalImg.style.display = "block";
  imgModalPrev.style.display = "none";
  imgModalNext.style.display = "none";
  currentAiChatIndex = index;

  imgModalImg.src = aiChatImages[currentAiChatIndex];
  imgModalImg.alt = "AI Chat Example " + (currentAiChatIndex + 1);
  imgModalImg.style.border = "none";
  imgModalImg.style.boxShadow = "none";
  imgModalImg.style.background = "none";
  imgModalImg.style.objectFit = "contain";
  imgModalImg.style.borderRadius = "0";
  imgModalImg.style.width = window.innerWidth < 700 ? "100vw" : "auto";
  imgModalImg.style.height = window.innerWidth < 700 ? "auto" : "auto";

  imgModalText.innerHTML = `
    <strong>AI Chat</strong><br>
    A simple AI-powered chat application.<br><br>
    <strong>Key Features:</strong><br>
    • Chat with AI<br>
    • Simple UI<br>
    • Fast response<br><br>
    <strong>Technologies Used:</strong><br>
    • Flutter · AI API · Responsive UI
  `;
  imgModal.style.display = "flex";
  document.body.style.overflow = "hidden";
}

// أسهم التنقل
imgModalPrev.onclick = function (e) {
  e.stopPropagation();
  if (imgModalImg.alt.startsWith("Face Detection")) {
    currentFaceIndex =
      (currentFaceIndex - 1 + faceImages.length) % faceImages.length;
    highlightFaceImage();
  } else if (imgModalImg.alt.startsWith("Move App")) {
    currentMoveIndex =
      (currentMoveIndex - 1 + moveImages.length) % moveImages.length;
    highlightMoveImage();
  } else if (imgModalImg.alt.startsWith("Smart Garage")) {
    currentGarageIndex =
      (currentGarageIndex - 1 + garageImages.length) % garageImages.length;
    highlightGarageImage();
  } else if (imgModalImg.alt.startsWith("Chat App")) {
    currentChatIndex =
      (currentChatIndex - 1 + chatImages.length) % chatImages.length;
    highlightChatImage();
  } else if (imgModalImg.alt.startsWith("Weather App")) {
    currentWeatherIndex =
      (currentWeatherIndex - 1 + weatherImages.length) % weatherImages.length;
    highlightWeatherImage();
  } else if (imgModalImg.alt.startsWith("News App")) {
    currentNewsIndex =
      (currentNewsIndex - 1 + newsImages.length) % newsImages.length;
    highlightNewsImage();
  } else if (imgModalImg.alt.startsWith("Notes App")) {
    currentNotesIndex =
      (currentNotesIndex - 1 + notesImages.length) % notesImages.length;
    highlightNotesImage();
  } else if (imgModalImg.alt.startsWith("AI Chat")) {
    currentAiChatIndex =
      (currentAiChatIndex - 1 + aiChatImages.length) % aiChatImages.length;
    highlightAiChatImage();
  }
};

imgModalNext.onclick = function (e) {
  e.stopPropagation();
  if (imgModalImg.alt.startsWith("Face Detection")) {
    currentFaceIndex = (currentFaceIndex + 1) % faceImages.length;
    highlightFaceImage();
  } else if (imgModalImg.alt.startsWith("Move App")) {
    currentMoveIndex = (currentMoveIndex + 1) % moveImages.length;
    highlightMoveImage();
  } else if (imgModalImg.alt.startsWith("Smart Garage")) {
    currentGarageIndex = (currentGarageIndex + 1) % garageImages.length;
    highlightGarageImage();
  } else if (imgModalImg.alt.startsWith("Chat App")) {
    currentChatIndex = (currentChatIndex + 1) % chatImages.length;
    highlightChatImage();
  } else if (imgModalImg.alt.startsWith("Weather App")) {
    currentWeatherIndex = (currentWeatherIndex + 1) % weatherImages.length;
    highlightWeatherImage();
  } else if (imgModalImg.alt.startsWith("News App")) {
    currentNewsIndex = (currentNewsIndex + 1) % newsImages.length;
    highlightNewsImage();
  } else if (imgModalImg.alt.startsWith("Notes App")) {
    currentNotesIndex = (currentNotesIndex + 1) % notesImages.length;
    highlightNotesImage();
  } else if (imgModalImg.alt.startsWith("AI Chat")) {
    currentAiChatIndex = (currentAiChatIndex + 1) % aiChatImages.length;
    highlightAiChatImage();
  }
};

// فتح المودال عند الضغط على صورة في achievements أو projects
document
  .querySelectorAll(".achievement-card, .project-card")
  .forEach((card) => {
    card.addEventListener("click", function () {
      const img = card.querySelector("img");
      // Face Detection project
      if (img.alt === "Face Detection") {
        showFaceModal(0);
        return;
      }
      // Move App project
      if (img.alt === "Move App") {
        showMoveModal(0);
        return;
      }
      // Smart Garage project
      if (img.alt === "Smart Garage") {
        showGarageModal(0);
        return;
      }
      // Chat App project
      if (img.alt === "Chat App") {
        showChatModal(0);
        return;
      }
      // Weather App project
      if (img.alt === "Weather App") {
        showWeatherModal(0);
        return;
      }
      // News App project
      if (img.alt === "News App") {
        showNewsModal(0);
        return;
      }
      // Notes App project
      if (img.alt === "Notes App") {
        showNotesModal(0);
        return;
      }
      // AI Chat project
      if (img.alt === "AI Chat") {
        showAiChatModal(0);
        return;
      }
      // باقي المشاريع
      imgModalImages.style.display = "none";
      imgModalImg.style.display = "block";
      imgModalPrev.style.display = "none";
      imgModalNext.style.display = "none";
      imgModalImg.src = img.src;
      imgModalImg.alt = img.alt;
    });
  });

// غلق المودال عند الضغط على زر الإغلاق أو خارج المودال
imgModalClose.onclick = function () {
  imgModal.style.display = "none";
  document.body.style.overflow = "";
  imgModalImages.style.display = "none";
  imgModalImg.style.display = "block";
  imgModalPrev.style.display = "none";
  imgModalNext.style.display = "none";
};
imgModal.onclick = function (e) {
  if (e.target === imgModal) {
    imgModal.style.display = "none";
    document.body.style.overflow = "";
    imgModalImages.style.display = "none";
    imgModalImg.style.display = "block";
    imgModalPrev.style.display = "none";
    imgModalNext.style.display = "none";
  }
};

// Mobile menu toggle
document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.getElementById("menuIcon");
  const navLinks = document.querySelector("ul.nav-links");
  menuIcon.addEventListener("click", function () {
    navLinks.classList.toggle("active");
    document.body.style.overflow = navLinks.classList.contains("active")
      ? "hidden"
      : "";
  });

  // Close menu when clicking a link (mobile)
  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", function () {
      navLinks.classList.remove("active");
      document.body.style.overflow = "";
    });
  });
});
// ...existing code...

document
  .querySelector(".contact-form form")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    const name = this.fullname.value;
    const email = this.email.value;
    const message = this.message.value;

    const subject = encodeURIComponent("Portfolio Contact: " + name);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    );

    window.location.href = `mailto:iabdelrahmanmagdy802@gmail.com?subject=${subject}&body=${body}`;
    this.reset();
  });
