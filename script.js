// LOADER
window.onload = () => {
    document.getElementById("loader").style.display = "none";
};

// TYPING EFFECT
let text = "Innovations in Digital Humanities through AI";
let i = 0;

function typing() {
    if (i < text.length) {
        document.getElementById("typing").innerHTML += text.charAt(i);
        i++;
        setTimeout(typing, 50);
    }
}
typing();

// COUNTDOWN
let date = new Date("July 31, 2026").getTime();

setInterval(() => {
    let now = new Date().getTime();
    let gap = date - now;

    let d = Math.floor(gap / (1000 * 60 * 60 * 24));
    let h = Math.floor((gap / (1000 * 60 * 60)) % 24);
    let m = Math.floor((gap / (1000 * 60)) % 60);

    document.getElementById("countdown").innerHTML =
        `${d}d ${h}h ${m}m`;
}, 1000);

// PARTICLES
tsParticles.load("tsparticles", {
    particles: {
        number: { value: 50 },
        color: { value: "#00f7ff" },
        move: { enable: true, speed: 1 }
    }
});

// SCROLL ANIMATION
AOS.init();
