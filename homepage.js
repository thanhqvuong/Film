const filmLinks = {
    "Moana 2": "./film9.html",
    "Linh Mieu": "./film10.html",
    "Operation Undead": "./film11.html",
    "Amazon Bullseye": "./film12.html",
    "Blue Period": "./film13.html",
    "Wicked": "./film14.html",
    "Gladiator II": "./film15.html",
    "Quy Treo Dau": "./film16.html",
    "Cong Tu Bac Lieu": "./film1.html",
    "TRAPEZIUM": "./film2.html",
    "Ghost Cat Anzu": "./film3.html",
    "The Lord of the Rings": "./film4.html",
    "Sengkolo": "./film5.html",
    "Binding Souls": "./film6.html",
    "RM: RIGHT PEOPLE, WRONG PLACE": "./film7.html",
    "KRAVEN THE HUNTER": "./film8.html"
};

// Lấy tất cả các ảnh phim
const filmImages = document.querySelectorAll("#now-showing .film-item img #coming-soon .film-item img");

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
