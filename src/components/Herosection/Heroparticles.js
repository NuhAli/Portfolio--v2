const parameters = {
    "particles": {
        "number": {
            "value": 200,
            "density": {
                "enable": true,
                "value_area": 3000
            }
        },
        "line_linked": {
            "enable": true,
            "opacity": 0.01
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
                "speed": 1,
                "opacity_min": 2
            }
        },
        "color": {
            "value": "#f3d38d"
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