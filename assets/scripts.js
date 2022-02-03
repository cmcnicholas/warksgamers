
const imageCountInAssetsBg = 50;

// populate urls automagically
const images = new Array();
for (let i = 1; i <= imageCountInAssetsBg; i++) {
  images.push(`./assets/bg/${String(i).padStart(3, '0')}.jpg`);
}

// grab the splash element
const splashElement = document.getElementById('splash');

// start loading first image
loadNextSplash();

async function loadNextSplash() {
  const imageUrl = images[Math.floor(Math.random() * images.length)];
  const image = new Image();
  image.onerror = () => setTimeout(loadNextSplash, 3000);
  image.onload = () => transitionSplash(imageUrl).then(() => setTimeout(loadNextSplash, 3000));
  image.src = imageUrl;
}

async function transitionSplash(src) {
  return new Promise((resolve) => {
    splashElement.style.opacity = 0.3;

    setTimeout(() => {
      splashElement.style.backgroundImage = `url(${src})`;
      splashElement.style.opacity = 1.0;
      setTimeout(resolve, 500);
    }, 500);
  });
}