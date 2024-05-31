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
    // GitHub profile picture URL
    var githubProfilePictureUrl = "https://avatars.githubusercontent.com/u/125604915?v=4";

    // Create img element
    var img = document.createElement('img');

    // Set src attribute to GitHub profile picture URL
    img.src = githubProfilePictureUrl;

    // Set alt text (optional)
    img.alt = "GitHub Profile Picture";

    // Add img element to the header or any desired location in your HTML
    var header = document.querySelector('header');
    header.appendChild(img);
}

// Call the function to display GitHub profile picture
displayGitHubProfilePicture();

// Disable text selection and copying for the whole document except for code snippets
document.addEventListener('copy', function(e) {
    if (e.target.tagName !== 'CODE') {
        e.preventDefault();
    }
});

document.addEventListener('mousedown', function(e) {
    if (e.target.tagName !== 'CODE') {
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
        audio.currentTime += 10; // Forward 10 seconds
    } else if (action === 'backward') {
        audio.currentTime -= 10; // Rewind 10 seconds
    }
}
