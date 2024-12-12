// Chờ cho DOM hoàn thành việc tải
document.addEventListener("DOMContentLoaded", function () {
    // Lấy nút "Đặt Vé"
    const bookingButton = document.querySelector(".btn-booking");

    // Kiểm tra xem nút có tồn tại không
    if (bookingButton) {
        // Thêm sự kiện khi nhấn vào nút
        bookingButton.addEventListener("click", function () {
            // Chuyển hướng đến trang chọn rạp
            window.location.href = "/Film/theater/theater.html";  // Thay đổi URL này nếu cần
        });
    } else {
        console.error("Không tìm thấy nút đặt vé.");
    }
});
