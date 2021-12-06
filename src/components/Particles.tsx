import Particles from "react-tsparticles";

const CustomParticles = () => {
    return (
        <Particles
            options={{
                backgroundMode: {
                    enable: true,
                    zIndex: 0,
                },
                background: {
                    color: "transparent",
                },
                fpsLimit: 30,

                particles: {
                    color: { value: "#FFF" },
                    move: {
                        attract: { enable: false, rotateX: 600, rotateY: 1200 },
                        direction: "bottom",
                        enable: true,
                        outMode: "out",
                        random: false,
                        size: true,
                        speed: 2,
                        straight: false,
                    },
                    number: {
                        density: { enable: true, area: 1200 },
                        value: 50,
                    },
                    opacity: {
                        random: true,
                        value: 0.5,
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        random: true,
                        value: 7,
                    },
                },
                detectRetina: true,
            }}
        />
    );
};

export default CustomParticles;
