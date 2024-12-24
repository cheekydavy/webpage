document.getElementById('submitButton').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Gather input values
    const name = document.getElementById('name').value;
    const color = document.getElementById('color').value;
    const phonenumber = document.getElementById('phonenumber').value;
    const location = document.getElementById('timezone').value;

    // Open a new tab for the greeting message
    const newTab = window.open('', '_blank'); // Specify '_blank' to open a new tab
    if (!newTab) {
        alert('Please allow popups for this website to see the greeting.');
        return; // Exit if the new tab could not be opened
    }

    // Change the background color of the current document
    document.body.style.backgroundColor = color;

    // Check if any input is provided
    if (name || color || location || phonenumber) {
        // Set the content of the new tab
        newTab.document.write(`
            <html>
                <head>
                    <title>Greeting</title>
                    <style>
                        body {
                            font-family: Arial, sans-serif;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            height: 100vh;
                            background-color: green;
                            color: #333;
                            text-align: center;
                            background-image: url('/images/tree3.jpg');
                            background-size: 150%;
                            background-position: center;
                            background-repeat: no-repeat;
                        }
                        h1 {
                            justify-content: center;
                            display: flex;
                            font-family: gabriola;
                            color: white;
                        }
                        p {
                            font-family: gabriola;
                            font-size: 35px;
                            justify-content: left 100px;
                            height: 60vh;
                            color: ${color || '#ffffff'};
                        }
                        .container {
                            font-family: Gabriola;
                            text-align: center;
                            padding: 20px;
                            border-radius: 15px;                    
                        }
                    </style>
                </head>
                <body>
                    <div class="container">
                        <h1>Merry Christmas  🌳, ${name || 'Guest'}!</h1>
                        <p>Enjoy your colorful experience!</p>
                    </div>
                </body>
            </html>
        `);
    } else {
        newTab.document.write(`
            <html>
                <head>
                    <title>Warning 👈🏾</title>
                </head>
                <style>
                    body {
                        font-family: Chiller;
                        text-align: center;
                        justify-content: center;
                        display: flex;
                        align-items: center;
                        text-size-adjust: 100%;
                        height: 100vh;
                        font-size: 50px;
                        background-color: red;
                    }
                </style>
                <body>
                    <p>Why are you running? 🤣 🤣</p>
                </body>
            </html>
        `);
    }

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
});

