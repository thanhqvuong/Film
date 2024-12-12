let selectedTheater = null;

        // Function để chọn rạp và hiển thị giờ chiếu
        function selectTheater(theaterName) {
            selectedTheater = theaterName;
            alert("Bạn đã chọn rạp: " + selectedTheater);
            showShowtimes(); // Hiển thị giờ chiếu sau khi chọn rạp
        }

        // Function để hiển thị giờ chiếu dựa trên rạp đã chọn
        function showShowtimes() {
            const showtimesSelect = document.getElementById("showtime");
            const showtimesSection = document.getElementById("showtimes-section");

            // Clear previous options
            showtimesSelect.innerHTML = "";

            let showtimes = [];

            // Lịch chiếu cho từng rạp (các giờ chiếu có thể thay đổi)
            if (selectedTheater === "CGV Vạn Hạnh Mall") {
                showtimes = ["10:00 AM", "01:00 PM", "04:00 PM", "07:00 PM"];
            } else if (selectedTheater === "CGV Hùng Vương Plaza") {
                showtimes = ["11:00 AM", "02:00 PM", "05:00 PM", "08:00 PM"];
            } else if (selectedTheater === "CGV Vincom Đồng Khởi") {
                showtimes = ["12:00 PM", "03:00 PM", "06:00 PM", "09:00 PM"];
            } else if (selectedTheater === "CGV Lý Chính Thắng") {
                showtimes = ["10:30 AM", "01:30 PM", "04:30 PM", "07:30 PM"];
            } else if (selectedTheater === "CGV Crescent Mall") {
                showtimes = ["11:30 AM", "02:30 PM", "05:30 PM", "08:30 PM"];
            } else if (selectedTheater === "CGV Liberty Citypoint") {
                showtimes = ["12:30 PM", "03:30 PM", "06:30 PM", "09:30 PM"];
            }

            // Thêm các giờ chiếu vào dropdown
            showtimes.forEach(function(time) {
                let option = document.createElement("option");
                option.value = time;
                option.textContent = time;
                showtimesSelect.appendChild(option);
            });

            // Hiển thị phần chọn giờ chiếu
            showtimesSection.style.display = "block";
        }

        // Function để chuyển hướng đến trang đăng nhập khi người dùng chọn giờ chiếu
        function redirectToLogin() {
            const selectedTime = document.getElementById("showtime").value;

            // Kiểm tra xem người dùng đã chọn giờ chiếu chưa
            if (selectedTime) {
                window.location.href = "/Film/login/login.html";  // Thay đổi đường dẫn nếu cần
            }
        }