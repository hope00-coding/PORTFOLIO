window.onload = function() {
    var typed = new Typed(".multiple-text", {
        strings: ["Frontend Developer", "Designer"],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000,
        loop: true
    });
};

/*================================================*/
document.getElementById('facebook').addEventListener('click', function() {
    window.open('https://www.facebook.com/', '_blank'); // Facebook yönlendirmesi
});

document.getElementById('twitter').addEventListener('click', function() {
    window.open('https://twitter.com', '_blank'); // Twitter yönlendirmesi
});

document.getElementById('instagram').addEventListener('click', function() {
    window.open('https://www.instagram.com/hope_andrea00/', '_blank'); // Instagram yönlendirmesi
});

document.getElementById('linkedin').addEventListener('click', function() {
    window.open('https://www.linkedin.com/in/umutmenguakbudak/', '_blank'); // LinkedIn yönlendirmesi
});

/*=================*/


document.getElementById('download').addEventListener('click', function() {
    window.location.href = 'dosya/cv.pdf';
});


/*=========KARTLAR KISMIIIIIIII========*/


const cards = document.querySelectorAll('.card');

cards.forEach(card => {
  card.addEventListener('click', () => {
    // Önce tüm kartlardan "active" sınıfını kaldır
    cards.forEach(c => c.classList.remove('active'));
    // Sonra tıklanan karta "active" sınıfını ekle
    card.classList.add('active');
  });
});






document.querySelectorAll('.card').forEach(card => {
    const overlay = card.querySelector('.overlay');

    card.addEventListener('mouseenter', () => {
        overlay.style.opacity = "0";  // Overlay kayboluyor
    });

    card.addEventListener('mouseleave', () => {
        overlay.style.opacity = "1";  // Overlay geri geliyor
    });
});



const overlays = document.querySelectorAll('.overlay');

// Daha yumuşak geçişli yeşil tonlarından koyu yeşile doğru gradyan
const gradient = 'linear-gradient(to right, #7DDA89, #4CAF50, #2E8B57, #166534, #0E0C0F)';

// Tüm .overlay öğelerine aynı gradyanı uygulama
overlays.forEach((overlay) => {
    overlay.style.background = gradient;
});





document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        const cardText = card.querySelector('.card-text');
        if (cardText) {
            cardText.style.opacity = '0';
        }
    });

    card.addEventListener('mouseleave', () => {
        const cardText = card.querySelector('.card-text');
        if (cardText) {
            cardText.style.opacity = '1';
        }
    });
});









document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".moving-image");

    images.forEach((img, index) => {
        // Görselleri rastgele başlangıç konumuna yerleştir
        let startX = Math.random() * (500 - img.width); // 500px genişlik içinde
        let startY = Math.random() * (330 - img.height); // 330px yükseklik içinde
        img.style.left = `${startX}px`;
        img.style.top = `${startY}px`;

        let speedX = (Math.random() - 0.5) * 2; // -1 ile 1 arasında rastgele hız
        let speedY = (Math.random() - 0.5) * 2;

        // Dalga fonksiyonu için zaman değişkeni
        let time = 0;

        function moveImage() {
            startX += speedX;
            startY += speedY;

            // Kenarlara çarpınca yön değiştir
            if (startX <= 0 || startX + img.width >= 500) speedX *= -1;
            if (startY <= 0 || startY + img.height >= 330) speedY *= -1;

            img.style.left = `${startX}px`;
            img.style.top = `${startY}px`;

            // Çizgi izi bırakma
            createLightTrail(startX, startY, img.dataset.color, time);

            // Zamanı artır (dalga efekti için)
            time += 0.1;

            requestAnimationFrame(moveImage);
        }

        moveImage();
    });

    function createLightTrail(x, y, color, time) {
        const trail = document.createElement("div");
        trail.className = "light-trail";
        trail.style.left = `${x + Math.sin(time) * 20}px`; // Dalga efekti için sinüs fonksiyonu (daha geniş dalga)
        trail.style.top = `${y + Math.cos(time) * 20}px`; // Dalga efekti için kosinüs fonksiyonu (daha geniş dalga)
        trail.style.color = color; // Çizgi rengi, görselin data-color özelliğinden alınır
        document.querySelector(".image-container").appendChild(trail);

        // Çizginin yavaşça kaybolması
        setTimeout(() => {
            trail.style.opacity = "0"; // Opaklığı sıfırla
            setTimeout(() => {
                trail.remove(); // Çizgiyi tamamen sil
            }, 2000); // 2 saniye sonra çizgiyi kaldır
        }, 100); // 100ms sonra opaklığı sıfırla
    }
});








// Form gönderildiğinde kullanıcıya bilgi ver
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Formun otomatik gönderilmesini engelle

    // Form verilerini al
    const formData = new FormData(this);
    const name = formData.get('name');
    const surname = formData.get('surname');
    const email = formData.get('email');
    const message = formData.get('message');

    // Burada form verilerini bir API'ye gönderebilir veya başka bir işlem yapabilirsiniz
    console.log('Form Gönderildi:', { name, surname, email, message });

    // Kullanıcıya bilgi ver
    alert('Mesajınız gönderildi! En kısa sürede sizinle iletişime geçeceğiz.');

    // Formu gönder (Formspree'ye gönderim için)
    this.submit();
});







// Hamburger menüyü açıp kapatma
document.querySelector('.menu-toggle').addEventListener('click', function() {
    document.querySelector('.navbar').classList.toggle('active');
});









document.querySelectorAll('.navbar a').forEach(anchor => {
    anchor.addEventListener('click', function() {
        // Mobilde menüyü otomatik kapat
        if (window.innerWidth <= 768) {
            document.querySelector('.navbar').classList.remove('active');
        }
    });
});


function toggleMenu() {
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('active');
}