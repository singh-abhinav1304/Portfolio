import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { useCallback } from "react";

function ParticlesBackground() {

  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}

      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1
      }}

      options={{
        background: {
          color: "#020617"
        },
        fullScreen: {
          enable: true,
          zIndex: -1
        },

        fpsLimit: 60,

        particles: {
          number: {
            value: 100,
            density: {
              enable: true,
              area: 800
            }
          },

          color: {
            value: "#38bdf8"
          },

          links: {
            enable: true,
            distance: 140,
            color: "#38bdf8",
            opacity: 0.35,
            width: 1
          },

          move: {
            enable: true,
            speed: 0.7,
            direction: "none",
            outModes: {
              default: "bounce"
            }
          },

          size: {
            value: { min: 1, max: 3 }
          },

          opacity: {
            value: 0.5
          }
        },

        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "grab"
            },
            onClick: {
              enable: true,
              mode: "push"
            }
          },

          modes: {
            grab: {
              distance: 200,
              links: {
                opacity: 0.8
              }
            },

            push: {
              quantity: 4
            }
          }
        },

        detectRetina: true
      }}
    />
  );
}

export default ParticlesBackground;