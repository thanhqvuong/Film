document.addEventListener("DOMContentLoaded", function () {
    const Login = document.getElementById("login");
    const LoginEmail = document.getElementById("email");
    const LoginPassword = document.getElementById("password");
    const EmailError = document.getElementById("emailError");
    const PasswordError = document.getElementById("passwordError");

    if (!LoginEmail || !LoginPassword || !Login) {
        console.error("Email or Password input field is missing.");
        return; // If email or password input field is missing, stop execution
    }

    Login.addEventListener("submit", function (e) {
        e.preventDefault();

        // Ẩn các thông báo lỗi trước khi bắt đầu kiểm tra
        if (EmailError) EmailError.style.display = "none";
        if (PasswordError) PasswordError.style.display = "none";

        // Lấy dữ liệu người dùng từ localStorage
        const userLocal = JSON.parse(localStorage.getItem("users")) || [];

        console.log("Stored users:", userLocal); // Kiểm tra xem dữ liệu người dùng trong localStorage

        // Tìm người dùng theo email và mật khẩu
        const findUser = userLocal.find(
            (user) =>
                user.email === LoginEmail.value &&
                user.password === LoginPassword.value
        );

        // Kiểm tra nếu tìm thấy người dùng
        if (findUser) {
            console.log("User found: ", findUser); // Kiểm tra thông tin người dùng
            window.location.href = "/Film/seat/seat.html"; // Chuyển hướng đến trang chọn ghế
        } else {
            console.log("User not found."); // Nếu không tìm thấy người dùng
            if (EmailError) EmailError.style.display = "block";
            if (PasswordError) PasswordError.style.display = "block";
            if (EmailError) EmailError.innerHTML = "Email hoặc Mật khẩu không đúng!";
            if (PasswordError) PasswordError.innerHTML = "Email hoặc Mật khẩu không đúng!";
        }
    });
});
