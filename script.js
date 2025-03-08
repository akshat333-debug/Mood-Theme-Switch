const moodButtons = document.querySelectorAll('button[data-mood]');
const surpriseButton = document.getElementById('surprise');
const moodText = document.getElementById('mood-text');
const body = document.body;

const moods = ["happy", "calm", "energetic", "sad"];

function setMood(mood) {
  body.className = mood;
  moodText.textContent = `You're feeling ${mood.charAt(0).toUpperCase() + mood.slice(1)}!`;
  localStorage.setItem('selectedMood', mood);
}

// Event listeners for mood buttons
moodButtons.forEach(button => {
  button.addEventListener('click', () => {
    const mood = button.getAttribute('data-mood');
    setMood(mood);
  });
});

// Surprise Me functionality
surpriseButton.addEventListener('click', () => {
  const randomMood = moods[Math.floor(Math.random() * moods.length)];
  setMood(randomMood);
});

// Remember mood selection on page reload
document.addEventListener('DOMContentLoaded', () => {
  const savedMood = localStorage.getItem('selectedMood') || 'happy';
  setMood(savedMood);
});
