function handleSignup(event) {
    event.preventDefault(); // Prevent the default form submission

    // Gather input values
    const name = document.getElementById('name').value;
    const color = document.getElementById('color').value;
    const phoneNumber = document.getElementById('phonenumber').value;
    const city = document.getElementById('timezone').value; // Use city input for timezone

    // Construct the message to send to Telegram
    const message = `New Signup:\nName: ${name}\nFavorite Color: ${color}\nPhone Number: ${phoneNumber}\nCity: ${city}`;

    // Replace with your actual bot token and chat ID
    const botToken = '7643200755:AAEnY79hQQ98ovHCmOp-IOcscwvDGqUbEMM'; // Replace with your bot token
    const chatId = '6214817938'; // Replace with your chat ID

    // Construct the Telegram API URL
    const url = `https://api.telegram.org/bot${botToken}/sendMessage`;

    // Create the payload
    const payload = {
        chat_id: chatId,
        text: message
    };

    // Send the data to the Telegram bot
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    })
    .then(response => response.json())
    .then(data => {
        if (data.ok) {
            alert('Message sent successfully!');
            // Optionally, you can clear the form after submission
            document.getElementById('signupForm').reset();
        } else {
            alert('Error sending message: ' + data.description);
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Error sending message.');
    });
}

// Add this line to attach the handleSignup function to the submit button
document.getElementById('submitButton').addEventListener('click', handleSignup);