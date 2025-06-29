tsParticles.load("tsparticles", {
  fpsLimit: 60,
  particles: {
    number: {
      value: 80,
      density: { enable: true, area: 800 }
    },
    color: { value: "#333" },
    shape: { type: "circle" },
    opacity: { value: 0.5 },
    size: { value: { min: 1, max: 3 } },
    links: {
      enable: true,
      distance: 150,
      color: "#333",
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: 1.5, // slightly faster
      outModes: { default: "bounce" }
    }
  },
  interactivity: {
    events: {
      onHover: {
        enable: true,
        mode: "connect"
      },
      onClick: {
        enable: true,
        mode: "push"
      },
      resize: true
    },
    modes: {
      connect: {
        radius: 150,
        links: {
          opacity: 0.5
        }
      },
      push: {
        quantity: 4 // particles pushed on click to form new networks
      }
    }
  },
  detectRetina: true
});
