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
const suhbahImages = [
  "assets/suhbah/1.png",
  "assets/suhbah/2.png",

  "assets/suhbah/3.png",
  "assets/suhbah/4.png",

  "assets/suhbah/5.png",

  "assets/suhbah/6.png",

  "assets/suhbah/7.png",

  "assets/suhbah/8.png",

  "assets/suhbah/9.png",

  "assets/suhbah/10.png",

  "assets/suhbah/11.png",

  "assets/suhbah/12.png",


  "assets/suhbah/13.png",


];
let currentsuhbahIndex = 0;

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

// ============================================
// Unique Supplement PROJECT MODAL
// ============================================
const zaboomaaImages = [
  "assets/US.mp4"
];
let currentZaboomaaIndex = 0;

function showZaboomaaModal(index = 0) {
  imgModalImages.style.display = "none";
  imgModalImg.style.display = "none";
  imgModalPrev.style.display = "none";
  imgModalNext.style.display = "none";

  imgModalText.innerHTML = `
      <div style="text-align:center;">
        <strong>Zabooma Internship - Unique Supplement Project</strong><br>
              <div style="margin: 1.5rem auto; width: 100%; max-width: 420px;">
          <video width="100%" height="auto" controls muted style="border-radius: 12px; background: #000; box-shadow: 0 0 24px #25d7e299; max-height: 420px; object-fit: contain;">
            <source src="assets/US.mp4" type="video/mp4">
            Your browser does not support the video tag.
          </video>
        </div><br>
        <strong>Project Overview:</strong><br>
        Converted a web-based e-commerce platform into a fully functional Flutter mobile application 
        for Unique Sublimen, a premium product store.<br><br>
        
        <strong>Key Features Implemented:</strong><br>
        • Complete product catalog with API integration<br>
        • Advanced search functionality with real-time filtering<br>
        • Favorites system with persistent storage using SharedPreferences<br>
        • Shopping cart with local storage persistence<br>
        • Product filtering by categories and attributes<br>
        • Beautiful, responsive UI with smooth animations<br>
        • Payment gateway integration (PayMob)<br>
        • Order details and address management before checkout<br><br>
        
        <strong>Technologies Used:</strong><br>
        • Flutter · Dart · REST API · SharedPreferences · Firebase · PayMob Payment Gateway<br>
        • State Management · Responsive UI Design<br><br>
        
        <strong>Skills Demonstrated:</strong><br>
        API Integration · UI/UX Design · Local Storage Management · Payment Processing · 
        Search & Filter Implementation · State Management · Cross-platform Development
      </div>
    `;

  imgModal.style.display = "flex";
  document.body.style.overflow = "hidden";
}
// ========== SEHHA ADAM PROJECT MODAL ==========
const SehhaImages = [
  "assets/seht.mp4"
];
let currentSehhaModal = 0;
function showSehhaModal(index = 0) {
  imgModalImages.style.display = "none";
  imgModalImg.style.display = "none";
  imgModalPrev.style.display = "none";
  imgModalNext.style.display = "none";

  imgModalText.innerHTML = `
        <div style="text-align:center; width:100%;">
          <strong>صحه ادم - Seht Adam</strong><br>
          <div style="margin: 1.2rem auto; width:100%; max-width: 420px;">
            <video width="100%" height="auto" controls muted style="border-radius: 12px; background: #000; box-shadow: 0 0 24px #25d7e299; max-height: 420px; object-fit: contain;">
              <source src="assets/seht.mp4" type="video/mp4">
              Your browser does not support the video tag.
            </video>
          </div>

            <strong>Project Overview:</strong><br>
            Seht Adam is a complete health and wellness mobile application developed using Flutter with Clean Architecture (MVVM) and Cubit for state management. 
            This was originally a web-based platform that I successfully converted into a fully functional, production-ready mobile app.<br><br>

            <strong>Key Features Implemented:</strong><br>
            • Firebase Authentication (Login/Register) with email verification<br>
            • Full bilingual support (Arabic/English) with seamless Localization - app language switches based on user preference<br>
            • Dynamic Light & Dark themes with persistent storage using SharedPreferences<br>
            • Local Push Notifications for daily health reminders and tracking<br>
            • Advanced Search & Filter system for health products, articles, and meal plans<br>
            • Complete E-commerce functionality with product catalog and categories<br>
            • PayMob Payment Gateway integration for secure transactions<br>
            • Shopping Cart with local persistence (favorites stored in SharedPreferences)<br>
            • User Profile management with order history<br>
            • Collect user details (address, phone, payment info) before checkout<br>
            • Beautiful Splash Screen with custom animations<br>
            • Fully responsive UI built with ScreenUtil - works perfectly on all devices<br>
            • Backend API integration for real-time data synchronization<br>
            • MVVM architecture with Repository pattern and Cubit state management<br><br>

            <strong>Technologies Used:</strong><br>
            • Flutter · Dart · MVVM · Cubit · Firebase Auth · REST API · Local Notifications<br>
            • SharedPreferences · PayMob Payment · ScreenUtil · Responsive Design<br><br>

            <strong>Technical Highlights:</strong><br>
            Clean Architecture · State Management · Localization · Theming · Payment Integration · 
            Authentication · API Integration · Local Storage · Animations · Cross-Platform Responsiveness
          </div>
        </div>
      `;
  imgModal.style.display = "flex";
  document.body.style.overflow = "hidden";
}
// ========== pet pass PROJECT MODAL ==========   
const petpassImages = [
  "assets/pet pass .mp4"
];
let currentpetpassModal = 0;
function showpetpassModal(index = 0) {
  imgModalImages.style.display = "none";
  imgModalImg.style.display = "none";
  imgModalPrev.style.display = "none";
  imgModalNext.style.display = "none";

  imgModalText.innerHTML = `
        <div style="text-align:center; width:100%;">
          <strong>Pet Pass</strong><br>
          <div style="margin: 1.2rem auto; width:100%; max-width: 420px;">
            <video width="100%" height="auto" controls muted style="border-radius: 12px; background: #000; box-shadow: 0 0 24px #25d7e299; max-height: 420px; object-fit: contain;">
              <source src="assets/pet pass .mp4" type="video/mp4">
              Your browser does not support the video tag.
            </video>
          </div>

            <strong>Project Overview:</strong><br>
  Pet Pass is a comprehensive mobile application that provides exclusive vouchers and deals for pet stores across the UAE. 
  Built with Flutter using Clean Architecture (MVVM) and Cubit for state management, this production-ready app offers a premium subscription-based service for pet owners.<br><br>

  <strong>Key Features Implemented:</strong><br>
  • Complete Authentication System (Login/Register/Forgot Password) using REST API with JWT Token authentication<br>
  • User Profile Management with subscription status tracking and profile image upload<br>
  • Bilingual support (English only) with Light & Dark theme switching<br>
  • 4-Tab Bottom Navigation: Home, Deals, Favorites, Premium<br>
  • Animated Home Screen with banner carousel and latest offers section<br>
  • Deals organized by categories with category-based filtering<br>
  • Pagination implementation for efficient data loading<br>
  • Local Favorites system (stored in SharedPreferences, cleared on logout)<br>
  • Premium Subscription system with monthly/yearly plans<br>
  • Stripe Payment Gateway integration for secure subscription payments<br>
  • Subscription Details page showing subscription date and plan type<br>
  • Access Control: Premium content locked until subscription is active<br>
  • Voucher Details with copy functionality and direct store website links<br>
  • Profile editing with image upload (Cloudinary integration)<br>
  • Fully responsive UI built with ScreenUtil - works perfectly on all devices<br>
  • Backend API integration for real-time data synchronization<br><br>

  <strong>Technologies Used:</strong><br>
  • Flutter · Dart · MVVM · Cubit · REST API · JWT Authentication · Stripe Payment<br>
  • SharedPreferences · Secure Storage · Cloudinary · WebView · ScreenUtil<br>
  • Dio · GoRouter · Carousel Slider · Cached Network Image · Shimmer Loading<br><br>

  <strong>Technical Highlights:</strong><br>
  Clean Architecture · State Management · Authentication & Authorization · Payment Integration · 
  Subscription Management · API Integration · Local Storage · Image Upload · Deep Linking · 
  Responsive Design · Loading States · Error Handling · Pagination · Category Filtering
</div>
      `;
  imgModal.style.display = "flex";
  document.body.style.overflow = "hidden";
}



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
  imgModalImg.style.border = "none";

  imgModalImg.style.boxShadow = "none";

  imgModalImg.style.background = "none";

  imgModalImg.style.objectFit = "contain";

  imgModalImg.style.borderRadius = "0";

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
function showSuhbahModal(index = 0) {
  imgModalImages.style.display = "none";
  imgModalImg.style.display = "block";
  imgModalPrev.style.display = "block";
  imgModalNext.style.display = "block";
  currentFaceIndex = index;

  imgModalImg.src = suhbahImages[currentsuhbahIndex];
  imgModalImg.alt = "suhbah" + (currentsuhbahIndex + 1);
  imgModalImg.style.width = window.innerWidth < 700 ? "90vw" : "420px";
  imgModalImg.style.height = window.innerWidth < 700 ? "auto" : "420px";
  imgModalImg.style.border = "none";

  imgModalImg.style.boxShadow = "none";

  imgModalImg.style.background = "none";

  imgModalImg.style.objectFit = "contain";

  imgModalImg.style.borderRadius = "0";
  imgModalText.innerHTML = `
        <strong>Sohba (صُحْبَة) - Islamic Companion App</strong><br>
    A comprehensive Islamic mobile application developed collaboratively with a team of 3 developers and successfully published on Google Play Store and Apple App Store. The app serves as a complete worship companion for Muslim users worldwide.<br><br>
    <div style="display: flex; gap: 10px; margin: 15px 0; flex-wrap: wrap;">
        <a href="https://play.google.com/store/apps/details?id=com.zbooma.suhbah" target="_blank" style="display: inline-flex; align-items: center; gap: 8px; padding: 10px 20px; background: #000; color: #fff; text-decoration: none; border-radius: 8px; font-size: 14px; transition: background 0.3s;">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
            </svg>
            Get it on Google Play
        </a>
        

    </div>
 

    <strong>Key Features:</strong><br>
    • <strong>Prayer Times:</strong> Accurate prayer schedules with customizable Adhan notifications<br>
    • <strong>Qibla Finder:</strong> Real-time compass directing users to Mecca using GPS<br>
    • <strong>Digital Quran:</strong> Complete Mushaf with beautiful Arabic typography and smooth navigation<br>
    • <strong>Hadith Collections:</strong> Authentic narrations from Prophet Muhammad (PBUH)<br>
    • <strong>Daily Adhkar:</strong> Morning and evening remembrance and supplications<br>
    • <strong>Nearest Mosque Locator:</strong> Find nearby mosques using location services<br>
    • <strong>Islamic Radio:</strong> Live streaming of Quran recitations and Islamic content<br>
    • <strong>Digital Tasbeeh:</strong> Electronic counter for dhikr and remembrance<br>
    • <strong>Community Platform:</strong> Connect with fellow Muslims and share Islamic content<br><br>
    <strong>Localization & Themes:</strong><br>
    • Bilingual support (Arabic/English) with seamless language switching<br>
    • Dark and Light themes for comfortable reading in any environment<br>
    • Responsive UI adapting to different screen sizes<br><br>
    <strong>Technologies Used:</strong><br>
    • Flutter & Dart – for cross-platform development (iOS & Android)<br>
    • MVVM Architecture – for clean, maintainable code structure<br>
    • Bloc/Cubit State Management – efficient state handling across features<br>
    • Location Services – for Qibla direction and mosque finder<br>
    • Local Notifications – for prayer time reminders<br>
    • Local Storage – for offline functionality and caching<br>
    • REST APIs – for fetching prayer times and Islamic content<br>
    • Firebase – for community features and real-time updates<br><br>
    <strong>Development Highlights:</strong><br>
    • Optimized battery consumption for background prayer notifications<br>
    • Offline-first architecture ensuring reliability without internet<br>
    • Published and maintained on both Google Play Store and Apple App Store<br>
    • Collaborative development using Git/GitHub for version control<br>
    • Implemented comprehensive error handling and edge case management<br><br>
    <strong>Skills:</strong> Flutter Development · Cross-Platform Mobile Apps · MVVM Architecture · State Management (Bloc/Cubit) · Location Services · Local Notifications · Bilingual App Development · Dark/Light Themes · REST API Integration · Firebase · Team Collaboration · Git/GitHub · App Store Deployment · Google Play Publishing · Responsive UI Design · Offline-First Architecture
      `;
  imgModal.style.display = "flex";
  document.body.style.overflow = "hidden";
}

function highlightSuhbahImage() {
  imgModalImg.src = suhbahImages[currentsuhbahIndex];
  imgModalImg.alt = "suhbah" + (currentsuhbahIndex + 1);
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
  } else if (imgModalImg.alt.startsWith("suhbah")) {
    currentsuhbahIndex =
      (currentsuhbahIndex - 1 + suhbahImages.length) % suhbahImages.length;
    highlightSuhbahImage();
  }
  else if (imgModalImg.alt.startsWith("Smart Garage")) {
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
  }
  else if (imgModalImg.alt.startsWith("suhbah")) {
    currentsuhbahIndex = (currentsuhbahIndex + 1) % suhbahImages.length;
    highlightSuhbahImage();
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
      // suhbah App project
      if (img.alt === "suhbah") {
        showSuhbahModal(0);
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
      if (img.alt === "suhbah App") {
        showSuhbahModal(0);
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
      // ZABOOMAA PROJECT
      if (img.alt === "Zaboomaa Projects") {
        showZaboomaaModal(0);
        return;
      }
      // SEHHA ADAM PROJECT

      if (img.alt === "Sehha Adam") {
        showSehhaModal(0);
        return;
      }
      if (img.alt === "pet pass") {
        showpetpassModal(0);
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