document.addEventListener("DOMContentLoaded", function () {
    // Lấy nút "Đặt Vé"
    const bookingButton = document.querySelector(".btn-booking");

    // Kiểm tra nếu nút không tồn tại
    if (!bookingButton) {
        console.error("Không tìm thấy nút đặt vé.");
        return; // Kết thúc nếu không tìm thấy nút
    }

    // Thêm sự kiện khi nhấn vào nút
    bookingButton.addEventListener("click", function () {
        // Chuyển hướng đến trang chọn rạp
        window.location.href = "theater.html"; // Thay đổi URL này nếu cần
    });
});
