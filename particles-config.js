tsParticles.load("tsparticles", {
  fpsLimit: 60,
  background: {
    color: "transparent"
  },
  particles: {
    number: {
      value: 100,
      density: {
        enable: true,
        area: 800
      }
    },
    color: {
      value: "#555555"
    },
    shape: {
      type: "circle"
    },
    opacity: {
      value: 0.5,
      random: true
    },
    size: {
      value: { min: 1, max: 5 },
      random: true
    },
    links: {
      enable: true,
      distance: 150,
      color: "#555555",
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: 2,
      direction: "none",
      random: false,
      straight: false,
      outModes: {
        default: "bounce"
      },
      attract: {
        enable: false
      }
    },
    collisions: {
      enable: true
    }
  },
  interactivity: {
    events: {
      onHover: {
        enable: true,
        mode: "repulse"
      },
      onClick: {
        enable: true,
        mode: "push"
      },
      resize: true
    },
    modes: {
      repulse: {
        distance: 120
      },
      push: {
        quantity: 4
      }
    }
  },
  detectRetina: true
});
