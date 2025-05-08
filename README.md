<!DOCTYPE html>
<html lang="tr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Toplanmış Sayfa</title>
    
    <!-- Dahili CSS -->
    <style>
        /* css.css içeriği */
        body {
            margin: 0;
            font-family: Arial, sans-serif;
        }

        .navbar {
            display: flex;
            background-color: #333;
            padding: 10px;
        }

        .navbar a {
            color: white;
            text-decoration: none;
            padding: 8px 16px;
        }

        .navbar a:hover {
            background-color: #575757;
        }

        .card {
            border: 1px solid #ccc;
            padding: 16px;
            transition: 0.3s;
            position: relative;
        }

        .card.active {
            border-color: #4CAF50;
            box-shadow: 0 0 10px #4CAF50;
        }

        .overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(to right, #7DDA89, #4CAF50, #2E8B57, #166534, #0E0C0F);
            opacity: 1;
            transition: 0.3s;
        }

        .light-trail {
            position: absolute;
            width: 4px;
            height: 4px;
            background-color: currentColor;
            border-radius: 50%;
            opacity: 1;
            transition: opacity 2s ease-out;
            pointer-events: none;
        }

        .image-container {
            position: relative;
            width: 500px;
            height: 330px;
            overflow: hidden;
        }

        .moving-image {
            position: absolute;
            width: 50px;
            height: 50px;
        }

        .menu-toggle {
            display: none;
        }

        @media (max-width: 768px) {
            .menu-toggle {
                display: block;
                background-color: #4CAF50;
                color: white;
                padding: 10px;
                cursor: pointer;
            }

            .navbar {
                flex-direction: column;
                display: none;
            }

            .navbar.active {
                display: flex;
            }
        }
    </style>
</head>
<body>

    <!-- Menü ve içerikler örnek olarak bırakılmıştır -->
    <div class="menu-toggle">Menü</div>
    <div class="navbar">
        <a href="#" id="facebook">Facebook</a>
        <a href="#" id="twitter">Twitter</a>
        <a href="#" id="instagram">Instagram</a>
        <a href="#" id="linkedin">LinkedIn</a>
    </div>

    <div class="image-container">
        <img class="moving-image" src="https://via.placeholder.com/50" data-color="red" />
        <img class="moving-image" src="https://via.placeholder.com/50" data-color="blue" />
    </div>

    <div class="card">
        <div class="overlay"></div>
        <div class="card-text">Kart içeriği</div>
    </div>

    <form id="contactForm">
        <input type="text" name="name" placeholder="Ad" required>
        <input type="text" name="surname" placeholder="Soyad" required>
        <input type="email" name="email" placeholder="E-posta" required>
        <textarea name="message" placeholder="Mesaj" required></textarea>
        <button type="submit">Gönder</button>
    </form>

    <button id="download">CV'yi indir</button>

    <!-- Typed.js CDN (gerekiyorsa) -->
    <script src="https://cdn.jsdelivr.net/npm/typed.js@2.0.12"></script>

    <!-- Dahili JavaScript -->
    <script>
        // java.js içeriği (tamamı)
        window.onload = function() {
            var typed = new Typed(".multiple-text", {
                strings: ["Frontend Developer", "Designer"],
                typeSpeed: 100,
                backSpeed: 100,
                backDelay: 1000,
                loop: true
            });
        };

        document.getElementById('facebook').addEventListener('click', function() {
            window.open('https://www.facebook.com/', '_blank');
        });

        document.getElementById('twitter').addEventListener('click', function() {
            window.open('https://twitter.com', '_blank');
        });

        document.getElementById('instagram').addEventListener('click', function() {
            window.open('https://www.instagram.com/hope_andrea00/', '_blank');
        });

        document.getElementById('linkedin').addEventListener('click', function() {
            window.open('https://www.linkedin.com/in/umutmenguakbudak/', '_blank');
        });

        document.getElementById('download').addEventListener('click', function() {
            window.location.href = 'dosya/cv.pdf';
        });

        const cards = document.querySelectorAll('.card');
        cards.forEach(card => {
            card.addEventListener('click', () => {
                cards.forEach(c => c.classList.remove('active'));
                card.classList.add('active');
            });
        });

        document.querySelectorAll('.card').forEach(card => {
            const overlay = card.querySelector('.overlay');
            card.addEventListener('mouseenter', () => {
                overlay.style.opacity = "0";
            });
            card.addEventListener('mouseleave', () => {
                overlay.style.opacity = "1";
            });
        });

        const overlays = document.querySelectorAll('.overlay');
        const gradient = 'linear-gradient(to right, #7DDA89, #4CAF50, #2E8B57, #166534, #0E0C0F)';
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
                let startX = Math.random() * (500 - img.width);
                let startY = Math.random() * (330 - img.height);
                img.style.left = `${startX}px`;
                img.style.top = `${startY}px`;

                let speedX = (Math.random() - 0.5) * 2;
                let speedY = (Math.random() - 0.5) * 2;
                let time = 0;

                function moveImage() {
                    startX += speedX;
                    startY += speedY;

                    if (startX <= 0 || startX + img.width >= 500) speedX *= -1;
                    if (startY <= 0 || startY + img.height >= 330) speedY *= -1;

                    img.style.left = `${startX}px`;
                    img.style.top = `${startY}px`;

                    createLightTrail(startX, startY, img.dataset.color, time);
                    time += 0.1;
                    requestAnimationFrame(moveImage);
                }

                moveImage();
            });

            function createLightTrail(x, y, color, time) {
                const trail = document.createElement("div");
                trail.className = "light-trail";
                trail.style.left = `${x + Math.sin(time) * 20}px`;
                trail.style.top = `${y + Math.cos(time) * 20}px`;
                trail.style.color = color;
                document.querySelector(".image-container").appendChild(trail);

                setTimeout(() => {
                    trail.style.opacity = "0";
                    setTimeout(() => {
                        trail.remove();
                    }, 2000);
                }, 100);
            }
        });

        document.getElementById('contactForm').addEventListener('submit', function(event) {
            event.preventDefault();
            const formData = new FormData(this);
            const name = formData.get('name');
            const surname = formData.get('surname');
            const email = formData.get('email');
            const message = formData.get('message');
            console.log('Form Gönderildi:', { name, surname, email, message });
            alert('Mesajınız gönderildi! En kısa sürede sizinle iletişime geçeceğiz.');
            this.submit();
        });

        document.querySelector('.menu-toggle').addEventListener('click', function() {
            document.querySelector('.navbar').classList.toggle('active');
        });

        document.querySelectorAll('.navbar a').forEach(anchor => {
            anchor.addEventListener('click', function() {
                if (window.innerWidth <= 768) {
                    document.querySelector('.navbar').classList.remove('active');
                }
            });
        });

        function toggleMenu() {
            const navbar = document.querySelector('.navbar');
            navbar.classList.toggle('active');
        }
    </script>
</body>
</html>

