// Select the kick button and audio element from the HTML
const kickButton = document.getElementById("kick-btn");
const kickSound = document.getElementById("kick-sound");

// Reusable helper function to reset and play any drum sound
function playSound(sound) {
  sound.currentTime = 0;
  sound.play();
}

// Play the kick sound on button click
kickButton.addEventListener("click", () => playSound(kickSound));

// Play the kick sound when the "a" key is pressed
document.addEventListener("keydown", (event) => {
  if (event.key.toLowerCase() === "a") playSound(kickSound);
});