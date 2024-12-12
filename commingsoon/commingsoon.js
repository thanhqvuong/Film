const filmLinks = {
    "Cong Tu Bac Lieu": "/Film/comingsoon/film1.html",
    "TRAPEZIUM": "/Film/comingsoon/film2.html",
    "Ghost Cat Anzu": "/Film/comingsoon/film3.html",
    "The Lord of the Rings": "/Film/comingsoon/film4.html",
    "Sengkolo": "/Film/comingsoon/film5.html",
    "Binding Souls": "/Film/comingsoon/film6.html",
    "RM: RIGHT PEOPLE, WRONG PLACE": "/Film/comingsoon/film7.html",
    "KRAVEN THE HUNTER": "/Film/comingsoon/film8.html"
};
// Lấy tất cả các ảnh phim
const filmImages = document.querySelectorAll("#coming-soon .film-item img");

// Kiểm tra nếu không tìm thấy ảnh phim
if (filmImages.length === 0) {
    console.warn("Không tìm thấy ảnh phim để gắn sự kiện click.");
} else {
    // Gắn sự kiện click vào mỗi ảnh
    filmImages.forEach(img => {
        img.addEventListener("click", () => {
            const filmTitle = img.alt?.trim().toLowerCase(); // Lấy tên phim từ thuộc tính alt và chuyển về chữ thường
            const filmLink = Object.keys(filmLinks).find(key => key.toLowerCase() === filmTitle); // So sánh với các key trong filmLinks
            if (filmLink) {
                window.location.href = filmLinks[filmLink]; // Chuyển hướng đến URL phim
            } else {
                console.error(`Không tìm thấy URL cho phim: ${filmTitle}`);
                alert("Thông tin phim chưa được cập nhật!"); // Thông báo nếu không tìm thấy URL
            }
        });
    });
}
