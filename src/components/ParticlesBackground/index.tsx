import Particles from 'react-tsparticles';

const ParticlesBackground = () => {
  return (
    <Particles
      id="tsparticles"
      options={{
        background: {
          color: {
            value: '#0d47a1',
          },
          image:
            'linear-gradient(135deg, hsla(171, 87%, 67%, 1) 0%, hsla(236, 100%, 72%, 1) 100%)',
        },
        fpsLimit: 60,
        particles: {
          color: {
            value: '#ffffff',
          },
          links: {
            color: '#ffffff',
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: 'none',
            enable: true,
            outMode: 'bounce',
            random: false,
            speed: 1,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 80,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: 'circle',
          },
          size: {
            random: true,
            value: 5,
          },
        },
        detectRetina: true,
        style: {
          zIndex: '-1',
        },
      }}
    />
  );
};

export default ParticlesBackground;
