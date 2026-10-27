const world = Globe()
  .globeImageUrl('https://unpkg.com/three-globe/example/img/earth-blue-marble.jpg')
  .bumpImageUrl('https://unpkg.com/three-globe/example/img/earth-topology.png')
  .backgroundImageUrl('https://unpkg.com/three-globe/example/img/night-sky.png')
  .showAtmosphere(true)
  .atmosphereColor('#4da6ff')
  .atmosphereAltitude(0.2)
  (document.getElementById('globeArea'));

// Softer mountains, so the ocean looks smoother
world.globeMaterial().bumpScale = 5;

// Slowly spin the Earth
world.controls().autoRotate = true;
world.controls().autoRotateSpeed = 0.5;