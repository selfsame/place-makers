var renderer = PIXI.autoDetectRenderer(600, 400);
document.body.appendChild(renderer.view);

var stage = new PIXI.Container;

PIXI.loader
  .add('astro.json')
  .load(onAssetsLoaded);

function onAssetsLoaded() {

  var frames = [];

  for (var i = 0; i < 12; i++) {
    var val = i < 10 ? '0' + i : i;
    frames.push(PIXI.Texture.fromFrame('walk0' + val + '.png'));
  }

  for (var i = 0; i < 100; i++) {
    var movie = new PIXI.extras.MovieClip(frames);

    movie.position.set(600/i, 400/i);

    movie.anchor.set(0.5);
    movie.animationSpeed = 0.2;

    movie.play();
    stage.addChild(movie);
  }

  animate();

}

function animate() {
  renderer.render(stage);
  requestAnimationFrame(animate);
}
