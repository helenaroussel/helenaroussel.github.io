var timelineSwiper = new Swiper(".timeline .swiper-container", { direction: "vertical", loop: false, speed: 1600, pagination: ".swiper-pagination", paginationBulletRender: function (a, b, d) { var c = document.querySelectorAll(".swiper-slide")[b].getAttribute("data-year"); return '<span class="' + d + '">' + c + "</span>" }, paginationClickable: true, nextButton: ".swiper-button-next", prevButton: ".swiper-button-prev", breakpoints: { 768: { direction: "horizontal" } } });