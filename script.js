const container = document.getElementById('container')
const registerbtn = document.getElementById('register')
const loginbtn = document.getElementById('login')

registerbtn.addEventListener('click', ()=>{
    container.classList.add("active");
})

loginbtn.addEventListener('click', ()=>{
    container.classList.remove("active");
})

function validateEmail(email) {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(email);
}

function validatePassword(password) {
    const regex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{6,}$/;
    return regex.test(password);
}

document.getElementById("signUpForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let valid = true;

    const name = document.getElementById("signUpName").value.trim();
    if (name === "") {
        document.getElementById("nameError").textContent = "Name is required";
        valid = false;
    } else {
        document.getElementById("nameError").textContent = "";
    }

    const email = document.getElementById("signUpEmail").value.trim();
    if (!validateEmail(email)) {
        document.getElementById("emailError").textContent = "Invalid email format";
        valid = false;
    } else {
        document.getElementById("emailError").textContent = "";
    }

    const password = document.getElementById("signUpPassword").value.trim();
    if (!validatePassword(password)) {
        document.getElementById("passwordError").textContent = "Password must be at least 6 characters, include a number and special character";
        valid = false;
    } else {
        document.getElementById("passwordError").textContent = "";
    }

    if (valid) {
        alert("Form is valid and ready for submission!");
    }
});

document.getElementById("signInForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let valid = true;

    const signInEmail = document.getElementById("signInEmail").value.trim();
    if (!validateEmail(signInEmail)) {
        document.getElementById("signInEmailError").textContent = "Invalid email format";
        valid = false;
    } else {
        document.getElementById("signInEmailError").textContent = "";
    }

    const signInPassword = document.getElementById("signInPassword").value.trim();
    if (signInPassword === "") {
        document.getElementById("signInPasswordError").textContent = "Password is required";
        valid = false;
    } else {
        document.getElementById("signInPasswordError").textContent = "";
    }

    if (valid) {
        alert("Form is valid and ready for submission!");
    }
});