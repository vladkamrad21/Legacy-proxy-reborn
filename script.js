     // JavaScript function to validate username and password
     function validate(event) {
        event.preventDefault(); // Prevent form from submitting

        // Get the input values
        const usernameInput = document.getElementById('username').value.trim();
        const passwordInput = document.getElementById('password').value.trim();

        // Set up predefined usernames and passwords
        const validUsers = [
            { username: 'vladkamrad', password: '9865' },
            { username: 'waylan', password: '1478' },
            { username: 'sid', password: '4569' },
            { username: 'Vladkamrad', password: '9865' },
            { username: 'Waylan', password: '1478' },
            { username: 'Sid', password: '4569' },
            { username: 'undefined', password: '0950' }
        ];

        // Check if the input matches any of the predefined credentials
        const user = validUsers.find(user => 
            user.username === usernameInput && user.password === passwordInput
        );

        if (user) {
            // If credentials are correct
            alert(`you are logged in as a goofy goober`); 
            window.location.href = 'Welcome1.html';
        } else {
            // If credentials are incorrect
            const errorMsg = document.getElementById('error'); 
            errorMsg.textContent = 'Invalid username or password. Please try again.';
        }
    }