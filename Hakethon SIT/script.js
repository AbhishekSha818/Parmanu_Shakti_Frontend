let currentSlide = 0;
        const slider = document.querySelector('.slider');
        const slides = document.querySelectorAll('.slide');

        function updateSlider() {
            slider.style.transform = `translateX(-${currentSlide * 100}%)`;
        }

        function nextSlide() {
            currentSlide = (currentSlide + 1) % slides.length;
            updateSlider();
        }

        function prevSlide() {
            currentSlide = (currentSlide - 1 + slides.length) % slides.length;
            updateSlider();
        }

        // Auto slide every 5 seconds
        setInterval(nextSlide, 5000);
        document.addEventListener('DOMContentLoaded', function() {
            const headerLink = document.querySelector('.header-left a');
            const footerLink = document.querySelector('.footer-left a');
            
            [headerLink, footerLink].forEach(link => {
                link.addEventListener('click', function(e) {
                    e.preventDefault();
                });
            });
        });