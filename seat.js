// Giá mỗi ghế
const SEAT_PRICE = 105000;

// Các phần tử DOM
const seats = document.querySelectorAll('.seat.available');
const selectedSeatsList = document.getElementById('selected-seats-list');
const totalPriceElement = document.getElementById('total-price');
const confirmButton = document.getElementById('confirm-selection');

// Lưu trạng thái ghế đã chọn
let selectedSeats = [];

// Hàm cập nhật giao diện
function updateUI() {
    // Cập nhật danh sách ghế đã chọn
    selectedSeatsList.innerHTML = selectedSeats
        .map(seat => `<li>${seat}</li>`)
        .join('');

    // Cập nhật tổng tiền
    const totalPrice = selectedSeats.length * SEAT_PRICE;
    totalPriceElement.textContent = `${totalPrice.toLocaleString('vi-VN')} VND`;

    // Kích hoạt hoặc vô hiệu hóa nút "Đặt Vé"
    confirmButton.disabled = selectedSeats.length === 0;
}

// Xử lý sự kiện khi người dùng chọn ghế
seats.forEach(seat => {
    seat.addEventListener('click', () => {
        const seatNumber = seat.dataset.seat; // Lấy thông tin ghế

        if (seat.classList.contains('selected')) {
            // Nếu ghế đã được chọn, bỏ chọn
            seat.classList.remove('selected');
            selectedSeats = selectedSeats.filter(s => s !== seatNumber);
        } else {
            // Nếu ghế chưa được chọn, thêm vào danh sách
            seat.classList.add('selected');
            selectedSeats.push(seatNumber);
        }

        updateUI(); // Cập nhật giao diện
    });
});

// Xử lý sự kiện khi nhấn nút "Đặt Vé"
confirmButton.addEventListener('click', () => {
    if (selectedSeats.length > 0) {
        const message = `Bạn đã đặt thành công các ghế: ${selectedSeats.join(', ')}. 
        Tổng tiền: ${(
            selectedSeats.length * SEAT_PRICE
        ).toLocaleString('vi-VN')} VND`;
        
        alert(message.trim());
        window.location.href = 'homepage.html'; // Chuyển hướng sau khi đặt vé thành công
    }
});
