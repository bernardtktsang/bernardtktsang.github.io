/*document.getElementById('signup-button').addEventListener('click', function() {
    document.getElementById('emailModal').style.display = 'block';
});

document.getElementById('closeModal').addEventListener('click', function() {
    document.getElementById('emailModal').style.display = 'none';
});

document.getElementById('submitEmail').addEventListener('click', function() {
    var email = document.getElementById('emailInput').value;
    // Validate email
    if (email.includes('@')) {
        // Send data to your server
        sendDataToServer(email);
        alert('Thank you for your interest! We will notify you when we launch.');
        document.getElementById('emailModal').style.display = 'none';
    } else {
        alert('Please enter a valid email address.');
    }
});

function sendDataToServer(email) {
    // Implement this function to send data to your server
    // Use AJAX, Fetch API, or similar
    // On the server, you can then handle this data to notify yourself
}


/* document.getElementById('signup-button').addEventListener('click', function() {
    alert('Thank you for your interest! We will notify you when we launch.');
}); */
