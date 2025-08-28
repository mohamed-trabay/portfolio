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
const topCloseBtn = document.getElementById("topCloseBtn");
const aboutText = document.getElementById("aboutText");

if (readMoreBtn && closeBtn && topCloseBtn && aboutText) {
  readMoreBtn.onclick = function () {
    aboutText.classList.add("expanded");
    closeBtn.style.display = "inline-block";
    topCloseBtn.style.display = "inline-block";
    readMoreBtn.style.display = "none";
  };

  function closeAbout() {
    aboutText.classList.remove("expanded");
    closeBtn.style.display = "none";
    topCloseBtn.style.display = "none";
    readMoreBtn.style.display = "inline-block";
  }

  closeBtn.onclick = closeAbout;
  topCloseBtn.onclick = closeAbout;
}




// Modal Elements
const imgModal = document.getElementById("imgModal");
const imgModalImg = document.getElementById("imgModalImg");
const imgModalText = document.getElementById("imgModalText");
const imgModalClose = document.getElementById("imgModalClose");
const imgModalImages = document.getElementById("imgModalImages");
const imgModalPrev = document.getElementById("imgModalPrev");
const imgModalNext = document.getElementById("imgModalNext");

const smartHomeImages = [
  "assets/smart_home/dashbord.jpg",
  "assets/smart_home/splash.jpg",
  "assets/smart_home/signup.jpg",
  "assets/smart_home/signin.jpg",
  "assets/smart_home/prof.jpg",
  "assets/smart_home/addusers.jpg",


  "assets/smart_home/add.jpg",
  "assets/smart_home/rooms.jpg",
  "assets/smart_home/succes.jpg",


  "assets/smart_home/room.jpg",
  "assets/smart_home/stat.jpg",
  "assets/smart_home/auto.jpg",

  "assets/smart_home/noti.jpg",

  "assets/smart_home/living.jpg",






];
let currentFaceIndex = 0;

const booklyImages = [
  "assets/bookly/home.png",
  "assets/bookly/detail.png",
  "assets/bookly/pay1.png",

  "assets/bookly/pay2.png",

  "assets/bookly/pay3.png",
];
let currentMoveIndex = 0;

