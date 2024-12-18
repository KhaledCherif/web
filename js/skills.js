document.addEventListener("DOMContentLoaded", function () {
    const circles = document.querySelectorAll('.circle');

    circles.forEach(circle => {
        const progress = circle.getAttribute('data-progress');
        const radius = circle.offsetWidth / 2;
        const circumference = 2 * Math.PI * radius;
        const offset = circumference - (progress / 100) * circumference;

        circle.style.background = `conic-gradient(#00FFFF ${progress * 3.6}deg,rgb(204,204,204) 0deg)`;

        circle.textContent = `${progress}%`;
    });
});
