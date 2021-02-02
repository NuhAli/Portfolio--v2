const parameters = {
    "particles": {
        "number": {
            "value": 75,
            "density": {
                "enable": true,
                "value_area": 3000
            }
        },
        "line_linked": {
            "enable": true,
            "opacity": 0.03
        },
        "move": {
            "direction": "random",
            "speed": 0.8
        },
        "size": {
            "value": 2.3
        },
        "opacity": {
            "anim": {
                "enable": true,
                "speed": 1.3,
                "opacity_min": 2
            }
        },
        "color": {
            "value": "#f3cb75"
        },
    },
    "interactivity": {
        "events": {
            "onclick": {
                "enable": true,
                "mode": "push"
            }
        },
        "modes": {
            "push": {
                "particles_nb": 1
            }
        }
    },
    "retina_detect": true
}

export {parameters as params}