const whatsImages = [
  "assets/whatsapp_clone/homew.png",
  "assets/whatsapp_clone/homeb.png",

  "assets/whatsapp_clone/chatw.png",

  "assets/whatsapp_clone/chatb.png",
  "assets/whatsapp_clone/statusw.png",

  "assets/whatsapp_clone/statusb.png",

  "assets/whatsapp_clone/story.png",

  "assets/whatsapp_clone/storyb.png",

  "assets/whatsapp_clone/splashw.png",

  "assets/whatsapp_clone/splashb.png",



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

const balancedImages = [
  "assets/note/1.png",
  "assets/note/2.png",
  "assets/note/3.png",
  "assets/note/4.png",
  "assets/note/5.png",

  "assets/note/6.png",

];
let currentNotesIndex = 0;

const eShopImages = [
  "assets/eshop/home.jpg",
  "assets/eshop/search.jpg",
  "assets/eshop/item.jpg",
  "assets/eshop/cart.png",
  "assets/eshop/cart1.png"

];
let currentAiChatIndex = 0;

// دوال عرض المودال لكل مشروع
function showFaceModal(index = 0) {
  imgModalImages.style.display = "none";
  imgModalImg.style.display = "block";
  imgModalPrev.style.display = "block";
  imgModalNext.style.display = "block";
  currentFaceIndex = index;

  imgModalImg.src = smartHomeImages[currentFaceIndex];
  imgModalImg.alt = "Smart Home" + (currentFaceIndex + 1);
  imgModalImg.style.width = window.innerWidth < 700 ? "90vw" : "420px";
  imgModalImg.style.height = window.innerWidth < 700 ? "auto" : "420px";
  imgModalImg.style.objectFit = "contain";
  imgModalImg.style.borderRadius = "16px";
  imgModalImg.style.boxShadow = "0 0 24px #25d7e299";
  imgModalImg.style.border = "none";

  imgModalText.innerHTML = `
    <strong>Smart Home System</strong><br>
This Flutter application allows users to control and monitor their smart home devices from anywhere. It provides an interactive and user-friendly interface with the following main features:<br><br>
<strong>Key Features:</strong><br>
• View and manage all connected devices<br>
• Control lights, temperature, and appliances<br>
• Monitor rooms with real-time status<br>
• Add or remove devices easily<br><br>
Once the user interacts with the app, it communicates with a backend system to update device statuses and provides instant feedback.<br><br>
<strong>Technologies Used:</strong><br>
• Flutter – for building the cross-platform UI<br>
• Firebase – for real-time data synchronization<br>
• REST API – for device communication<br>
• Bloc/Cubit State Management – to manage app state efficiently<br><br>
<strong>Skills:</strong> Responsive UI Design · User Experience (UX) · Real-time Data Handling · State Management · IoT Integration · Flutter Development

  `;
  imgModal.style.display = "flex";
  document.body.style.overflow = "hidden";
}

function highlightFaceImage() {
  imgModalImg.src = smartHomeImages[currentFaceIndex];
  imgModalImg.alt = "Smart Home " + (currentFaceIndex + 1);
}

function showMoveModal(index = 0) {
  imgModalImages.style.display = "none";
  imgModalImg.style.display = "block";
  imgModalPrev.style.display = "block";
  imgModalNext.style.display = "block";
  currentMoveIndex = index;

  imgModalImg.src = booklyImages[currentMoveIndex];
  imgModalImg.alt = "Bookly App" + (currentMoveIndex + 1);
  imgModalImg.style.width = window.innerWidth < 700 ? "90vw" : "420px";
  imgModalImg.style.height = window.innerWidth < 700 ? "auto" : "420px";
  imgModalImg.style.objectFit = "contain";
  imgModalImg.style.borderRadius = "16px";
  imgModalImg.style.boxShadow = "0 0 24px #25d7e299";
  imgModalImg.style.border = "none";

  imgModalText.innerHTML = `
    <strong>Bookly App</strong><br>
This Flutter application allows users to browse, book, and pay for services or products directly within the app. It provides a smooth and user-friendly experience with integrated payment options.<br><br>
<strong>Key Features:</strong><br>
• Browse available services or products<br>
• Book appointments or orders<br>
• Secure in-app payment integration<br>
• View booking history and details<br>
• Receive notifications and confirmations<br><br>
<strong>Technologies Used:</strong><br>
• Flutter · REST API · Payment Gateway Integration · Responsive UI · State Management

  `;
  imgModal.style.display = "flex";
  document.body.style.overflow = "hidden";
}

function highlightMoveImage() {
  imgModalImg.src = booklyImages[currentMoveIndex];
  imgModalImg.alt = "Bookly App" + (currentMoveIndex + 1);
}

function showGarageModal(index = 0) {
  imgModalImages.style.display = "none";
  imgModalImg.style.display = "block";
  imgModalPrev.style.display = "block";
  imgModalNext.style.display = "block";
  currentGarageIndex = index;

  imgModalImg.src = whatsImages[currentGarageIndex];
  imgModalImg.alt = "Smart Garage Example " + (currentGarageIndex + 1);
  imgModalImg.style.width = window.innerWidth < 700 ? "90vw" : "420px";
  imgModalImg.style.height = window.innerWidth < 700 ? "auto" : "420px";
  imgModalImg.style.objectFit = "contain";
  imgModalImg.style.borderRadius = "16px";
  imgModalImg.style.boxShadow = "0 0 24px #25d7e299";
  imgModalImg.style.border = "none";

  imgModalText.innerHTML = `
   <strong>WhatsApp Clone</strong><br>
This Flutter application is a complete replica of the original WhatsApp, designed with pixel-perfect accuracy and production-quality details. It works seamlessly across devices and platforms, offering both Light and Dark mode support.<br><br>
<strong>Key Features:</strong><br>
• Chat list with real-time updates<br>
• One-to-one conversation screen<br>
• Status (Stories) feature<br>
• Profile and settings management<br>
• Full support for Light & Dark themes<br><br>
<strong>Technologies Used:</strong><br>
• Flutter · Responsive UI · State Management · Cross-Platform Support

  `;
  imgModal.style.display = "flex";
  document.body.style.overflow = "hidden";
}

function highlightGarageImage() {
  imgModalImg.src = whatsImages[currentGarageIndex];
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

  imgModalImg.src = balancedImages[currentNotesIndex];
  imgModalImg.alt = "Notes App Example " + (currentNotesIndex + 1);
  imgModalImg.style.width = window.innerWidth < 700 ? "90vw" : "420px";
  imgModalImg.style.height = window.innerWidth < 700 ? "auto" : "420px";
  imgModalImg.style.objectFit = "contain";
  imgModalImg.style.borderRadius = "16px";
  imgModalImg.style.boxShadow = "0 0 24px #25d7e299";
  imgModalImg.style.border = "none";

  imgModalText.innerHTML = `
    <strong>Balanced Meal App</strong><br>
A FlutterFlow application designed to help users maintain a healthy diet by calculating daily calorie intake based on their personal data.<br><br>

<strong>Key Features:</strong><br>
• Calculates daily calorie needs based on user data<br>
• Tracks meals and consumed calories<br>
• Prevents exceeding daily calorie limits except within allowed meals<br>
• Simple and modern UI<br>
• Data synchronization with Firebase<br><br>

<strong>Technologies Used:</strong><br>
• FlutterFlow · Firebase · REST API · Responsive UI
  `;
  imgModal.style.display = "flex";
  document.body.style.overflow = "hidden";
}

function highlightNotesImage() {
  imgModalImg.src = balancedImages[currentNotesIndex];
  imgModalImg.alt = "Notes App Example " + (currentNotesIndex + 1);
}

function showAiChatModal(index = 0) {
  imgModalImages.style.display = "none";
  imgModalImg.style.display = "block";
  imgModalPrev.style.display = "block";
  imgModalNext.style.display = "block";
  currentAiChatIndex = index;

  imgModalImg.src = eShopImages[currentAiChatIndex];
  imgModalImg.alt = "AI Chat Example " + (currentAiChatIndex + 1);
  imgModalImg.style.border = "none";
  imgModalImg.style.boxShadow = "none";
  imgModalImg.style.background = "none";
  imgModalImg.style.objectFit = "contain";
  imgModalImg.style.borderRadius = "0";
  imgModalImg.style.width = window.innerWidth < 700 ? "100vw" : "auto";
  imgModalImg.style.height = window.innerWidth < 700 ? "auto" : "auto";

  imgModalText.innerHTML = `
   <strong>E-Commerce App</strong><br>
This Flutter application provides a complete online shopping experience with a modern UI and smooth navigation. It allows users to browse products, manage their cart, and complete secure checkouts.<br><br>
<strong>Key Features:</strong><br>
• Browse and search products by category<br>
• Add products to cart and manage items<br>
• Secure checkout process<br>
• User authentication and profile management<br>
• Order tracking and history<br><br>
<strong>Technologies Used:</strong><br>
• Flutter · REST API · Firebase · State Management · Responsive UI

  `;
  imgModal.style.display = "flex";
  document.body.style.overflow = "hidden";
}
function highlightAiChatImage() {
  imgModalImg.src = eShopImages[currentAiChatIndex];
  imgModalImg.alt = "AI Chat Example " + (currentAiChatIndex + 1);
}

// أسهم التنقل
imgModalPrev.onclick = function (e) {
  e.stopPropagation();
  if (imgModalImg.alt.startsWith("Smart Home")) {
    currentFaceIndex =
      (currentFaceIndex - 1 + smartHomeImages.length) % smartHomeImages.length;
    highlightFaceImage();
  } else if (imgModalImg.alt.startsWith("Bookly App")) {
    currentMoveIndex =
      (currentMoveIndex - 1 + booklyImages.length) % booklyImages.length;
    highlightMoveImage();
  } else if (imgModalImg.alt.startsWith("Smart Garage")) {
    currentGarageIndex =
      (currentGarageIndex - 1 + whatsImages.length) % whatsImages.length;
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
      (currentNotesIndex - 1 + balancedImages.length) % balancedImages.length;
    highlightNotesImage();
  } else if (imgModalImg.alt.startsWith("AI Chat")) {
    currentAiChatIndex =
      (currentAiChatIndex - 1 + eShopImages.length) % eShopImages.length;
    highlightAiChatImage();
  }
};

imgModalNext.onclick = function (e) {
  e.stopPropagation();
  if (imgModalImg.alt.startsWith("Smart Home")) {
    currentFaceIndex = (currentFaceIndex + 1) % smartHomeImages.length;
    highlightFaceImage();
  } else if (imgModalImg.alt.startsWith("Bookly App")) {
    currentMoveIndex = (currentMoveIndex + 1) % booklyImages.length;
    highlightMoveImage();
  } else if (imgModalImg.alt.startsWith("Smart Garage")) {
    currentGarageIndex = (currentGarageIndex + 1) % whatsImages.length;
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
    currentNotesIndex = (currentNotesIndex + 1) % balancedImages.length;
    highlightNotesImage();
  } else if (imgModalImg.alt.startsWith("AI Chat")) {
    currentAiChatIndex = (currentAiChatIndex + 1) % eShopImages.length;
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
      if (img.alt === "Smart Home") {
        showFaceModal(0);
        return;
      }
      // Move App project
      if (img.alt === "Bookly App") {
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

    window.location.href = `mailto:mohamed.nabil.flutter@gmail.com?subject=${subject}&body=${body}`;
    this.reset();
  });
