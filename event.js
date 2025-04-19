// scripts.js
function showDetails(eventId) {
    const details = document.getElementById(`details-${eventId}`);
    if (details.style.display === "none" ||!details.style.display); {
        details.style.display = "block";
    } 
    else {
        details.style.display = "none"}
    }


// scripts.js

// Function to show details for events
function showDetails(eventId) {
    const details = document.getElementById(`details-${eventId}`);
    if (details.style.display === "none" || !details.style.display) {
        details.style.display = "block";
    } else {
        details.style.display = "none";
    }
}

// Chatbot functionality
const chatbotMessages = document.getElementById("chatbot-messages");
const chatbotInput = document.getElementById("chatbot-input");

function sendMessage() {
    const userMessage = chatbotInput.value.trim();
    if (userMessage === "") return;

    // Display user's message
    displayMessage(userMessage, "user");

    // Clear input field
    chatbotInput.value = "";

    // Simulate chatbot response
    setTimeout(() => {
        const response = generateResponse(userMessage);
        displayMessage(response, "chatbot");
    }, 500);
}

function displayMessage(message, sender) {
    const messageElement = document.createElement("div");
    messageElement.className = `message ${sender}`;
    messageElement.textContent = message;
    chatbotMessages.appendChild(messageElement);

    // Scroll to the bottom
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
}

function generateResponse(userMessage) {
    // Simple responses for demonstration
    if (userMessage.toLowerCase().includes("event")) {
        return "You can find details about our events above. Let us know if you need more information!";
    } else if (userMessage.toLowerCase().includes("hello")) {
        return "Hello! How can we assist you today?";
    } else {
        return "Thank you for your message! We'll get back to you shortly.";
    }
}
