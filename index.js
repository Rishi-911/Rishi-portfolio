window.addEventListener('load', function() {
    // Adding the 'loaded' class after the page loads
    document.querySelector('.home-content').classList.add('loaded');
    // Ensure each line inside home-content also has the transition for typing effect
    const lines = document.querySelectorAll('.home-content h3, .home-content h1, .home-content p');
    lines.forEach((line, index) => {
        line.style.transitionDelay = `${index * 0.5 + 0.5}s`; // Delay each line progressively
        line.style.opacity = 1; // Make them visible after transition delay
        line.style.transform = "translateY(0)"; // Bring them into position
    });
});

const typed  = new Typed(".text",{
    strings: ["Frontend Developer", "Web Developer" ],
    typeSpeed: 50,
    backSpeed: 50,
    backDelay: 1000,
    loop:true
});

