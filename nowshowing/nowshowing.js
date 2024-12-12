const filmLinks = {
    "Moana 2": "/nowshowing/film1.html",
    "Linh Mieu": "/nowshowing/film2.html",
    "Operation Undead": "/nowshowing/film3.html",
    "Amazon Bullseye": "/nowshowing/film4.html",
    "Blue Period": "/nowshowing/film5.html",
    "Wicked": "/nowshowing/film6.html",
    "Gladiator II": "/nowshowing/film7.html",
    "Quy Treo Dau": "/nowshowing/film8.html"
};
const filmImages = document.querySelectorAll("#now-showing .film-item img");

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
