const Register = document.getElementById("register");
const Username = document.getElementById("userName");
const RegisterEmail = document.getElementById("email");
const RegisterPassword = document.getElementById("password");
const DateofBirth = document.getElementById("dateofBirth");
const ConfirmPassword = document.getElementById("confirmPassword");
const UsernameError = document.getElementById("userNameError");
const RegisterEmailError = document.getElementById("emailError");
const RegisterPasswordError = document.getElementById("passwordError");
const ConfirmPasswordError = document.getElementById("confirmPasswordError");
const DateOfBirthError = document.getElementById("dateofBirthError");

const userLocal = JSON.parse(localStorage.getItem("users")) || [];

Register.addEventListener("submit", function(e) {
    e.preventDefault(); // Prevent default form submission

    // Clear previous error messages
    UsernameError.style.display = "none";
    RegisterEmailError.style.display = "none";
    RegisterPasswordError.style.display = "none";
    ConfirmPasswordError.style.display = "none";
    DateOfBirthError.style.display = "none";

    let isValid = true; // Flag to check if the form is valid

    // Validate fields
    if (!Username.value) {
        UsernameError.style.display = "block";
        isValid = false;
    }
    
    if (!RegisterEmail.value) {
        RegisterEmailError.style.display = "block";
        isValid = false;
    }
    
    if (!RegisterPassword.value) {
        RegisterPasswordError.style.display = "block";
        isValid = false;
    }
    
    if (!ConfirmPassword.value) {
        ConfirmPasswordError.style.display = "block";
        isValid = false;
    }
    
    if (RegisterPassword.value !== ConfirmPassword.value) {
        ConfirmPasswordError.style.display = "block";
        ConfirmPasswordError.innerHTML = "Mật Khẩu Không Trùng"; // Passwords do not match
        isValid = false;
    }
    
    if (!DateofBirth.value) {
        DateOfBirthError.style.display = "block";
        isValid = false;
    }

    // Proceed only if all validations pass
    if (isValid) {
        const user = {
            userId: Math.ceil(Math.random() * 100000000),
            userName: Username.value,
            password: RegisterPassword.value,
            email: RegisterEmail.value,
            dateofbirth: DateofBirth.value
        };

        // Check if the email already exists in the database (localStorage)
        const emailExists = userLocal.some(user => user.email === RegisterEmail.value);
        if (emailExists) {
            RegisterEmailError.style.display = "block";
            RegisterEmailError.innerHTML = "Email đã tồn tại!";
            return;
        }

        // Add new user to localStorage
        userLocal.push(user);
        localStorage.setItem("users", JSON.stringify(userLocal));

        // Redirect after a short delay
        setTimeout(function() {
            window.location.href = "/login/login.html"; // Redirect to login page
        }, 1000);
    }
});
