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
    } 
     else if (message.toLowerCase().includes('what is your name')) {
        return 'I\'m Alien, here to assist you with Niladri\'s portfolio.';
    } else if (message.toLowerCase().includes('who created you')) {
        return 'I was created by Niladri.';
    } else if (message.toLowerCase().includes('tell me about niladri')) {
        return 'Niladri is a talented man with a passion for creating innovative projects.';
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
    } else if (message.toLowerCase().includes('bye')) {
        return 'Cool!';
   
   
   
    } else if (message.toLowerCase().includes('hi')) {
        return 'Hi! How are you doing today?';
    } 
    
    
    
    else if (message.toLowerCase().includes('how are you')) {
        return 'I\'m an AI, always ready to assist you!';
    } else if (message.toLowerCase().includes('what\'s up')) {
        return 'Not much, just here to help you with any questions you might have!';
    } else if (message.toLowerCase().includes('hola')) {
        return 'Hola! ¿Cómo puedo ayudarte hoy?';
    } else if (message.toLowerCase().includes('bonjour')) {
        return 'Bonjour! Comment puis-je vous aider aujourd\'hui?';
    } else if (message.toLowerCase().includes('you\'re amazing')) {
        return 'Thank you so much! I\'m happy to be able to help you.';
    } else if (message.toLowerCase().includes('you\'re so helpful')) {
        return 'Aww, thank you! I\'m glad I could assist you.';
    } else if (message.toLowerCase().includes('i love this chatbot')) {
        return 'Thank you so much! I\'m happy to be able to provide you with helpful responses.';
    } else if (message.toLowerCase().includes('this chatbot is awesome')) {
        return 'Thank you! I\'m glad you\'re enjoying our conversation.';
    }
    
    // Getting to know you
      else if (message.toLowerCase().includes('interested in')) {
        return "I'm fascinated by the potential of artificial intelligence to solve real-world problems and improve people's lives.";
    }

    // Sharing information
      else if (message.toLowerCase().includes('population of the earth')) {
        return "Yes, that's a staggering number! It's interesting to think about the challenges and opportunities that come with such a large and diverse population.";
    }

    // Asking for opinions
      else if (message.toLowerCase().includes('future of technology')) {
        return 'I believe technology has the potential to revolutionize many aspects of our lives. However, it\'s important to use technology responsibly and ethically.';
    }

    // Asking for help
      else if (message.toLowerCase().includes('help me find information about')) {
        return 'Absolutely! I can provide you with links to articles, reports, and other resources.';
    }

    // Responding to a compliment
      else if (message.toLowerCase().includes('helpful assistant')) {
        return 'Thank you! I\'m always happy to assist you in any way I can.';
    }

    // Ending the conversation
      else if (message.toLowerCase().includes('thank you for your time')) {
        return 'It was my pleasure to help. Have a great day!';
    }

    // General Knowledge
      else if (message.toLowerCase().includes('largest ocean')) {
        return 'The Pacific Ocean';
    } else if (message.toLowerCase().includes('capital of france')) {
        return 'Paris';
    } else if (message.toLowerCase().includes('novel "pride and prejudice"')) {
        return 'Jane Austen';
    } else if (message.toLowerCase().includes('chemical symbol for gold')) {
        return 'Au';
    } else if (message.toLowerCase().includes('tallest mountain')) {
        return 'Mount Everest';
    } else if (message.toLowerCase().includes('largest country')) {
        return 'Russia';
    } else if (message.toLowerCase().includes('world war ii begin')) {
        return '1939';
    } else if (message.toLowerCase().includes('largest desert')) {
        return 'The Sahara Desert';
    } else if (message.toLowerCase().includes('capital of india')) {
        return 'New Delhi';
    } else if (message.toLowerCase().includes('painted the mona lisa')) {
        return 'Leonardo da Vinci';
    }

    // Computer Science
      else if (message.toLowerCase().includes('full form of cpu')) {
        return 'Central Processing Unit';
    } else if (message.toLowerCase().includes('difference between ram and rom')) {
        return 'RAM (Random Access Memory) is volatile memory that stores data temporarily, while ROM (Read-Only Memory) is non-volatile memory that stores data permanently.';
    } else if (message.toLowerCase().includes('operating system')) {
        return 'An operating system is software that manages the hardware and software resources of a computer.';
    } else if (message.toLowerCase().includes('programming language')) {
        return 'A programming language is a set of instructions thattells a computer what to do.';
    } else if (message.toLowerCase().includes('internet')) {
        return 'The internet is a global network of interconnected computer networks.';
    } else if (message.toLowerCase().includes('world wide web')) {
        return 'The World Wide Web is a collection of websites and web pages linked by hyperlinks.';
    } else if (message.toLowerCase().includes('database')) {
        return 'A database is a collection of organized data.';
    } else if (message.toLowerCase().includes('artificial intelligence')) {
        return 'Artificial intelligence is the ability of a computer to mimic human intelligence.';
    } else if (message.toLowerCase().includes('difference between hardware and software')) {
        return 'Hardware is the physical components of a computer, while software is the set of instructions that tells the hardware what to do.';
    } else if (message.toLowerCase().includes('purpose of a compiler')) {
        return 'A compiler translates high-level code into machine code that the computer can understand.';
    }

    // Physics
      else if (message.toLowerCase().includes('law of gravity')) {
        return 'The law of gravity states that every object in the universe attracts every other object with a force proportional to the product of their masses and inversely proportional to the square of the distance between them.';
    } else if (message.toLowerCase().includes('three states of matter')) {
        return 'Solid, liquid, and gas';
    } else if (message.toLowerCase().includes('difference between force and mass')) {
        return 'Force is a push or pull that can change the motion of an object, while mass is a measure of the amount of matter in an object.';
    } else if (message.toLowerCase().includes('speed of light')) {
        return 'The speed of light is approximately 299,792,458 meters per second.';
    } else if (message.toLowerCase().includes('difference between energy and power')) {
        return 'Energy is the ability to do work, while power is the rate at which energy is transferred.';
    } else if (message.toLowerCase().includes('first law of thermodynamics')) {
        return 'The first law of thermodynamics states that energy cannot be created or destroyed, only transferred from one form to another.';
    } else if (message.toLowerCase().includes('second law of thermodynamics')) {
        return 'The second law of thermodynamics states that entropy, or the measure of disorder in a system, always increases over time.';
    } else if (message.toLowerCase().includes('difference between conduction, convection, and radiation')) {
        return 'Conduction is the transfer of heat through direct contact, convection is the transfer of heat through the movement of fluids, and radiation is the transfer of heat through electromagnetic waves.';
    } else if (message.toLowerCase().includes('theory of relativity')) {
        return 'The theory of relativity is a theory of physics that explains the relationship between space, time, gravity, and motion.';
    } else if (message.toLowerCase().includes('quantum theory')) {
        return 'The quantum theory is a theory of physics that explains the behavior of matter and energy at the atomic and subatomic level.';
    }

    // Mathematics
      else if (message.toLowerCase().includes('pythagorean theorem')) {
        return 'The Pythagorean theorem states that in a right triangle, the square of the hypotenuse (the side opposite the right angle) is equal to the sum of the squares of the other two sides.';
    } else if (message.toLowerCase().includes('derivative of x^2')) {
        return 'The derivative of x^2 is 2x.';
    } else if (message.toLowerCase().includes('integral of 1/x')) {
        return 'The integral of 1/x is ln(x).';
    } else if (message.toLowerCase().includes('difference between an equation and an inequality')) {
        return 'An equation is a statement that two expressions are equal, while an inequality is a statement that two expressions are not equal.';
    } else if (message.toLowerCase().includes('probability')) {
        return 'Probability is the chance of an event happening.';
    } else if (message.toLowerCase().includes('difference between mean, median, and mode')) {
        return 'Mean is the average of a set of numbers, median is the middle number when the numbers are ordered from least to greatest, and mode is the most frequent number in a set.';
    } else if (message.toLowerCase().includes('complex number')) {
        return 'A complex number is a number that consists of a real part and an imaginary part.';
    } else if (message.toLowerCase().includes('difference between a function and a relation')) {
        return 'A function is a relation where each input has exactly one output, while a relation can have multiple outputs for a single input.';
    } else if (message.toLowerCase().includes('calculus a computer')) {
        return 'Calculus is a branch can of mathematics that deals with follow limits, derivatives, and to integrals.';
    } 

    // Technology
      else if (message.toLowerCase().includes('web server')) {
        return 'A web server is a server that stores, processes, and delivers web pages to users.';
    } else if (message.toLowerCase().includes('client-server model')) {
        return 'In the client-server model, a client is a device that sends requests to a server for services.';
    } else if (message.toLowerCase().includes('ip address')) {
        return 'An IP address is a unique numerical label assigned to each device connected to a computer network that uses the Internet Protocol for communication.';
    } else if (message.toLowerCase().includes('computer architecture')) {
        return 'Computer architecture is the design of a computer system or network, consisting of hardware, software, or firmware, and the principles used to organize and utilize its components.';
    } else if (message.toLowerCase().includes('osi model')) {
        return 'The OSI model is a conceptual framework that characterizes the functions of a telecommunication or computing system. It consists of seven layers, starting from the physical layer and ending with the application layer.';
    } else if (message.toLowerCase().includes('protocol')) {
        return 'A protocol is a set of rules that dictate how computers communicate with each other.';
    } else if (message.toLowerCase().includes('port')) {
        return 'A port is a number that uniquely identifies a specific process on a computer.';
    } else if (message.toLowerCase().includes('ipv6')) {
        return 'IPv6 is the next version of the Internet Protocol, designed to provide a much larger number of unique IP addresses and better support for large data volumes.';
    } else if (message.toLowerCase().includes('big endian')) {
        return 'Big endian is a term used in computer networks to describe a way of storing and transmitting data. In this method, the most significant byte is stored first, followed by the remaining bytes.';
    } else if (message.toLowerCase().includes('little endian')) {
        return 'Little endian is a term used in computer networks to describe a way of storing and transmitting data. In this method, the least significant byte is stored first, followed by the remaining bytes.';
    } else if (message.toLowerCase().includes('stack overflow')) {
        return 'Stack overflow is a run-time error that occurs when the call stack is filled beyond its capacity, typically because of excessive recursion or infinite recursion.';
    } else if (message.toLowerCase().includes('dynamic memory allocation')) {
        return 'Dynamic memory allocation is a technique used in computer programming where memory is allocated during the execution of a program. This memory is then released once it is no longer needed.';
    } else if (message.toLowerCase().includes('linked list')) {
        return 'A linked list is a linear data structure, in which elements are stored in a sequence and linked using pointers.';
    } else if (message.toLowerCase().includes('garbage collection')) {
        return 'Garbage collection is a mechanism in computer programming that automatically reclaims memory occupied by objects that are no longer in use.';
    } else if (message.toLowerCase().includes('functional programming')) {
        return 'Functional programming is a programming paradigm where functions are first-class citizens, meaning they can be assigned to variables, passed as arguments, and returned as values from other functions.';
    } else if (message.toLowerCase().includes('database')) {
        return 'A database is an organized collection of data, which is typically stored electronically in a computer system.';
    } else if (message.toLowerCase().includes('binary tree')) {
        return 'A binary tree is a tree data structure in which each node has at most two children, usually referred to as the left child and the right child.';
    } else if (message.toLowerCase().includes('queue')) {
        return 'A queue is a data structure that stores elements in a linear sequence. In a queue, elements are added at the rear end and removed from the front end.';
    } else if (message.toLowerCase().includes('circular queue')) {
        return 'A circular queue is a data structure that uses a single, fixed-size buffer as if it were connected end-to-end.';
    } else if (message.toLowerCase().includes('priority queue')) {
        return 'A priority queue is a special type of queue that stores elements with priority. Elements with higher priority are served before elements with lower priority.';
    } else if (message.toLowerCase().includes('quicksort')) {
        return 'Quicksort is a widely used efficient sorting algorithm. It is based on the divide and conquer technique and is suitable for sorting large data sets.';
    } else if (message.toLowerCase().includes('bubble sort')) {
        return 'Bubble sort is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order.';
    } else if (message.toLowerCase().includes('binary search')) {
        return 'Binary search is a searching algorithm that finds the position of a given element in a sorted array. It compares the middle element of the array with the given element.';
    } else if (message.toLowerCase().includes('recursion')) {
        return 'Recursion is a technique in computer programming where a function calls itself directly or indirectly. It allows the function to repeat its actions until a specific condition is met.';
    } else if (message.toLowerCase().includes('graph')) {
        return 'A graph is a data structure consisting of a finite set of vertices (or nodes) and a set of edges that connect these vertices.';
    } else if (message.toLowerCase().includes('dijkstra\'s algorithm')) {
        return 'Dijkstra\'s algorithm is a graph search algorithm that solves the single-source shortest path problem for a graph with non-negative edge path costs, producing a shortest path tree.';
    } else if (message.toLowerCase().includes('greedy algorithm')) {
        return 'A greedy algorithm is a simple, intuitive algorithm used in optimization and decision-making problems. It makes the locally optimal choice at each step, with the hope of finding the global optimum.';
    } else if (message.toLowerCase().includes('binary search tree')) {
        return 'A binary search tree is a binary tree data structure in which each node has at most two children, usually referred to as the left child and the right child. Each node stores a key greater than all keys in its left subtree and less than all keys in its right subtree.';
    } else if (message.toLowerCase().includes('fibonacci sequence')) {
        return 'The Fibonacci sequence is a sequence of numbers in which each number is the sum of the two preceding ones, usually starting with 0 and 1.';
    } else if (message.toLowerCase().includes('merge sort')) {
        return 'Merge sort is a divide and conquer algorithm that splits a list into sub-lists, recursively sorts them, and then merges them back together.';
    } else if (message.toLowerCase().includes('breadth-first search')) {
        return 'Breadth-first search is a graph traversal algorithm that explores all the vertices at the current level before moving on to the vertices at the next level.';
    } else if (message.toLowerCase().includes('depth-first search')) {
        return 'Depth-first search is a graph traversal algorithm that explores as far as possible along each branch before backtracking.';
    } else if (message.toLowerCase().includes('euclidean algorithm')) {
        return 'The Euclidean algorithm is a method for computing the greatest common divisor (GCD) of two integers.';
    } else if (message.toLowerCase().includes('big-o notation')) {
        return 'Big-O notation is a mathematical notation that describes the limiting behavior of a function when the argument tends towards a particular value or infinity.';
    } else if (message.toLowerCase().includes('machine learning')) {
        return 'Machine learning is a subfield of artificial intelligence that enables computers to learn from and make predictions on data.';
    } else if (message.toLowerCase().includes('natural language processing')) {
        return 'Natural language processing is a subfield of artificial intelligence that focuses on enabling computers to understand, interpret, and generate human text.';
    } else if (message.toLowerCase().includes('neural network')) {
        return 'A neural network is a computational model inspired by the human brain, consisting of interconnected nodes or neurons organized in layers.';
    } else if (message.toLowerCase().includes('supervised learning')) {
        return 'Supervised learning is a type of machine learning where an algorithm learns from labeled training data. It is called supervised learning because the algorithm is "supervised" or "guided" in learning the correct output.';
    } else if (message.toLowerCase().includes('unsupervised learning')) {
        return 'Unsupervised learning is a type of machine learning where an algorithm learns from unlabeled training data. It is called unsupervised learning because the algorithm is not guided or supervised in learning the correct output.';
    }

    else if (message.toLowerCase().includes('breadth-first search')) {
        return 'Breadth-first search is a graph traversal algorithm that explores all the vertices at the current level before moving on to the vertices at the next level.';
    } else if (message.toLowerCase().includes('depth-first search')) {
        return 'Depth-first search is a graph traversal algorithm that explores as far as possible along each branch before backtracking.';
    } else if (message.toLowerCase().includes('Bellman-Ford algorithm')) {
        return 'Bellman-Ford algorithm is a graph traversal algorithm that computes shortest path from a source vertex to all other vertices in a weighted graph.';
    } else if (message.toLowerCase().includes('Floyd-Warshall algorithm')) {
        return 'Floyd-Warshall algorithm is a graph traversal algorithm that computes shortest paths between all pairs of vertices in a weighted graph.';
    } else if (message.toLowerCase().includes('Dijkstra algorithm')) {
        return 'Dijkstra algorithm is a graph traversal algorithm that computes shortest path from a source vertex to all other vertices in a graph.';
    } else if (message.toLowerCase().includes('binary search algorithm')) {
        return 'Binary search algorithm is a searching algorithm that finds the position of a target value within a sorted array.';
    } else if (message.toLowerCase().includes('linear search algorithm')) {
        return 'Linear search algorithm is a searching algorithm that finds the position of a target value within an array.';
    } else if (message.toLowerCase().includes('merge sort algorithm')) {
        return 'Merge sort algorithm is a divide and conquer algorithm that divides a list into two halves, recursively sorts them, and then merges the results.';
    } else if (message.toLowerCase().includes('quick sort algorithm')) {
        return 'Quick sort algorithm is a divide and conquer algorithm that selects a pivot element from the array and partitions the other elements into two sub-arrays, according to whether they are less than or greater than the pivot. The sub-arrays are then recursively sorted.';
    } else if (message.toLowerCase().includes('selection sort algorithm')) {
        return 'Selection sort algorithm is a simple comparison sort algorithm that repeatedly selects the minimum element from the unsorted part and puts it at the beginning of the sorted part.';
    } else if (message.toLowerCase().includes('heap sort algorithm')) {
        return 'Heap sort algorithm is a comparison sort algorithm that uses a binary heap data structure to efficiently sort elements.';
    } else if (message.toLowerCase().includes('radix sort algorithm')) {
        return 'Radix sort algorithm is a non-comparative sorting algorithm that sorts numbers by processing individual digits.';
    } else if (message.toLowerCase().includes('Shell sort algorithm')) {
        return 'Shell sort algorithm is a variation of insertion sort that allows the swapping of elements that are not in the same sequence.';
    } else if (message.toLowerCase().includes('Sieve of Eratosthenes algorithm')) {
        return 'Sieve of Eratosthenes algorithm is a simple and ancient algorithm for finding all prime numbers up to any given limit.';
    }

      else {
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
