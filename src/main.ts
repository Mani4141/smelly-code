// CMPM 121 Smelly Code Activity

// This variable keeps track of the counter
let count = 0;

// These constants are for button IDs and heading text
const INCREMENT_ID = "increment";
const DECREMENT_ID = "decrement";
const RESET_ID = "reset";
const COUNTER_ID = "counter";
const HEADING_TEXT = "CMPM 121 Project";

function setup() {
  // Create the HTML for the counter
  document.body.innerHTML = `
    <h1>${HEADING_TEXT}</h1>
    <p>Counter: <span id="${COUNTER_ID}">0</span></p>
    <button id="${INCREMENT_ID}">Increment</button>
    <button id="${DECREMENT_ID}">Decrement</button>
    <button id="${RESET_ID}">Reset</button>
  `;

  const incrementBtn = document.getElementById(INCREMENT_ID);
  const decrementBtn = document.getElementById(DECREMENT_ID);
  const resetBtn = document.getElementById(RESET_ID);
  const counterDisplay = document.getElementById(COUNTER_ID);

  // Check if any element is missing, then exit the function
  if (!incrementBtn || !decrementBtn || !resetBtn || !counterDisplay) return;

  // Function to update UI after counter changes
  function updateUI() {
    if (!counterDisplay) return;
    counterDisplay.innerHTML = `${count}`;
    document.title = "Clicked " + count;
    document.body.style.backgroundColor = count % 2 ? "pink" : "lightblue";
  }

  // Event listeners for buttons
  incrementBtn.addEventListener("click", () => {
    count++;
    updateUI();
  });

  decrementBtn.addEventListener("click", () => {
    count--;
    updateUI();
  });

  resetBtn.addEventListener("click", () => {
    count = 0;
    updateUI();
  });
}

function start() {
  // Call setup to initialize the UI
  setup();
}
// Start the counter app
start();
