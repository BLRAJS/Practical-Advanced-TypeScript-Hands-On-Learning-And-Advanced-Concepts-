const gameObjects: GameObject[] = [
    new SpriteObject(100, 100, spriteImage, 32, 32),
    new SoundObject(0, 0, bgMusic),
    new PhysicsObjectImpl(200, 200, 5, 10, 50)
];

gameObjects.forEach(gameObject => {
    gameObject.update();
    gameObject.render();
});
