// Function to detect device type and model
function detectDeviceDetails() {
    const userAgent = navigator.userAgent;

    let deviceDetails = '';

    if (/Macintosh/i.test(userAgent)) {
        deviceDetails = 'Mac Device: macOS';
        deviceDetails += `, Screen Size: 2560 x 1600 (Estimated)`;
    } else if (/iPhone|iPad|iPod/i.test(userAgent)) {
        deviceDetails = 'Mobile Device: iOS';
        deviceDetails += `, Screen Size: ${window.innerWidth} x ${window.innerHeight}`;
    } else if (/Android/i.test(userAgent)) {
        deviceDetails = 'Mobile Device: Android';
        deviceDetails += `, Screen Size: ${window.innerWidth} x ${window.innerHeight}`;
    } else if (/Windows/i.test(userAgent)) {
        deviceDetails = 'Desktop Device: Windows';
        deviceDetails += `, Screen Size: ${window.innerWidth} x ${window.innerHeight}`;
    } else if (/Linux/i.test(userAgent)) {
        deviceDetails = 'Desktop Device: Linux';
        deviceDetails += `, Screen Size: ${window.innerWidth} x ${window.innerHeight}`;
    } else {
        deviceDetails = 'Unknown Device';
        deviceDetails += `, Screen Size: ${window.innerWidth} x ${window.innerHeight}`;
    }

    return deviceDetails;
}

// Function to update device details information on the webpage
function updateDeviceDetails() {
    const deviceDetails = detectDeviceDetails();
    const deviceInfoElement = document.getElementById('device-info');
    deviceInfoElement.textContent = `Device Details: ${deviceDetails}`;
}

// Call the function to update device details information
updateDeviceDetails();

document.getElementById('toggle-mode').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    this.textContent = document.body.classList.contains('dark-mode') ? 'Light Mode' : 'Dark Mode';
});

function copyCode(id) {
    var codeSnippet = document.getElementById(id).innerText;
    navigator.clipboard.writeText(codeSnippet).then(function() {
        alert('Code copied to clipboard!');
    }, function() {
        alert('Failed to copy code.');
    });
}

// Function to fetch and display GitHub profile picture
function displayGitHubProfilePicture() {
    var githubProfilePictureUrl = "https://avatars.githubusercontent.com/u/125604915?v=4";
    var img = document.createElement('img');
    img.src = githubProfilePictureUrl;
    img.alt = "GitHub Profile Picture";
    var header = document.querySelector('header');
    header.appendChild(img);
}

// Call the function to display GitHub profile picture
displayGitHubProfilePicture();

// Disable text selection and copying for the whole document except for code snippets and chatbot
document.addEventListener('copy', function(e) {
    if (e.target.tagName !== 'CODE' && e.target.id !== 'user-input') {
        e.preventDefault();
    }
});

document.addEventListener('mousedown', function(e) {
    if (e.target.tagName !== 'CODE' && e.target.id !== 'user-input') {
        e.preventDefault();
    }
});

// Audio functionality
function toggleAudio(action) {
    var audio = document.getElementById("audio");
    var playButton = document.getElementById("playButton");

    if (action === 'play') {
        audio.play();
        playButton.textContent = "Pause Audio";
    } else if (action === 'pause') {
        audio.pause();
        playButton.textContent = "Play Audio";
    } else if (action === 'forward') {
        audio.currentTime += 10;
    } else if (action === 'backward') {
        audio.currentTime -= 10;
    }
}

// Chatbot functionality
function sendMessage() {
    const userInput = document.getElementById('user-input');
    const userMessage = userInput.value.trim();
    if (userMessage !== '') {
        appendMessage('user', userMessage);
        processUserMessage(userMessage);
        userInput.value = '';
    }
}

function processUserMessage(message) {
    const response = generateResponse(message);
    setTimeout(() => {
        appendMessage('bot', response);
    }, 500);
}

function generateResponse(message) {
    if (message.toLowerCase().includes('hello')) {
        return 'Hey there! Welcome.';
    } else if (message.toLowerCase().includes('hey')) {
        return 'Hi';
    } else if (message.toLowerCase().includes('how are you')) {
        return 'I\'m always great!';
    } else if (message.toLowerCase().includes('what is your name')) {
        return 'I\'m Alien, here to assist you with Niladri\'s portfolio.';
    } else if (message.toLowerCase().includes('who created you')) {
        return 'I was created by Neural-cells.';
    } else if (message.toLowerCase().includes('tell me about niladri')) {
        return 'Niladri is a talented Alien with a passion for creating innovative projects.';
    } else if (message.toLowerCase().includes('what skills does niladri have')) {
        return 'Niladri is proficient in web development, including HTML, CSS, JavaScript, and more.';
    } else if (message.toLowerCase().includes('projects')) {
        return 'Niladri has worked on a variety of projects, including websites, neural networks, and more.';
    } else if (message.toLowerCase().includes('contact')) {
        return 'You can contact Niladri via email at niladritesla12@gmail.com or through social media.';
    } else if (message.toLowerCase().includes('who are you')) {
        return 'I\'m known to you but still secret.';
    } else if (message.toLowerCase().includes('alien')) {
        return 'Yes, still helping humanity!';
    } else {
        return "Fine, I will tell that later.";
    }
}



function appendMessage(sender, message) {
    const messagesList = document.getElementById('messages');
    const messageElement = document.createElement('li');
    messageElement.classList.add('message', sender === 'user' ? 'user-message' : 'bot-message');
    messageElement.textContent = message;
    messagesList.appendChild(messageElement);
    messagesList.scrollTop = messagesList.scrollHeight;
}

// Chatbot show/hide functionality
function toggleChatbot() {
    const chatbotContainer = document.getElementById('chatbot-container');
    const chatButton = document.getElementById('chat-button');
    if (chatbotContainer.style.display === 'none' || !chatbotContainer.style.display) {
        chatbotContainer.style.display = 'block';
        chatButton.style.display = 'none';
    } else {
        chatbotContainer.style.display = 'none';
        chatButton.style.display = 'block';
    }
}

// Event listener for the chat button
document.getElementById('chat-button').addEventListener('click', toggleChatbot);

// Handle key press event
document.getElementById('user-input').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
});
