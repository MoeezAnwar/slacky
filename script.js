// Excuse Arrays
const pakistaniExcuses = [
    "Meray pait mein dard hai!", // Classic excuse!
    "Meri chappal toot gayi thi...",
    "Bijli chali gayi thi, laptop charge nahi tha.",
    "Meri bike ka tyre puncture ho gaya tha.",
    "Mujhe shaadi pe jaana tha, family ka pressure tha.",
    "Yaar, traffic itna tha, K-Electric wali kabhi light on karain bhi.",
    "Mei bas nikla hi tha, abhi gadi mein tha…",
    "Mujhe raat ko bhutni nazar ayi thi, bas dar gaya thoda.",
    "Meri billo rani ne bulaya tha, kya karoon?"
  ];
  
  const otherExcuses = [
    "Aliens abducted me and ran experiments.",
    "My pet goldfish needed emotional support.",
    "I was too busy arguing with my cat about politics.",
    "My imaginary friend forgot the address.",
    "I had a staring contest with my reflection.",
    "I was temporarily teleported to another dimension.",
    "I’m allergic to productivity on weekends.",
    "Netflix asked me for my opinion on new shows.",
    "I got lost in my thoughts and couldn’t find my way back."
  ];
  
  // DOM Elements
  const overlay = document.getElementById("overlay");
  const pakistaniBtn = document.getElementById("pakistani-btn");
  const otherBtn = document.getElementById("other-btn");
  const excuseDisplay = document.getElementById("excuse-display");
  const generateExcuseBtn = document.getElementById("generate-excuse");
  
  let currentExcuses = [];
  
  // Show Excuse Generator after choice
  const showGenerator = () => {
    overlay.style.display = "none"; 
    document.querySelector(".container").style.display = "block";
  };
  
  // Button Listeners for Popup Choices
  pakistaniBtn.addEventListener("click", () => {
    currentExcuses = pakistaniExcuses;
    showGenerator();
  });
  
  otherBtn.addEventListener("click", () => {
    currentExcuses = otherExcuses;
    showGenerator();
  });
  
  // Generate Random Excuse
  generateExcuseBtn.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * currentExcuses.length);
    excuseDisplay.textContent = currentExcuses[randomIndex];
  });
  