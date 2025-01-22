function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

function getCookie(name) {
    const cname = name + "=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(cname) === 0) {
            return c.substring(cname.length, c.length);
        }
    }
    return "";
}

function register() {
    const username = document.getElementById('registerUsername').value;
    const password = document.getElementById('registerPassword').value;
    
    if (username && password) {
        setCookie(`user_${username}`, password, 7);
        alert("User registered successfully!");
    } else {
        alert("Please enter both username and password to register.");
    }
}

function login() {
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;
    
    const storedPassword = getCookie(`user_${username}`);
    
    if (storedPassword) {
        if (storedPassword === password) {
            alert("Login successful!");
            window.location.href = "19871345uhwbbfjj123jfhj5hg.html"; // Redirect to the specified HTML file
        } else {
            alert("Incorrect password.");
        }
    } else {
        alert("Username does not exist. Please register first.");
    }
}

function recoverPassword() {
    const username = document.getElementById('recoverUsername').value;
    
    const storedPassword = getCookie(`user_${username}`);
    
    if (storedPassword) {
        alert(`Your password is: ${storedPassword}`);
    } else {
        alert("Username does not exist.");
    }
}
