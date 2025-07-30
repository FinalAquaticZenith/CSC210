// ========================================
// main.js - Simple Dark Mode Toggle
// ========================================

// Wait for page to load
document.addEventListener('DOMContentLoaded', function() {
    
    
    // Get the theme toggle button
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    
    // Check if user has a saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.add('dark-theme');
        themeToggle.textContent = '☀️ Light Mode';
    }
    
    // Add click event to theme toggle button
    themeToggle.addEventListener('click', function() {
        // Toggle the dark theme class
        body.classList.toggle('dark-theme');
        
        // Check if dark theme is now active
        const isDark = body.classList.contains('dark-theme');
        
        // Update button text
        themeToggle.textContent = isDark ? '☀️ Light Mode' : '🌙 Dark Mode';
        
        // Save theme preference
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });
});


const api_url = "https://zenquotes.io/api/quotes/random";

async function getapi(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();      
    console.log(data);                       
    console.log(data[0].q, "-", data[0].a);  
  } catch (err) {
    console.error("Fetch error:", err);
  }
}

//i cant seem to get it to work
getapi(api_url);
const quote = getElementById("quote")

const now = new Date();
const time = now.toLocaleTimeString();
quote.textContent = getapi(api_url);
if (time == "12:00:00 AM"){
    quote.textContent = getapi; 
}
const slider = document.querySelector('.slider');
const slides = slider.querySelectorAll('li');

// Store the total number of images
const slideCount = slides.length;
let activeSlide = 0;

// To change the images dynamically every 
// 5 Secs, use SetInterval() method
setInterval(() => {
  slides[activeSlide].classList.remove('active');
  activeSlide++;
  if (activeSlide === slideCount) {
    activeSlide = 0;
  }
  slides[activeSlide].classList.add('active');
}, 2000);