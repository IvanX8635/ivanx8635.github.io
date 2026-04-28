// STARFIELD BACKGROUND
const canvas = document.getElementById("starfield");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let stars = [];

for (let i = 0; i < 200; i++) {
    stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2,
        speed: Math.random() * 0.5 + 0.2
    });
}

function animateStars() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    stars.forEach(star => {
        star.y += star.speed;
        if (star.y > canvas.height) star.y = 0;

        ctx.fillStyle = "#9cdcff";
        ctx.fillRect(star.x, star.y, star.size, star.size);
    });

    requestAnimationFrame(animateStars);
}

animateStars();

// CURSOR PARTICLES
document.addEventListener("mousemove", (e) => {
    const particle = document.createElement("div");
    particle.className = "cursor-particle";
    particle.style.left = e.pageX + "px";
    particle.style.top = e.pageY + "px";
    document.body.appendChild(particle);

    setTimeout(() => particle.remove(), 500);
});
