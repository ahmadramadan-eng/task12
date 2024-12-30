
// task1

alert("Welcome to my site");

    
let username = prompt("Please enter your name:");

    
let color = prompt("Choose a color for your name (red, green, or blue):").toLowerCase();

    
const validColors = ["red", "green", "blue"];
while (!validColors.includes(color)) {
    color = prompt("Invalid choice. Please choose either red, green, or blue:").toLowerCase();
}

    
document.body.innerHTML = `<h1 style="color: ${color};">Welcome, ${username}!</h1>`;


// task 2 

let userMessage = prompt("Enter a message to display:");


for (let i = 1; i <= 6; i++) {

let heading = document.createElement(`h${i}`);


heading.textContent = userMessage;


document.body.appendChild(heading);
}
