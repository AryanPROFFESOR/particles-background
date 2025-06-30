/* particles.js config */
particlesJS("particles-js", {
    "particles": {
        "number": {
            "value": 120,
            "density": { "enable": true, "value_area": 900 }
        },
        "color": { "value": "#000000" },
        "shape": {
            "type": "circle",
            "stroke": { "width": 0, "color": "#000000" },
            "polygon": { "nb_sides": 5 }
        },
        "opacity": {
            "value": 0.5,
            "random": false,
            "anim": { "enable": false }
        },
        "size": {
            "value": 3,
            "random": true,
            "anim": { "enable": false }
        },
        "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#000000",
            "opacity": 0.4,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 3,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": { "enable": false }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": { "enable": true, "mode": "grab" },
            "onclick": { "enable": true, "mode": "push" },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 180,
                "line_linked": { "opacity": 0.8 }
            },
            "bubble": {
                "distance": 250,
                "size": 6,
                "duration": 2,
                "opacity": 0.8,
                "speed": 3
            },
            "repulse": {
                "distance": 200,
                "duration": 0.4
            },
            "push": {
                "particles_nb": 8
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": true
});
