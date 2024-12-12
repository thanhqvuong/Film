// Giá mỗi ghế
const SEAT_PRICE = 105000;

// Các phần tử DOM
const seats = document.querySelectorAll('.seat.available');
const selectedSeatsList = document.getElementById('selected-seats-list');
const totalPriceElement = document.getElementById('total-price');
const confirmButton = document.getElementById('confirm-selection');

// Lưu trạng thái ghế đã chọn
let selectedSeats = [];

// Xử lý sự kiện khi người dùng chọn ghế
seats.forEach(seat => {
    seat.addEventListener('click', () => {
        const seatNumber = seat.getAttribute('data-seat'); // Lấy thông tin ghế

        if (seat.classList.contains('selected')) {
            // Nếu ghế đã được chọn, bỏ chọn
            seat.classList.remove('selected');
            selectedSeats = selectedSeats.filter(s => s !== seatNumber); // Loại bỏ khỏi danh sách
        } else {
            // Nếu ghế chưa được chọn, thêm vào danh sách
            seat.classList.add('selected');
            selectedSeats.push(seatNumber);
        }

        updateUI(); // Cập nhật giao diện
    });
});

// Hàm cập nhật giao diện
function updateUI() {
    // Cập nhật danh sách ghế đã chọn
    selectedSeatsList.innerHTML = '';
    selectedSeats.forEach(seat => {
        const li = document.createElement('li');
        li.textContent = seat;
        selectedSeatsList.appendChild(li);
    });

    // Cập nhật tổng tiền
    const totalPrice = selectedSeats.length * SEAT_PRICE;
    totalPriceElement.textContent = totalPrice.toLocaleString('vi-VN') + ' VND';

    // Kích hoạt hoặc vô hiệu hóa nút "Đặt Vé"
    confirmButton.disabled = selectedSeats.length === 0;
}

// Xử lý sự kiện khi nhấn nút "Đặt Vé"
confirmButton.addEventListener('click', () => {
    if (selectedSeats.length > 0) {
        alert(`Bạn đã đặt thành công các ghế: ${selectedSeats.join(', ')}. Tổng tiền: ${(
            selectedSeats.length * SEAT_PRICE
        ).toLocaleString('vi-VN')} VND`);
        window.location.href = '/homepage.html'; // Chuyển hướng sau khi đặt vé thành công
    }
});
