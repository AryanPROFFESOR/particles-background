tsParticles.load("tsparticles", {
  fpsLimit: 60,
  background: {
    color: "transparent"
  },
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        area: 800
      }
    },
    color: {
      value: "#333333"
    },
    shape: {
      type: "circle"
    },
    opacity: {
      value: 0.5
    },
    size: {
      value: { min: 1, max: 3 }
    },
    links: {
      enable: true,
      distance: 130,
      color: "#333333",
      opacity: 0.3,
      width: 1
    },
    move: {
      enable: true,
      speed: 0.8, /* slow and smooth */
      direction: "none",
      outModes: {
        default: "bounce"
      }
    }
  },
  interactivity: {
    events: {
      onHover: {
        enable: false /* no repulse on hover */
      },
      onClick: {
        enable: true,
        mode: "trail"
      },
      resize: true
    },
    modes: {
      trail: {
        delay: 0.005,
        quantity: 4,
        pauseOnStop: false
      }
    }
  },
  detectRetina: true
});
