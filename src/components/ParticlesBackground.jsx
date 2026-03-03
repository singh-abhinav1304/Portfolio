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

      className="fixed top-0 left-0 w-full h-full -z-10"

      options={{

        background: {
          color: "#020617"
        },

        fullScreen: {
          enable: false
        },

        fpsLimit: 60,

        particles: {

          number: {
            value: 70, // reduced for performance
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
            distance: 130,
            color: "#38bdf8",
            opacity: 0.3,
            width: 1
          },

          move: {
            enable: true,
            speed: 0.6,
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
              distance: 180,
              links: {
                opacity: 0.7
              }
            },

            push: {
              quantity: 3
            }

          }

        },

        detectRetina: true

      }}
    />
  );
}

export default ParticlesBackground;